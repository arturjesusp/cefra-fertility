import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // CORS Check
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      sede, especialidad, doctor, modalidad, 
      fecha, hora, nombre, telefono, email, esPrimeraVez 
    } = req.body;

    // 1. Conectar a Supabase y guardar los datos
    const supabaseUrl = process.env.SUPABASE_URL?.trim();
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
    let supabaseError = null;

    if (supabaseUrl && supabaseUrl.startsWith('http') && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase
        .from('citas')
        .insert([
          { 
            name: nombre, 
            tel: telefono, 
            fecha: fecha, 
            hora: hora, 
            mensaje: `Reserva: ${sede}, Especialidad: ${especialidad}, Doctor: ${doctor || 'No especificado'}, Modalidad: ${modalidad}, Email: ${email}, 1ra vez: ${esPrimeraVez}`
          }
        ]);
      
      if (error) {
        console.error('Supabase Error:', error);
        supabaseError = error.message;
      }
    } else {
      console.warn('Supabase no está configurado en las variables de entorno de Vercel.');
    }

    // 2. Enviar mensaje de WhatsApp mediante Meta API
    const metaToken = process.env.META_WHATSAPP_TOKEN;
    const phoneNumberId = process.env.META_PHONE_NUMBER_ID;
    let metaError = null;

    if (metaToken && phoneNumberId && telefono) {
      const cleanPhone = telefono.replace('+', '');
      
      const metaResponse = await fetch(`https://graph.facebook.com/v25.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${metaToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: cleanPhone,
          type: 'template',
          template: {
            name: 'confirmacion_reserva_cefra',
            language: { code: 'es_PE' }, // Spanish (PER) code according to WhatsApp API
            components: [
              {
                type: 'body',
                parameters: [
                  {
                    type: 'text',
                    text: nombre || 'Paciente'
                  }
                ]
              }
            ]
          }
        })
      });

      if (!metaResponse.ok) {
        const errorData = await metaResponse.json();
        console.error('Meta API Error:', errorData);
        metaError = errorData;
      }
    } else {
      console.warn('Falta configuración de Meta API o el cliente no proveyó teléfono.');
    }

    // Retornamos existoso
    res.status(200).json({ 
      success: true, 
      message: 'Reserva procesada',
      supabaseError, // Solo para depuración, nos indicará si falló el guardado en base de datos
      metaStatus: metaToken ? (metaError ? 'error_en_meta' : 'enviado') : 'no_configurado',
      metaError // Solo para depuración, indicará si falló el mensaje de whatsapp
    });

  } catch (error) {
    console.error('Error general del servidor:', error);
    res.status(500).json({ success: false, error: 'Error del servidor interno.', details: error instanceof Error ? error.message : String(error) });
  }
}

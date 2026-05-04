import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

// Create Supabase Client safely
let supabase: any = null;
try {
  const supabaseUrl = process.env.SUPABASE_URL?.trim() || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || '';

  if (supabaseUrl && supabaseUrl.startsWith('http') && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  } else {
    console.warn('Supabase URL missing or invalid. Skipping Supabase initialization.');
  }
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.post('/api/chat', async (req, res) => {
    let apiKey = '';
    try {
      apiKey = process.env.GEMINI_API_KEY?.trim() || '';
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        const errorMsg = 'La clave de API de Gemini no está bien configurada. Por favor, elimine el registro "GEMINI_API_KEY" del panel de "Secrets" y presione Enter para que el sistema utilice la clave gratuita por defecto.';
        return res.status(500).json({ error: errorMsg });
      }

      const ai = new GoogleGenAI({ apiKey });
      const { contents, systemInstruction } = req.body;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction,
        }
      });

      res.status(200).json({ text: response.text });
    } catch (error) {
      console.error('Error generating content:', error);
      res.status(500).json({ error: 'Error del servidor al contactar con la API de IA.' });
    }
  });

  app.post('/api/booking', async (req, res) => {
    try {
      const { 
        sede, especialidad, doctor, modalidad, 
        fecha, hora, nombre, telefono, email, esPrimeraVez 
      } = req.body;

      // 1. Save to Supabase
      if (supabase) {
        const { error: dbError } = await supabase
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
        
        if (dbError) {
          console.error('Error saving to Supabase:', dbError);
          // Optional: handle error strictly if needed
        }
      } else {
        console.warn('Supabase not configured. Skipping DB insertion.');
      }

      // 2. Send WhatsApp Message via Meta API
      const metaToken = process.env.META_WHATSAPP_TOKEN;
      const phoneNumberId = process.env.META_PHONE_NUMBER_ID;

      if (metaToken && phoneNumberId) {
        // According to Meta's Docs, for template messages you provide the template name and language
        const response = await fetch(`https://graph.facebook.com/v25.0/${phoneNumberId}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${metaToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: telefono.replace('+', ''), // Meta requires phone number without '+'
            type: 'text',
            text: {
              body: `Hola ${nombre},\n\nHemos recibido tu solicitud de reserva en CEFRA para la especialidad de ${especialidad} en formato ${modalidad}.\n\nNos pondremos en contacto contigo a la brevedad para reconfirmar la fecha y hora de tu cita.\n\n¡Gracias por confiar en nosotros!`
            }
          })
        });

        const data = await response.json();
        if (!response.ok) {
          console.error('Meta API Error:', data);
          // Optional: handle strictly
        }
      } else {
        console.warn('Meta WhatsApp API not configured. Skipping WhatsApp message.');
      }

      res.status(200).json({ success: true, message: 'Reserva confirmada' });
    } catch (error) {
      console.error('Error processing booking:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the dist folder
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

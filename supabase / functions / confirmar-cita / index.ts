import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    const { nombre, telefono, turno } = await req.json()

    const resIA = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${Deno.env.get('API_KEY_GEMINI')}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Confirma amablemente a ${nombre} su cita para el turno ${turno}.` }] }]
      })
    })

    const dataIA = await resIA.json()
    
    // VALIDACIÓN CRÍTICA: Si Gemini falla, usamos un mensaje por defecto
    const mensajeIA = dataIA.candidates?.[0]?.content?.parts?.[0]?.text 
                      || `Hola ${nombre}, confirmamos tu cita para el turno ${turno} en CEFRA.`;

    const resWA = await fetch(`https://graph.facebook.com/v18.0/${Deno.env.get('WHATSAPP_PHONE_ID')}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('WHATSAPP_TOKEN')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: telefono,
        type: "text",
        text: { body: mensajeIA }
      })
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})

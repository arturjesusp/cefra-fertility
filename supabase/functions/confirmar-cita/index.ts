import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { nombre, telefono, turno } = await req.json()

  // 1. Generar el mensaje con Gemini usando tu nueva llave
  const resIA = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${Deno.env.get('API_KEY_GEMINI')}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Eres un asistente de la clínica CEFRA. Confirma amablemente a ${nombre} su cita para el turno ${turno}.` }] }]
    })
  })
  const dataIA = await resIA.json()
  const mensaje = dataIA.candidates[0].content.parts[0].text

  // 2. Enviar por WhatsApp con tus Secrets de Meta
  await fetch(`https://graph.facebook.com/v18.0/${Deno.env.get('WHATSAPP_PHONE_ID')}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('WHATSAPP_TOKEN')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: telefono,
      type: "text",
      text: { body: mensaje }
    })
  })

  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } })
})

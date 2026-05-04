import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  // Vercel requiere que validemos que sea un método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Aquí Vercel por fin leerá tu variable de entorno
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    
    if (!apiKey) {
      return res.status(500).json({ error: 'La API Key de Gemini no está configurada en Vercel.' });
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

    // Devolvemos el texto al chat
    return res.status(200).json({ text: response.text });
    
  } catch (error) {
    console.error('Error de Gemini:', error);
    return res.status(500).json({ error: 'Error del servidor al contactar con la API.' });
  }
}

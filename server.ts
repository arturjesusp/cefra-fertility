import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Create Supabase Client safely
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.post('/api/booking', async (req, res) => {
    try {
      const { 
        sede, especialidad, doctor, modalidad, 
        fecha, hora, nombre, telefono, email, esPrimeraVez 
      } = req.body;

      // 1. Save to Supabase
      if (supabase) {
        const { error: dbError } = await supabase
          .from('bookings')
          .insert([
            { sede, especialidad, doctor, modalidad, fecha, hora, nombre, telefono, email, esPrimeraVez }
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
            type: 'template',
            template: {
              name: 'hello_world', // Default template, using this per screenshot. You can change it.
              language: { code: 'en_US' }
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

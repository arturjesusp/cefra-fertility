import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const MAP_URLS = {
  'san-borja': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.205244583344!2d-77.0097658!3d-12.0984928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d8af9ab733%3A0xeebd1217e4bbdf02!2sAv.%20Guardia%20Civil%20571%2C%20San%20Borja%2015036!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe',
  'magdalena': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4427504861614!2d-77.0583151!3d-12.0818227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8fcb52e3957%3A0x7d01cc03328ce7!2sAv.%20Javier%20Prado%20Oeste%201234%2C%20Magdalena%20del%20Mar%2015076!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe'
};

export default function BookingPage() {
  const [sede, setSede] = useState('san-borja');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    alert('Tu solicitud de reserva ha sido enviada con éxito. Nos pondremos en contacto muy pronto.');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-clinic-bg dark:bg-[#00282d] transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center md:text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-clinic-heading dark:text-white tracking-tight mb-4">
            Reserva tu cita
          </h1>
          <p className="text-lg text-clinic-dark/80 dark:text-white/80 font-light max-w-2xl border-l-2 border-clinic-cta/50 pl-4 py-1">
            Da el primer paso. Elige cómo prefieres que te atendamos y completa tus datos. Será un honor acompañarte.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8">
          
          {/* Left Column: Info & Google Maps */}
          <div className="w-full lg:w-5/12 space-y-8 order-2 lg:order-1">
            <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-clinic-muted-1/20 dark:border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8"></div>
              
              <h3 className="text-xl font-bold text-clinic-heading dark:text-white mb-6 font-montserrat relative z-10 flex items-center gap-2">
                <ShieldCheck className="text-clinic-cta w-6 h-6" /> ¿Por qué elegir CEFRA?
              </h3>
              
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-clinic-cta/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <div>
                    <span className="font-semibold text-clinic-dark dark:text-white block">Atención presencial u online</span>
                    <span className="text-sm text-clinic-dark/70 dark:text-white/60 font-light">Adaptamos nuestra consulta a tu ritmo y ubicación.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-clinic-cta/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <div>
                    <span className="font-semibold text-clinic-dark dark:text-white block">Especialistas Top</span>
                    <span className="text-sm text-clinic-dark/70 dark:text-white/60 font-light">Equipo multidisciplinario con trayectoria internacional.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-clinic-cta/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <div>
                    <span className="font-semibold text-clinic-dark dark:text-white block">Respuesta en 24h</span>
                    <span className="text-sm text-clinic-dark/70 dark:text-white/60 font-light">Agendamiento rápido para iniciar tu tratamiento pronto.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#001f24] rounded-3xl p-6 border border-clinic-muted-1/20 dark:border-white/10 shadow-lg">
              <h4 className="font-bold text-clinic-heading dark:text-white mb-4 flex items-center gap-2 font-montserrat">
                <MapPin className="text-clinic-cta w-5 h-5" /> Ubicación seleccionada
              </h4>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-clinic-muted-1/10 relative">
                 <iframe 
                   src={sede === 'san-borja' ? MAP_URLS['san-borja'] : MAP_URLS['magdalena']}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0 w-full h-full"
                 ></iframe>
              </div>
              <div className="mt-4 text-sm text-clinic-dark/80 dark:text-white/80">
                {sede === 'san-borja' ? (
                  <p><strong>San Borja:</strong> Av. Guardia Civil 571, Lima</p>
                ) : (
                  <p><strong>Magdalena:</strong> Av. Javier Prado Oeste 1234, Lima</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="w-full lg:w-7/12 bg-white dark:bg-[#001f24] p-8 md:p-10 rounded-3xl shadow-xl shadow-clinic-muted-1/10 dark:shadow-black/20 border border-clinic-muted-1/10 dark:border-white/5 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                 {/* Sede */}
                <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Sede</label>
                  <select 
                    value={sede} 
                    onChange={(e) => setSede(e.target.value)}
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                    required
                  >
                    <option value="san-borja">San Borja</option>
                    <option value="magdalena">Magdalena del Mar</option>
                  </select>
                </div>
                {/* Especialidad */}
                <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Especialidad</label>
                  <select 
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                    required
                  >
                    <option value="">Seleccione especialidad</option>
                    <option value="fertilidad">Fertilidad</option>
                    <option value="ginecologia">Ginecología</option>
                    <option value="urologia">Urología Men</option>
                    <option value="psicologia">Psicología</option>
                  </select>
                </div>
              </div>

              {/* Doctor */}
              <div>
                 <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Doctor (Opcional)</label>
                  <select 
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                  >
                    <option value="">Seleccione doctor</option>
                    <option value="orihuela">Dra. Patricia Orihuela</option>
                    <option value="escudero">Dr. Francisco Escudero</option>
                    <option value="perez">Dr. Ygor Pérez Solf</option>
                  </select>
              </div>

              {/* Modalidad */}
              <div>
                <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-4">Modalidad de Atención</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="modalidad" value="presencial" defaultChecked className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-clinic-muted-2 peer-checked:border-clinic-cta transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-clinic-cta scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-clinic-dark dark:text-white/90 group-hover:text-clinic-cta transition-colors">Presencial</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="modalidad" value="online" className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-clinic-muted-2 peer-checked:border-clinic-cta transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-clinic-cta scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-clinic-dark dark:text-white/90 group-hover:text-clinic-cta transition-colors">Online (Teleconsulta)</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 {/* Fecha */}
                <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Fecha sugerida</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl pl-4 pr-10 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                      // Firefox fix for icon
                      style={{ colorScheme: 'light dark' }}
                      required
                    />
                    <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-clinic-muted-2 pointer-events-none" />
                  </div>
                </div>
                {/* Hora */}
                <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Hora preferida</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow appearance-none"
                      required
                    >
                      <option value="">Seleccione un turno</option>
                      <option value="mañana">Mañana (8:00 AM - 12:00 PM)</option>
                      <option value="tarde">Tarde (12:00 PM - 5:00 PM)</option>
                      <option value="noche">Noche (5:00 PM - 8:00 PM)</option>
                    </select>
                    <Clock className="absolute right-3 top-3.5 w-5 h-5 text-clinic-muted-2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-clinic-muted-1/10 dark:border-white/10">
                 {/* Nombre */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Escribe tu nombre"
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                    required
                  />
                </div>
                 {/* Telefono */}
                 <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="+51 900 000 000"
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                    required
                  />
                </div>
                 {/* Email */}
                 <div>
                  <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="tu@correo.com"
                    className="w-full bg-clinic-bg dark:bg-[#002f35] border border-clinic-muted-1/30 dark:border-white/10 rounded-xl px-4 py-3 text-clinic-dark dark:text-white focus:ring-2 focus:ring-clinic-cta focus:outline-none transition-shadow"
                    required
                  />
                </div>
              </div>

              {/* Primera cita */}
              <div className="pt-2">
                <label className="block text-sm font-semibold text-clinic-heading dark:text-white mb-4">¿Es tu primera cita con nosotros?</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="primera" value="si" defaultChecked className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-clinic-muted-2 peer-checked:border-clinic-cta transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-clinic-cta scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-clinic-dark dark:text-white/90 group-hover:text-clinic-cta transition-colors">Sí, es primera vez</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="primera" value="no" className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-clinic-muted-2 peer-checked:border-clinic-cta transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-clinic-cta scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-clinic-dark dark:text-white/90 group-hover:text-clinic-cta transition-colors">No, soy paciente continuador</span>
                  </label>
                </div>
              </div>

              {/* Terminos */}
              <div className="pt-4 flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 w-5 h-5 rounded border-clinic-muted-2 text-clinic-cta focus:ring-clinic-cta focus:ring-2 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-sm text-clinic-dark/80 dark:text-white/70 font-light cursor-pointer leading-relaxed">
                  Acepto que CEFRA me contacte a través del teléfono y email proporcionados para gestionar mi cita y enviarme información relevante.
                </label>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-clinic-cta hover:brightness-105 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(34,173,184,0.3)] transition-all transform hover:-translate-y-1 mt-6"
              >
                Confirmar Reserva
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

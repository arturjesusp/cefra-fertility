import React from 'react';
import { ArrowRight, Quote, Baby, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomeTestimonials() {
  const navigate = useNavigate();

  return (
    <>
      <section id="especialistas" className="py-24 md:py-32 bg-clinic-bg dark:bg-[#00282d] relative overflow-hidden transition-colors duration-300">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6 bg-white dark:bg-white/10 py-2 px-4 rounded-full shadow-sm border border-clinic-muted-1/10 dark:border-white/10">
                <span className="w-2 h-2 rounded-full bg-clinic-cta animate-pulse"></span>
                <span className="text-clinic-cta dark:text-clinic-muted-3 font-bold tracking-widest text-xs uppercase font-montserrat">Conoce al Equipo</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-clinic-heading dark:text-white tracking-tight leading-tight">
                Vocación. Experiencia. <br className="hidden lg:block"/>
                <span className="text-clinic-dark dark:text-clinic-muted-1 italic font-serif opacity-90">Empatía.</span>
              </h2>
            </div>
            <button className="text-clinic-heading dark:text-white/90 font-semibold hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors flex items-center border-b-2 border-clinic-heading/30 dark:border-white/30 hover:border-clinic-cta dark:hover:border-clinic-cta pb-1 shrink-0 group">
              Ver todos los especialistas <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dra. Patricia Orihuela",
                role: "Socia Fundadora Cefra",
                specialty: "Ginecología y Obstetricia · Especialista en Fertilidad",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
                shape: "rounded-[2.5rem] rounded-tl-none"
              },
              {
                name: "Dr. Francisco Escudero",
                role: "Socio Fundador de Cefra",
                specialty: "Ginecología y Obstetricia · Especialista en Fertilidad",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
                shape: "rounded-[2.5rem]"
              },
              {
                name: "Dr. Ygor Pérez Solf",
                role: "Socio Fundador de Cefra",
                specialty: "Ginecología y Obstetricia · Especialista en Fertilidad",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
                shape: "rounded-[2.5rem] rounded-br-none"
              }
            ].map((doc, idx) => (
              <div key={idx} className={`group relative mt-${idx % 2 !== 0 ? '0 md:10' : '0'}`}>
                <div className={`relative overflow-hidden aspect-[3/4.5] mb-6 shadow-xl shadow-clinic-muted-1/20 dark:shadow-black/40 ${doc.shape}`}>
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark via-clinic-dark/60 to-transparent fill-mode-forwards opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute flex flex-col justify-end bottom-0 left-0 p-8 w-full h-full">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <p className="text-clinic-muted-3 font-bold text-xs uppercase tracking-wider mb-2">{doc.role}</p>
                      <h4 className="text-2xl font-bold text-white mb-2 font-montserrat">{doc.name}</h4>
                      <p className="text-white/80 font-medium text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{doc.specialty}</p>
                      <a href="#" className="inline-flex items-center text-clinic-cta font-semibold text-sm group/link opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Conoce Más <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-clinic-bg dark:bg-[#00282d] pb-32 transition-colors duration-300">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative">
                   <div className="absolute -left-10 text-[12rem] text-clinic-muted-1/10 dark:text-white/5 font-serif leading-none -top-10 hidden md:block">"</div>
                   <div className="inline-flex items-center gap-3 mb-6 bg-white dark:bg-white/10 py-2 px-4 rounded-full shadow-sm border border-clinic-muted-1/10 dark:border-white/10 relative z-10">
                     <span className="w-2 h-2 rounded-full bg-clinic-cta animate-pulse"></span>
                     <span className="text-clinic-cta dark:text-clinic-muted-3 font-bold tracking-widest text-xs uppercase font-montserrat">Testimonios</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-clinic-heading dark:text-white mb-8 tracking-tight leading-tight relative z-10">
                    Historias que <br className="hidden lg:block"/> nos inspiran <br className="hidden lg:block"/> <span className="text-clinic-dark dark:text-clinic-muted-1 italic font-serif">todos los días.</span>
                   </h2>
                   <p className="text-lg text-clinic-dark/80 dark:text-white/80 mb-10 leading-relaxed font-light relative z-10 border-l-2 border-clinic-cta/30 dark:border-clinic-cta/50 pl-6 py-2 max-w-lg">
                     Ningún caso es igual a otro, pero la meta de formar una familia une a nuestros pacientes. Lee las experiencias de quienes han recorrido este camino con nosotros.
                   </p>
                   <div className="flex items-center gap-4 relative z-10">
                     <div className="flex -space-x-4">
                       {[1, 2, 3, 4].map(i => (
                         <img key={i} className="w-12 h-12 rounded-full border-2 border-clinic-bg dark:border-[#00282d] object-cover shadow-sm" src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Patient avatar" />
                       ))}
                     </div>
                     <div className="flex flex-col">
                       <span className="font-bold text-clinic-dark dark:text-white flex items-center gap-1 font-montserrat text-lg">
                        <svg className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        4.9/5
                       </span>
                       <span className="text-sm text-clinic-muted-2 dark:text-white/60">Basado en +1200 reseñas</span>
                     </div>
                   </div>
                </div>

                <div className="space-y-6 relative">
                  <div className="absolute inset-0 bg-clinic-muted-1/5 dark:bg-white/5 -skew-y-3 transform origin-top-left -z-10 rounded-[3rem]"></div>
                  
                  <div className="bg-white/80 dark:bg-[#001f24]/90 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 border border-white/60 dark:border-white/10 shadow-xl shadow-clinic-muted-1/10 dark:shadow-black/20 relative hover:-translate-y-1 transition-transform">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-clinic-muted-1/20 dark:text-white/5" />
                    <p className="text-clinic-dark dark:text-white/90 italic leading-relaxed text-lg mb-8 relative z-10 font-serif">
                      "Después de tres años de intentos en otros centros, la empatía y la tecnología de CEFRA hicieron la diferencia. Nos explicaron el PGT con una paciencia infinita. Hoy tenemos a Lucía con nosotros."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-clinic-bg dark:bg-white/5 flex items-center justify-center text-clinic-dark dark:text-white font-bold font-montserrat shadow-sm border border-clinic-muted-1/10 dark:border-white/5">
                        M&A
                      </div>
                      <div>
                        <h4 className="font-bold text-clinic-heading dark:text-white text-sm uppercase tracking-wider font-montserrat">Mariana & Andrés</h4>
                        <p className="text-xs text-clinic-muted-2 dark:text-white/60 mt-0.5">Pacientes de FIV + PGT</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-[#001f24]/90 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 border border-white/60 dark:border-white/10 shadow-xl shadow-clinic-muted-1/10 dark:shadow-black/20 relative ml-0 sm:ml-12 hover:-translate-y-1 transition-transform">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-clinic-muted-1/20 dark:text-white/5" />
                    <p className="text-clinic-dark dark:text-white/90 italic leading-relaxed text-lg mb-8 relative z-10 font-serif">
                      "Me sentí verdaderamente escuchada. El proceso de preservación de óvulos me asustaba, pero el apoyo psicológico y médico fue increíblemente cálido."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-clinic-bg dark:bg-white/5 flex items-center justify-center text-clinic-dark dark:text-white font-bold font-montserrat shadow-sm border border-clinic-muted-1/10 dark:border-white/5">
                        CV
                      </div>
                      <div>
                         <h4 className="font-bold text-clinic-heading dark:text-white text-sm uppercase tracking-wider font-montserrat">Carolina V.</h4>
                         <p className="text-xs text-clinic-muted-2 dark:text-white/60 mt-0.5">Preservación de Fertilidad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24 mx-4 md:mx-6 rounded-[2rem] md:rounded-[3rem] bg-clinic-dark relative overflow-hidden shadow-2xl border border-clinic-heading/30 dark:border-white/10 transition-colors duration-300">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-clinic-heading/30 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1f9fa9]/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay object-cover"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl py-12">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 mb-8">
            <Baby className="w-10 h-10 text-clinic-cta animate-icon-blink" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white tracking-tight mb-8 leading-tight">
            Da el primer paso hacia <br className="hidden md:block"/><span className="text-clinic-muted-3 italic font-serif opacity-90">tu futuro.</span>
          </h2>
          <p className="text-xl text-clinic-muted-1 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Nuestros especialistas están listos para escucharte, evaluar tu caso clínico y desarrollar un plan personalizado diseñado exclusivamente para ti.
          </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button onClick={() => navigate('/agendar')} className="bg-clinic-cta hover:bg-[#1f9fa9] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(34,173,184,0.3)] transition-all w-full sm:w-auto hover:-translate-y-1">
                Agendar Primera Cita
              </button>
              <div className="flex items-center text-white/80 gap-3 bg-white/5 px-8 py-5 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors cursor-pointer w-full sm:w-auto justify-center">
                <Phone className="w-5 h-5 text-clinic-muted-3" />
                <span className="font-semibold text-lg hover:text-white transition-colors">+51 960 378 264</span>
              </div>
            </div>
        </div>
      </section>

      <footer id="contacto" className="bg-transparent py-16 mt-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex flex-row items-baseline">
                  <span className="text-5xl font-light tracking-tighter text-clinic-cta font-sans lowercase leading-none">cefr</span>
                  <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-clinic-cta overflow-hidden translate-y-1">
                     <div className="absolute -bottom-[3px] -right-[3px] text-white">
                        <Baby className="w-7 h-7 stroke-[1.5]" />
                     </div>
                  </div>
                </div>
                <div className="w-[2px] h-10 bg-[#06a7b3] mx-1 hidden sm:block"></div>
                <div className="hidden sm:flex flex-col text-[#06a7b3] text-[10px] md:text-[11px] font-semibold leading-[1.1] font-montserrat">
                  <span>Centro de Fertilidad y</span>
                  <span>Reproducción Asistida</span>
                </div>
              </div>
              <p className="text-clinic-dark/70 dark:text-white/70 text-sm leading-relaxed mb-8 font-light">
                Clínica líder en medicina reproductiva, combinando tecnología avanzada con atención humana y personalizada para ayudarte a formar tu familia.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/51960378264" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 flex items-center justify-center text-clinic-dark dark:text-white hover:bg-[#25D366] hover:text-white transition-all hover:shadow-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 flex items-center justify-center text-clinic-dark dark:text-white hover:bg-clinic-cta hover:text-white transition-all hover:shadow-lg shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 flex items-center justify-center text-clinic-dark dark:text-white hover:bg-clinic-cta hover:text-white transition-all hover:shadow-lg shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 flex items-center justify-center text-clinic-dark dark:text-white hover:bg-clinic-cta hover:text-white transition-all hover:shadow-lg shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-clinic-dark dark:text-white font-bold mb-6 font-montserrat tracking-wide">Clínica</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Nuestra Historia</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Equipo Médico</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> El Laboratorio</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Testimonios</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Blog Médico</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-clinic-dark dark:text-white font-bold mb-6 font-montserrat tracking-wide">Tratamientos</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Fecundación In Vitro</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Inseminación Artificial</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Preservación de Fertilidad</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Diagnóstico Genético</a></li>
                <li><a href="#" className="text-clinic-dark/70 dark:text-white/70 hover:text-clinic-cta dark:hover:text-clinic-cta transition-colors text-sm font-light flex items-center"><span className="w-1 h-1 rounded-full bg-clinic-cta mr-2 opacity-0 -ml-3 transition-all hover:opacity-100 hover:ml-0"></span> Donación de Óvulos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-clinic-dark dark:text-white font-bold mb-6 font-montserrat tracking-wide">Contacto</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 shrink-0 mt-1">
                     <MapPin className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-clinic-dark/70 dark:text-white/70 text-sm leading-relaxed font-light"><strong>Sede San Borja</strong><br/>Av. Guardia Civil 571, San Borja, Lima</span>
                    <span className="text-clinic-dark/70 dark:text-white/70 text-sm leading-relaxed font-light"><strong>Sede Magdalena</strong><br/>Av. Javier Prado Oeste 1234, Magdalena, Lima</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 shrink-0">
                    <Phone className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <span className="text-clinic-dark/70 dark:text-white/70 text-sm font-light">+51 960 378 264</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="p-2 rounded-lg bg-clinic-bg dark:bg-white/5 border border-clinic-muted-1/20 dark:border-white/10 shrink-0">
                    <Mail className="w-4 h-4 text-clinic-cta" />
                  </div>
                  <span className="text-clinic-dark/70 dark:text-white/70 text-sm font-light">hola@cefra.com.pe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-clinic-muted-1/20 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-clinic-dark/50 dark:text-white/50 text-sm font-light">
              &copy; {new Date().getFullYear()} CEFRA Clínica de Fertilidad. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-clinic-dark/50 dark:text-white/50 hover:text-clinic-cta dark:hover:text-white text-sm transition-colors font-light">Aviso de Privacidad</a>
              <a href="#" className="text-clinic-dark/50 dark:text-white/50 hover:text-clinic-cta dark:hover:text-white text-sm transition-colors font-light">Términos Legales</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

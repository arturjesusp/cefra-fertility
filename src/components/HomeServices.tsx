import React from 'react';
import { Microscope, ArrowUpRight, HeartPulse, Baby, Dna, Users, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomeServices() {
  const navigate = useNavigate();
  return (
    <section id="servicios" className="py-24 md:py-32 relative z-10 px-4 md:px-6 transition-colors duration-300">
      <div className="absolute inset-0 bg-white dark:bg-[#001f24] shadow-sm border-y border-clinic-muted-1/10 dark:border-white/5 -z-10 rounded-[3rem] md:rounded-[4rem] transition-colors duration-300"></div>
      <div className="container mx-auto px-6 lg:px-12 pt-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6 bg-clinic-bg dark:bg-white/5 py-2 px-4 rounded-full border border-clinic-muted-1/20 dark:border-white/10">
              <span className="w-2 h-2 rounded-full bg-clinic-cta animate-pulse"></span>
              <span className="text-clinic-cta dark:text-clinic-muted-3 font-bold tracking-widest text-xs uppercase font-montserrat">Soluciones Clínicas</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-clinic-heading dark:text-white tracking-tight leading-tight">
              Tratamientos <br className="hidden md:block"/>
              <span className="text-clinic-dark dark:text-clinic-muted-1 font-serif italic opacity-90">Integrales</span>
            </h2>
          </div>
          <p className="text-xl text-clinic-dark/70 dark:text-white/70 font-light max-w-md leading-relaxed border-l-2 border-clinic-cta/30 dark:border-clinic-cta/50 pl-6 py-2">
             Protocolos médicos personalizados y tecnología de última generación para aumentar al máximo tus probabilidades de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 */}
          <div className="bg-clinic-bg/40 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-clinic-muted-1/10 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,173,184,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="bg-white dark:bg-[#002f35] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-clinic-cta dark:group-hover:bg-clinic-cta transition-colors duration-500 border border-clinic-muted-1/10 dark:border-white/5 relative z-10">
              <Microscope className="w-8 h-8 text-clinic-cta group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-4 font-montserrat relative z-10">Fecundación In Vitro (FIV)</h3>
            <p className="text-clinic-dark/70 dark:text-white/70 leading-relaxed mb-10 relative z-10 font-light">Uniendo óvulo y espermatozoide en nuestro avanzado laboratorio para crear embriones de alta viabilidad y esperanza.</p>
            <div className="flex items-center text-clinic-cta font-semibold group-hover:text-[#1f9fa9] dark:group-hover:text-white transition-colors relative z-10 mt-auto">
              Leer más <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-clinic-bg/40 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-clinic-muted-1/10 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,173,184,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="bg-white dark:bg-[#002f35] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-clinic-cta dark:group-hover:bg-clinic-cta transition-colors duration-500 border border-clinic-muted-1/10 dark:border-white/5 relative z-10">
              <HeartPulse className="w-8 h-8 text-clinic-cta group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-4 font-montserrat relative z-10">Inseminación Artificial</h3>
            <p className="text-clinic-dark/70 dark:text-white/70 leading-relaxed mb-10 relative z-10 font-light">Técnica sencilla y segura que deposita espermatozoides capacitados en el útero en el momento exacto de la ovulación.</p>
            <div className="flex items-center text-clinic-cta font-semibold group-hover:text-[#1f9fa9] dark:group-hover:text-white transition-colors relative z-10 mt-auto">
              Leer más <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-clinic-bg/40 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-clinic-muted-1/10 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,173,184,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="bg-white dark:bg-[#002f35] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-clinic-cta dark:group-hover:bg-clinic-cta transition-colors duration-500 border border-clinic-muted-1/10 dark:border-white/5 relative z-10">
              <Baby className="w-8 h-8 text-clinic-cta group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-4 font-montserrat relative z-10">Preservación de Fertilidad</h3>
            <p className="text-clinic-dark/70 dark:text-white/70 leading-relaxed mb-10 relative z-10 font-light">Congelación de óvulos o esperma utilizando vitrificación ultrarrápida, protegiendo tu capacidad reproductiva a futuro.</p>
            <div className="flex items-center text-clinic-cta font-semibold group-hover:text-[#1f9fa9] dark:group-hover:text-white transition-colors relative z-10 mt-auto">
              Leer más <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-clinic-bg/40 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-clinic-muted-1/10 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,173,184,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="bg-white dark:bg-[#002f35] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-clinic-cta dark:group-hover:bg-clinic-cta transition-colors duration-500 border border-clinic-muted-1/10 dark:border-white/5 relative z-10">
              <Dna className="w-8 h-8 text-clinic-cta group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-4 font-montserrat relative z-10">Estudios Genéticos (PGT)</h3>
            <p className="text-clinic-dark/70 dark:text-white/70 leading-relaxed mb-10 relative z-10 font-light">Identificamos anomalías cromosómicas antes de la transferencia embrionaria, asegurando bebés más sanos.</p>
            <div className="flex items-center text-clinic-cta font-semibold group-hover:text-[#1f9fa9] dark:group-hover:text-white transition-colors relative z-10 mt-auto">
              Leer más <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-clinic-bg/40 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-clinic-muted-1/10 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,173,184,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="bg-white dark:bg-[#002f35] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-clinic-cta dark:group-hover:bg-clinic-cta transition-colors duration-500 border border-clinic-muted-1/10 dark:border-white/5 relative z-10">
              <Users className="w-8 h-8 text-clinic-cta group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-4 font-montserrat relative z-10">Apoyo Psicológico</h3>
            <p className="text-clinic-dark/70 dark:text-white/70 leading-relaxed mb-10 relative z-10 font-light">Ofrecemos acompañamiento especializado para ayudarte a manejar la carga emocional en cada etapa del tratamiento.</p>
            <div className="flex items-center text-clinic-cta font-semibold group-hover:text-[#1f9fa9] dark:group-hover:text-white transition-colors relative z-10 mt-auto">
              Leer más <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Service 6 - CTA Style */}
          <div className="bg-gradient-to-br from-[#1f9fa9] to-clinic-cta rounded-[2.5rem] p-10 lg:p-12 border border-white/20 shadow-lg group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:shadow-[0_20px_60px_rgba(34,173,184,0.3)] dark:hover:shadow-[0_20px_60px_rgba(34,173,184,0.3)]">
            <div className="absolute top-0 right-0 w-full h-full bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-20 transform rotate-12 scale-150 transition-transform duration-500 group-hover:scale-[1.6]"></div>
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/30 relative z-10 transition-colors duration-500 group-hover:bg-white text-white group-hover:text-clinic-cta">
              <Calendar className="w-8 h-8 transition-colors duration-500 currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-montserrat relative z-10">Evaluación de Fertilidad</h3>
            <p className="text-white/90 leading-relaxed mb-10 relative z-10 font-light">Un diagnóstico exhaustivo es el primer paso. Agendamos pruebas precisas para diseñar tu plan perfecto.</p>
            <button onClick={() => navigate('/agendar')} className="bg-white text-clinic-dark w-full py-4 rounded-xl font-bold hover:bg-clinic-bg hover:shadow-xl transition-all relative z-10 flex items-center justify-center gap-2 group-hover:-translate-y-1 mt-auto">
              Agendar Diagnóstico <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

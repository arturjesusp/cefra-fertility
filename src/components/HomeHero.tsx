import React, { useEffect, useState, useRef } from 'react';
import { Activity, Baby, ArrowRight, MapPin, Stethoscope, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AnimatedCounter({ target, suffix = '', duration = 2000, className = "" }: { target: number, suffix?: string, duration?: number, className?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration, isVisible]);

  return <span ref={counterRef} className={className}>+{count}{suffix}</span>;
}

export default function HomeHero() {
  const navigate = useNavigate();
  return (
    <>
      <section id="inicio" className="pt-24 md:pt-28 pb-4">
        <div className="relative min-h-[500px] md:h-[500px] lg:h-[600px] py-12 md:py-0 shrink-0 mx-4 md:mx-6 rounded-[2rem] md:rounded-3xl overflow-hidden shadow-xl flex items-center">
          <div className="absolute inset-0 z-0 bg-clinic-dark">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
              alt="Doctor discussing with patient warmly" 
              className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-clinic-dark via-clinic-dark/80 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-clinic-muted-1/20 hidden lg:flex items-center justify-center z-10 backdrop-blur-[2px]">
             <Activity className="w-48 h-48 text-white/20" />
          </div>
          
          <div className="container relative z-20 mx-auto px-6 lg:px-16">
            <div className="max-w-xl">
              <span className="text-clinic-muted-3 uppercase tracking-widest text-xs font-bold mb-4 block">Bienvenido a la excelencia médica</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Comprometidos con la vida.
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Fertilidad, ginecología y bienestar íntimo con respaldo médico y tecnología.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button onClick={() => navigate('/agendar')} className="bg-clinic-cta hover:brightness-105 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_20px_rgba(34,173,184,0.4)] transition-all flex items-center justify-center gap-2 group">
                  Comenzar Evaluación <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative z-20">
        <div className="py-8 md:py-6 bg-clinic-muted-2 grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-8 md:gap-8 lg:gap-16 text-white shrink-0 my-4 mx-4 md:mx-6 md:px-6 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-clinic-cta drop-shadow-md animate-icon-blink" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-1.5">
              <AnimatedCounter target={26} duration={1000} className="font-bold text-3xl md:text-2xl text-white leading-none" />
              <span className="text-[10px] md:text-[11px] text-white/80 font-bold tracking-widest uppercase font-montserrat leading-tight">Años de <br className="md:hidden"/>experiencia</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Baby className="w-5 h-5 md:w-6 md:h-6 text-clinic-cta drop-shadow-md animate-icon-blink" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-1.5">
              <AnimatedCounter target={6} suffix="K" duration={1000} className="font-bold text-3xl md:text-2xl text-white leading-none" />
              <span className="text-[10px] md:text-[11px] text-white/80 font-bold tracking-widest uppercase font-montserrat leading-tight">Niños <br className="md:hidden"/>nacidos</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-clinic-cta drop-shadow-md animate-icon-blink" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-1.5">
              <AnimatedCounter target={30} duration={1000} className="font-bold text-3xl md:text-2xl text-white leading-none" />
              <span className="text-[10px] md:text-[11px] text-white/80 font-bold tracking-widest uppercase font-montserrat leading-tight">Países <br className="md:hidden"/>impactados</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-clinic-cta drop-shadow-md animate-icon-blink" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-1.5">
              <AnimatedCounter target={50} duration={1000} className="font-bold text-3xl md:text-2xl text-white leading-none" />
              <span className="text-[10px] md:text-[11px] text-white/80 font-bold tracking-widest uppercase font-montserrat leading-tight">Especialistas <br className="md:hidden"/>médicos</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Storytelling) */}
      <section id="nosotros" className="py-24 md:py-32 bg-clinic-bg dark:bg-[#00282d] relative overflow-hidden transition-colors duration-300">
        {/* Artistic background blur */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-clinic-muted-3/10 dark:bg-clinic-cta/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-clinic-muted-2/20 dark:bg-clinic-muted-2/10 transform -translate-x-6 translate-y-6 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern, pristine medical facility" 
                className="rounded-[2.5rem] object-cover w-full h-[550px] shadow-2xl shadow-clinic-dark/10 dark:shadow-black/30 border border-white/50 dark:border-white/10"
              />
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white/90 dark:bg-[#001f24]/90 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-white/60 dark:border-white/10 hidden md:block w-72">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-clinic-bg dark:bg-white/5 flex items-center justify-center shrink-0 border border-clinic-muted-1/20 dark:border-white/5">
                    <Users className="w-7 h-7 text-clinic-cta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-clinic-heading dark:text-white font-montserrat text-lg">Soporte Continuo</h4>
                    <p className="text-sm text-clinic-dark/70 dark:text-white/70 mt-1 leading-relaxed">Cuidado y atención 24/7 para ti y tu familia.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6 bg-white dark:bg-white/10 py-2 px-4 rounded-full shadow-sm border border-clinic-muted-1/10 dark:border-white/10">
                <span className="w-2 h-2 rounded-full bg-clinic-cta animate-pulse"></span>
                <span className="text-clinic-cta dark:text-clinic-muted-3 font-bold tracking-widest text-xs uppercase font-montserrat">Nuestra Filosofía</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-clinic-heading dark:text-white mb-8 leading-tight tracking-tight">
                Ciencia exacta, con <br className="hidden lg:block" />
                <span className="text-clinic-dark dark:text-clinic-muted-1 italic font-serif opacity-90">profunda empatía.</span>
              </h2>
              <div className="space-y-6 text-lg text-clinic-dark/80 dark:text-white/80 font-light leading-relaxed">
                <p>
                  En CEFRA, entendemos que el viaje hacia la maternidad y paternidad puede ser emocionalmente complejo. Hemos diseñado un entorno donde la intimidad y la biotecnología coexisten en perfecta armonía.
                </p>
                <p>
                  Desde tu primera consulta, contarás con un equipo interdisciplinario que diseña protocolos exactos, adaptados a tu biología única. No eres un número; eres el centro de un esfuerzo médico y humano.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-8">
                <div className="flex items-start gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/60 dark:border-white/10">
                  <div className="mt-1 bg-white dark:bg-[#00282d] p-2.5 rounded-xl text-clinic-cta shadow-sm border border-clinic-muted-1/10 dark:border-white/10"><Stethoscope className="w-6 h-6"/></div>
                  <div>
                     <h4 className="font-bold text-clinic-heading dark:text-white font-montserrat">Expertos Pioneros</h4>
                     <p className="text-sm text-clinic-dark/70 dark:text-white/70 mt-1">Formados en los mejores institutos de investigación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/60 dark:border-white/10">
                   <div className="mt-1 bg-white dark:bg-[#00282d] p-2.5 rounded-xl text-clinic-cta shadow-sm border border-clinic-muted-1/10 dark:border-white/10"><Baby className="w-6 h-6"/></div>
                  <div>
                     <h4 className="font-bold text-clinic-heading dark:text-white font-montserrat">Atención Integral</h4>
                     <p className="text-sm text-clinic-dark/70 dark:text-white/70 mt-1">Acompañamiento clínico, genético y psicológico.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

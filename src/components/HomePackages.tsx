import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePackages() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/agendar');
  };

  return (
    <section className="py-24 bg-clinic-bg/50 dark:bg-transparent relative transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-clinic-heading dark:text-white mb-4 tracking-tight">
            Programas y paquetes
          </h2>
          <p className="text-clinic-dark/70 dark:text-white/60 text-lg">
            Paquetes diseñados para evaluar tu fertilidad de forma integral.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* FertiFuturo Mujer */}
          <div className="group bg-white dark:bg-[#00282d] rounded-2xl overflow-hidden shadow-xl shadow-clinic-muted-1/5 dark:shadow-black/40 border border-clinic-muted-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="https://cefra-your-path-to-parenthood.lovable.app/assets/pkg-woman-IpWfVwtb.jpg" alt="Mujer sonriendo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-clinic-cta text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Mujer
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-6 font-montserrat">FertiFuturo Mujer</h3>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Evaluación hormonal completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Ecografía especializada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Consulta con especialista</span>
                </li>
              </ul>
              <button onClick={handleBooking} className="w-full bg-clinic-cta hover:bg-[#1c929a] text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Reservar
              </button>
            </div>
          </div>

          {/* FertiFuturo Hombre */}
          <div className="group bg-white dark:bg-[#00282d] rounded-2xl overflow-hidden shadow-xl shadow-clinic-muted-1/5 dark:shadow-black/40 border border-clinic-muted-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" alt="Hombre sonriendo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-clinic-cta text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Hombre
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-6 font-montserrat">FertiFuturo Hombre</h3>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Espermatograma avanzado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Evaluación urológica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Plan personalizado</span>
                </li>
              </ul>
              <button onClick={handleBooking} className="w-full bg-clinic-cta hover:bg-[#1c929a] text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Reservar
              </button>
            </div>
          </div>

          {/* FertiDuo */}
          <div className="group bg-white dark:bg-[#00282d] rounded-2xl overflow-hidden shadow-xl shadow-clinic-muted-1/5 dark:shadow-black/40 border border-clinic-muted-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="https://cefra-your-path-to-parenthood.lovable.app/assets/pkg-couple-T0yrf2cc.jpg" alt="Pareja sonriendo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-clinic-cta text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Pareja
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-clinic-heading dark:text-white mb-6 font-montserrat">FertiDuo</h3>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Evaluación integral de ambos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Diagnóstico conjunto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-clinic-cta shrink-0 mt-0.5" />
                  <span className="text-clinic-dark/80 dark:text-white/80 font-medium">Orientación especializada</span>
                </li>
              </ul>
              <button onClick={handleBooking} className="w-full bg-clinic-cta hover:bg-[#1c929a] text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

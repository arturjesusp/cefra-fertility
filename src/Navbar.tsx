import React, { useState, useEffect } from 'react';
import { Baby, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (val: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('/#', '');
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const id = path.replace('/#', '');
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-clinic-bg/95 dark:bg-[#00282d]/95 backdrop-blur-md shadow-sm border-b border-clinic-muted-1/20 dark:border-white/5' : 'bg-transparent h-20 flex items-center shadow-none border-b-4 border-transparent'}`}>
      <div className={`container mx-auto px-6 lg:px-10 flex justify-between items-center transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'h-20' : 'h-24'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
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
        
        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => handleNavClick('/#inicio')} className={`text-[#06a7b3] font-semibold transition-colors hover:opacity-80`}>Inicio</button>
          <button className={`flex items-center gap-1 text-[#004952] dark:text-white/90 font-semibold transition-colors hover:text-clinic-cta`}>Ginecología <ChevronDown className="w-4 h-4" /></button>
          <button className={`flex items-center gap-1 text-[#004952] dark:text-white/90 font-semibold transition-colors hover:text-clinic-cta`}>Especialidades <ChevronDown className="w-4 h-4" /></button>
          <button className={`flex items-center gap-1 text-[#004952] dark:text-white/90 font-semibold transition-colors hover:text-clinic-cta`}>Blog <ChevronDown className="w-4 h-4" /></button>
          <button onClick={() => handleNavClick('/#nosotros')} className={`text-[#004952] dark:text-white/90 font-semibold transition-colors hover:text-clinic-cta`}>Nosotros</button>
          <button onClick={() => handleNavClick('/#contacto')} className={`text-[#004952] dark:text-white/90 font-semibold transition-colors hover:text-clinic-cta`}>Contacto</button>
        </div>

        <div className="hidden lg:block">
           <button onClick={() => navigate('/agendar')} className="ml-4 bg-clinic-cta text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(34,173,184,0.3)] hover:brightness-105 transition-all outline-none">
             Agendar Cita
           </button>
           <button 
             onClick={() => setIsDarkMode(!isDarkMode)} 
             className={`ml-4 p-2.5 rounded-full transition-colors text-clinic-heading hover:bg-clinic-muted-1/10 dark:text-white/90 dark:hover:bg-white/10 outline-none`}
           >
             {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
           </button>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button 
             onClick={() => setIsDarkMode(!isDarkMode)} 
             className={`p-2 rounded-full transition-colors text-clinic-heading dark:text-white/90 hover:bg-clinic-muted-1/10 dark:hover:bg-white/10 outline-none`}
           >
             {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
           </button>
          <button className={`hover:text-clinic-cta transition-colors text-clinic-heading dark:text-white outline-none`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-clinic-bg dark:bg-[#00282d] border-b border-clinic-muted-1/20 dark:border-white/10 shadow-lg py-6 flex flex-col px-6 gap-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <button onClick={() => handleNavClick('/#inicio')} className="text-left text-clinic-heading dark:text-white/90 font-semibold text-lg outline-none">Inicio</button>
          <button className="flex items-center justify-between text-clinic-heading dark:text-white/90 font-semibold text-lg w-full outline-none">Ginecología <ChevronDown className="w-5 h-5" /></button>
          <button className="flex items-center justify-between text-clinic-heading dark:text-white/90 font-semibold text-lg w-full outline-none">Especialidades <ChevronDown className="w-5 h-5" /></button>
          <button className="flex items-center justify-between text-clinic-heading dark:text-white/90 font-semibold text-lg w-full outline-none">Blog <ChevronDown className="w-5 h-5" /></button>
          <button onClick={() => handleNavClick('/#nosotros')} className="text-left text-clinic-heading dark:text-white/90 font-semibold text-lg outline-none">Nosotros</button>
          <button onClick={() => handleNavClick('/#contacto')} className="text-left text-clinic-heading dark:text-white/90 font-semibold text-lg outline-none">Contacto</button>
          <button onClick={() => { setMobileMenuOpen(false); navigate('/agendar'); }} className="bg-clinic-cta text-white px-6 py-3 rounded-full font-semibold mt-2 shadow-[0_0_15px_rgba(34,173,184,0.4)] block text-center w-full outline-none">
             Agendar Cita
          </button>
        </div>
      )}
    </nav>
  );
}


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS, FAQS, VALUE_PROPS } from './constants';
import { Icons, Graphics } from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 'hero',
      content: (
        <div className="flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            Presentación Estratégica
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-black italic leading-[0.85] tracking-tighter uppercase mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Transformación <br/><span className="text-cyan-500">Inteligente</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-300 max-w-3xl italic">
            Cómo la IA y la automatización están redefiniendo el éxito en los negocios locales de Illescas y Madrid.
          </p>
          <div className="mt-16 flex items-center gap-4 text-slate-500 font-bold tracking-widest uppercase text-xs">
            <span className="w-12 h-px bg-slate-800"></span>
            Por {PERSONAL_INFO.name}
            <span className="w-12 h-px bg-slate-800"></span>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      content: (
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-12 text-center">¿Su negocio pierde <span className="text-red-500">dinero?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Llamadas Perdidas", d: "Cada llamada no atendida es un cliente que se va a la competencia de al lado." },
              { t: "Gestión Manual", d: "Horas perdidas en WhatsApp respondiendo las mismas dudas una y otra vez." },
              { t: "Agenda Caótica", d: "Citas mal apuntadas o huecos vacíos que nadie rellena." },
              { t: "Falta de Seguimiento", d: "Clientes que no vuelven porque nadie les recordó su próxima visita." }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all">
                <h3 className="text-cyan-500 font-black italic uppercase mb-2">{p.t}</h3>
                <p className="text-slate-400 font-light">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 opacity-50"><Graphics.LossChart /></div>
        </div>
      )
    },
    {
      id: 'services',
      content: (
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-16 text-center">Soluciones <span className="text-cyan-500">Pro</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="group p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] flex items-start gap-6 hover:scale-[1.02] transition-transform">
                <span className="text-5xl">{s.icon}</span>
                <div>
                  <h3 className="text-2xl font-black italic uppercase mb-3 text-white group-hover:text-cyan-400">{s.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      content: (
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-16 text-center">Casos de <span className="text-cyan-500">Éxito</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] text-center flex flex-col items-center">
                <img src={t.avatar} className="w-20 h-20 rounded-full border-2 border-cyan-500 mb-6" alt={t.name} />
                <p className="text-slate-300 italic mb-6 font-light">"{t.quote}"</p>
                <h4 className="font-black text-white uppercase text-sm tracking-widest">{t.name}</h4>
                <span className="text-cyan-500 text-[10px] font-bold uppercase">{t.business}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      content: (
        <div className="text-center">
          <div className="mb-10 flex justify-center"><Icons.Rocket /></div>
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none mb-12">
            ¿Empezamos <br/><span className="text-cyan-500">hoy?</span>
          </h2>
          <p className="text-2xl font-light text-slate-300 mb-16 max-w-2xl mx-auto">
            Solicite un diagnóstico gratuito de 15 minutos para ver el potencial real de su negocio.
          </p>
          <a 
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-black py-8 px-16 rounded-2xl text-2xl uppercase tracking-widest transition-all shadow-[0_20px_60px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
          >
            Contactar por WhatsApp
          </a>
          <div className="mt-12 text-slate-500 font-black text-xl tracking-tighter uppercase italic opacity-40">
            {PERSONAL_INFO.whatsappDisplay}
          </div>
        </div>
      )
    }
  ];

  const paginate = (newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden font-['Roboto'] selection:bg-cyan-500 selection:text-white">
      
      {/* Indicador de Progreso */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-cyan-500' : 'w-4 bg-slate-800'}`}
          />
        ))}
      </div>

      <main className="relative w-full h-full flex items-center justify-center p-6 md:p-24">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="w-full flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controles Nav */}
      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-center z-50 pointer-events-none">
        <button 
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className={`p-6 rounded-full border border-slate-800 bg-slate-950/50 backdrop-blur-xl transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-0' : 'hover:border-cyan-500/50 hover:bg-cyan-500/10'}`}
        >
          <svg className="w-8 h-8 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        
        <div className="text-slate-500 text-[10px] font-black tracking-[0.5em] uppercase italic pointer-events-auto opacity-30 hover:opacity-100 transition-opacity">
          Presentación v1.0 — David Ortiz
        </div>

        <button 
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
          className={`p-6 rounded-full border border-slate-800 bg-slate-950/50 backdrop-blur-xl transition-all pointer-events-auto ${currentSlide === slides.length - 1 ? 'opacity-0' : 'hover:border-cyan-500/50 hover:bg-cyan-500/10'}`}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Marca de agua / Branding */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-20 hover:opacity-100 transition-opacity">
        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">IA Live Preview Mode</span>
      </div>
    </div>
  );
};

export default App;

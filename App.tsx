
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS } from './constants';
import { Icons, Graphics } from './constants';
import Slide from './components/Slide';
import { SlideContent } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Transformación Inteligente",
      subtitle: "Estrategia IA y Automatización para Negocios que quieren escalar.",
      type: 'hero',
      footer: `Por ${PERSONAL_INFO.name}`
    },
    {
      id: 2,
      title: "¿Su negocio pierde dinero?",
      subtitle: "Fugas de ingresos que la automatización resuelve hoy mismo.",
      type: 'list',
      points: [
        { title: "Llamadas Perdidas", desc: "Cada llamada no atendida es un cliente que se va a la competencia." },
        { title: "Gestión de WhatsApp", desc: "Horas perdidas respondiendo dudas básicas una y otra vez." },
        { title: "Agenda Ineficiente", desc: "Huecos vacíos por falta de un sistema de recordatorios automático." },
        { title: "Procesos Manuales", desc: "Tareas administrativas que le roban tiempo a su vida personal." }
      ]
    },
    {
      id: 3,
      title: "Soluciones Pro",
      subtitle: "Implementamos tecnología que trabaja para usted.",
      type: 'list',
      points: SERVICES.map(s => ({ title: s.title, desc: s.desc }))
    },
    {
      id: 4,
      title: "¿Empezamos hoy?",
      ctaText: "Agendar Diagnóstico Gratis",
      type: 'cta'
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden font-['Roboto']">
      
      {/* Diapositiva actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <Slide slide={slides[currentSlide]} isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* Controles de Navegación */}
      <div className="absolute bottom-10 left-0 right-0 px-10 flex justify-between items-center z-50">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all opacity-40 hover:opacity-100"
        >
          <svg className="w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-cyan-500 shadow-[0_0_10px_#06b6d4]' : 'w-2 bg-slate-800'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all opacity-40 hover:opacity-100"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Marca de agua */}
      <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 group hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Estrategia & IA</span>
        <span className="text-[8px] font-bold text-slate-500 uppercase">{PERSONAL_INFO.name}</span>
      </div>
    </div>
  );
};

export default App;

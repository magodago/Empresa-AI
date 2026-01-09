
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from './constants';

const slides = [
  {
    title: "Transformación Inteligente",
    subtitle: "Estrategia y Automatización para Negocios",
    type: "hero",
    content: "Optimice su tiempo. Multiplique sus resultados."
  },
  {
    title: "El Poder de la IA",
    subtitle: "¿Por qué ahora?",
    type: "list",
    items: [
      { t: "Eficiencia Radical", d: "Automatice tareas que hoy le roban 4 horas diarias." },
      { t: "Atención 24/7", d: "Sus clientes no esperan. La IA responde al instante." },
      { t: "Escalabilidad", d: "Crezca sin necesidad de aumentar su estructura de costes." }
    ]
  },
  {
    title: "Servicios Estratégicos",
    subtitle: "Soluciones a medida",
    type: "grid",
    services: [
      "Agentes de Voz AI",
      "Ventas por WhatsApp",
      "Automatización Admin",
      "Consultoría Técnica"
    ]
  },
  {
    title: "¿Hablamos?",
    subtitle: "Diagnóstico gratuito de 15 minutos",
    type: "cta",
    cta: "Contactar por WhatsApp"
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-6 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-5xl w-full text-center"
        >
          {slides[current].type === 'hero' && (
            <div className="space-y-8">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} className="text-cyan-400 font-black tracking-[0.5em] uppercase text-xs">Presentación Profesional</motion.span>
              <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none uppercase italic">
                {slides[current].title.split(' ')[0]} <br/>
                <span className="text-cyan-500">{slides[current].title.split(' ')[1]}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-slate-300 italic">{slides[current].subtitle}</p>
            </div>
          )}

          {slides[current].type === 'list' && (
            <div className="text-left space-y-12">
              <h2 className="text-5xl font-black italic uppercase border-b border-cyan-900 pb-4">{slides[current].title}</h2>
              <div className="grid gap-8">
                {slides[current].items?.map((item, i) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-start">
                    <span className="text-cyan-500 font-black text-2xl">0{i+1}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white uppercase italic">{item.t}</h3>
                      <p className="text-slate-400 text-lg font-light">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slides[current].type === 'grid' && (
            <div className="space-y-12">
              <h2 className="text-5xl font-black italic uppercase">{slides[current].title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {slides[current].services?.map((s, i) => (
                  <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-xl font-bold uppercase italic text-cyan-400">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {slides[current].type === 'cta' && (
            <div className="space-y-12">
              <h2 className="text-7xl font-black italic uppercase leading-none">{slides[current].title}</h2>
              <p className="text-2xl text-slate-400 font-light italic">{slides[current].subtitle}</p>
              <a 
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                className="inline-block bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105"
              >
                {slides[current].cta}
              </a>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navegación Inferior */}
      <div className="absolute bottom-10 left-0 right-0 px-10 flex justify-between items-center">
        <button onClick={prev} className="text-slate-500 hover:text-white transition-colors uppercase font-black text-xs tracking-widest">Anterior</button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i === current ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-800'}`} />
          ))}
        </div>
        <button onClick={next} className="text-slate-500 hover:text-white transition-colors uppercase font-black text-xs tracking-widest">Siguiente</button>
      </div>

      {/* Footer Branding */}
      <div className="absolute top-10 right-10 opacity-30 text-right">
        <div className="font-black text-[10px] tracking-[0.3em] uppercase">{PERSONAL_INFO.name}</div>
        <div className="text-[8px] font-bold text-cyan-500 uppercase tracking-widest">Consultoría IA</div>
      </div>
    </div>
  );
};

export default App;

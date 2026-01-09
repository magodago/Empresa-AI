
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, USE_CASES, VALUE_PROPS, TESTIMONIALS, FAQS } from './constants';
import Section from './components/Section';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener('touchstart', preventZoom, { passive: false });
    return () => document.removeEventListener('touchstart', preventZoom);
  }, []);

  const waLink = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hola%20David,%20vengo%20de%20tu%20web.%20Me%20gustaría%20saber%20más%20sobre%20la%20IA%20para%20mi%20negocio.`;

  const currentMonth = new Date().toLocaleString('es-ES', { month: 'long' });
  const capitalizedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-100 flex flex-col items-center selection:bg-cyan-500 selection:text-white font-['Roboto'] overflow-x-hidden relative">
      
      {/* Fondos de iluminación */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-400/10 blur-[150px] rounded-full"></div>
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100] origin-left shadow-[0_0_15px_#06b6d4]" 
        style={{ scaleX }} 
      />

      {/* HERO SECTION */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full flex flex-col items-center"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] font-black tracking-[0.4em] uppercase mb-10 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            Transformación Inteligente
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.9] tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 uppercase italic w-full">
            NEGOCIO <br/><span className="text-cyan-500">AUTOMATIZADO</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed mb-14 drop-shadow-lg">
            Su teléfono, sus reservas y su gestión trabajando solos mientras usted se enfoca en sus clientes.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative py-7 px-14 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 overflow-hidden text-lg md:text-2xl uppercase tracking-widest"
            >
               Auditoría Gratis WhatsApp
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md py-3 px-6 rounded-xl border border-slate-700 shadow-lg">
               <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-slate-100 text-[11px] font-bold tracking-[0.2em] uppercase italic">
                 Cupos limitados para {capitalizedMonth}
               </span>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="w-full relative z-10 flex flex-col items-center">
        
        {/* SECCIÓN: PROBLEMAS */}
        <Section title="¿Su negocio pierde dinero?" subtitle="Sin automatización, su empresa es invisible para el cliente moderno.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[
              { t: "Clientes sin respuesta", d: "Si no contesta al instante, el cliente se va a la competencia." },
              { t: "Llamadas perdidas", d: "Llamadas no atendidas son ventas que no se cobran." },
              { t: "Agenda caótica", d: "Citas mal apuntadas que cuestan dinero y tiempo." },
              { t: "Papeleo manual", d: "Horas perdidas picando datos en lugar de vendiendo." }
            ].map((p, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-700/60 p-10 rounded-[2.5rem] hover:border-cyan-500/50 transition-all group flex flex-col items-center text-center shadow-xl">
                <div className="text-cyan-500 font-black text-5xl mb-6 opacity-30 group-hover:opacity-100 italic">0{i+1}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">{p.t}</h3>
                <p className="text-slate-100 text-lg leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SECCIÓN: SERVICIOS */}
        <Section title="IA de Alto Rendimiento" bg="bg-slate-950/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            {SERVICES.map((s) => (
              <motion.div 
                key={s.id}
                whileHover={{ y: -8 }}
                className="p-12 rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-black border border-slate-700/50 shadow-2xl group flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-3xl font-black mb-6 uppercase text-white group-hover:text-cyan-400 transition-colors italic tracking-tighter">{s.title}</h3>
                <p className="text-slate-100 leading-relaxed text-xl font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SECCIÓN: TESTIMONIOS (NUEVA) */}
        <Section title="Historias de Éxito" subtitle="Negocios reales que ya han dado el salto tecnológico.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800 flex flex-col items-center text-center">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-6 border-2 border-cyan-500" />
                <p className="text-slate-200 text-lg italic mb-8 font-light">"{t.quote}"</p>
                <h4 className="text-white font-black uppercase tracking-widest">{t.name}</h4>
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest mt-2">{t.business}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* SECCIÓN: PREGUNTAS FRECUENTES (NUEVA) */}
        <Section title="Dudas Frecuentes" bg="bg-slate-950/40">
          <div className="max-w-4xl w-full flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className="text-xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">{faq.q}</span>
                  <span className={`text-cyan-500 text-2xl transition-transform ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-slate-100 text-lg font-light leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACTO FINAL */}
        <section id="contacto" className="w-full py-48 px-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[150px] -z-10 animate-pulse"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl flex flex-col items-center text-center"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tight uppercase italic text-white leading-[0.85]">
              ¿DAMOS EL <br/><span className="text-cyan-500">SALTO?</span>
            </h2>
            
            <div className="w-full bg-slate-900/90 border border-slate-700 p-12 md:p-24 rounded-[5rem] backdrop-blur-3xl shadow-2xl flex flex-col items-center justify-center">
              <p className="text-2xl md:text-4xl text-slate-100 mb-16 font-light italic leading-relaxed">
                Sin complicaciones técnicas. <br/>
                Solo resultados para su negocio.
              </p>
              
              <div className="w-full flex justify-center items-center">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xl inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white font-black py-10 px-12 rounded-[2.5rem] text-2xl md:text-5xl transition-all shadow-[0_30px_80px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 group uppercase tracking-widest text-center"
                >
                  HABLAR POR WHATSAPP
                </a>
              </div>
              
              <div className="mt-16 flex flex-col items-center gap-4">
                <span className="text-slate-400 font-black tracking-[0.5em] uppercase text-[10px] md:text-sm">Consultoría Directa David Ortiz</span>
                <span className="text-3xl md:text-5xl font-black text-white tracking-widest tabular-nums">{PERSONAL_INFO.whatsappDisplay}</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* BURBUJA FLOTANTE WHATSAPP */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-20 h-20 md:w-28 md:h-28 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-90 group"
      >
         <svg className="w-10 h-10 md:w-14 md:h-14 fill-white group-hover:rotate-12 transition-transform" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.604 2.023.997 3.144.997 3.181 0 5.767-2.586 5.767-5.767 0-3.18-2.586-5.766-5.765-5.766zm3.375 8.203c-.161.453-.937.828-1.29.882-.323.049-.742.063-1.192-.091-.258-.088-1.144-.438-2.174-1.357-.803-.716-1.347-1.599-1.504-1.868-.156-.269-.017-.414.119-.55.122-.123.269-.313.404-.47.134-.156.179-.269.269-.448.09-.179.045-.336-.022-.471-.067-.134-.606-1.458-.83-1.996-.219-.524-.454-.459-.623-.467l-.533-.007c-.184 0-.482.069-.733.344-.251.275-.959.938-.959 2.288 0 1.35.981 2.653 1.118 2.835.137.182 1.93 2.947 4.675 4.134.653.282 1.163.451 1.56.577.657.209 1.254.179 1.728.108.528-.079 1.625-.664 1.854-1.304.228-.64.228-1.189.16-1.304-.069-.115-.251-.184-.533-.323z"/>
         </svg>
         <div className="absolute -top-1 -right-1 w-7 h-7 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-[11px] md:text-sm font-black text-white animate-bounce border-4 border-[#020617] shadow-xl">1</div>
      </a>

      <footer className="w-full py-24 px-6 border-t border-slate-900 text-center opacity-40 text-[10px] tracking-[0.8em] font-black uppercase">
        © 2024 David Ortiz — Consultoría Premium de IA
      </footer>
    </div>
  );
};

export default App;

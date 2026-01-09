
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS, FAQS, Icons, Graphics } from './constants';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8 inline-block">
            Consultoría Estratégica 2024
          </span>
          <h1 className="text-6xl md:text-[9rem] font-black italic leading-[0.85] tracking-tighter uppercase mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-600">
            Transformación <br/><span className="text-cyan-500">Inteligente</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-300 max-w-3xl mx-auto italic mb-14 leading-relaxed">
            Automatizamos su negocio para que usted recupere su tiempo y multiplique sus beneficios.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#contacto" className="bg-white text-black font-black px-12 py-6 rounded-2xl uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 shadow-2xl">
              Diagnóstico Gratis
            </a>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              Estrategias por {PERSONAL_INFO.name}
            </div>
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* SECCIÓN: EL PROBLEMA */}
      <Section title="¿Su negocio pierde dinero?" subtitle="Identificamos las fugas de ingresos que la mayoría de dueños ignora.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
          {[
            { t: "Llamadas no atendidas", d: "Cada llamada que no responde es una venta directa para su competencia.", icon: "📵" },
            { t: "WhatsApp saturado", d: "Responder dudas básicas roba horas de productividad cada día.", icon: "💬" },
            { t: "Agenda ineficiente", d: "Huecos vacíos por falta de un sistema de recordatorios inteligente.", icon: "📅" },
            { t: "Tareas repetitivas", d: "La administración manual le está costando su libertad personal.", icon: "⚙️" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900/40 border border-slate-800 rounded-[3rem] group hover:border-red-500/30 transition-all"
            >
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-black italic uppercase text-white mb-4 group-hover:text-red-500 transition-colors">{item.t}</h3>
              <p className="text-slate-400 font-light leading-relaxed text-lg">{item.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-xl mx-auto opacity-50">
            <Graphics.LossChart />
        </div>
      </Section>

      {/* SECCIÓN: SOLUCIONES */}
      <Section title="Soluciones Pro" subtitle="Implementamos tecnología de última generación para PYMES." bg="bg-slate-950/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-slate-900/60 border border-slate-800 rounded-[3rem] flex items-start gap-8 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="text-5xl">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-black italic uppercase text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-60 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-[10rem] font-black italic uppercase leading-none mb-16 tracking-tighter">
            ¿Hablamos <br/><span className="text-cyan-500">hoy?</span>
          </h2>
          <a 
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-black py-8 px-16 rounded-[2.5rem] text-2xl uppercase tracking-[0.2em] transition-all shadow-[0_30px_100px_-15px_rgba(6,182,212,0.5)]"
          >
            WhatsApp Directo
          </a>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-900 text-center text-slate-600 font-black uppercase text-[10px] tracking-[0.5em]">
          {PERSONAL_INFO.name} — Consultoría IA — 2024
      </footer>
    </div>
  );
};

export default App;

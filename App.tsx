
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS, FAQS, VALUE_PROPS } from './constants';
import { Icons, Graphics } from './constants';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen font-['Roboto'] selection:bg-cyan-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8 inline-block">
            Consultoría Estratégica
          </span>
          <h1 className="text-6xl md:text-9xl font-black italic leading-[0.85] tracking-tighter uppercase mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500">
            Transformación <br/><span className="text-cyan-500">Inteligente</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-300 max-w-3xl mx-auto italic mb-12">
            Automatizamos su negocio para que usted recupere su tiempo y multiplique sus beneficios.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#contacto" className="bg-white text-black font-black px-10 py-5 rounded-2xl uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Diagnóstico Gratis
            </a>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              Por {PERSONAL_INFO.name}
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </section>

      {/* Problema Section */}
      <Section title="¿Su negocio pierde dinero?" subtitle="Identificamos las fugas de ingresos que la mayoría de dueños ignora.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { t: "Llamadas no atendidas", d: "Cada llamada que no responde es una venta directa para su competencia.", icon: "📵" },
            { t: "WhatsApp saturado", d: "Responder manualmente las mismas dudas roba horas de productividad cada día.", icon: "💬" },
            { t: "Agenda ineficiente", d: "Huecos vacíos en su calendario por falta de un sistema de recordatorios.", icon: "📅" },
            { t: "Gestión Administrativa", d: "Facturas y pedidos que consumen su tiempo personal.", icon: "⚙️" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] group hover:border-red-500/30 transition-all"
            >
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-black italic uppercase text-white mb-4 group-hover:text-red-500 transition-colors">{item.t}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
        <Graphics.LossChart />
      </Section>

      {/* Soluciones Section */}
      <Section title="Soluciones Pro" subtitle="Implementamos tecnología de última generación diseñada para PYMES." bg="bg-slate-950/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] flex items-start gap-8"
            >
              <div className="text-6xl">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-black italic uppercase text-white mb-4 leading-tight">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonios */}
      <Section title="Casos Reales" subtitle="Dueños de negocios que ya han dado el salto al futuro.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] flex flex-col items-center text-center">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-2 border-cyan-500 mb-6 grayscale hover:grayscale-0 transition-all" />
              <p className="text-slate-300 italic mb-8 font-light leading-relaxed">"{t.quote}"</p>
              <h4 className="font-black text-white uppercase text-sm tracking-[0.2em]">{t.name}</h4>
              <span className="text-cyan-500 text-[10px] font-bold uppercase mt-1">{t.business}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Dudas Frecuentes" bg="bg-slate-950/30">
        <div className="max-w-4xl mx-auto space-y-6">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
              <summary className="p-6 cursor-pointer flex justify-between items-center font-black italic uppercase tracking-wider text-white hover:text-cyan-400 transition-colors list-none">
                {faq.q}
                <span className="text-cyan-500 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="p-6 pt-0 text-slate-400 font-light leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <section id="contacto" className="py-40 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 flex justify-center"><Icons.Rocket /></div>
          <h2 className="text-6xl md:text-9xl font-black italic uppercase leading-none mb-12 tracking-tighter">
            ¿Hablamos <br/><span className="text-cyan-500">hoy?</span>
          </h2>
          <p className="text-2xl font-light text-slate-300 mb-16 italic">
            Diagnóstico gratuito de 15 minutos. Sin compromiso.
          </p>
          <a 
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-black py-8 px-16 rounded-[2rem] text-2xl uppercase tracking-[0.2em] transition-all shadow-[0_30px_60px_-15px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95"
          >
            WhatsApp Directo
          </a>
          <div className="mt-12 text-slate-500 font-black text-xl tracking-tighter uppercase italic opacity-40">
            {PERSONAL_INFO.whatsappDisplay}
          </div>
        </motion.div>
      </section>

      {/* Footer simple */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
        David Ortiz — Estrategia & IA 2024 — Illescas / Madrid
      </footer>

    </div>
  );
};

export default App;

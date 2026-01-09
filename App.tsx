
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS, FAQS } from './constants';
import { Icons, Graphics } from './constants';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      
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
          <h1 className="text-6xl md:text-[10rem] font-black italic leading-[0.8] tracking-tighter uppercase mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500">
            Transformación <br/><span className="text-cyan-500">Inteligente</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-300 max-w-3xl mx-auto italic mb-14 leading-relaxed">
            Automatizamos su negocio para que usted recupere su tiempo y multiplique sus beneficios sin esfuerzo manual.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#contacto" className="bg-white text-black font-black px-12 py-6 rounded-2xl uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              Diagnóstico Gratis
            </a>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              Estrategias por {PERSONAL_INFO.name}
            </div>
          </div>
        </motion.div>
        
        {/* Background Animation Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* SECCIÓN: EL PROBLEMA */}
      <Section title="¿Su negocio pierde dinero?" subtitle="Identificamos las fugas de ingresos que la mayoría de dueños ignora.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { t: "Llamadas no atendidas", d: "Cada llamada que no responde es una venta directa para su competencia.", icon: "📵" },
            { t: "WhatsApp saturado", d: "Responder dudas básicas roba horas de productividad cada día.", icon: "💬" },
            { t: "Agenda ineficiente", d: "Huecos vacíos por falta de un sistema de recordatorios inteligente.", icon: "📅" },
            { t: "Tareas repetitivas", d: "La administración manual le está costando su libertad personal.", icon: "⚙️" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900/40 border border-slate-800 rounded-[3rem] group hover:border-red-500/30 transition-all"
            >
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-black italic uppercase text-white mb-4 group-hover:text-red-500 transition-colors">{item.t}</h3>
              <p className="text-slate-400 font-light leading-relaxed text-lg">{item.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
            <Graphics.LossChart />
            <p className="text-center text-[10px] text-slate-600 font-black uppercase tracking-[0.4em] mt-8 italic">Impacto negativo estimado sin automatización</p>
        </div>
      </Section>

      {/* SECCIÓN: SOLUCIONES */}
      <Section title="Soluciones Pro" subtitle="Implementamos tecnología de última generación diseñada para PYMES." bg="bg-slate-950/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] flex items-start gap-8 hover:border-cyan-500/50 transition-all duration-500"
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

      {/* SECCIÓN: PRUEBA SOCIAL */}
      <Section title="Casos Reales" subtitle="Resultados tangibles en negocios locales.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] flex flex-col items-center text-center"
            >
              <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full border-2 border-cyan-500 mb-8 grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="text-slate-300 italic mb-10 font-light leading-relaxed text-lg">"{t.quote}"</p>
              <h4 className="font-black text-white uppercase text-sm tracking-[0.2em]">{t.name}</h4>
              <span className="text-cyan-500 text-[10px] font-bold uppercase mt-2 tracking-widest">{t.business}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ ACORDEÓN */}
      <Section title="Preguntas" bg="bg-slate-950/30">
        <div className="max-w-4xl mx-auto space-y-6">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-[1.5rem] overflow-hidden">
              <summary className="p-8 cursor-pointer flex justify-between items-center font-black italic uppercase tracking-wider text-white hover:text-cyan-400 transition-colors list-none">
                {faq.q}
                <span className="text-cyan-500 group-open:rotate-180 transition-transform text-2xl">↓</span>
              </summary>
              <div className="p-8 pt-0 text-slate-400 font-light text-lg leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-60 px-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <div className="mb-16 flex justify-center"><Icons.Rocket /></div>
          <h2 className="text-7xl md:text-[11rem] font-black italic uppercase leading-none mb-16 tracking-tighter">
            ¿Hablamos <br/><span className="text-cyan-500">hoy?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light text-slate-300 mb-20 italic max-w-2xl mx-auto">
            Reserve su diagnóstico gratuito de 15 minutos y descubra cuánto puede ahorrar con IA.
          </p>
          <a 
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hola David, me interesa el diagnóstico gratuito.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-black py-10 px-20 rounded-[3rem] text-3xl uppercase tracking-[0.2em] transition-all shadow-[0_30px_100px_-15px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95"
          >
            WhatsApp Directo
          </a>
          <div className="mt-16 text-slate-500 font-black text-xl tracking-tighter uppercase italic opacity-30">
            {PERSONAL_INFO.whatsappDisplay}
          </div>
        </motion.div>
        
        {/* Particle Background Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <div className="mb-8 font-black italic uppercase tracking-widest text-slate-500">
            {PERSONAL_INFO.name} — Consultoría IA
        </div>
        <div className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em]">
          Illescas / Madrid / Global — 2024
        </div>
      </footer>

    </div>
  );
};

export default App;

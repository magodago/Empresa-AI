
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SERVICES, TESTIMONIALS, FAQS } from './constants';
import { Icons, Graphics } from './constants';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen font-['Roboto'] selection:bg-cyan-500 selection:text-white bg-transparent overflow-x-hidden flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-8 inline-block">
            Estrategia de Negocio & IA
          </span>
          
          <h1 className="text-[12vw] md:text-[8rem] font-black italic leading-[0.85] tracking-tighter uppercase mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500 text-center w-full max-w-full">
            Transformación <br/>
            <span className="text-cyan-500">Inteligente</span>
          </h1>

          <p className="text-lg md:text-3xl font-light text-slate-300 max-w-2xl mx-auto italic mb-12 leading-relaxed">
            Eliminamos las tareas manuales de su negocio para que usted multiplique su libertad y sus beneficios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
            <a href="#contacto" className="w-full sm:w-auto bg-white text-black font-black px-10 py-5 rounded-2xl uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 text-center">
              Diagnóstico Gratis
            </a>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] text-center">
              Consultoría por {PERSONAL_INFO.name}
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </section>

      {/* Problema Section */}
      <Section title="¿Su negocio pierde dinero?" subtitle="Identificamos las grietas por donde se escapan sus clientes potenciales.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 w-full max-w-6xl mx-auto">
          {[
            { t: "Llamadas perdidas", d: "Cada llamada que no responde mientras trabaja es un cliente que se va a su competencia directa.", icon: "📵" },
            { t: "WhatsApp saturado", d: "Responder manualmente las mismas dudas de precios y horarios mata su rentabilidad cada día.", icon: "💬" },
            { t: "Agenda con huecos", d: "Sin un sistema de recordatorios automático, las cancelaciones de última hora le cuestan dinero.", icon: "📅" },
            { t: "Gestión Manual", d: "La burocracia y los pedidos le roban el tiempo que debería dedicar a lo que realmente importa.", icon: "⚙️" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] group hover:border-red-500/30 transition-all text-center md:text-left"
            >
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-4 group-hover:text-red-500 transition-colors">{item.t}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Graphics.LossChart />
        </div>
      </Section>

      {/* Soluciones Section */}
      <Section title="Soluciones Pro" subtitle="Tecnología de última generación adaptada a la realidad de su negocio." bg="bg-slate-950/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full"
            >
              <div className="text-6xl">{service.icon}</div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-4 leading-tight">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonios */}
      <Section title="Resultados Reales" subtitle="Dueños de negocios que ya han transformado su forma de trabajar.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] flex flex-col items-center text-center group hover:bg-slate-900/50 transition-all w-full">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-2 border-cyan-500 mb-6 object-cover bg-slate-800" />
              <p className="text-slate-300 italic mb-8 font-light leading-relaxed">"{t.quote}"</p>
              <h4 className="font-black text-white uppercase text-sm tracking-[0.2em]">{t.name}</h4>
              <span className="text-cyan-500 text-[10px] font-bold uppercase mt-1">{t.business}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Dudas Comunes" bg="bg-slate-950/30">
        <div className="max-w-4xl mx-auto space-y-4 w-full">
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
      <section id="contacto" className="py-24 md:py-40 px-6 text-center w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="mb-10 flex justify-center"><Icons.Rocket /></div>
          <h2 className="text-[12vw] md:text-[6rem] font-black italic uppercase leading-none mb-10 tracking-tighter">
            ¿Hablamos <br/><span className="text-cyan-500">hoy?</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-12 italic">
            Agende su sesión de 15 minutos para recuperar su tiempo.
          </p>
          <a 
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-black py-8 px-16 rounded-[2rem] text-xl md:text-2xl uppercase tracking-[0.2em] transition-all shadow-[0_30px_60px_-15px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95"
          >
            WhatsApp Directo
          </a>
          <div className="mt-12 text-slate-500 font-black text-xl tracking-tighter uppercase italic opacity-40">
            {PERSONAL_INFO.whatsappDisplay}
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-slate-900 w-full text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] px-6">
        David Ortiz — Consultoría en IA — Illescas / Madrid
      </footer>

    </div>
  );
};

export default App;


import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent } from '../types';
import { Icons, Graphics, PERSONAL_INFO } from '../constants';

interface SlideProps {
  slide: SlideContent;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'hero':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} className="text-center px-10 max-w-7xl">
            <motion.div variants={itemVariants} className="mb-12 flex justify-center">
                <Icons.Brain />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 leading-[1.1] tracking-tighter italic">
              {slide.title}
            </motion.h1 >
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-cyan-400 max-w-4xl mx-auto font-light tracking-wide py-6 border-t border-slate-800 italic">
              {slide.subtitle}
            </motion.p>
          </motion.div>
        );

      case 'list':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} className="w-full max-w-7xl px-8">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-16 text-white text-center tracking-tighter uppercase italic">{slide.title}</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {slide.points?.map((p: any, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-500 group">
                  <h3 className="text-2xl font-black text-cyan-500 mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight italic">{p.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">{p.desc}</p>
                </motion.div>
              ))}
            </div>
            {slide.id === 2 && (
              <motion.div variants={itemVariants} className="mt-12 w-full max-w-md mx-auto opacity-40">
                <Graphics.LossChart />
                <p className="text-center text-[10px] uppercase tracking-[0.3em] text-slate-600 mt-4 font-black">Pérdida de oportunidad sin automatización</p>
              </motion.div>
            )}
          </motion.div>
        );

      case 'pillars':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} className="w-full max-w-7xl px-8">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-20 text-center text-white tracking-tighter uppercase italic">{slide.title}</motion.h2>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
              {slide.points?.map((p: any, i) => (
                <motion.div key={i} variants={itemVariants} className="flex-1 bg-slate-900/30 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 text-center relative overflow-hidden group hover:bg-slate-900/50 transition-all">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="mb-10 flex justify-center">
                    <Graphics.CircularProgress value={i === 0 ? "100" : i === 1 ? "95" : "90"} />
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-wider leading-tight italic">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg font-light">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'cta':
        const waLink = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hola%20David,%20me%20gustaría%20solicitar%20el%20diagnóstico%20gratuito%20de%20IA%20para%20mi%20negocio.`;
        return (
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} className="text-center px-8 flex flex-col items-center">
             <motion.div variants={itemVariants} className="mb-14">
                <Icons.Rocket />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-16 max-w-5xl leading-none tracking-tighter text-white italic uppercase">
              {slide.title}
            </h2 >
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all shadow-[0_20px_50px_rgba(6,182,212,0.4)] uppercase tracking-widest inline-block"
            >
              {slide.ctaText || "Solicitar Información"}
            </motion.a>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {renderContent()}
    </div>
  );
};

export default Slide;


import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, bg = "" }) => {
  return (
    <section className={`py-24 md:py-40 px-6 relative overflow-hidden w-full flex flex-col items-center ${bg}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full mx-auto flex flex-col items-center"
      >
        <div className="text-center mb-16 md:mb-24 w-full">
          <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1.1] text-white italic w-full break-words">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-3xl text-slate-200 font-light max-w-3xl mx-auto italic leading-relaxed px-4">
              {subtitle}
            </p>
          )}
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-cyan-500 mx-auto mt-10 md:mt-12 shadow-[0_0_20px_rgba(6,182,212,0.8)] rounded-full"></div>
        </div>
        
        <div className="w-full">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default Section;

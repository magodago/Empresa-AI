
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
    <section className={`py-40 px-6 md:px-12 lg:px-24 ${bg} relative overflow-hidden w-full flex flex-col items-center`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none text-white italic">
            {title}
          </h2>
          {subtitle && (
            <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-3xl mx-auto italic leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-2 bg-cyan-600 mx-auto mt-14 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
        </div>
        
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

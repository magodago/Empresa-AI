
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
    <section className={`py-40 px-6 ${bg} relative overflow-hidden w-full flex flex-col items-center`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none text-white italic">
            {title}
          </h2>
          {subtitle && (
            <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto italic">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

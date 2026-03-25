'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { v: "+150%", l: "Brand Engagement" },
  { v: "2.5M", l: "System Impressions" },
  { v: "14", l: "Market Expansions" }
];

export const ServiceProof: React.FC = () => {
  return (
    <section className="py-44 px-6 bg-[#030303] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
         
         <div className="text-center mb-32">
            <span className="subtitle-premium block mb-8 text-white/40">Market Outcomes / 05</span>
            <h2 className="h-lg !mb-6 leading-tight">Provable Proof.</h2>
            <p className="body-text max-w-xl mx-auto opacity-50">Our architecture is built to produce measurable institutional results.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
                className="flex flex-col items-center gap-10 group cursor-default"
              >
                 <span className="text-[#E6FF00] text-[48px] md:text-[82px] font-light tracking-tighter drop-shadow-[0_0_20px_rgba(230,255,0,0.3)] group-hover:scale-110 transition-transform duration-1000">
                   {stat.v}
                 </span>
                 <div className="h-[2px] w-12 bg-white/10 group-hover:w-full group-hover:bg-[#E6FF00]/40 transition-all duration-700" />
                 <span className="text-white/20 text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-bold group-hover:text-white transition-colors duration-500">
                   {stat.l}
                 </span>
              </motion.div>
            ))}
         </div>

         {/* Mini Showcase Indicator */}
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2 }}
           className="mt-44 pt-32 border-t border-white/5 text-center flex flex-col items-center gap-12"
         >
             <span className="subtitle-premium !text-[9px] !tracking-[0.8em]">ARCHIVED CAPABILITY</span>
             <div className="flex gap-4 opacity-[0.05] grayscale brightness-150">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-40 h-24 bg-white/20" />
                ))}
             </div>
         </motion.div>

      </div>
    </section>
  );
};

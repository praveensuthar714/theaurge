'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  tagline: string;
  image: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, tagline, image }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-start pt-32 pb-24 overflow-hidden bg-black px-6">
      
      {/* Background Image with subtle Parallax / Zoom effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-x-0 inset-y-0 z-0 pointer-events-none"
      >
         <img src={image} className="w-full h-full object-cover grayscale brightness-125" alt="Background" />
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-4xl"
         >
            <span className="subtitle-premium block mb-8 text-[#E6FF00]">The Service Pillar</span>
            <h1 className="h-xl !mb-8 leading-tight">
               {title}. <br />
               {tagline}
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 mt-16 items-start">
               <div className="h-[1px] w-24 bg-[#E6FF00]/40 mt-3 hidden md:block" />
               <p className="body-text text-[18px] md:text-[22px] max-w-2xl leading-relaxed opacity-60">
                 We deploy high-fidelity systems designed to harmonize with your brand's existing infrastructure, maximizing market impact through technical precision.
               </p>
            </div>
         </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#E6FF00]/10" />
      <div className="absolute bottom-0 right-0 w-[1px] h-1/3 bg-gradient-to-t from-[#E6FF00]/10 to-transparent" />
    </section>
  );
};

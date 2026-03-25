'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

export const ServiceCTA: React.FC = () => {
  return (
    <section className="py-72 text-center bg-black relative overflow-hidden z-[50]">
      
      {/* Background Animated Glows */}
      <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E6FF00]/5 rounded-full blur-[180px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-20">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
         >
            <div className="w-16 h-16 rounded-full border border-[#E6FF00]/20 flex items-center justify-center mx-auto mb-16 group hover:scale-110 transition-transform duration-700 cursor-pointer">
               <Zap className="w-8 h-8 text-[#E6FF00] drop-shadow-[0_0_10px_rgba(230,255,0,0.5)]" />
            </div>
            
            <h2 className="h-lg !mb-20 text-[32px] md:text-[82px] !font-light leading-none tracking-tighter">
               Ready to architect <br /> your market dominance?
            </h2>

            <PremiumButton href="/contact" className="!pl-16 scale-125 md:scale-150">
               Deploy System
            </PremiumButton>

            <p className="body-text !text-white/20 mt-20 uppercase tracking-[0.4em] text-[10px] font-bold">Inquiry Pipeline Open for Q2 2024</p>
         </motion.div>
      </div>

    </section>
  );
};

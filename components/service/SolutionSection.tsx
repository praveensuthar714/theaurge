'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Target, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface Feature {
  t: string;
  d: string;
}

interface SolutionSectionProps {
  title: string;
  desc: string;
  features: Feature[];
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ title, desc, features }) => {
  const icons = [Cpu, Target, ShieldCheck];

  return (
    <section className="py-44 px-6 bg-black relative overflow-hidden z-20">
      
      {/* Decorative Ambient Glow (Corner) */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-[#E6FF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
         
         <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
            <div className="lg:w-1/2">
               <span className="subtitle-premium block mb-10 text-[#E6FF00]">Strategic Solution / 02</span>
               <h2 className="h-lg !mb-0 leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-1000">
                  {title}
               </h2>
            </div>
            <div className="lg:w-1/2">
               <p className="body-text text-[18px] md:text-[22px] max-w-xl leading-relaxed opacity-60 ml-auto">
                 {desc}
               </p>
            </div>
         </div>

         {/* HIGHER BENTO GRID STYLE */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[340px]">
            
            {/* Feature 1 — Large Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-8 p-12 bg-white/[0.04] border border-white/10 flex flex-col justify-end group cursor-pointer relative overflow-hidden transition-all duration-700 hover:border-[#E6FF00]/30"
            >
               <div className="absolute top-12 left-12 grid-box border border-white/10 w-16 h-16 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-[#E6FF00]/40 transition-all">
                  <Cpu className="w-8 h-8 text-[#E6FF00]" />
               </div>
               <div className="relative z-10 flex flex-col gap-6">
                  <h3 className="h-sm !mb-0">{features[0].t}</h3>
                  <p className="body-text opacity-40 max-w-lg">{features[0].d}</p>
               </div>
               <ArrowUpRight className="absolute bottom-12 right-12 w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700" />
            </motion.div>

            {/* Feature 2 — Vertical Small Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-4 p-12 bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-[#E6FF00]/30 transition-all duration-700"
            >
               <Target className="w-10 h-10 text-white opacity-20 group-hover:text-[#E6FF00] group-hover:opacity-100 transition-all" />
               <div className="flex flex-col gap-6 mt-16">
                   <h3 className="h-sm !mb-0 text-[20px]">{features[1].t}</h3>
                   <p className="body-text opacity-40 text-sm leading-relaxed">{features[1].d}</p>
               </div>
            </motion.div>

            {/* Feature 3 — Square Block */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-4 p-12 bg-black border border-white/10 flex flex-col justify-center gap-12 group hover:scale-[1.01] transition-all duration-700"
            >
               <Zap className="w-12 h-12 text-[#E6FF00] drop-shadow-[0_0_15px_rgba(230,255,0,0.5)]" />
               <div className="flex flex-col gap-4">
                  <h3 className="h-sm !mb-0 text-[18px]">{features[2].t}</h3>
                  <p className="body-text opacity-30 text-xs leading-relaxed uppercase tracking-[0.2em]">{features[2].d}</p>
               </div>
            </motion.div>

            {/* Feature 4 — Wide Narrative Block (Action Orientated) */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-8 p-12 bg-[#080808] border border-white/5 flex items-center justify-between group hover:border-[#E6FF00]/20 transition-all"
            >
               <div className="max-w-md">
                   <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.4em] mb-4 block">System Deployment</span>
                   <h3 className="h-sm text-[26px] leading-[1.3] mb-6">Designed for <br /> Institutional Scale.</h3>
                   <div className="h-[1px] w-12 bg-[#E6FF00]/40 transition-all group-hover:w-full duration-1000" />
               </div>
               <div className="hidden lg:flex w-24 h-24 rounded-full border border-white/5 items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity">
                  <Globe className="w-10 h-10 text-white animate-pulse" />
               </div>
            </motion.div>

         </div>

      </div>
    </section>
  );
};

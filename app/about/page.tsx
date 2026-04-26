'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Target, Palette, Cpu, Zap, Globe, Sparkles, Award, Film } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const AboutHero = dynamic(() => import("@/components/AboutHero"), { ssr: false });
const ManifestoSection = dynamic(() => import("@/components/ManifestoSection"), { ssr: false });

export default function StudioPage() {
  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black bg-black">
      <Header />
      
      {/* 1. CINEMATIC HERO (Shifted from Home) */}
      <AboutHero />

      {/* 2. MANIFESTO (Shifted from Home) */}
      <ManifestoSection />
      {/* SECTION 2 — THE SPECIALISTS (Nodes of Integrity) */}
      <section className="pb-24 md:pb-44 pt-12 md:pt-20 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
               <div className="max-w-2xl">
                  <h2 className="text-[32px] md:text-[48px] font-medium tracking-tight text-white mb-8">A Synchronized Collective.</h2>
                  <p className="body-text !text-white/40 text-[15px] md:text-[16px] leading-relaxed">Our team comprises world-class designers, cinematographers, SEO architects, and marketing specialists, all dedicated to high-precision execution.</p>
               </div>
               <div className="hidden md:flex w-20 h-20 rounded-full border border-white/10 items-center justify-center text-accent/20 group">
                  <Cpu className="w-8 h-8 group-hover:text-accent transition-colors duration-1000" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/5">
               {[
                 { t: "Creative Engine", d: "Directors and Cinematographers focused on high-fidelity cinematic brand storytelling.", icon: Film },
                 { t: "Growth Architects", d: "Performance and SEO experts dedicated to ROI and market dominance.", icon: Globe },
                 { t: "System Integrity", d: "A relentless commitment to drive results that cut through high-noise environments.", icon: Target }
               ].map((v, i) => (
                 <div key={i} className="flex flex-col gap-12 md:gap-16 p-8 md:p-12 hover:bg-white/[0.01] border-r border-b border-white/5 group transition-all duration-700">
                    <div className="flex justify-between items-start">
                       <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-none group-hover:border-accent/40 group-hover:text-accent transition-all duration-700">
                          <v.icon className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                       </div>
                       <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest font-bold">0{i+1}</span>
                    </div>
                    <div className="mt-auto">
                       <h3 className="text-white text-[11px] md:text-[12px] font-bold tracking-[0.4em] uppercase mb-6">{v.t}</h3>
                       <p className="text-white/20 text-[14px] md:text-[15px] leading-relaxed group-hover:text-white/50 transition-colors">
                          {v.d}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         {/* Atmospheric Ambient Glow */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.01] rounded-full blur-[200px] pointer-events-none" />
      </section>

      {/* SECTION 4 — IMAGE GRID (Handcrafted Bento Feel) */}
      <section className="py-24 md:py-56 px-6 bg-[#030303]">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 aspect-[16/10] rounded-[4px] overflow-hidden border border-white/10 grayscale transition-all duration-[2s] bg-white/[0.03]"
                >
                   <img src="/scene2.png" className="w-full h-full object-cover" alt="The Vision" loading="lazy" />
                </motion.div>
                <div className="lg:col-span-5 flex flex-col gap-8">
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.98 }}
                     whileInView={{ opacity: 0.5, scale: 1 }}
                     whileHover={{ opacity: 1 }}
                     transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                     viewport={{ once: true }}
                     className="aspect-[4/3] rounded-[4px] overflow-hidden border border-white/10 grayscale transition-all duration-[2s] bg-white/[0.03]"
                   >
                      <img src="/scene1.png" className="w-full h-full object-cover" alt="The Vision" loading="lazy" />
                   </motion.div>
                   <div className="p-8 border border-white/5 rounded-[4px]">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-[0.4em] mb-4 block">Our Standard</span>
                      <p className="text-white/30 text-[14px] leading-relaxed italic">
                         "We don't settle for visibility. We aim for legacy."
                      </p>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 5 — REVOLUTIONARY CTA (Replicated from Service Pages) */}
      <section className="relative h-[60vh] md:h-[80vh] min-h-[450px] md:min-h-[650px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 px-4 md:px-0">
          <div className="absolute inset-4 md:inset-0 rounded-[4px] md:rounded-none overflow-hidden">
            <img 
              src="/bgimagectaservice.png" 
              className="w-full h-full object-cover scale-105" 
              alt="CTA Background" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          <div className="absolute inset-x-0 md:inset-0 bg-black/40 z-10" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-20 px-10 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col items-start gap-6 md:gap-8"
          >
            <h2 className="text-[36px] md:text-6xl font-medium leading-[1.1] tracking-tight text-white max-w-xl text-left">
               Ready to scale <br /> your <span className="text-white/20">legacy</span>?
            </h2>
            <p className="body-text text-white/70 text-[14px] md:text-[16px] max-w-md leading-relaxed text-left">
               Systematic execution is the engine; creative power is the soul. Secure your position in our execution pipeline and redefine your market authority.
            </p>
            <div className="mt-2 md:mt-4">
              <PremiumButton href="/contact">
                Start Deployment
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

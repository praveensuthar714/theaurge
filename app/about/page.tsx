'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Target, Palette, Cpu, Zap, Globe, Sparkles, Award } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const AboutHero = dynamic(() => import("@/components/AboutHero"), { ssr: false });
const ManifestoSection = dynamic(() => import("@/components/ManifestoSection"), { ssr: false });

export default function StudioPage() {
  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* 1. CINEMATIC HERO (Shifted from Home) */}
      <AboutHero />

      {/* 2. MANIFESTO (Shifted from Home) */}
      <ManifestoSection />

      {/* SECTION 1 — WHO WE ARE (Reduced bulkiness) */}
      <section className="pt-44 pb-32">
        <div className="section-container">
           <span className="subtitle-premium">the Studio</span>
           <h1 className="h-lg max-w-4xl mb-16 px-1">
              Building trust. <br />
              Connecting audiences. <br />
              Impact at institutional scale.
           </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <p className="body-text text-[18px] md:text-[22px] max-w-2xl leading-relaxed">
                 The Aurge is a creative production and strategy driven marketing house specializing in film production, TV commercials, high impact brand stories, and performance driven marketing.
              </p>
              <div className="flex gap-16 border-l border-white/10 pl-16 opacity-30 h-fit pb-2">
                 <div className="flex flex-col gap-1">
                    <span className="text-accent text-[14px] font-bold tracking-widest">100%</span>
                    <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Commitment</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-accent text-[14px] font-bold tracking-widest">24/7</span>
                    <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Execution</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2 — OUR SPECIALISTS (Clean Node Style) */}
      <section className="section-v-spacing bg-secondary relative overflow-hidden">
         <div className="section-container relative z-10">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
               <div>
                  <h2 className="h-md mb-6">A Synchronized Collective.</h2>
                  <p className="body-text max-w-xl">Our team comprises of talented designers, cinematographers, directors, photographers, SEO experts, and marketing specialists, all dedicated to providing top-tier solutions.</p>
               </div>
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/10">
                  <Cpu className="w-6 h-6 animate-pulse" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
               {[
                 { t: "Creative Engine", d: "Directors and Cinematographers focused on high-fidelity cinematic brand storytelling." },
                 { t: "Growth Architects", d: "Performance and SEO experts dedicated to ROI and market dominance." },
                 { t: "System Integrity", d: "The commitment to drive results that make your brand stand out in high-noise environments." }
               ].map((v, i) => (
                 <div key={i} className="flex flex-col gap-8 group">
                   <div className="h-[1px] w-8 bg-[#E6FF00]/50 group-hover:w-full transition-all duration-1000" />
                   <h3 className="text-white text-[11px] font-bold tracking-[0.4em] uppercase">{v.t}</h3>
                   <p className="text-white/20 text-[14px] leading-relaxed group-hover:text-white/40 transition-colors">
                      {v.d}
                   </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3 — THE MISSION (Minimal & Confident) */}
      <section className="section-v-spacing relative overflow-hidden">
         <div className="section-container max-w-5xl text-center">
            <h2 className="h-md mb-20 px-4">
               "At theAurge, your brand's <span className="text-accent">success, visibility, and credibility</span> are our top priority."
            </h2>
            <div className="h-[1px] w-12 bg-white/10 mx-auto" />
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[140px] pointer-events-none" />
      </section>

      {/* SECTION 4 — IMAGE GRID (Handcrafted Feel) */}
      <section className="py-24 px-6 bg-[#111]">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/5] rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000 bg-neutral-900">
                   <img src="/images/scene1.png" className="w-full h-full object-cover" alt="The Vision" />
                </div>
                <div className="aspect-[4/5] rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000 bg-neutral-900 mt-12 md:mt-24">
                   <img src="/images/scene2.png" className="w-full h-full object-cover" alt="The Vision" />
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 5 — FINAL CTA (Boxed/Pill Style) */}
      <section className="section-v-spacing text-center">
         <div className="section-container">
            <h2 className="h-lg mb-20">
               Ready to execute <br /> your <span className="text-white/20">vision</span>?
            </h2>
            <PremiumButton href="/contact" className="scale-125 md:scale-150">
               Start Deployment
            </PremiumButton>
         </div>
      </section>

      <Footer />
    </main>
  );
}

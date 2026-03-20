'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Target, Palette, Cpu, Zap, Globe, Sparkles, Award } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function StudioPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — WHO WE ARE (Reduced bulkiness) */}
      <section className="pt-44 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
           <span className="text-[#E6FF00] text-[10px] font-bold tracking-[0.6em] uppercase mb-10 block opacity-50">the Studio</span>
           <h1 className="text-[38px] md:text-[62px] font-medium leading-[1.1] tracking-tighter text-white max-w-4xl mb-16 px-1">
              Building trust. <br />
              Connecting audiences. <br />
              <span className="text-white/20 italic font-light">Impact at institutional scale.</span>
           </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <p className="text-white/40 text-[17px] md:text-[21px] max-w-2xl leading-relaxed font-light">
                 The Aurge is a creative production and strategy driven marketing house specializing in film production, TV commercials, high impact brand stories, and performance driven marketing.
              </p>
              <div className="flex gap-16 border-l border-white/10 pl-16 opacity-30 h-fit pb-2">
                 <div className="flex flex-col gap-1">
                    <span className="text-[14px] text-white font-bold tracking-widest text-[#E6FF00]">100%</span>
                    <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Commitment</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[14px] text-white font-bold tracking-widest text-[#E6FF00]">24/7</span>
                    <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Execution</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2 — OUR SPECIALISTS (Clean Node Style) */}
      <section className="py-44 px-6 border-y border-white/5 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
               <div>
                  <h2 className="text-white text-[28px] md:text-[42px] font-light tracking-tight mb-6">A Synchronized Collective.</h2>
                  <p className="text-white/30 text-[15px] max-w-xl leading-relaxed">Our team comprises of talented designers, cinematographers, directors, photographers, SEO experts, and marketing specialists, all dedicated to providing top-tier solutions.</p>
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
      <section className="py-64 px-6 relative overflow-hidden">
         <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-[28px] md:text-[44px] font-light text-[#F5F5F5] leading-tight tracking-tight mb-20 px-4">
               "At theAurge, your brand's <span className="text-[#E6FF00]">success, visibility, and credibility</span> are our top priority."
            </h2>
            <div className="h-[1px] w-12 bg-white/10 mx-auto" />
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6FF00]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      </section>

      {/* SECTION 4 — IMAGE GRID (Handcrafted Feel) */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#111]">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/5] rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000 bg-neutral-900">
                   <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="The Vision" />
                </div>
                <div className="aspect-[4/5] rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000 bg-neutral-900 mt-12 md:mt-24">
                   <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="The Vision" />
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 5 — FINAL CTA (Boxed/Pill Style) */}
      <section className="py-64 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-[32px] md:text-[62px] font-medium text-white tracking-tight leading-tight mb-20">
               Ready to execute <br /> your <span className="italic text-white/20">vision</span>?
            </h2>
            <Link 
              href="/contact" 
              className="group/btn relative inline-flex items-center justify-center bg-[#E6FF00] px-12 py-5 rounded-full text-black text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:scale-[1.05]"
            >
              Start Deployment
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}

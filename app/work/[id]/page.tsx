'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ArrowRight, Play, ExternalLink, Share2, ChevronRight, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <main className="bg-black min-h-screen">
      <Header />
      
      {/* SECTION 1 — HERO (Case Study Info) */}
      <section className="pt-44 pb-32 px-6 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
           <Link href="/work" className="inline-flex items-center gap-3 text-white/40 hover:text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-20 transition-all group">
             <div className="w-8 h-8 rounded-[4px] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowLeft className="w-3.5 h-3.5" />
             </div>
             Back to Archive
           </Link>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-8">
                 <span className="text-[#E6FF00] text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">Case Study Archive</span>
                 <h1 className="text-[48px] md:text-[82px] font-light leading-[1] tracking-tighter text-white max-w-4xl px-1">
                    Lumina Noir. <br />
                    <span className="text-white/30 italic">Redefining Presence.</span>
                 </h1>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-8 border-l border-white/5 pl-12 h-fit mb-12">
                 {[
                   { l: "Client", v: "Lumina Global" },
                   { l: "Role", v: "Creative Ecosystem" },
                   { l: "Year", v: "2024" }
                 ].map((meta, i) => (
                   <div key={i} className="flex flex-col gap-2">
                      <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">{meta.l}</span>
                      <span className="text-white text-[16px] md:text-[20px] font-medium tracking-tight uppercase leading-tight">{meta.v}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2 — THE STRATEGY & THE PROBLEM */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
               <div className="lg:col-span-4">
                  <h2 className="text-white text-[32px] md:text-[42px] font-medium tracking-tight mb-8">The Challenge.</h2>
                  <p className="text-white/40 text-[16px] md:text-[18px] leading-relaxed mb-12">
                     Lumina Global needed a visual identity that could bridge the gap between their heritage and the future of sustainable tech. Their presence was fractured across fragmented channels.
                  </p>
               </div>
               <div className="lg:col-span-8 text-center bg-black/60 p-12 md:p-32 rounded-[4px] border border-white/5 relative overflow-hidden">
                  <h3 className="text-white text-[24px] md:text-[48px] font-light leading-tight tracking-tight mb-16 relative z-10 italic">
                     "We didn't just design a logo. We engineered a visual system that <span className="text-[#E6FF00]">lives and breathes</span> across every touchpoint."
                  </h3>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6FF00]/10 rounded-full blur-[120px] pointer-events-none" />
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 3 — EXECUTION (Media Showcase) */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
              <div className="aspect-[16/11] rounded-[4px] overflow-hidden border border-white/10 group grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Execution" />
              </div>
              <div className="aspect-[16/11] rounded-[4px] overflow-hidden border border-white/10 group grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Execution" />
              </div>
           </div>
           
           <div className="aspect-[21/9] rounded-[4px] overflow-hidden border border-white/10 bg-black group relative cursor-pointer">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]" alt="Full Width Display" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-black" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4 — RESULTS / IMPACT */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#080808]">
         <div className="container mx-auto max-w-7xl">
            <h2 className="text-white text-[32px] md:text-[42px] font-medium tracking-tight mb-24 text-center">Outcome Benchmarks.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { v: "+150%", l: "Brand Engagement" },
                 { v: "2.5M", l: "System Impressions" },
                 { v: "14", l: "Market Expansions" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center gap-6 group">
                    <span className="text-[#E6FF00] text-[48px] md:text-[72px] font-light tracking-tighter group-hover:scale-110 transition-transform">{stat.v}</span>
                    <span className="text-white/20 text-[11px] uppercase tracking-[0.6em] font-bold group-hover:text-white transition-colors">{stat.l}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION / NEXT PROJECT */}
      <section className="py-64 text-center">
         <div className="container mx-auto px-6">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-bold mb-12 block">NEXT CASE STUDY</p>
            <Link href="/work/2" className="group block mb-24">
               <h2 className="text-[32px] md:text-[72px] font-light text-white tracking-tight leading-none px-8 group-hover:text-white/30 transition-colors">
                  Aether Flow. <br /> <span className="italic text-white/30">Frontier Scale.</span>
               </h2>
            </Link>
            
            <Link 
              href="/contact" 
              className="group/btn relative inline-flex items-center justify-between gap-10 bg-[#E6FF00] pl-10 pr-1 py-1 rounded-[4px] text-black text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:scale-[1.05]"
            >
              <span className="pl-2">Deploy similar system</span>
              <div className="relative w-12 h-12 rounded-[4px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-20 group-hover/btn:bg-black text-black group-hover/btn:text-white">
                <ArrowRight className="w-6 h-6 -translate-x-10 opacity-0 absolute transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                <ArrowRight className="w-6 h-6 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
              </div>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}

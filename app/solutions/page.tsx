'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, Target, Layers, Play, Cpu, Sparkles } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const solutions = [
  { 
    t: "High-Impact Brand Stories", 
    d: "Strategic narratives that build trust and long-term brand equity.", 
    tag: "Strategy",
    icon: Sparkles
  },
  { 
    t: "Film & TV Production", 
    d: "Cinematic execution for documentaries, commercials, and digital films.", 
    tag: "Creative",
    icon: Play
  },
  { 
    t: "Performance Driven Marketing", 
    d: "Scalable ROI systems across search, social, and automated channels.", 
    tag: "Growth",
    icon: Zap
  },
  { 
    t: "Technical Ecosystem", 
    d: "Custom-built web infrastructure and AI automation for the modern era.", 
    tag: "Technology",
    icon: Cpu
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      
      {/* SECTION 1 — HERO */}
      <section className="pt-44 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
           <span className="text-[#E6FF00] text-[10px] font-bold tracking-[0.6em] uppercase mb-10 block">Market Solutions</span>
           <h1 className="text-[42px] md:text-[82px] font-light leading-[1.05] tracking-tighter text-white max-w-5xl mb-16 px-1">
              Top-tier <br />
              Systems for <br />
              <span className="text-white/30 italic">Market Leaders.</span>
           </h1>
           <p className="text-white/40 text-[18px] md:text-[22px] max-w-2xl leading-relaxed font-light">
              We don't just provide services. We deploy full-scale market solutions that combine creative intuition with technical precision.
           </p>
        </div>
      </section>

      {/* SECTION 2 — SOLUTIONS GRID */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#050505]">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {solutions.map((sol, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="group p-12 rounded-[4px] border border-white/5 bg-black/40 backdrop-blur-3xl hover:border-[#E6FF00]/30 transition-all duration-700"
                 >
                    <div className="flex justify-between items-start mb-12">
                       <sol.icon className="w-10 h-10 text-[#E6FF00] group-hover:scale-110 transition-transform" />
                       <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold border border-white/10 px-4 py-1.5 rounded-full">{sol.tag}</span>
                    </div>
                    <h3 className="text-white text-[28px] md:text-[36px] font-medium tracking-tight mb-6 leading-tight group-hover:text-white transition-colors">{sol.t}</h3>
                    <p className="text-white/30 text-[16px] md:text-[18px] leading-relaxed mb-12">
                       {sol.d}
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 text-[#E6FF00] text-[11px] uppercase tracking-widest font-bold group/link">
                       Explore Solution <ArrowRight className="w-4.5 h-4.5 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3 — THE FRAMEWORK */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-32 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-white text-[42px] font-light leading-tight tracking-tight mb-16 px-1">Engineered for <br /> <span className="text-white/30 italic">Dominance.</span></h2>
                  <div className="flex flex-col gap-10">
                     {[
                       { t: "Deep Discovery", d: "We analyze your brand DNA to uncover untapped market leverage." },
                       { t: "Architectural Build", d: "Deploying high-fidelity digital and visual infrastructure." },
                       { t: "Aggressive Scaling", d: "Pushing the system to capture maximum market share." }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-12 h-12 rounded-[4px] bg-white/5 flex items-center justify-center text-[#E6FF00] shrink-0 group-hover:bg-[#E6FF00] group-hover:text-black transition-all">
                             <Target className="w-5 h-5 shadow-[0_0_20px_rgba(230,255,0,0.5)]" />
                          </div>
                          <div>
                             <h4 className="text-white text-[20px] font-medium mb-3">{item.t}</h4>
                             <p className="text-white/30 text-sm leading-relaxed">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative bg-neutral-900 rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="The Framework" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4 — END ACTION */}
      <section className="py-64 text-center border-t border-white/5 bg-black">
          <div className="container mx-auto">
             <h2 className="text-[32px] md:text-[82px] font-light text-white mb-20 tracking-tighter leading-none px-4">
                Ready to <br /> Deploy your <br /> <span className="italic text-white/30">system</span>?
             </h2>
             <Link 
               href="/contact" 
               className="group/btn relative inline-flex items-center justify-between gap-10 bg-[#E6FF00] pl-10 pr-1 py-1 rounded-[4px] text-black text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:scale-[1.05]"
             >
               <span className="pl-2">Talk to Us</span>
               <div className="relative w-12 h-12 rounded-[4px] bg-black flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-20 group-hover/btn:bg-black text-white">
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

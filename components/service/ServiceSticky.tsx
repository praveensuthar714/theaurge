'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { motion } from 'framer-motion';

const diffData = [
  {
    title: "The Architecture.",
    desc: "We don't just design; we build systems. Every creative asset and line of code is engineered for institutional load and market dominance.",
    tagline: "TECHNICAL FIDELITY"
  },
  {
    title: "The Logic.",
    desc: "Market psychology is our north star. We eliminate friction points and maximize the 'trust-transference' through strategic visual storytelling.",
    tagline: "STRATEGIC INTENT"
  },
  {
    title: "The Impact.",
    desc: "We solve for ROI. Our ecosystem is built to turn attention into measurable institutional growth and authority.",
    tagline: "MARKET CAPTURE"
  }
];

export const ServiceSticky: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create sticky scroll triggers for each block if needed
    // Actually, we can just use naturally sticky container
    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 bg-black py-44 px-6 overflow-hidden">
      
      {/* Background Noise Texture (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

      <div className="container mx-auto max-w-7xl">
         
         <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left: Sticky Context */}
            <div className="lg:w-1/2 lg:sticky lg:top-[20vh] h-fit">
               <span className="subtitle-premium block mb-8 text-[#E6FF00]">The Aurge Difference / 04</span>
               <h2 className="h-lg !mb-8 leading-tight">Beyond Generic.</h2>
               <p className="body-text max-w-md opacity-40 leading-relaxed">
                 We represent the top 1% of digital execution. Our process is designed for those who require absolute precision and institutional fidelity.
               </p>
            </div>

            {/* Right: Scrolling Story Blocks */}
            <div className="lg:w-1/2 flex flex-col gap-32 lg:gap-64">
               {diffData.map((item, i) => (
                 <div key={i} className="flex flex-col gap-10 group">
                    <span className="text-[#E6FF00] font-mono text-[9px] uppercase tracking-[0.5em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">0{i+1} — {item.tagline}</span>
                    <h3 className="h-md !mb-0 text-[32px] md:text-[48px]">{item.title}</h3>
                    <div className="h-[1px] w-24 bg-white/20 mb-6 transition-all group-hover:w-full group-hover:bg-[#E6FF00]/40 duration-1000" />
                    <p className="body-text text-[18px] md:text-[22px] leading-relaxed opacity-50 group-hover:opacity-80 transition-opacity">
                      {item.desc}
                    </p>
                    {/* Visual Card Accessory */}
                    <div className="mt-12 w-full aspect-[16/6] bg-white/[0.02] border border-white/5 relative overflow-hidden group-hover:border-[#E6FF00]/20 transition-all duration-700">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E6FF00]/10 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
               ))}
            </div>

         </div>

      </div>
    </section>
  );
};

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { Target, AlertTriangle, ShieldX } from 'lucide-react';

interface ProblemSectionProps {
  title: string;
  desc: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ title, desc }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // GSAP Text Reveal with stagger
    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = words.map(w => `<span class="inline-block opacity-10 transition-colors duration-500 hover:text-[#E6FF00]">${w} </span>`).join('');
    
    const children = Array.from(textRef.current.children);
    
    gsap.to(children, {
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom 30%",
        scrub: 1,
      }
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section className="py-44 px-6 bg-[#050505] relative overflow-hidden flex items-center justify-center border-y border-white/5">
      
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[180px] md:text-[280px] font-black uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap">
        Diagnosis. ARCHITECTURE.
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-32 items-center">
         
         <div className="lg:w-1/2">
            <span className="subtitle-premium block mb-10 text-white/40">Market Insight / 01</span>
            <h2 ref={textRef} className="h-lg !mb-12 leading-tight">
               {title}
            </h2>
            <div className="w-16 h-1 bg-[#E6FF00] mb-12 shadow-[0_0_15px_rgba(230,255,0,0.5)]" />
            <p className="body-text text-[18px] md:text-[22px] max-w-xl leading-relaxed opacity-60">
              {desc}
            </p>
         </div>

         {/* Visual Graphic: Market Gap Block */}
         <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-10 bg-black/40 border border-white/5 backdrop-blur-2xl hover:border-[#E6FF00]/30 transition-all duration-700">
               <AlertTriangle className="w-8 h-8 text-[#E6FF00] mb-8" />
               <h4 className="text-white text-[14px] font-bold uppercase tracking-widest mb-4">The Complexity Friction</h4>
               <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">Inefficient legacy workflows drain institutional resources and market share.</p>
            </div>
            <div className="p-10 bg-black border border-white/5 hover:bg-white/[0.02] transition-colors duration-700 mt-0 md:mt-12">
               <ShieldX className="w-8 h-8 text-white/40 mb-8" />
               <h4 className="text-white text-[14px] font-bold uppercase tracking-widest mb-4">Brand Fragility</h4>
               <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">Generic presence results in immediate loss of perceived authority.</p>
            </div>
         </div>

      </div>
    </section>
  );
};

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { motion } from 'framer-motion';

interface ProcessStep {
  t: string;
  d: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Timeline Line Background Animation
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1.5,
        }
      }
    );

    // Fade in steps sequentially on scroll
    steps.forEach((_, i) => {
      gsap.fromTo(`#process-step-${i}`, 
        { 
          opacity: 0, 
          x: i % 2 === 0 ? -40 : 40 
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: `#process-step-${i}`,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, [steps]);

  return (
    <section ref={containerRef} className="py-64 px-6 bg-black relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-32">
          <span className="subtitle-premium block mb-8 text-[#E6FF00]">Strategic Workflow / 03</span>
          <h2 className="h-lg !mb-6 leading-tight">The Execution Protocol.</h2>
          <p className="body-text max-w-xl mx-auto opacity-50">Our proprietary framework ensures that intuition is backed by absolute technical precision.</p>
        </div>

        {/* Timeline Desktop Layout */}
        <div className="relative mt-24">
          
          {/* Central Connecting Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
          <div 
             ref={lineRef}
             className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#E6FF00] origin-top hidden md:block shadow-[0_0_15px_rgba(230,255,0,0.5)] z-10" 
          />

          <div className="flex flex-col gap-32">
            {steps.map((step, i) => (
              <div 
                 key={i} 
                 id={`process-step-${i}`}
                 className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 w-full relative z-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Context */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                  <span className="text-[#E6FF00] font-mono text-[10px] uppercase tracking-[0.6em] font-bold opacity-40">Phase 0{i+1}</span>
                  <h3 className="h-sm !mb-0 text-[24px] md:text-[32px]">{step.t}</h3>
                  <p className="body-text opacity-40 max-w-md mx-auto md:mx-0 leading-relaxed">
                    {step.d}
                  </p>
                </div>

                {/* Central Key Point (Circle Indicator) */}
                <div className="absolute left-[50%] -translate-x-1/2 hidden md:flex w-16 h-16 rounded-full bg-black border border-white/10 items-center justify-center group overflow-hidden">
                    <div className="w-3 h-3 rounded-full bg-[#E6FF00] shadow-[0_0_12px_rgba(230,255,0,0.8)]" />
                </div>

                {/* Placeholder / Secondary Info */}
                <div className="hidden md:flex w-1/2 items-center justify-center p-12">
                   <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

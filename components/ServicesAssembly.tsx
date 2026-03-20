'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { InteractiveServices } from './InteractiveServices';
import { WhatWeDoSection } from './WhatWeDoSection';

export const ServicesAssembly: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.assembly-card');
      
      // INITIAL STATE: Cards are at their FINAL positions, just hidden
      // This is the key fix — no y translation, so no cropping
      gsap.set(cards, {
        opacity: 0,
        scale: 0.92,
        filter: "blur(12px)",
        transformPerspective: 1200,
        transformOrigin: "center top"
      });

      // MASTER TIMELINE: Sequential Progressive Assembly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=280%", 
          pin: true,
          scrub: 1.2,
          anticipatePin: 1
        }
      });

      // Phase 1: Cards reveal ONE BY ONE — in place using scale + opacity + blur
      // Start with a subtle downward nudge that stays within the container
      cards.forEach((card, index) => {
        // Set each card's individual start position offset (subtle, within view)
        gsap.set(card, { y: 40 });

        tl.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power3.out"
        }, index * 1.1); // One by one, each starting after 1.1 timeline units
      });

      // Phase 2: Final lock hold
      tl.to({}, { duration: 0.8 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black w-full overflow-visible">
      
      {/* 4.1 THE ORIGIN STAGE: Services Diagram */}
      <div className="relative z-40">
        <InteractiveServices />
      </div>

      {/* 4.2 THE ASSEMBLY STAGE: What We Do (Pinned) */}
      <div 
        ref={triggerRef} 
        className="relative z-20 w-full"
      >
        <WhatWeDoSection isAssembly={true} />
      </div>

    </div>
  );
};

export default ServicesAssembly;

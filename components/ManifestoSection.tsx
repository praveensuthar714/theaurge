'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import MagicRings from './MagicRings';
import { PremiumButton } from '@/components/ui/PremiumButton';

const manifestoContent = [
  {
    title: "The Vision",
    text: "We believe in the power of cinematic storytelling to bridge the gap between imagination and reality.",
    highlight: "cinematic storytelling"
  },
  {
    title: "The Mission",
    text: "Our mission is to help brands traverse the digital landscape with intentionality and impact.",
    highlight: "intentionality and impact"
  }
];

export const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.manifesto-block');
      
      // Ensure logo is centered and visible IMMEDIATELY with ZERO blur
      gsap.set(logoRef.current, { 
        scale: 2.2, 
        y: "32vh", 
        opacity: 1, 
        filter: "none",
        xPercent: 0,
        yPercent: -50
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          onLeave: () => {
            // Ensure no lingering styles on exit
            gsap.set(stickyRef.current, { clearProps: "all" });
          },
          invalidateOnRefresh: true,
        }
      });

      // 1. ICON MORPH: Large/Center to Small/Top (ALWAYS SHARP)
      tl.to(logoRef.current,
        { 
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }
      );

      // 2. TEXT BLOCKS ADDITIVE REVEAL
      blocks.forEach((block, i) => {
        tl.fromTo(block, 
          { autoAlpha: 0, filter: "blur(15px)", y: 20 },
          { autoAlpha: 1, filter: "blur(0px)", y: 0, duration: 1 },
          ">-0.8" 
        );
      });

      // Background Visibility
      gsap.fromTo(bgRef.current,
        { opacity: 0 },
        { 
          opacity: 0.5, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top top",
            scrub: true
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-black min-h-[140vh] w-full">
      <section 
        ref={stickyRef} 
        className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      >
        {/* ── BACKGROUND ── */}
        <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none bg-transparent flex items-center justify-center opacity-0">
          <MagicRings
            color="#E6FF00"
            colorTwo="#ffffff"
            ringCount={12}
            speed={0.4}
            attenuation={12}
            lineThickness={1.5}
            baseRadius={0.7}
            radiusStep={0.12}
            opacity={0.4}
            blur={2}
            rotation={0}
            followMouse={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,black_100%)] opacity-80" />
        </div>

        {/* ── MANIFESTO CONTENT ── */}
        <div className="w-full max-w-2xl relative z-10 flex flex-col items-center justify-center px-8 sm:px-12 pt-20">
          
          {/* Logo (Morphing Center -> Top) */}
          <div ref={logoRef} className="mb-8 relative z-20 will-change-transform" style={{ opacity: 1, filter: 'none' }}>
            <Image 
              src="/favicon.png" 
              alt="theAurge logo" 
              width={64}
              height={64}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain brightness-125" 
            />
          </div>

          {/* ADDITIVE BLOCKS - Refined Gaps & Platinum Effect */}
          <div className="flex flex-col gap-4 md:gap-6 items-center justify-center w-full">
             {manifestoContent.map((item, idx) => {
               const parts = item.text.split(item.highlight);
               return (
                 <div 
                   key={idx} 
                   className="manifesto-block text-center"
                   style={{ opacity: 0, visibility: 'hidden' }}
                 >
                   <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-2 h-[1px] bg-white/10" />
                      <span className="subtitle-premium !mb-0">
                        {item.title}
                      </span>
                      <div className="w-2 h-[1px] bg-white/10" />
                   </div>
                   <h2 className="heading-platinum !pb-0 text-[18px] sm:text-[22px] md:text-[26px] tracking-tight leading-[1.3] text-white/20">
                     {parts[0]}
                     <span className="bg-gradient-to-b from-white via-white/90 to-stone-400 bg-clip-text text-transparent relative inline-block mx-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {item.highlight}
                     </span>
                     {parts[1]}
                   </h2>
                 </div>
               );
             })}
          </div>

          {/* Persistent Bottom CTA - Tightened Margin */}
          <div className="manifesto-block mt-10" style={{ opacity: 0, visibility: 'hidden' }}>
            <PremiumButton href="#contact">
              Get in Touch
            </PremiumButton>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ManifestoSection;

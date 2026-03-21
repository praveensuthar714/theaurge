'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';

const brandsCol1 = [
  { name: 'Apple', domain: 'apple.com' },
  { name: 'Google', domain: 'google.com' },
  { name: 'Nike', domain: 'nike.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Amazon', domain: 'amazon.com' },
];

const brandsCol2 = [
  { name: 'Adobe', domain: 'adobe.com' },
  { name: 'Disney', domain: 'disney.com' },
  { name: 'Tesla', domain: 'tesla.com' },
  { name: 'Netflix', domain: 'netflix.com' },
  { name: 'Meta', domain: 'meta.com' },
];

const brandsCol3 = [
  { name: 'Figma', domain: 'figma.com' },
  { name: 'Playstation', domain: 'playstation.com' },
  { name: 'Spotify', domain: 'spotify.com' },
  { name: 'Slack', domain: 'slack.com' },
  { name: 'Notion', domain: 'notion.so' },
];

const LogoCard = ({ brand }: { brand: { name: string, domain: string } }) => {
  return (
    <div className="brand-card group relative w-full mb-5">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] bg-black border border-white/5 flex items-center justify-center transition-all duration-700 group-hover:border-white/10 group-hover:bg-[#111]">
        
        {/* Absolute Depth */}
        <div className="absolute inset-0 bg-black opacity-100" />

        {/* Logo */}
        <img 
          src={`https://logo.clearbit.com/${brand.domain}`} 
          alt={brand.name}
          className="w-7 md:w-9 h-auto object-contain opacity-30 grayscale invert transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.05]"
          onError={(e) => {
             if (!e.currentTarget.src.includes('unavatar')) {
               e.currentTarget.src = `https://unavatar.io/${brand.domain}`;
             } else {
               e.currentTarget.style.opacity = '0';
             }
          }}
        />
      </div>
    </div>
  );
};

const ScrollingColumn = ({ brands, direction }: { brands: typeof brandsCol1, direction: 'up' | 'down' }) => {
  const colRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!colRef.current) return;

    const fullHeight = colRef.current.offsetHeight / 2;
    // Rock-solid smooth duration
    const duration = 24; 

    const tl = gsap.timeline({ 
      repeat: -1, 
      defaults: { ease: "none" }
    });

    if (direction === 'up') {
      tl.to(colRef.current, {
        y: -fullHeight,
        duration: duration,
      });
    } else {
      tl.fromTo(colRef.current, 
        { y: -fullHeight },
        { y: 0, duration: duration }
      );
    }

    // Ensure the timeline starts with a consistent, smooth scale
    tl.timeScale(0.85);

    return () => { tl.kill(); };
  }, [direction]);

  return (
    <div className="relative h-full overflow-hidden">
      <div ref={colRef} className="flex flex-col">
        {[...brands, ...brands].map((brand, i) => (
          <LogoCard key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export const TrustedBrands: React.FC = () => {
  return (
    <section className="relative z-10 bg-black overflow-hidden py-12">
      
      {/* ── ATMOSPHERE: PURE BLACK BLANKET ── */}
      <div className="absolute inset-0 pointer-events-none bg-black" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── TYPOGRAPHY ── */}
          <div className="lg:w-[40%] text-left">
            <span className="subtitle-premium !mb-4">
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-medium leading-[1.1] tracking-[-0.02em] mb-7 bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent block max-w-sm">
              Trusted by leading brands & creative partners.
            </h2>
            <p className="text-white/70 text-[14px] sm:text-[15px] max-w-sm mb-8 leading-relaxed block">
              We collaborate with global technology leaders to engineer cinematic digital experiences.
            </p>

            {/* ── INNER PAGE CTAs ── */}
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="group relative flex items-center justify-between gap-5 bg-[#E6FF00] pl-5 pr-1 py-1 rounded-[4px] text-[#000] text-[10px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-[1.04]">
                <span className="pl-1">Our Services</span>
                <div className="w-8 h-8 rounded-[4px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:w-10 group-hover:bg-black text-[#000] group-hover:text-white">
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-4 opacity-0 absolute transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  <ArrowRight className="w-3.5 h-3.5 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover:translate-x-4 group-hover:opacity-0" />
                </div>
              </Link>
              <Link href="/work" className="group flex items-center gap-3 px-5 py-[9px] rounded-[4px] border border-white/10 text-white/50 hover:text-white hover:border-white/30 text-[10px] font-bold tracking-widest uppercase transition-all duration-500">
                <span>See Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link href="/studio" className="group flex items-center gap-3 px-5 py-[9px] rounded-[4px] border border-white/10 text-white/50 hover:text-white hover:border-white/30 text-[10px] font-bold tracking-widest uppercase transition-all duration-500">
                <span>The Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="w-12 h-[1px] bg-white/10 mt-10" />
          </div>

          {/* ── LOGO SHOWCASE: VELOCITY LOOPER ── */}
          <div className="lg:w-[60%] w-full h-[500px] relative overflow-hidden">
            
            {/* Edge-to-Edge Gradient Masks: Restore atmospheric cutoff */}
            <div className="absolute inset-x-0 -top-1 h-32 bg-gradient-to-b from-black via-black to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-t from-black via-black to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-3 gap-4 md:gap-5 h-full px-4">
              <ScrollingColumn brands={brandsCol1} direction="up" />
              <ScrollingColumn brands={brandsCol2} direction="down" />
              <ScrollingColumn brands={brandsCol3} direction="up" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;

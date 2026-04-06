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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const configMap: Record<number, { scale: number, invert: boolean }> = {
    1: { scale: 1.2, invert: false },
    2: { scale: 1.3, invert: false }, // Mauli Trucking
    3: { scale: 1.0, invert: false },
    4: { scale: 1.4, invert: false }, // Nourishing Farms
    5: { scale: 1.0, invert: false },
    6: { scale: 1.5, invert: false }, // Nexus
    7: { scale: 1.2, invert: false },
    8: { scale: 1.3, invert: false }, // Heera Panna
    9: { scale: 1.0, invert: false },
    10: { scale: 1.2, invert: false },
    11: { scale: 1.2, invert: false },
    12: { scale: 1.2, invert: false },
    13: { scale: 1.6, invert: false }, // Eagle Book
    14: { scale: 1.0, invert: false },
    15: { scale: 1.3, invert: false }, // Brixton
    17: { scale: 1.2, invert: false },
    20: { scale: 1.1, invert: false },
    21: { scale: 1.0, invert: false },
  };

  const validBrandIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 20, 21];

  const allBrands = validBrandIds.map(id => {
    const conf = configMap[id] || { scale: 1.0, invert: false };
    return { 
      src: `/clientlogos/${id}.png`, 
      name: `Brand ${id}`,
      scale: conf.scale,
      filter: '',
      blend: '' // Removed mix-blend-screen
    };
  });

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Smooth infinite scroll
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;
    
    const tl = gsap.to(marquee, {
      x: -totalWidth,
      duration: 35,
      ease: "none",
      repeat: -1
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-0 relative z-10 bg-black">
      <div className="section-container text-center mb-20">
        <span className="subtitle-premium">
          RECOGNITION
        </span>
        <h2 className="h-lg mb-6">
          Trusted by Global Leaders
        </h2>
        <p className="body-text max-w-xl mx-auto">
          We collaborate with technology leaders and creative agencies to engineer cinematic brand experiences.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        {/* Fading Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll-marquee 40s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="flex w-fit whitespace-nowrap items-center gap-20 md:gap-24 animate-infinite-scroll will-change-transform pr-20 md:pr-24">
          {[...allBrands, ...allBrands].map((brand, i) => (
            <div 
              key={`${brand.name}-${i}`}
              className={`px-6 md:px-10 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-300 ${brand.blend}`}
            >
              <div style={{ transform: `scale(${brand.scale})` }} className="flex items-center justify-center">
                <img 
                  src={brand.src} 
                  alt={brand.name}
                  className={`w-auto h-auto max-h-[75px] max-w-[130px] md:max-h-[95px] md:max-w-[170px] object-contain transform-gpu`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;


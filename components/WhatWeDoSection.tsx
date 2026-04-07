'use client';

import React, { useRef, useCallback, useEffect } from 'react';
import { Target, Palette, Cpu, Zap, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PremiumBackground from './PremiumBackground';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BorderGlow.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const capabilities: Capability[] = [
  {
    title: "Intelligence",
    description: "Auditing your brand's DNA to identify gaps and tactical opportunities",
    icon: Target,
    image: "/scene1.png",
  },
  {
    title: "Engineering",
    description: "Architecting a synchronized blueprint of cinematic and technical systems",
    icon: Palette,
    image: "/scene2.png",
  },
  {
    title: "Assembly",
    description: "Executing high-fidelity production with surgical across-the-board precision",
    icon: Cpu,
    image: "/scene3.png",
  },
  {
    title: "Dominance",
    description: "Tactical deployment and aggressive scaling to capture the global market",
    icon: Zap,
    image: "/scene4.png",
  }
];

// Gradient palette adapted to Aurge brand: lime-yellow tones
const GLOW_VARS: Record<string, string> = {
  '--glow-color':    'hsl(65deg 100% 50% / 100%)',
  '--glow-color-60': 'hsl(65deg 100% 50% / 60%)',
  '--glow-color-50': 'hsl(65deg 100% 50% / 50%)',
  '--glow-color-40': 'hsl(65deg 100% 50% / 40%)',
  '--glow-color-30': 'hsl(65deg 100% 50% / 30%)',
  '--glow-color-20': 'hsl(65deg 100% 50% / 20%)',
  '--glow-color-10': 'hsl(65deg 100% 50% / 10%)',
  '--gradient-one':   'radial-gradient(at 80% 55%, #E6FF00 0px, transparent 50%)',
  '--gradient-two':   'radial-gradient(at 69% 34%, #ffffff 0px, transparent 50%)',
  '--gradient-three': 'radial-gradient(at 8%  6%,  #c8f700 0px, transparent 50%)',
  '--gradient-four':  'radial-gradient(at 41% 38%, #E6FF00 0px, transparent 50%)',
  '--gradient-five':  'radial-gradient(at 86% 85%, #ffffff 0px, transparent 50%)',
  '--gradient-six':   'radial-gradient(at 82% 18%, #f0ff60 0px, transparent 50%)',
  '--gradient-seven': 'radial-gradient(at 51% 4%,  #E6FF00 0px, transparent 50%)',
  '--gradient-base':  'linear-gradient(#E6FF00 0 100%)',
};

interface GlowCardProps {
  item: Capability;
}

const GlowCard: React.FC<GlowCardProps> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const { width, height } = el.getBoundingClientRect();
    const cx = width / 2;
    const cy = height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
    const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, []);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const { width, height } = el.getBoundingClientRect();
    const cx = width / 2;
    const cy = height / 2;
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);
    card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
  }, [getEdgeProximity, getCursorAngle]);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className="assembly-card border-glow-card group relative aspect-square rounded-none overflow-hidden bg-secondary transition-all duration-700 active:scale-[0.98] cursor-pointer"
      style={{
        border: `1.5px solid rgba(230, 255, 0, 0.15)`,
        ...GLOW_VARS
      } as React.CSSProperties}
    >
      {/* Edge Light Span (Required for outer glow) */}
      <span className="edge-light" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
      </div>

      {/* Icon */}
      <div className="absolute top-8 left-8 z-50">
        <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center bg-black/60 backdrop-blur-3xl transition-all duration-700 group-hover:border-accent/40 group-hover:bg-black">
          <item.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-all duration-700" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-8 left-8 z-50 flex flex-col gap-2 pr-10">
        <h3 className="heading-platinum !pb-0 !mb-0 text-[19px] md:text-[22px] tracking-tight">
          {item.title}
        </h3>
        <p className="text-white/30 text-[13px] font-light leading-snug group-hover:text-white/70 transition-colors h-[40px]">
          {item.description}
        </p>
      </div>

      {/* Cinematic Reflection Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
  );
};

interface WhatWeDoProps {
  isAssembly?: boolean;
}

export const WhatWeDoSection: React.FC<WhatWeDoProps> = ({ isAssembly = false }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reveal header and body sequentially
      gsap.fromTo(
        ['.wwd-content', '.assembly-card'],
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
          filter: "blur(4px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // Standard reveal position
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pb-24 pt-20 overflow-hidden z-30 transition-all duration-1000"
    >
      {/* Fade-in from transparent so the Services diagram above stays visible */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />
      <div className="absolute inset-x-0 top-48 bottom-0 bg-black pointer-events-none z-0" />

      {/* Premium Ambient Background */}
      <PremiumBackground className="z-[1]" />

      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.012] rounded-full blur-[200px] pointer-events-none translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        <div className="text-center mb-12">
          <span className="wwd-content subtitle-premium block mb-4" style={{ opacity: 0 }}>The Workflow</span>

          <h2 className="wwd-content h-lg mb-6" style={{ opacity: 0 }}>
            Our Blueprint<span className="text-accent">.</span>
          </h2>

          <div className="wwd-content flex flex-col items-center gap-1" style={{ opacity: 0 }}>
            <p className="body-text !text-white/35 text-[14px]">
              A precise, high-fidelity methodology engineered to take your brand from
            </p>
            <p className="text-white text-[15px] md:text-[16px] font-semibold tracking-[0.08em] uppercase">
              Vision to Reality<span className="text-accent">.</span>
            </p>
          </div>
        </div>

        <div className="wwd-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5" style={{ opacity: 0 }}>
          {capabilities.map((item, index) => (
            <GlowCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Removed Subtle Bottom Separation Line as requested */}
    </section>
  );
};

export default WhatWeDoSection;

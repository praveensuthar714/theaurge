'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';

const projects = [
  {
    id: 1,
    title: 'Lumina Noir',
    category: 'Creative Production',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    href: '/work/1',
  },
  {
    id: 2,
    title: 'Aether Flow',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop',
    href: '/work/2',
  },
  {
    id: 3,
    title: 'Summit Peaks',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    href: '/work/3',
  },
  {
    id: 4,
    title: 'Neon Pulse',
    category: 'Creative Production',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    href: '/work/4',
  },
];

export const PortfolioGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Dynamically measure track width to perfectly fit all screens
      const track = trackRef.current!;
      const scrollDist = track.scrollWidth - window.innerWidth + 120; // 120px extra padding

      gsap.to(track, {
        x: -scrollDist,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDist}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Simple reveal for cards
      const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card');
      gsap.fromTo(
        cards,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black w-full flex flex-col pt-20 md:pt-28 pb-8 overflow-hidden"
      style={{ height: '100svh' }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E6FF00]/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* ── HEADER ZONE (STATIC, NO OVERLAPPING) ── */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 shrink-0">
        <div className="max-w-xl">
          <span className="subtitle-premium block mb-4 md:mb-5 text-left text-[9px] md:text-[10px]">Selected Archive</span>
          <h2 className="text-[36px] md:text-[52px] font-medium leading-[1.0] tracking-[-0.03em] text-white">
            The Work<span className="text-[#E6FF00]">.</span>
          </h2>
        </div>

        <Link
          href="/work"
          className="group relative flex items-center gap-5 bg-[#E6FF00] pl-6 pr-1 py-1 rounded-[4px] text-black text-[12px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-[1.04] mt-8 md:mt-0"
        >
          <span className="pl-1 text-[10px] md:text-[11px]">View All Work</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-[4px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:w-10 group-hover:md:w-12 group-hover:bg-black text-black group-hover:text-white">
            <ArrowRight className="w-4 h-4 -translate-x-5 opacity-0 absolute transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            <ArrowRight className="w-4 h-4 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover:translate-x-5 group-hover:opacity-0" />
          </div>
        </Link>
      </div>

      {/* ── CARDS TRACK ZONE (Fills remaining height) ── */}
      <div className="relative z-10 flex-1 flex items-center mt-2 md:mt-4">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-10 px-6 md:px-[calc((100vw-min(100vw,1400px))/2+3rem)]"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={project.href}
              className="portfolio-card group block shrink-0 cursor-pointer transition-transform duration-500 hover:-translate-y-2"
              style={{ width: 'clamp(240px, 26vw, 360px)' }}
            >
               {/* Premium Square Card Design */}
               <div className="relative aspect-square bg-neutral-900 overflow-hidden rounded-[2px] border border-white/5 transition-all duration-700 hover:border-white/20">
                  <img 
                    src={project.image} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.03]" 
                    alt={project.title} 
                  />
                  {/* Top-down gradient for text readability */}
                  <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  
                  {/* Huge Centered Watermark Index */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
                    <span className="font-mono text-[120px] md:text-[180px] font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-700 translate-y-2 group-hover:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Inside-Card Content (Title, Category, Arrow) AT THE TOP */}
                  <div className="absolute inset-x-0 top-0 p-5 md:p-6 z-20 flex justify-between items-start -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="pr-4">
                      <p className="text-[#E6FF00] text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-2 md:mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                        {project.category}
                      </p>
                      <h3 className="text-[20px] md:text-[24px] font-medium text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    {/* Top-Right Corner CTA button */}
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:bg-[#E6FF00] group-hover:border-transparent group-hover:text-black transition-all duration-500 shrink-0 shadow-lg mt-1">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-black transition-colors duration-500" />
                    </div>
                  </div>
                </div>
            </Link>
          ))}

          {/* ── END CTA CARD ── */}
          <div
            className="portfolio-card shrink-0 relative flex flex-col justify-center items-center aspect-square"
            style={{ width: 'clamp(240px, 26vw, 360px)' }}
          >
            <div className="w-full h-full rounded-[2px] border border-white/5 flex flex-col items-center justify-center gap-5 bg-white/[0.01] px-8 text-center relative overflow-hidden group hover:border-[#E6FF00]/20 transition-all duration-700">
              
              {/* Subtle hover glow ring inside final card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(230,255,0,0.06) 0%, transparent 60%)' }} 
              />

              <span className="subtitle-premium block mb-3 md:mb-4 mx-auto text-[9px] md:text-[10px]">Next Steps</span>
              <h3 className="text-[24px] md:text-[32px] font-medium text-white mb-6 md:mb-8">Ready to start?</h3>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-5 bg-[#E6FF00] pl-6 pr-1 py-1 rounded-[4px] text-black text-[11px] md:text-[12px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-[1.04]"
              >
                <span className="pl-1">Start a Project</span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-[4px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:w-10 group-hover:md:w-12 group-hover:bg-black text-black group-hover:text-white">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 -translate-x-5 opacity-0 absolute transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover:translate-x-5 group-hover:opacity-0" />
                </div>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;

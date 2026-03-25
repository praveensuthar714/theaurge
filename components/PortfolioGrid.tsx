'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { PremiumButton } from '@/components/ui/PremiumButton';

const workCategories = [
  { 
    id: 'creative', 
    name: 'Creative Production', 
    label: '01',
    description: 'Cinematic visual storytelling and high-fidelity production.',
    projects: [
      { id: 1, title: 'Lumina Noir', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', href: '/work/1' },
      { id: 4, title: 'Neon Pulse', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop', href: '/work/4' },
    ]
  },
  { 
    id: 'branding', 
    name: 'Brand Identity', 
    label: '02',
    description: 'Architecting visual DNA and strategy-led brand systems.',
    projects: [
      { id: 2, title: 'Aether Flow', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop', href: '/work/2' },
      { id: 5, title: 'Veritas', image: 'https://images.unsplash.com/photo-1634942537034-22161ce40875?q=80&w=2069&auto=format&fit=crop', href: '/work/5' },
    ]
  },
  { 
    id: 'digital', 
    name: 'Digital Products', 
    label: '03',
    description: 'High-performance interactive experiences and digital ecosystems.',
    projects: [
      { id: 6, title: 'Quantum UI', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop', href: '/work/6' },
      { id: 7, title: 'Shift Ecosystem', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', href: '/work/7' },
    ]
  },
  { 
    id: 'marketing', 
    name: 'Growth & Strategy', 
    label: '04',
    description: 'Data-driven performance and exponential market positioning.',
    projects: [
      { id: 3, title: 'Summit Peaks', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop', href: '/work/3' },
      { id: 8, title: 'Dominion AI', image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c7190?q=80&w=2070&auto=format&fit=crop', href: '/work/8' },
    ]
  }
];

export const PortfolioGrid: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(workCategories[0].id);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      workCategories.forEach((cat) => {
        ScrollTrigger.create({
          trigger: `#cat-section-${cat.id}`,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) setActiveTab(cat.id);
          }
        });

        // Animation for cards
        gsap.fromTo(`.card-${cat.id}`, 
          { opacity: 0, y: 30 },
          {
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `#cat-section-${cat.id}`,
              start: "top 85%",
            }
          }
        );
      });
      // Global refresh after setup
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(`cat-section-${id}`);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="section-v-spacing bg-black overflow-visible">
      <div className="section-container">
        
        {/* Unified Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT COLUMN: STICKY NAVIGATION */}
          <div className="lg:col-span-4 lg:block">
            <div className="sticky top-[140px] space-y-12">
              <div className="max-w-xs">
                <span className="subtitle-premium block mb-4 md:mb-5 text-left text-[9px] md:text-[10px]">Selected Archive</span>
                <h2 className="h-lg">
                  The Work<span className="text-accent">.</span>
                </h2>
                <p className="body-text mb-8 mt-6">
                  Explore our curated portfolio of high-performing architectural solutions.
                </p>
                <PremiumButton href="/work">
                  View All Work
                </PremiumButton>
              </div>

              {/* Interactive Tabs — HIGH-PRECISION LEGEND */}
              <div className="relative pt-4 overflow-visible">
                {/* Vertical Rail */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                
                {/* Kinetic Actuator Bar */}
                <motion.div 
                   className="absolute left-[-1px] w-[3px] bg-accent h-4 rounded-full z-10"
                   animate={{ 
                     y: workCategories.findIndex(c => c.id === activeTab) * 36 + 20 
                   }}
                   transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />

                <nav className="flex flex-col gap-4">
                  {workCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className="group relative text-left py-1 focus:outline-none pl-6"
                    >
                      <span className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.18em] transition-all duration-700 ${activeTab === cat.id ? 'text-white translate-x-1' : 'text-white/10 group-hover:text-white/30 group-hover:translate-x-1'}`}>
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLLING WORK GRID */}
          <div className="lg:col-span-8 flex flex-col gap-32">
            {workCategories.map((cat) => (
              <div key={cat.id} id={`cat-section-${cat.id}`} className="flex flex-col gap-12 pt-10">
                {/* Category Header (For Mobile/Tablet Visibility too) */}
                <div className="lg:hidden">
                   <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-3 block">{cat.label} / {cat.name}</span>
                   <p className="body-text !text-white/40">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {cat.projects.map((project, pidx) => (
                    <Link 
                      key={project.id}
                      href={project.href}
                      className={`card-${cat.id} group relative overflow-hidden aspect-[4/5] rounded-none bg-neutral-900 border border-white/5 transition-all duration-700 hover:border-accent/30`}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s] group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent">
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-1 block opacity-60">Featured</span>
                            <h3 className="h-sm">{project.title}</h3>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-transparent group-hover:text-black transition-all">
                             <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Final CTA in the scroll path */}
            <div className="pt-20 border-t border-white/5">
               <div className="max-w-md">
                 <h3 className="h-md mb-6">Your vision, <br /> properly engineered.</h3>
                 <PremiumButton href="/contact">
                  Inquire Now
                 </PremiumButton>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;

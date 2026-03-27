'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { PremiumButton } from '@/components/ui/PremiumButton';

import { formatCloudinaryTitle } from '@/lib/cloudinary';

const workCategories = [
  { 
    id: 'creative', 
    name: 'Creative Production', 
    label: '01',
    description: 'Cinematic visual storytelling and high-fidelity production.',
    projects: []
  },
  { 
    id: 'branding', 
    name: 'Brand Identity', 
    label: '02',
    description: 'Architecting visual DNA and strategy-led brand systems.',
    projects: []
  },
  { 
    id: 'digital', 
    name: 'Digital Products', 
    label: '03',
    description: 'High-performance interactive experiences and digital ecosystems.',
    projects: []
  },
  { 
    id: 'marketing', 
    name: 'Growth & Strategy', 
    label: '04',
    description: 'Data-driven performance and exponential market positioning.',
    projects: []
  }
];

export const PortfolioGrid: React.FC<{ assets?: any[] }> = ({ assets = [] }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(workCategories[0].id);
  const [lightbox, setLightbox] = useState<any | null>(null);

  // Group fetched dynamic assets roughly evenly across the existing UI categories
  const categoriesWithAssets = workCategories.map((cat, index) => {
    if (!assets || assets.length === 0) return { ...cat, projects: [] };
    
    const itemsPerCategory = Math.ceil(assets.length / workCategories.length);
    const catAssets = assets.slice(index * itemsPerCategory, (index + 1) * itemsPerCategory);
    
    return {
      ...cat,
      projects: catAssets.map((asset, i) => {
        let optimizedUrl = asset.secure_url;
        let posterUrl = undefined;
        
        if (optimizedUrl.includes('/upload/')) {
          optimizedUrl = optimizedUrl.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/');
          if (asset.resource_type === 'video') {
             optimizedUrl = optimizedUrl.replace(/\.[^/.]+$/, ".mp4");
             posterUrl = optimizedUrl.replace(/\.mp4$/, ".jpg");
          }
        }

        return {
          id: asset.public_id,
          title: formatCloudinaryTitle(asset.public_id, index * itemsPerCategory + i),
          image: optimizedUrl,
          poster: posterUrl,
          type: asset.resource_type,
          href: '#'
        };
      })
    };
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      categoriesWithAssets.forEach((cat) => {
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
  }, [categoriesWithAssets]);

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
                     y: categoriesWithAssets.findIndex(c => c.id === activeTab) * 36 + 20 
                   }}
                   transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />

                <nav className="flex flex-col gap-4">
                  {categoriesWithAssets.map((cat) => (
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
            {!assets || assets.length === 0 ? (
              <div className="pt-10">
                <div className="flex flex-col items-center justify-center p-20 border border-white/5 bg-white/[0.02] rounded-2xl w-full">
                  <p className="text-white/40 tracking-widest text-[11px] uppercase font-bold">No portfolio items found</p>
                  <p className="text-white/20 text-xs mt-3">Upload media to your Cloudinary `portfolio/` folder.</p>
                </div>
              </div>
            ) : (
              categoriesWithAssets.map((cat) => (
                <div key={cat.id} id={`cat-section-${cat.id}`} className="flex flex-col gap-12 pt-10">
                  {/* Category Header (For Mobile/Tablet Visibility too) */}
                  <div className="lg:hidden">
                     <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-3 block">{cat.label} / {cat.name}</span>
                     <p className="body-text !text-white/40">{cat.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {cat.projects.map((project, pidx) => (
                      <div 
                        key={project.id}
                        onClick={() => setLightbox(project)}
                        className={`card-${cat.id} group relative overflow-hidden aspect-[4/5] rounded-none bg-neutral-900 border border-white/5 transition-all duration-700 hover:border-accent/30 cursor-pointer`}
                      >
                        {project.type === 'video' ? (
                          <video
                            src={project.image}
                            poster={project.poster}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s] group-hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s] group-hover:scale-110"
                          />
                        )}
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
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

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
{/* LIGHTBOX OVERLAY */}
      <motion.div>
        {lightbox && (
          <div 
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-accent z-[10000] p-4 font-bold tracking-widest uppercase text-xs"
            >
              [ Close ]
            </button>
            <div 
              className="relative w-full max-w-7xl max-h-[85vh] aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video src={lightbox.image} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={lightbox.image} className="w-full h-full object-contain" alt="" />
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;

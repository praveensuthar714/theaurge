'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, Maximize2, X } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { formatCloudinaryTitle } from '@/lib/cloudinary';

interface Project {
  id: string;
  title: string;
  image: string;
  poster?: string;
  type: string;
  category: string;
}

const workCategories = [
  { id: 'videos', name: 'Videos' },
  { id: 'creatives', name: 'Creatives & Designs' },
  { id: 'websites', name: 'Websites' },
  { id: 'seo', name: 'SEO' },
  { id: 'branding', name: 'Brand Identity' },
  { id: 'ppc', name: 'PPC' },
];

export const PortfolioCarousel: React.FC<{ assets?: any[] }> = ({ assets = [] }) => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<Project | null>(null);

  // Group assets into the new categories (5 each)
  const categorizedProjects: Project[] = [];
  
  if (assets && assets.length > 0) {
    workCategories.forEach((cat, catIdx) => {
      // Find assets for this category or just slice them if we don't have enough meta
      // For now, we slice them proportionally
      const itemsPerCategory = 5;
      const startIdx = catIdx * itemsPerCategory;
      const catAssets = assets.slice(startIdx, startIdx + itemsPerCategory);

      catAssets.forEach((asset, i) => {
        let optimizedUrl = asset.secure_url;
        let posterUrl = undefined;
        
        if (optimizedUrl.includes('/upload/')) {
          optimizedUrl = optimizedUrl.replace('/upload/', '/upload/q_auto,f_auto,w_1000,c_limit/');
          if (asset.resource_type === 'video') {
             optimizedUrl = optimizedUrl.replace(/\.[^/.]+$/, ".mp4");
             posterUrl = optimizedUrl.replace(/\.mp4$/, ".jpg");
          }
        }

        categorizedProjects.push({
          id: asset.public_id,
          title: formatCloudinaryTitle(asset.public_id, startIdx + i),
          image: optimizedUrl,
          poster: posterUrl,
          type: asset.resource_type,
          category: cat.name
        });
      });
    });
  }

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current || categorizedProjects.length === 0) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      const totalMove = scrollWidth - viewportWidth;

      gsap.to(scrollRef.current, {
        x: -totalMove,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalMove * 1.5}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      // Character reveal for titles
      gsap.utils.toArray<HTMLElement>('.category-title').forEach((title) => {
        gsap.from(title, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: title,
            containerAnimation: gsap.getById('portfolio-scroll'), // if we used an ID
            start: "left 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [categorizedProjects]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-black py-0"
    >
      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* HEADER OVERLAY */}
      <div className="absolute top-20 left-12 z-20 pointer-events-none">
        <span className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block opacity-60">ARCHITECTURAL ARCHIVE</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-none">
          The Portfolio<span className="text-accent">.</span>
        </h2>
      </div>

      {/* HORIZONTAL SCROLL TRACK */}
      <div 
        ref={scrollRef}
        className="flex items-center h-screen px-12 md:px-24 gap-32"
        style={{ width: 'fit-content' }}
      >
        {workCategories.map((cat, catIdx) => {
          const catProjects = categorizedProjects.filter(p => p.category === cat.name);
          if (catProjects.length === 0) return null;

          return (
            <div key={cat.id} className="flex items-center gap-16 min-w-fit">
              {/* CATEGORY HEADER */}
              <div className="flex flex-col gap-4 min-w-[300px]">
                <span className="text-white/20 font-mono text-[14px] uppercase tracking-widest">Category {catIdx + 1}</span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white whitespace-nowrap uppercase">
                  {cat.name}
                </h3>
                <div className="h-px w-24 bg-accent/40 mt-2" />
              </div>

              {/* PROJECT CARDS */}
              <div className="flex gap-8 items-center">
                {catProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.02, y: -10 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="relative w-[340px] md:w-[420px] aspect-[16/10] bg-[#0A0A0A] border border-white/5 overflow-hidden group cursor-pointer"
                    onClick={() => setLightbox(project)}
                  >
                    {project.type === 'video' ? (
                      <div className="absolute inset-0">
                         <video
                           src={project.image}
                           poster={project.poster}
                           className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                           autoPlay
                           muted
                           loop
                           playsInline
                         />
                         <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-3 h-3 text-white fill-white" />
                         </div>
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      />
                    )}
                    
                    {/* FULL COLOR OVERLAY WITH CLEAN GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    {/* PROJECT DETAILS */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                      <span className="text-[9px] font-bold tracking-[0.3em] text-accent uppercase mb-2 block opacity-80">Featured Project</span>
                      <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-500">
                        {project.title}
                      </h4>
                    </div>

                    {/* INTERACTIVE GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {/* FINAL CTA PANEL */}
        <div className="min-w-[500px] flex flex-col justify-center gap-8 pl-12 pr-48">
           <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/10 italic">
             Architecting <br /> the next <br /> frontier.
           </h3>
           <motion.div whileHover={{ x: 10 }}>
            <Link 
              href="/contact"
              className="flex items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-transparent transition-all duration-500">
                <ArrowRight className="w-8 h-8 text-white group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em]">START A PROJECT</span>
                <span className="text-white text-2xl font-medium tracking-tight">Inquire Now <span className="text-white/20">→</span></span>
              </div>
            </Link>
           </motion.div>
        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-[10000]"
              onClick={() => setLightbox(null)}
            >
              <X className="w-10 h-10" strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video bg-black rounded-sm overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)]"
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video src={lightbox.image} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={lightbox.image} className="w-full h-full object-contain" alt="" />
              )}
              
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
                 <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 block">{lightbox.category}</span>
                 <h2 className="text-3xl font-bold text-white tracking-tighter">{lightbox.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioCarousel;

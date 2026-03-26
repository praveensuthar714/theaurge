'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Video, Camera, MousePointer2, Sparkles, Monitor } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const topCategories = ['All Services', 'Videos', 'Websites', 'Social Media', 'SEO'];
const industryCategories = ['All Industries', 'Corporate', 'Real Estate', 'Education', 'E-commerce', 'Healthcare', 'Automotive'];

export default function WorkClient({ portfolioAssets }: { portfolioAssets: any[] }) {
  const [activeTop, setActiveTop] = useState('All Services');
  const [activeSub, setActiveSub] = useState('All Industries');
  const [lightbox, setLightbox] = useState<any | null>(null);

  // Convert raw Cloudinary data into structured projects matching the UI requirements
  const dynamicProjects = (portfolioAssets || []).map((asset, i) => {
    const filename = asset.public_id.split('/').pop() || `Project ${i}`;
    const title = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    // Smartly assign categories based on resource type
    const isVideo = asset.resource_type === 'video';
    const imageCategories = ['Websites', 'Social Media', 'SEO'];
    const assignedCat = isVideo ? 'Videos' : imageCategories[i % imageCategories.length];
    
    // Check tags for industry, fallback to rotating assignment
    let assignedIndustry = industryCategories[(i % (industryCategories.length - 1)) + 1];
    if (asset.tags && asset.tags.length > 0) {
      const match = industryCategories.find(c => asset.tags.some((t: string) => t.toLowerCase() === c.toLowerCase()));
      if (match) assignedIndustry = match;
    }
    
    return {
      id: asset.public_id,
      title,
      topCategory: assignedCat,
      industry: assignedIndustry,
      image: asset.secure_url,
      type: asset.resource_type
    };
  });

  const filteredProjects = dynamicProjects.filter(p => {
    const topMatch = activeTop === 'All Services' || p.topCategory === activeTop;
    const subMatch = activeSub === 'All Industries' || p.industry === activeSub;
    return topMatch && subMatch;
  });

  return (
    <main className="min-h-screen bg-black selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* HERO SECTION */}
      <section className="pt-44 pb-12">
        <div className="section-container text-center">
           <span className="subtitle-premium">Selected Archive</span>
           <h1 className="h-lg max-w-4xl mx-auto px-4 mt-6">
              Our Portfolio.
           </h1>
        </div>
      </section>

      {/* DUAL LAYERED TABS */}
      <section className="pb-16 px-6">
         <div className="section-container flex flex-col items-center gap-10">
            {/* TOP CATEGORIES (SERVICES) */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 max-w-full px-4 scrollbar-hide">
                  {topCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveTop(cat); setActiveSub('All Industries'); }}
                      className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-none text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase border transition-all duration-500 whitespace-nowrap ${
                        activeTop === cat 
                        ? 'bg-[#D9FF00] border-[#D9FF00] text-black shadow-[0_0_20px_rgba(217,255,0,0.15)]' 
                        : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            {/* SUB CATEGORIES (INDUSTRIES) */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 max-w-full px-4 scrollbar-hide">
                  {industryCategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSub(sub)}
                      className={`px-5 sm:px-6 py-2 rounded-none text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border transition-all duration-500 whitespace-nowrap ${
                        activeSub === sub 
                        ? 'bg-white/5 border-[#D9FF00] text-[#D9FF00] shadow-[0_0_15px_rgba(217,255,0,0.1)]' 
                        : 'bg-transparent border-white/5 text-white/25 hover:border-white/10 hover:text-white/40'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-32 bg-transparent">
         <div className="section-container">
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-white/30 text-sm tracking-widest uppercase">
                No projects found for {activeTop} in {activeSub}.
              </div>
            )}
            <div className="flex xl:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto xl:overflow-visible no-scrollbar pb-12 xl:pb-0 snap-x snap-mandatory xl:snap-none px-4 xl:px-0">
               <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 snap-center min-w-[85vw] md:min-w-0"
                    >
                       <div onClick={() => setLightbox(project)} className="block w-full cursor-pointer">
                          {/* Image Wrap */}
                          <div className="relative aspect-video overflow-hidden pt-4 px-4">
                             {project.type === 'video' ? (
                               <video 
                                 src={project.image} 
                                 className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.05]" 
                                 autoPlay muted loop playsInline
                               />
                             ) : (
                               <img 
                                 src={project.image} 
                                 className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.05]" 
                                 alt={project.title}
                                 loading="lazy"
                               />
                             )}
                             {/* Category Tag on Image */}
                             <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider">{project.industry}</span>
                             </div>
                             {/* Small Logo Icon on Top Right */}
                             <div className="absolute top-8 right-8 w-6 h-6 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-60">
                                <img src="/favicon.png" className="w-4 h-4 object-contain brightness-125" alt="" />
                             </div>
                          </div>
                          
                          {/* Text Area */}
                          <div className="p-8">
                             <h3 className="text-white/90 text-sm md:text-base font-medium tracking-tight group-hover:text-[#D9FF00] transition-colors duration-300">
                                {project.title}
                             </h3>
                          </div>
                       </div>
                    </motion.div>
                   ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* FOOTER CTA */}
      <section className="pb-32 text-center border-t border-white/5 pt-20">
         <div className="section-container">
            <h2 className="text-2xl md:text-4xl font-medium mb-12 text-white/90 max-w-2xl mx-auto leading-snug">
               Your project could be the next excellence benchmark.
            </h2>
            <PremiumButton href="/contact">
              Get in Touch
            </PremiumButton>
         </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D9FF00] z-[10000] p-4 font-bold tracking-widest uppercase text-xs"
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
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

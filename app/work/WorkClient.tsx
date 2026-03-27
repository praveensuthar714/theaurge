'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Video, Camera, MousePointer2, Sparkles, Monitor } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { formatCloudinaryTitle, inferCategories } from '@/lib/cloudinary';
import { websitePortfolio } from '@/lib/websiteData';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

// Removed 'All Services' from topCategories so it forces a specific service like Videos
const topCategories = ['Videos', 'Creative & Design', 'Websites', 'SEO', 'Brand Identity', 'PPC'];
const industryCategories = [
  'All Industries', 'Corporate', 'Finance', 'E-commerce', 'Education', 
  'Agency', 'Healthcare', 'NGO', 'Spiritual', 'Travel', 'Manufacturing', 'Automotive'
];

export default function WorkClient({ portfolioAssets }: { portfolioAssets: any[] }) {
  const [activeTop, setActiveTop] = useState('Videos');
  const [activeSub, setActiveSub] = useState('All Industries');
  const [lightbox, setLightbox] = useState<any | null>(null);
  
  // Pagination State
  const [visibleCount, setVisibleCount] = useState(12);

  // Convert raw Cloudinary data into structured projects matching the UI requirements
  const dynamicProjects = (portfolioAssets || []).map((asset, i) => {
    const title = formatCloudinaryTitle(asset.public_id, i);
    const { service, industry } = inferCategories(asset.public_id, asset.resource_type as 'image'|'video', asset.tags || []);
    
    let optimizedUrl = asset.secure_url;
    let posterUrl = undefined;
    
    if (optimizedUrl.includes('/upload/')) {
      // Inject Cloudinary performance metrics to eliminate buffering
      optimizedUrl = optimizedUrl.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/');
      if (asset.resource_type === 'video') {
         // Force universally supported codec and extract immediate poster frame
         optimizedUrl = optimizedUrl.replace(/\.[^/.]+$/, ".mp4");
         posterUrl = optimizedUrl.replace(/\.mp4$/, ".jpg");
      }
    }
    
    return {
      id: asset.public_id,
      title,
      topCategory: service,
      industry: industry,
      image: optimizedUrl,
      poster: posterUrl,
      type: asset.resource_type,
      externalUrl: undefined
    };
  });

  // Merge with PDF Website data
  const allProjects = [...dynamicProjects, ...websitePortfolio.map(w => ({
    id: w.id,
    title: w.title,
    topCategory: w.category,
    industry: w.industry,
    image: '/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png', // Default premium asset for external sites
    poster: undefined,
    type: 'image',
    externalUrl: w.url
  }))];

  const filteredProjects = allProjects.filter(p => {
    const topMatch = p.topCategory === activeTop;
    const subMatch = activeSub === 'All Industries' || p.industry === activeSub;
    return topMatch && subMatch;
  });

  const currentlyVisibleProjects = filteredProjects.slice(0, visibleCount);

  // Smooth reset for pagination when switching tabs
  const handleTopChange = (cat: string) => {
    setActiveTop(cat);
    setActiveSub('All Industries');
    setVisibleCount(12);
  };

  const handleSubChange = (cat: string) => {
    setActiveSub(cat);
    setVisibleCount(12);
  };

  return (
    <main className="min-h-screen bg-black selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* HERO SECTION */}
      <section className="pt-32 md:pt-44 pb-8 md:pb-12">
        <div className="section-container text-center">
           <span className="subtitle-premium text-[9px] md:text-[10px]">Selected Archive</span>
           <h1 className="text-[36px] md:text-[56px] heading-platinum max-w-4xl mx-auto px-4 mt-4 md:mt-6">
              Our Portfolio.
           </h1>
        </div>
      </section>

      {/* DUAL LAYERED TABS */}
      <section className="pb-10 md:pb-16 px-4 md:px-6">
         <div className="section-container flex flex-col items-center gap-6 md:gap-10">
            {/* TOP CATEGORIES (SERVICES) */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide no-scrollbar pb-2 max-w-full px-2">
                  {topCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleTopChange(cat)}
                      className={`px-5 md:px-8 py-2 md:py-3 rounded-none text-[9px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase border transition-all duration-500 whitespace-nowrap ${
                        activeTop === cat 
                        ? 'bg-[#D9FF00] border-[#D9FF00] text-black shadow-[0_0_20px_rgba(217,255,0,0.15)]' 
                        : 'bg-transparent border-white/5 text-white/30 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            {/* SUB CATEGORIES (INDUSTRIES) */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide no-scrollbar pb-1 max-w-full px-2">
                  {industryCategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubChange(sub)}
                      className={`px-4 md:px-6 py-1.5 md:py-2 rounded-none text-[8px] md:text-[10px] font-bold tracking-wider uppercase border transition-all duration-500 whitespace-nowrap ${
                        activeSub === sub 
                        ? 'bg-white/5 border-[#D9FF00] text-[#D9FF00] shadow-[0_0_15px_rgba(217,255,0,0.1)]' 
                        : 'bg-transparent border-white/5 text-white/20 hover:border-white/10 hover:text-white/40'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 px-4 md:px-0">
               <AnimatePresence mode="popLayout">
                  {currentlyVisibleProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="group bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                       <div 
                         onClick={() => {
                           if (project.externalUrl) {
                             window.open(project.externalUrl, '_blank');
                           } else {
                             setLightbox(project);
                           }
                         }} 
                         className="block w-full cursor-pointer"
                       >
                          {/* Image Wrap */}
                          <div className="relative aspect-video overflow-hidden pt-4 px-4 bg-neutral-900 border-b border-white/5">
                             {project.type === 'video' ? (
                               <video 
                                 src={project.image} 
                                 poster={project.poster}
                                 className="w-full h-full object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-[1.05]" 
                                 autoPlay muted loop playsInline
                               />
                             ) : (
                               <img 
                                 src={project.image} 
                                 className="w-full h-full object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-[1.05]" 
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

            {/* LOAD MORE BUTTON */}
            {filteredProjects.length > visibleCount && (
              <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 className="flex justify-center mt-12"
              >
                <button
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="px-8 py-3 bg-white/5 border border-white/10 text-white/70 hover:text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 hover:border-white/20 transition-all rounded-full flex items-center gap-2"
                >
                  Load More Projects
                </button>
              </motion.div>
            )}
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

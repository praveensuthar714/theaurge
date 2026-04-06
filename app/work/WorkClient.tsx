// WorkClient.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Play, X } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const MagicSparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const VIDEO_CATEGORIES = [
  { id: 'ads', name: 'Ad Films', icon: Play },
  { id: 'brand', name: 'Brand Films', icon: MagicSparkles },
  { id: 'docs', name: 'Documentaries', icon: Camera },
];

const PREMIUM_SITES = [
  { title: "ByteFX", url: "https://bytefx.com/" },
  { title: "Healthee", url: "https://healthee.com/" },
  { title: "Carbyne", url: "https://carbyne.com/" },
  { title: "Roojh", url: "https://roojh.com/" },
  { title: "Paralympic India", url: "https://paralympicindia.com/" },
  { title: "Iliana Fashion", url: "https://ilianafashion.com/" },
  { title: "Nuvesto", url: "https://nuvesto.com/" },
  { title: "Indemy", url: "https://indemy.in/" },
  { title: "Millow", url: "https://millow.co/" },
  { title: "Track Global", url: "https://trackglobal.co.uk/" },
  { title: "Impakto", url: "https://impakto.in/" },
  { title: "Sumeru Realty", url: "https://sumerurealty.com/" },
  { title: "Strategic Broking", url: "https://strategicbroking.com/" },
  { title: "Merchant Marine", url: "https://merchantmarine.co.in/" },
  { title: "Floward", url: "https://floward.com/en-ae/abudhabi" },
  { title: "DotSpeaks", url: "https://dotspeaks.com/" },
  { title: "Stroke to Hope", url: "https://fromstroketohope.com/" },
  { title: "Largus Biotech", url: "https://largusbiotechpvtltd.com/" },
];

export default function WorkClient({ portfolioAssets }: { portfolioAssets: any[] }) {
  const [activeCategory, setActiveCategory] = useState<'Videos' | 'Creative' | 'Websites' | 'SEO' | 'PPC'>('Videos');
  const [activeVideoSub, setActiveVideoSub] = useState('Ad Films');
  const [lightbox, setLightbox] = useState<any | null>(null);

  // Group assets exactly as Carousel
  const websites = PREMIUM_SITES.map((site, i) => ({
    id: `site-${i}`,
    title: `${String(i + 1).padStart(2, '0')} // ${site.title}`,
    url: site.url,
    // Optimization: Using a static high-res placeholder initially to prevent API blocking
    thumbnail: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop`,
    // Real dynamic thumbnail used for hover or lazy load
    liveThumbnail: `https://api.microlink.io?url=${encodeURIComponent(site.url)}&screenshot=true&embed=screenshot.url&meta=false&waitFor=3000`,
    type: 'website',
    category: 'Websites',
    width: 1920,
    height: 1080
  }));

  const videoProjects = (portfolioAssets || []).filter(a => a.resource_type === 'video').map((v, i) => {
    const lowerName = v.public_id.toLowerCase();
    let category = 'Brand Films';
    if (/doc|real|estate|property|hospital|health|educational/i.test(lowerName)) category = 'Documentaries';
    else if (/ad|commercial|promo|launch|marketing/i.test(lowerName)) category = 'Ad Films';
    
    return {
      id: v.public_id,
      title: `${String(i + 1).padStart(2, '0')} // ${v.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Untitled'}`,
      url: v.secure_url,
      thumbnail: v.secure_url.replace(/\.[^/.]+$/, ".jpg"),
      type: 'video',
      category: category,
      width: v.width || 1920,
      height: v.height || 1080
    };
  });

  const creativeProjects = (portfolioAssets || []).filter(a => a.resource_type === 'image' && !a.public_id.includes('website')).map((img, i) => ({
    id: img.public_id,
    title: `${String(i + 1).padStart(2, '0')} // ${img.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Untitled'}`,
    url: img.secure_url,
    thumbnail: img.secure_url.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/'),
    type: 'image',
    category: 'Creative',
    width: img.width || 1920,
    height: img.height || 1080
  }));

  const currentList = activeCategory === 'Websites' 
    ? websites 
    : activeCategory === 'Videos' 
      ? videoProjects.filter(v => v.category === activeVideoSub)
      : activeCategory === 'Creative'
        ? creativeProjects
        : []; // SEO and PPC are currently empty

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Increased to 12 per page to reduce page count
  const totalPages = Math.ceil(currentList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedList = currentList.slice(startIndex, startIndex + itemsPerPage);

  // Reset pagination when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeVideoSub]);

  // Grid classes based on active state
  const isVerticalTab = activeCategory === 'Videos' && activeVideoSub === 'Documentaries';
  const gridClasses = isVerticalTab
    ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  // Optimized Component for Lazy Assets
  const OptimizedAsset = ({ item }: { item: any }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [inView, setInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.1 }
      );
      if (videoRef.current) observer.observe(videoRef.current);
      return () => observer.disconnect();
    }, []);

    if (item.type === 'video') {
       return (
         <video 
           ref={videoRef}
           {...(inView ? { src: item.url } : {})} 
           poster={item.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_800/')}
           autoPlay muted loop playsInline
           className="w-full h-full object-cover transition-opacity duration-700"
           style={{ opacity: inView ? 1 : 0.5 }}
         />
       );
    }

    return (
      <div className="w-full h-full relative" onMouseEnter={() => setIsHovered(true)}>
        {item.type === 'website' && inView ? (
          <iframe 
            src={item.url}
            className="w-full h-full border-none transform origin-top transition-transform duration-700 hover:scale-[1.02]"
            style={{ width: '100%', height: '100%', pointerEvents: isHovered ? 'auto' : 'none' }}
            title={item.title}
            loading="lazy"
          />
        ) : (
          <img 
            src={item.thumbnail} 
            alt={item.title}
            className="w-full h-full transition-all duration-[3s] group-hover:scale-[1.04] ease-out object-cover"
            loading="lazy"
          />
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* 
          PORTFOLIO GRID SYSTEM 
          Note: HeroSection removed as per user request to directly feature the archive.
      */}
      <section id="work" className="pb-32 px-4 md:px-8 max-w-[1920px] mx-auto min-h-[50vh] pt-40 md:pt-48">
        
        {/* FILTERS */}
        <div className="flex flex-col items-center mb-16 gap-10">
          <div className="text-center mb-4">
             <span className="text-accent text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Selected Portfolio</span>
             <h2 className="text-4xl md:text-6xl heading-platinum">Architectural Archive<span className="text-accent">.</span></h2>
          </div>

          {/* Precision Switcher */}
          <div className="flex bg-white/[0.02] border border-white/10 p-1.5 rounded-none max-w-full overflow-x-auto no-scrollbar">
            {['Videos', 'Creative', 'Websites', 'SEO', 'PPC'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`relative px-8 md:px-12 py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 z-10 whitespace-nowrap ${
                  activeCategory === cat ? 'text-black' : 'text-white/20 hover:text-white/50'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategoryGrid"
                    className="absolute inset-0 bg-accent z-[-1]"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Sub Filters (Videos Only) */}
          <AnimatePresence mode="wait">
            {activeCategory === 'Videos' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
              >
                {VIDEO_CATEGORIES.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveVideoSub(sub.name)}
                    className={`relative flex items-center gap-4 group transition-all duration-700 ${
                      activeVideoSub === sub.name ? 'opacity-100' : 'opacity-20 hover:opacity-50'
                    }`}
                  >
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">{sub.name}</span>
                    {activeVideoSub === sub.name && (
                      <motion.div 
                        layoutId="activeSubIndicatorGrid"
                        className="absolute -bottom-3 left-0 right-0 h-0.5 bg-accent"
                      />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MASONRY/CSS GRID */}
        <motion.div layout className={`grid ${gridClasses} gap-8 md:gap-12`}>
          <AnimatePresence mode="popLayout">
            {paginatedList.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-full py-32 text-center text-white/5 font-mono text-[9px] tracking-[0.6em] uppercase border-y border-white/5"
              >
                Archive: Awaiting Connection_
              </motion.div>
            ) : (
              paginatedList.map((item) => {
                const isVertical = item.width < item.height;
                const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-[16/10]';
                
                return (
                  <motion.div 
                    layout
                    key={item.id} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full"
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        if (item.type === 'website') window.open(item.url, '_blank');
                        else setLightbox(item);
                      }}
                      className={`relative ${aspectClass} w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[1rem] group cursor-pointer shadow-2xl shadow-black/80`}
                      style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    >
                      {/* INNER BORDERS */}
                      <div className="absolute inset-0 border border-white/5 rounded-[1rem] z-40 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1rem] pointer-events-none" />
  
                      {/* MEDIA CONTAINER */}
                      <div className="absolute inset-2 md:inset-3 rounded-[0.7rem] overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-inner" style={{ transform: 'translateZ(0)' }}>
                        {item.type === 'website' && (
                          <div className="h-8 md:h-10 bg-[#121212] border-b border-white/[0.08] flex items-center px-4 md:px-6 gap-2 z-20 relative">
                            <div className="flex gap-1.5">
                               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            </div>
                            <div className="ml-4 h-4 w-24 md:w-40 bg-white/[0.03] rounded-[2px]" />
                          </div>
                        )}
  
                        <div className={`absolute inset-0 ${item.type === 'website' ? 'top-8 md:top-10' : ''}`}>
                           <OptimizedAsset item={item} />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                        </div>
  
                        {/* TEXT OVERLAY */}
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex justify-between items-end">
                          <div className="flex flex-col gap-2 relative z-20">
                            <div className="flex items-center gap-3">
                               <div className="w-6 h-px bg-accent/40" />
                               <span className="text-[8px] md:text-[9px] font-bold text-accent tracking-[0.4em] uppercase drop-shadow-md">
                                 {item.type === 'website' ? 'UX_INTERFACE' : (item.category || activeCategory)}
                               </span>
                            </div>
                            <h3 className="text-base md:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-500 drop-shadow-lg truncate pr-4">
                              {item.title}
                            </h3>
                          </div>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] relative z-20 focus:outline-none shrink-0">
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-6">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-full border border-white/10 bg-white/[0.03] text-white/40 disabled:opacity-20 hover:bg-accent hover:text-black transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              {(() => {
                const pages = [];
                const range = 1; // Number of pages to show on either side of current
                
                for (let i = 1; i <= totalPages; i++) {
                  if (
                    i === 1 || 
                    i === totalPages || 
                    (i >= currentPage - range && i <= currentPage + range)
                  ) {
                    pages.push(
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`w-10 h-10 rounded-none border text-[11px] font-bold tracking-widest transition-all ${
                          currentPage === i 
                            ? 'bg-accent border-accent text-black' 
                            : 'border-white/10 text-white/30 hover:border-white/30'
                        }`}
                      >
                        {i}
                      </button>
                    );
                  } else if (
                    i === currentPage - range - 1 || 
                    i === currentPage + range + 1
                  ) {
                    pages.push(<span key={i} className="text-white/10 px-1 font-mono">...</span>);
                  }
                }
                return pages;
              })()}
            </div>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full border border-white/10 bg-white/[0.03] text-white/40 disabled:opacity-20 hover:bg-accent hover:text-black transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="pb-40 pt-20 text-center border-t border-white/5">
         <div className="section-container">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Next Steps</span>
            <h2 className="text-4xl md:text-6xl heading-platinum mb-12">
               Ready to architect <br /> your <span className="italic text-white/30">vision?</span>
            </h2>
            <motion.a
               href="/contact"
               whileHover={{ scale: 1.05 }}
               className="inline-flex items-center gap-4 px-12 py-5 bg-accent text-black text-[11px] font-bold uppercase tracking-[0.3em] rounded-none group/btn"
             >
               Start A Project
               <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </motion.a>
         </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}   
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white" onClick={() => setLightbox(null)}>
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video bg-black shadow-2xl rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video src={lightbox.url} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={lightbox.thumbnail.replace(/w_\d+/, 'w_1920')} className="w-full h-full object-contain" alt="" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

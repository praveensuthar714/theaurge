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
  const websites = React.useMemo(() => PREMIUM_SITES.map((site, i) => ({
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
  })), []);

  const videoProjects = React.useMemo(() => (portfolioAssets || []).filter(a => a.resource_type === 'video').map((v, i) => {
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
  }), [portfolioAssets]);

  const creativeProjects = React.useMemo(() => (portfolioAssets || []).filter(a => a.resource_type === 'image' && !a.public_id.includes('website')).map((img, i) => ({
    id: img.public_id,
    title: `${String(i + 1).padStart(2, '0')} // ${img.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Untitled'}`,
    url: img.secure_url,
    thumbnail: img.secure_url.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/'),
    type: 'image',
    category: 'Creative',
    width: img.width || 1920,
    height: img.height || 1080
  })), [portfolioAssets]);

  const currentList = React.useMemo(() => {
    if (activeCategory === 'Websites') return websites;
    if (activeCategory === 'Videos') return videoProjects.filter(v => v.category === activeVideoSub);
    if (activeCategory === 'Creative') return creativeProjects;
    return [];
  }, [activeCategory, activeVideoSub, websites, videoProjects, creativeProjects]);

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
    : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12';
  const OptimizedAsset = ({ item }: { item: any }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
      setIsMobile(window.innerWidth < 768);
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); 
          }
        },
        { threshold: 0.1, rootMargin: '200px' }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    if (item.type === 'video') {
       return (
         <div ref={containerRef} className="w-full h-full">
           {inView ? (
             <video 
               src={item.url}
               poster={item.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_800/')}
               autoPlay={!isMobile}
               muted
               loop
               playsInline
               preload="none"
               className="w-full h-full object-cover transition-opacity duration-700"
               style={{ opacity: 1 }}
             />
           ) : (
             <img src={item.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_400/')} className="w-full h-full object-cover" alt="" />
           )}
         </div>
       );
    }

    return (
      <div ref={containerRef} className="w-full h-full relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {item.type === 'website' && inView && !isMobile ? (
          <iframe 
            src={item.url}
            className="w-full h-full border-none"
            style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            title={item.title}
          />
        ) : (
          <img 
            src={item.thumbnail} 
            alt={item.title}
            className="w-full h-full object-cover"
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

          {/* Precision Switcher - WRAPPED FOR FULL VISIBILITY */}
          <div className="flex flex-wrap justify-center bg-white/[0.02] border border-white/10 p-1 md:p-1.5 rounded-none max-w-full gap-1">
            {['Videos', 'Creative', 'Websites', 'SEO', 'PPC'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`relative px-4 md:px-10 py-3 md:py-4 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-700 z-10 flex-1 md:flex-none text-center whitespace-nowrap ${
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

          {/* Sub Filters (Videos Only) - WRAPPED FOR FULL VISIBILITY */}
          <AnimatePresence mode="wait">
            {activeCategory === 'Videos' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-12"
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

      {/* FEATURED PORTFOLIO DETAILS */}
      <section className="py-32 px-4 md:px-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-accent text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl heading-platinum">Featured Productions<span className="text-accent">.</span></h2>
          </div>

          <div className="flex flex-col gap-24 md:gap-32 max-w-7xl mx-auto">
            
            {/* FILMS */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-[#EBEBEB] uppercase mb-10 md:mb-12 border-l-4 border-accent pl-6">Films</h3>
              <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-[#E6FF00]/30 transition-colors duration-500">
                <div className="mb-8">
                  <h4 className="text-3xl font-bold text-white tracking-tighter mb-2">Pages Of deception</h4>
                  <p className="text-accent font-mono text-[10px] md:text-[11px] uppercase tracking-widest">Short Film | Marathi Language | 26 min</p>
                </div>
                <p className="text-white/60 leading-relaxed max-w-4xl mb-12 text-[13px] md:text-[15px]">
                  A Marathi short film produced by The Aurge, Pages of Deception explores layered human emotions through a tightly woven narrative. We were responsible for end-to-end film execution, focusing on cinematic storytelling, strong performances, and atmospheric visuals. The film reflects our commitment to meaningful narratives that leave a lasting emotional impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[13px] text-white/50 font-medium">
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Written & Directed by :</span> Prathamesh Savekar</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Cinematography :</span> Zaid Mulani</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Screenplay :</span> Prathamesh Savekar, Digmbar Patil</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Cast :</span> Satish Tandale, Akshay Polake, Anil Rabade, Pramod Kulkarni.</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Creative Director & Edit :</span> Digambar Patil</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Art Direction :</span> Shubham Wadikar, Devyani Shinde, Aditi lalit, Abhinav B.</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Music :</span> Mohit Kulkarni</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Sound :</span> Aditya chavan</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Assistant Cinematographer :</span> Akshay Sutar</p>
                  <p><span className="text-white/80 block md:inline mb-1 md:mb-0">Sound Recordist :</span> Akash Bhosale</p>
                  <p className="md:col-span-2"><span className="text-white/80 block md:inline mb-1 md:mb-0">Executive Producer :</span> Kaustubh Bhosale, Piyush Bhosale</p>
                </div>
              </div>
            </div>

            {/* DOCUMENTARIES */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-[#EBEBEB] uppercase mb-10 md:mb-12 border-l-4 border-accent pl-6">Documentaries</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* 1 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">KPT Industries</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Industrial</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We collaborated on this project by handling the shoot and supporting scripting and story development. Our focus was on presenting the industrial process with clarity, authenticity, and a cinematic visual language that communicates scale and precision.
                  </p>
                </div>
                {/* 2 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Nisarg Resort</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Hospitality</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    we contributed to story development and production, capturing the essence of nature, hospitality, and guest experience. The film blends calm visuals with thoughtful storytelling to reflect the resort's philosophy and ambience.
                  </p>
                </div>
                {/* 3 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Nourishing Farm</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Nutrition & Lifestyle</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We worked closely on concept, story, and shoot, highlighting the farm-to-fork journey and the brand's focus on healthy living. The documentary uses warm visuals and grounded storytelling to build trust and emotional connection with the audience.
                  </p>
                </div>
              </div>
            </div>

            {/* TV COMMERCIALS & AD FILMS */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-[#EBEBEB] uppercase mb-10 md:mb-12 border-l-4 border-accent pl-6">Ad Films & Commercials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* 1 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Suvarndeep</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Product</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Boomrang Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    A fully managed project where we handled concept, scripting, production, and post-production. The film focuses on premium presentation, product detailing, and strong visual storytelling to elevate the brand presence.
                  </p>
                </div>
                {/* 2 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Nourishing Farm</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Nutrition & Lifestyle</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We were involved in both shooting and script support, ensuring the brand's philosophy of healthy living and authenticity was communicated clearly and emotionally.
                  </p>
                </div>
                {/* 3 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Brixton</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Automobile</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We independently managed concept, shoot, and post-production, focusing on bold visuals and attitude-driven storytelling to match Brixton's premium motorcycle image.
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-[#EBEBEB] uppercase mb-10 md:mb-12 border-l-4 border-accent pl-6">Social Media</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* 1 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Royal Enfield</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Automobile</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We manage end-to-end social media marketing, including content strategy, creatives, and campaign execution. Our focus is on storytelling-driven visuals, consistent brand voice, and high-impact content that strengthens community engagement and brand recall.
                  </p>
                </div>
                {/* 2 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Yamaha</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Automobile</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    Complete social media handling with a strong emphasis on performance-oriented content and visual consistency. We create engaging posts, reels, and campaigns that reflect Yamaha's energy, speed, and innovation.
                  </p>
                </div>
                {/* 3 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Brixton</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Automobile</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    End-to-end social media marketing handled by our team. Bold visuals, attitude-driven creatives, and sharp messaging are used to match Brixton's distinctive brand personality.
                  </p>
                </div>
                {/* 4 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Heera Panna</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Retail</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We handle full-scale social media management, from content planning to execution. The approach blends premium aesthetics with strategic storytelling to enhance visibility, trust, and audience engagement.
                  </p>
                </div>
                {/* 5 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Nisarg Resort</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Hospitality</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We provide video content editing and creative design support for social media platforms. Our work enhances visual storytelling while maintaining the calm, nature-driven identity of the brand.
                  </p>
                </div>
                {/* 6 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Nourishing Farm</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6">Nutrition & Lifestyle</p>
                  <div className="bg-white/5 py-3 px-4 border border-white/5 mb-8 text-[11px] text-[#EBEBEB] tracking-wide">
                    In Associate with Devs Media
                  </div>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We support the brand with video editing and design creatives for social media. The content focuses on healthy living, authenticity, and visually communicating the farm-to-fork philosophy.
                  </p>
                </div>
                {/* 7 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Suprito</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Fashion</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    Full social media marketing execution including content creation, visual design, and storytelling. The focus is on clean aesthetics, brand consistency, and content that drives engagement and recognition.
                  </p>
                </div>
                {/* 8 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col hover:border-[#E6FF00]/30 transition-colors duration-500">
                  <h4 className="text-2xl font-bold text-white tracking-tighter mb-1">Marvelous Hair Studio</h4>
                  <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-8">Fashion</p>
                  <p className="text-white/60 leading-relaxed text-[13px]">
                    We manage complete social media presence, focusing on trend-led visuals, reels, and brand storytelling. Our content strategy highlights transformation, style, and personality to connect strongly with the target audience.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 md:py-32 flex items-center border-t border-white/5 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img 
            src="/bgimagectaservice.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent z-10" />
        </div>

        <div className="section-container relative z-20 w-full px-6 md:px-12 flex items-center">
          <div className="max-w-[600px] pt-10 pb-10">
            <h2 className="text-[40px] md:text-[56px] font-[600] tracking-[-0.02em] text-white mb-6 leading-[1.1] font-sans">
              Ready to create your <br /> next project?<span className="text-[#E6FF00] align-baseline ml-2">●</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[18px] font-normal mb-10 max-w-[480px] leading-[1.6] font-sans">
              Systematic execution is the engine; creative power is the soul. Secure your spot in our execution pipeline today.
            </p>
            <motion.a
               href="/contact"
               whileHover={{ scale: 1.05 }}
               className="inline-flex items-center justify-center gap-4 px-7 py-4 bg-[#E6FF00] text-black text-[13px] font-[700] uppercase tracking-[0.1em] rounded-none group/btn w-fit"
             >
               GET IN TOUCH
               <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
            </motion.a>
          </div>
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

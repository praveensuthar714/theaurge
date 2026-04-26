'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Play, Globe, Camera, Layers, Monitor, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  type: 'image' | 'video' | 'website';
  category: string;
  width: number;
  height: number;
}

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

const MagicSparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const PRODUCTION_CATEGORIES = [
  { id: 'film', name: 'Film', icon: Play },
  { id: 'tvc', name: 'TVC', icon: Monitor },
  { id: 'docs', name: 'Documentaries', icon: Camera },
  { id: 'brand', name: 'Brand Films', icon: MagicSparkles },
  { id: 'political', name: 'Political', icon: Globe },
];

const DESIGN_CATEGORIES = [
  { id: 'branding', name: 'Branding', icon: Layers },
  { id: 'flyers', name: 'Flyers', icon: Layers },
  { id: 'brochures', name: 'Brochures', icon: Layers },
];

const MARKETING_CATEGORIES = [
  { id: 'social', name: 'Social Media Marketing', icon: Globe },
  { id: 'performance', name: 'Performance Marketing', icon: MagicSparkles },
  { id: 'seo', name: 'SEO', icon: Monitor },
  { id: 'offline', name: 'Offline', icon: Layers },
];

export const PortfolioCarouselV2: React.FC<{ assets?: any[] }> = ({ assets = [] }) => {
  const hasProduction = (assets || []).some(a => a.resource_type === 'video');
  const [activeCategory, setActiveCategory] = useState<'Production' | 'Design' | 'Website' | 'Marketing' | 'Events'>(hasProduction ? 'Production' : 'Website');
  const [activeSub, setActiveSub] = useState('Brand Films');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<any | null>(null);

  // Group assets
  const websites: Project[] = PREMIUM_SITES.map((site, i) => ({
    id: `site-${i}`,
    title: `${String(i + 1).padStart(2, '0')} // ${site.title}`,
    url: site.url,
    thumbnail: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop`,
    liveThumbnail: `https://api.microlink.io?url=${encodeURIComponent(site.url)}&screenshot=true&embed=screenshot.url&meta=false&waitFor=3000`,
    type: 'website',
    category: 'Website',
    width: 1920,
    height: 1080
  }));

  const videoProjects: Project[] = (assets || []).filter(a => a.resource_type === 'video').map((v, i) => {
    const lowerName = v.public_id.toLowerCase();
    let category = 'Brand Films';
    if (/tvc|commercial/i.test(lowerName)) category = 'TVC';
    else if (/doc|documentary/i.test(lowerName)) category = 'Documentaries';
    else if (/film/i.test(lowerName) && !/brand|tvc/i.test(lowerName)) category = 'Film';
    else if (/political/i.test(lowerName)) category = 'Political';
    
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

  const creativeProjects: Project[] = (assets || []).filter(a => a.public_id.includes('design')).map((img, i) => {
    const lowerName = img.public_id.toLowerCase();
    let category = 'Branding';
    if (/flyer/i.test(lowerName)) category = 'Flyers';
    else if (/brochure/i.test(lowerName)) category = 'Brochures';

    return {
      id: img.public_id,
      title: `${String(i + 1).padStart(2, '0')} // ${img.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Untitled'}`,
      url: img.secure_url,
      thumbnail: img.secure_url.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/'),
      type: 'image',
      category: category,
      width: img.width || 1920,
      height: img.height || 1080
    };
  });

  const marketingProjects: Project[] = (assets || []).filter(a => a.public_id.includes('marketing')).map((img, i) => {
    const lowerName = img.public_id.toLowerCase();
    let category = 'Social Media Marketing';
    if (/performance/i.test(lowerName)) category = 'Performance Marketing';
    else if (/seo/i.test(lowerName)) category = 'SEO';
    else if (/offline/i.test(lowerName)) category = 'Offline';

    return {
      id: img.public_id,
      title: `${String(i + 1).padStart(2, '0')} // ${img.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Untitled'}`,
      url: img.secure_url,
      thumbnail: img.resource_type === 'video' ? img.secure_url.replace(/\.[^/.]+$/, ".jpg") : img.secure_url.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/'),
      type: img.resource_type,
      category: category,
      width: img.width || 1920,
      height: img.height || 1080
    };
  });

  const currentList = activeCategory === 'Website' 
    ? websites 
    : activeCategory === 'Production' 
      ? videoProjects.filter(v => v.category === activeSub || activeSub === 'All')
      : activeCategory === 'Design'
        ? creativeProjects.filter(v => v.category === activeSub || activeSub === 'All')
        : activeCategory === 'Marketing'
          ? marketingProjects.filter(v => v.category === activeSub || activeSub === 'All')
          : [];

  const OptimizedAsset = ({ item }: { item: any }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(window.innerWidth < 768);
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
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
              poster={item.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_400/')}
              autoPlay={!isMobile}
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={item.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_400/')}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      );
    }

    return (
      <div ref={containerRef} className="w-full h-full relative" onMouseEnter={() => setIsHovered(true)}>
        {item.type === 'website' && inView && !isMobile ? (
          <iframe
            src={item.url}
            className="w-full h-full border-none"
            style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            title={item.title}
            loading="lazy"
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstStack = container.querySelector('.snap-start');
      if (firstStack) {
        const stackWidth = firstStack.clientWidth + 20;
        const scrollTo = direction === 'left' ? container.scrollLeft - stackWidth : container.scrollLeft + stackWidth;
        container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      } else {
        const { scrollLeft, clientWidth } = container;
        const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
        container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full bg-black py-12 md:py-24 overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* HEADER & TOP NAVIGATION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-12">
          <div className="relative">
             <span className="text-accent text-[9px] font-bold tracking-[0.6em] uppercase mb-4 block">Selected Archive</span>
             <h2 className="h-lg leading-tight">
               Proven Results<span className="text-accent">.</span>
             </h2>
          </div>

          <div className="relative flex-1 lg:flex-none max-w-full">
            <div className="flex flex-wrap justify-center lg:justify-start bg-white/[0.02] border border-white/10 p-1 md:p-1.5 rounded-none w-full lg:w-auto gap-1">
              {['Production', 'Design', 'Website', 'Marketing', 'Events'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat as any);
                    if (cat === 'Production') setActiveSub('Brand Films');
                    else if (cat === 'Design') setActiveSub('Branding');
                    else if (cat === 'Marketing') setActiveSub('Social Media Marketing');
                  }}
                  className={`relative px-4 md:px-10 py-3 md:py-4 text-[9px] md:text-[11px] whitespace-nowrap font-[800] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300 z-10 flex-1 md:flex-none text-center ${
                    activeCategory === cat ? 'text-black' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#E6FF00] z-[-1]"
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SUB-CATEGORIES (Videos Only) - WRAPPED ON MOBILE */}
        <AnimatePresence mode="wait">
          {activeCategory === 'Production' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10 border-l border-accent/20 pl-6 md:pl-10"
            >
              {PRODUCTION_CATEGORIES.map((sub, idx) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.name)}
                  className={`relative flex items-center gap-3 md:gap-6 group whitespace-nowrap transition-all duration-700 ${
                    activeSub === sub.name ? 'opacity-100' : 'opacity-20 hover:opacity-50'
                  }`}
                >
                  <span className="text-[9px] font-mono text-accent/60">0{idx + 1}</span>
                  <span className="text-[11px] md:text-[13px] font-[800] uppercase tracking-[0.3em]">{sub.name}</span>
                  {activeSub === sub.name && (
                    <motion.div 
                      layoutId="activeSubIndicator"
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}

          {activeCategory === 'Design' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10 border-l border-accent/20 pl-6 md:pl-10"
            >
              {DESIGN_CATEGORIES.map((sub, idx) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.name)}
                  className={`relative flex items-center gap-3 md:gap-6 group whitespace-nowrap transition-all duration-700 ${
                    activeSub === sub.name ? 'opacity-100' : 'opacity-20 hover:opacity-50'
                  }`}
                >
                  <span className="text-[9px] font-mono text-accent/60">0{idx + 1}</span>
                  <span className="text-[11px] md:text-[13px] font-[800] uppercase tracking-[0.3em]">{sub.name}</span>
                  {activeSub === sub.name && (
                    <motion.div 
                      layoutId="activeSubIndicator"
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}

          {activeCategory === 'Marketing' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10 border-l border-accent/20 pl-6 md:pl-10"
            >
              {MARKETING_CATEGORIES.map((sub, idx) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.name)}
                  className={`relative flex items-center gap-3 md:gap-6 group whitespace-nowrap transition-all duration-700 ${
                    activeSub === sub.name ? 'opacity-100' : 'opacity-20 hover:opacity-50'
                  }`}
                >
                  <span className="text-[9px] font-mono text-accent/60">0{idx + 1}</span>
                  <span className="text-[11px] md:text-[13px] font-[800] uppercase tracking-[0.3em]">{sub.name}</span>
                  {activeSub === sub.name && (
                    <motion.div 
                      layoutId="activeSubIndicator"
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative group/track mt-4 md:mt-8">
          <div className="flex justify-end gap-3 mb-2 md:mb-4 pr-2 md:pr-0 z-20 relative">
             <button 
               onClick={() => scroll('left')}
               className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white/50 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 group/btn"
             >
               <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white/50 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 group/btn"
             >
               <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
             </button>
          </div>

          <motion.div 
            className="relative"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={scrollRef}
              className="flex items-start gap-4 md:gap-10 overflow-x-auto no-scrollbar md:snap-x md:snap-mandatory scroll-smooth pt-4 pb-10 px-4 md:px-0"
            >
              <AnimatePresence mode="popLayout">
                {currentList.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-full py-48 text-center text-white/5 font-mono text-[9px] tracking-[0.6em] uppercase border-y border-white/5"
                  >
                    Archived: Awaiting System Link_
                  </motion.div>
                ) : (
                  (() => {
                    const stacks: any[][] = [];
                    let tempStack: any[] = [];
                    
                    currentList.forEach((item, idx) => {
                      const isVertical = item.width < item.height;
                      
                      if (isVertical) {
                        if (tempStack.length > 0) { stacks.push(tempStack); tempStack = []; }
                        stacks.push([item]);
                      } else {
                        tempStack.push(item);
                        if (tempStack.length === 2 || idx === currentList.length - 1) {
                          stacks.push(tempStack);
                          tempStack = [];
                        }
                      }
                    });

                    return stacks.map((stack, stackIdx) => {
                      const isVerticalStack = stack.length === 1 && stack[0].width < stack[0].height;
                      
                      return (
                        <div 
                          key={`stack-${stackIdx}`}
                          className={`flex flex-col gap-4 ${isVerticalStack ? 'min-w-[85%] md:min-w-[380px]' : 'min-w-[85%] md:min-w-[620px]'} snap-start`}
                        >
                          {stack.map((item) => {
                            const isV = item.width < item.height;
                            const aspectClass = isV ? 'aspect-[9/16] md:w-[380px]' : 'aspect-[16/10] md:w-[620px]';
                            
                            return (
                              <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
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
                                  className={`relative ${aspectClass} w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] group cursor-pointer shadow-2xl shadow-black/80`}
                                  style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                                >
                                  <div className="absolute inset-0 border border-white/5 rounded-[2rem] z-40 pointer-events-none" />
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none" />

                                  <div className="absolute inset-3 md:inset-4 rounded-[1.5rem] overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-inner" style={{ transform: 'translateZ(0)' }}>
                                    {item.type === 'website' && (
                                      <div className="h-8 md:h-10 bg-[#121212] border-b border-white/[0.08] flex items-center px-4 md:px-6 gap-2 z-20 relative">
                                        <div className="flex gap-1.5">
                                           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        </div>
                                        <div className="ml-4 h-4 w-40 bg-white/[0.03] rounded-[2px]" />
                                      </div>
                                    )}

                                    <div className={`absolute inset-0 ${item.type === 'website' ? 'top-8 md:top-10' : ''}`}>
                                       <OptimizedAsset item={item} />
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 z-10 flex justify-between items-end">
                                      <div className="flex flex-col gap-2 relative z-20">
                                        <div className="flex items-center gap-3">
                                           <div className="w-6 h-px bg-accent/40" />
                                           <span className="text-[8px] md:text-[9px] font-bold text-accent tracking-[0.4em] uppercase drop-shadow-md">
                                             {item.type === 'website' ? 'UX_INTERFACE' : item.category}
                                           </span>
                                        </div>
                                        <h3 className="text-[12px] md:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-500 drop-shadow-lg truncate max-w-[150px] md:max-w-none">
                                          {item.title}
                                        </h3>
                                      </div>
                                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] relative z-20">
                                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              </motion.div>
                            );
                          })}
                        </div>
                      );
                    });
                  })()
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white" onClick={() => setLightbox(null)}>
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video bg-black shadow-2xl"
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
    </section>
  );
};

export default PortfolioCarouselV2;

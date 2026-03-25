'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Video, Camera, MousePointer2, Sparkles, Monitor } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const projects = [
  { id: 1, title: 'KREPL | Brand Documentary', topCategory: 'Videos', subCategory: 'Brand Documentaries', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600' },
  { id: 2, title: 'Udaan School | Brand Documentary', topCategory: 'Videos', subCategory: 'Documentaries', image: 'https://images.unsplash.com/photo-1492691223115-f86a89694073?q=80&w=600' },
  { id: 3, title: 'Pragati Group Trailer', topCategory: 'Videos', subCategory: 'Brand Documentaries', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600' },
  { id: 4, title: 'Nexus Hub Platform', topCategory: 'Websites', subCategory: 'Corporate', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600' },
  { id: 5, title: 'Global Commerce', topCategory: 'Websites', subCategory: 'E-commerce', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600' },
  { id: 6, title: 'Viral Velocity', topCategory: 'Social Media', subCategory: 'Campaigns', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600' },
  { id: 7, title: 'Organic Growth', topCategory: 'SEO', subCategory: 'Content', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?q=80&w=600' },
];

const topCategories = ['Videos', 'Websites', 'Social Media', 'SEO'];
const subCategories: Record<string, string[]> = {
  'Videos': ['All', 'Brand Documentaries', 'Events', 'Documentaries', 'Animation', 'Advertisement', 'Promos', 'Business Explainer'],
  'Websites': ['All', 'Corporate', 'SaaS', 'E-commerce', 'Portfolio'],
  'Social Media': ['All', 'Campaigns', 'Ads', 'Short Reels'],
  'SEO': ['All', 'Technical', 'Content', 'Backlinks'],
};

export default function WorkPage() {
  const [activeTop, setActiveTop] = useState('Videos');
  const [activeSub, setActiveSub] = useState('All');

  // Reset sub-category when top category changes
  const handleTopChange = (cat: string) => {
    setActiveTop(cat);
    setActiveSub('All');
  };

  const filteredProjects = projects.filter(p => {
    const topMatch = p.topCategory === activeTop;
    const subMatch = activeSub === 'All' || p.subCategory === activeSub;
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
            {/* TOP CATEGORIES (Capsules) - Mobile-Optimized Scroller */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 max-w-full px-4 scrollbar-hide">
                  {topCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleTopChange(cat)}
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

            {/* SUB CATEGORIES (Capsules) - Mobile-Optimized Scroller */}
            <div className="w-full flex justify-center">
               <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 max-w-full px-4 scrollbar-hide">
                  {subCategories[activeTop].map((sub) => (
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

      {/* PROJECT GRID (3-COL CARDS / Mobile Carousel) */}
      <section className="pb-32 bg-transparent">
         <div className="section-container">
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
                       <Link href={`/work/${project.id}`} className="block w-full">
                          {/* Image Wrap */}
                          <div className="relative aspect-video overflow-hidden pt-4 px-4">
                             <img 
                               src={project.image} 
                               className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.05]" 
                               alt={project.title}
                             />
                             {/* Category Tag on Image */}
                             <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider">{project.subCategory}</span>
                             </div>
                             {/* Small Logo Icon on Top Right */}
                             <div className="absolute top-8 right-8 w-6 h-6 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-60">
                                <img src="/favicon.png" className="w-4 h-4 object-contain brightness-125" alt="" />
                             </div>
                          </div>
                          
                          {/* Text Area */}
                          <div className="p-8">
                             <h3 className="text-white/90 text-sm md:text-base font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                                {project.title}
                             </h3>
                          </div>
                       </Link>
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

      <Footer />
    </main>
  );
}

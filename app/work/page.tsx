'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Video, Camera, MousePointer2, Sparkles, Monitor } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const projects = [
  { id: 1, title: 'Lumina Noir', category: 'Creative Production', type: 'Ad Film', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Aether Flow', category: 'Brand Identity', type: 'Visual DNA', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Summit Peaks', category: 'Performance', type: 'ROI Scaling', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Neon Pulse', category: 'Creative Production', type: 'Music Video', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Data Horizon', category: 'Technology', type: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
  { id: 6, title: 'Obsidian Code', category: 'AI & Automation', type: 'SaaS Build', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop' },
];

const categories = ['All', 'Creative Production', 'Brand Identity', 'Performance', 'Technology', 'AI & Automation'];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO */}
      <section className="pt-44 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
           <span className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase mb-10 block">Selected Archive</span>
           <h1 className="text-[38px] md:text-[62px] font-medium leading-none tracking-tighter text-white max-w-4xl px-1">
              Provable Proof. <br />
              <span className="text-white/20 italic font-light">The High-Impact Gallery.</span>
           </h1>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR (Premium Minimal) */}
      <section className="pb-12 px-6 border-b border-white/5 bg-black/50 backdrop-blur-3xl sticky top-[80px] z-[100]">
         <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-8 py-8 items-center justify-start xl:justify-center overflow-x-auto scrollbar-hide no-scrollbar">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 whitespace-nowrap relative py-2 ${filter === cat ? 'text-[#E6FF00]' : 'text-white/20 hover:text-white/40'}`}
                 >
                   {cat}
                   {filter === cat && (
                     <motion.div layoutId="filterDot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E6FF00]" />
                   )}
                 </button>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3 — PROJECT GRID */}
      <section className="py-24 px-6 md:px-12 bg-black">
         <div className="container mx-auto max-w-[1700px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
               <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative aspect-[12/14] border border-white/5 overflow-hidden"
                    >
                       <Link href={`/work/${project.id}`} className="block w-full h-full cursor-none-custom">
                          <img 
                            src={project.image} 
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-[1.05] group-hover:scale-100" 
                            alt={project.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                          
                          {/* Overlay Info */}
                          <div className="absolute bottom-10 left-10 p-2 overflow-hidden">
                             <span className="text-[#E6FF00] text-[9px] font-bold tracking-[0.4em] mb-4 block translate-y-20 group-hover:translate-y-0 transition-transform duration-700">{project.type}</span>
                             <h3 className="text-white text-[24px] md:text-[32px] font-medium tracking-tighter mb-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-700 delay-75">{project.title}</h3>
                             <div className="flex gap-4 items-center translate-y-20 group-hover:translate-y-0 transition-transform duration-700 delay-150">
                                <span className="text-white/30 text-[11px] font-bold uppercase tracking-widest">{project.category}</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E6FF00] group-hover:text-black transition-all">
                                   <ArrowUpRight className="w-4 h-4" />
                                </div>
                             </div>
                          </div>
                       </Link>
                    </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* SECTION 4 — FOOTER CTA (Boxed) */}
      <section className="py-64 text-center border-t border-white/5">
         <div className="container mx-auto">
            <h2 className="text-[32px] md:text-[52px] font-medium text-white mb-20 tracking-tight leading-none px-4 max-w-3xl mx-auto">
               Your project could <br /> be the next <span className="italic text-white/30">excellence benchmark</span>.
            </h2>
            <Link 
              href="/contact" 
              className="group/btn relative inline-flex items-center justify-center bg-[#E6FF00] px-12 py-5 rounded-full text-black text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:scale-[1.05]"
            >
              Start Deployment
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}

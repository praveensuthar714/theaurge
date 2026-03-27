'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BookOpen, Quote, Sparkles, Target } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const articles = [
  { id: 1, title: 'The Psychology of High-End Brand Storytelling.', date: 'Mar 18, 2026', category: 'Thinking', desc: 'Why the top 1% of brands use cinematic narrative to build institutional trust and legacy.', image: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png' },
  { id: 2, title: 'Measuring ROI in the AI-Automated Era.', date: 'Mar 15, 2026', category: 'Strategy', desc: 'A deep dive into cross-platform attribution in high-friction digital environments.', image: '/ai-marketing/imgi_1_cf43af844d6a97f588b639f2592e3667143f308c-900x1104.png' },
  { id: 3, title: 'The Death of the Traditional Creative Agency.', date: 'Mar 12, 2026', category: 'Ecosystem', desc: 'Why specialized production houses are replacing generic marketing agencies in 2026.', image: '/capabilities/digital-experiences.png' },
];

export default function JournalPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (Reduced Bulkiness) */}
      <section className="pt-44 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
           <span className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase mb-10 block">the Journal</span>
           <h1 className="text-[38px] md:text-[62px] font-medium leading-[1.05] tracking-tighter text-white max-w-4xl px-1">
              Articles. Content. Thinking at Scale.
           </h1>
        </div>
      </section>

      {/* SECTION 2 — FEATURED PIECE */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl">
            <Link href="/blog/1" className="flex flex-col lg:flex-row gap-20 items-center group">
               <div className="lg:w-1/2 aspect-[16/10] rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 bg-neutral-900">
                  <img src={articles[0].image} className="w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-1000" alt="Featured" />
               </div>
               <div className="lg:w-1/2">
                  <span className="text-[#E6FF00] text-[9px] font-bold tracking-[0.4em] uppercase mb-8 block">Featured Article</span>
                  <h2 className="text-white text-[28px] md:text-[42px] font-medium tracking-tight mb-8 group-hover:text-[#E6FF00] transition-colors leading-tight">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/30 text-[16px] md:text-[18px] max-w-lg mb-12 leading-relaxed font-light">
                    {articles[0].desc}
                  </p>
                  <div className="flex items-center gap-10">
                     <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">{articles[0].date}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                     <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">12 Min Read</span>
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* SECTION 3 — ARCHIVE LIST (Premium Table Style) */}
      <section className="py-24 px-6 md:px-12 bg-black">
         <div className="container mx-auto max-w-7xl">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-20 opacity-20">Archives</h3>
            <div className="flex flex-col gap-0">
               {articles.slice(1).map((art, i) => (
                 <Link key={i} href={`/blog/${art.id}`} className="group py-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 transition-all hover:px-6">
                    <div className="flex gap-12 items-center flex-grow">
                       <span className="text-white/10 text-[10px] font-bold font-mono group-hover:text-[#E6FF00] transition-colors">0{i+2}</span>
                       <div className="flex flex-col gap-2">
                          <h4 className="text-white text-[20px] md:text-[24px] font-medium tracking-tight group-hover:text-white transition-colors">{art.title}</h4>
                          <span className="text-white/20 text-[11px] uppercase tracking-[0.3em] font-bold">{art.category}</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-12 shrink-0">
                       <span className="text-white/20 text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-12 group-hover:translate-x-0 transition-transform duration-700">{art.date}</span>
                       <div className="w-12 h-12 rounded-full border border-white/5 group-hover:border-[#E6FF00] flex items-center justify-center transition-all group-hover:rotate-45">
                          <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[#E6FF00] transition-all" />
                       </div>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4 — NEWSLETTER / INPUT (Reduced bulkiness) */}
      <section className="py-64 text-center border-t border-white/5 relative overflow-hidden bg-[#050505]">
          <div className="container mx-auto px-6 relative z-10">
             <span className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-bold mb-10 block">the Thinking Hub</span>
             <h2 className="text-[32px] md:text-[42px] font-light text-white mb-20 tracking-tighter leading-tight max-w-2xl mx-auto px-4">
                Receive our strategic thinking directly in your lab.
             </h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-xl mx-auto border-b border-white/10 pb-4 overflow-hidden group">
                <input 
                  type="email" 
                  placeholder="DEPLOY@SYSTEM.EXE" 
                  className="bg-transparent border-none text-white text-[12px] font-bold tracking-[0.4em] uppercase p-4 focus:ring-0 w-full placeholder:text-white/10 text-center md:text-left focus:outline-none"
                />
                <button className="text-[#E6FF00] text-[10px] font-bold tracking-[0.4em] uppercase px-10 py-4 hover:translate-x-2 transition-transform duration-700">SUBMIT</button>
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#E6FF00]/[0.02] rounded-full blur-[180px] pointer-events-none" />
      </section>

      <Footer />
    </main>
  );
}

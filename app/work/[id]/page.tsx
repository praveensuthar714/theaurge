'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ArrowRight, Play, ExternalLink, Share2, ChevronRight, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <main className="bg-black min-h-screen">
      <Header />
      
      {/* SECTION 1 — HERO (Case Study Info) */}
      <section className="pt-44 pb-32 px-6 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
           <Link href="/work" className="inline-flex items-center gap-3 text-white/40 hover:text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-20 transition-all group">
             <div className="w-8 h-8 rounded-[4px] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowLeft className="w-3.5 h-3.5" />
             </div>
             Back to Archive
           </Link>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-8">
                 <span className="text-[#E6FF00] text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">Case Study Archive</span>
                 <h1 className="text-[48px] md:text-[82px] font-light leading-[1] tracking-tighter text-white max-w-4xl px-1">
                    Lumina Noir. <br />
                    Redefining Presence.
                 </h1>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-8 border-l border-white/5 pl-12 h-fit mb-12">
                 {[
                   { l: "Client", v: "Lumina Global" },
                   { l: "Role", v: "Creative Ecosystem" },
                   { l: "Year", v: "2024" }
                 ].map((meta, i) => (
                   <div key={i} className="flex flex-col gap-2">
                      <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">{meta.l}</span>
                      <span className="text-white text-[16px] md:text-[20px] font-medium tracking-tight uppercase leading-tight">{meta.v}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2 — THE STRATEGY & THE PROBLEM */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
               <div className="lg:col-span-4">
                  <h2 className="text-white text-[32px] md:text-[42px] font-medium tracking-tight mb-8">The Challenge.</h2>
                  <p className="text-white/40 text-[16px] md:text-[18px] leading-relaxed mb-12">
                     Lumina Global needed a visual identity that could bridge the gap between their heritage and the future of sustainable tech. Their presence was fractured across fragmented channels.
                  </p>
               </div>
               <div className="lg:col-span-8 text-center bg-black/60 p-12 md:p-32 rounded-[4px] border border-white/5 relative overflow-hidden">
                  <h3 className="text-white text-[24px] md:text-[48px] font-light leading-tight tracking-tight mb-16 relative z-10">
                     "We didn't just design a logo. We engineered a visual system that <span className="text-[#E6FF00]">lives and breathes</span> across every touchpoint."
                  </h3>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6FF00]/10 rounded-full blur-[120px] pointer-events-none" />
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 3 — EXECUTION (Media Showcase) */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-[16/11] rounded-[4px] overflow-hidden border border-white/10 group grayscale transition-all duration-1000 bg-white/[0.03] animate-shimmer"
              >
                 <img src="/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png" className="w-full h-full object-cover" alt="Execution" loading="lazy" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[16/11] rounded-[4px] overflow-hidden border border-white/10 group grayscale transition-all duration-1000 bg-white/[0.03] animate-shimmer"
              >
                 <img src="/capabilities/digital-experiences.png" className="w-full h-full object-cover" alt="Execution" loading="lazy" />
              </motion.div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 0.4, scale: 1 }}
             whileHover={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="aspect-[21/9] rounded-[4px] overflow-hidden border border-white/10 bg-black group relative cursor-pointer"
           >
              <img src="/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png" className="w-full h-full object-cover grayscale transition-all duration-[2s]" alt="Full Width Display" loading="lazy" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-black" />
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* SECTION 4 — RESULTS / IMPACT */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#080808]">
         <div className="container mx-auto max-w-7xl">
            <h2 className="text-white text-[32px] md:text-[42px] font-medium tracking-tight mb-24 text-center">Outcome Benchmarks.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { v: "+150%", l: "Brand Engagement" },
                 { v: "2.5M", l: "System Impressions" },
                 { v: "14", l: "Market Expansions" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center gap-6 group">
                    <span className="text-[#E6FF00] text-[48px] md:text-[72px] font-light tracking-tighter group-hover:scale-110 transition-transform">{stat.v}</span>
                    <span className="text-white/20 text-[11px] uppercase tracking-[0.6em] font-bold group-hover:text-white transition-colors">{stat.l}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION / NEXT PROJECT */}
      <section className="py-64 text-center">
         <div className="container mx-auto px-6">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-bold mb-12 block">NEXT CASE STUDY</p>
            <Link href="/work/2" className="group block mb-24">
               <h2 className="h-xl !mb-0 px-8 group-hover:text-white/30 transition-colors">
                  Aether Flow. Frontier Scale.
               </h2>
            </Link>
            
            <PremiumButton href="/contact" className="scale-125 md:scale-150">
               Deploy similar system
            </PremiumButton>
         </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();

  return (
    <main className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-44 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-3 text-white/40 hover:text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-20 transition-all group">
            <div className="w-8 h-8 rounded-[4px] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft className="w-3.5 h-3.5" />
            </div>
            Back to Journal
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-6 text-[#E6FF00] text-[11px] font-bold uppercase tracking-[0.3em] mb-10">
               <span>Studio Insight</span>
               <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
               <span className="flex items-center gap-2.5"><Clock className="w-4 h-4" /> 6 Min Read</span>
            </div>
            <h1 className="text-4xl md:text-[62px] lg:text-[72px] font-medium tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent mb-12 py-1">
              The Future of Cinematic <br /> Web Narrative.
            </h1>
            <div className="flex items-center gap-6">
               <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
               </div>
               <div>
                  <p className="text-white text-[16px] font-medium leading-none mb-1.5">Julian Vance</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Creative Director</p>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 mb-32">
          <div className="aspect-[21/9] rounded-[4px] overflow-hidden border border-white/5 bg-neutral-900">
             <img 
               src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
               alt="Article Visual" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto max-w-3xl px-6 mb-40">
           <article className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-[20px] leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-[#E6FF00] first-letter:mr-3 first-letter:float-left">
                 In the rapidly evolving digital landscape, the distinction between cinema and web design is blurring. We are moving away from static layouts and towards fluid, narrative-driven experiences that react to user intent. This shift requires a fundamental rethinking of how we approach interface architecture.
              </p>
              
              <h2 className="text-white text-[32px] font-medium mt-20 mb-10 tracking-tight">The Illusion of Depth</h2>
              <p className="text-white/40 text-[18px] leading-relaxed mb-8">
                 Cinematic narrative relies on the manipulation of time and space. When we apply these principles to the web, we use parallax, layered depth, and intentional pacing to guide the user through a brand's story. It's no longer about just presenting information; it's about staging an event.
              </p>

              <blockquote className="border-l-4 border-[#E6FF00] pl-10 my-20">
                 <p className="text-white text-[28px] italic font-light leading-relaxed">
                   "A great website should feel less like a document and more like a sequence from a film you love."
                 </p>
              </blockquote>

              <h2 className="text-white text-[32px] font-medium mt-20 mb-10 tracking-tight">Engineering Emotion</h2>
              <p className="text-white/40 text-[18px] leading-relaxed mb-8">
                 Technology is our lens. By utilizing high-performance frameworks and GPU-accelerated animations, we can create friction-less motion that feels organic. This technical precision is what allows the creative vision to be felt by the user, rather than just seen.
              </p>
           </article>

           {/* Social Sharing */}
           <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                 <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">Share Article</span>
                 <div className="flex items-center gap-4">
                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 rounded-[4px] border border-white/5 flex items-center justify-center text-white/40 hover:text-[#E6FF00] hover:border-[#E6FF00]/30 transition-all duration-500">
                         <Icon className="w-4 h-4" />
                      </button>
                    ))}
                 </div>
              </div>
              <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em] font-bold">
                 <Share2 className="w-4 h-4" /> Copy Link
              </button>
           </div>
        </div>
      </section>

      {/* More from Journal */}
      <section className="py-40 bg-[#080808] border-t border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-20">
               <h2 className="text-white text-[32px] font-medium tracking-tight">More from Journal</h2>
               <Link href="/blog" className="text-[10px] text-[#E6FF00] uppercase tracking-[0.3em] font-bold border-b border-[#E6FF00]/30 pb-1 hover:border-[#E6FF00] transition-all">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Simplified Article Cards */}
               {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="aspect-[16/9] rounded-[4px] overflow-hidden mb-8 border border-white/5">
                        <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     </div>
                     <h3 className="text-white text-[24px] font-medium leading-tight group-hover:text-[#E6FF00] transition-colors">Brand Architecture in the Age of AI</h3>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (Reduced bulkiness) */}
      <section className="pt-44 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
           <span className="text-[#E6FF00] text-[10px] font-bold tracking-[0.6em] uppercase mb-10 block opacity-50">Connection Hub</span>
           <h1 className="text-[38px] md:text-[62px] font-medium leading-[1.1] tracking-tighter text-white max-w-4xl px-1">
              Let's architect <br />
              <span className="text-white/20 italic font-light">your brand legacy.</span>
           </h1>
        </div>
      </section>

      {/* SECTION 2 — FORM & INFO GRID (Clean Minimal) */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
               <div className="p-10 md:p-14 rounded-[4px] border border-white/5 bg-black/40 backdrop-blur-3xl">
                  <form className="flex flex-col gap-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-3">
                           <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Identity</label>
                           <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/5" />
                        </div>
                        <div className="flex flex-col gap-3">
                           <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Digital Coordinates</label>
                           <input type="email" placeholder="Email@ecosystem.com" className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/5" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4">
                        <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Primary Objective</label>
                        <div className="flex flex-wrap gap-3">
                           {['Brand Identity', 'Video Production', 'Web Systems', 'Growth Strategy', 'AI Synthesis'].map(cat => (
                             <button key={cat} type="button" className="px-6 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/20 hover:border-[#E6FF00] hover:text-[#E6FF00] transition-all">{cat}</button>
                           ))}
                        </div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Requirement Log</label>
                        <textarea placeholder="Briefly describe your vision..." rows={4} className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all resize-none placeholder:text-white/5" />
                     </div>
                     <button className="group/btn relative inline-flex items-center justify-between gap-10 bg-[#E6FF00] pl-10 pr-1 py-1 rounded-full text-black text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:scale-[1.05] mt-10">
                        <span className="pl-2">Deploy Inquiry</span>
                        <div className="relative w-12 h-12 rounded-full bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-20 group-hover/btn:bg-black text-black group-hover/btn:text-white">
                           <ArrowRight className="w-5 h-5 -translate-x-10 opacity-0 absolute transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                           <ArrowRight className="w-5 h-5 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
                        </div>
                     </button>
                  </form>
               </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-12 pt-10">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold mb-4">Direct Sync</span>
                  <div className="flex flex-col gap-8">
                     <div className="flex gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-[4px] border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-[#E6FF00] group-hover:text-black transition-all">
                           <Mail className="w-5 h-5" />
                        </div>
                        <div>
                           <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Electronic Mail</span>
                           <span className="text-white text-[16px] font-medium tracking-tight">hello@theaurge.com</span>
                        </div>
                     </div>
                     <div className="flex gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-[4px] border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-[#E6FF00] group-hover:text-black transition-all">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Global HQ</span>
                           <span className="text-white text-[16px] font-medium tracking-tight">Maharashtra, India</span>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="p-10 rounded-[4px] border border-white/5 bg-white/[0.01] mt-auto">
                  <Sparkles className="w-6 h-6 text-[#E6FF00] mb-6 opacity-30" />
                  <h4 className="text-white text-[18px] font-medium tracking-tight mb-4 leading-tight">Fast-track your <br /> project deployment.</h4>
                  <p className="text-white/20 text-[14px] leading-relaxed mb-6">Our system is designed to respond within 24 business hours to high-intent inquiries.</p>
               </div>
            </div>

         </div>
      </section>

      <Footer />
    </main>
  );
}

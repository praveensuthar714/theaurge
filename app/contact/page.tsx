'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  
  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (Reduced bulkiness) */}
      <section className="pt-44 pb-20">
        <div className="section-container">
           <span className="subtitle-premium">Connection Hub</span>
           <h1 className="h-lg max-w-4xl px-1">
              Let's architect your brand legacy.
           </h1>
        </div>
      </section>

      {/* SECTION 2 — FORM & INFO GRID (Clean Minimal) */}
      <section className="section-v-spacing relative overflow-hidden">
         <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-24 font-light">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
                <div className="p-10 md:p-14 glass-panel bg-white/[0.02]">
                   <form className="flex flex-col gap-10">
                      <div className="flex flex-col gap-10">
                         {/* Name - Full Row */}
                         <div className="flex flex-col gap-3">
                            <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70">Full Name</label>
                            <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 px-6 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/30" />
                         </div>

                         {/* Email & Phone - Half Row */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-3">
                               <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70">Email Address</label>
                               <input type="email" placeholder="Email@example.com" className="bg-white/5 border border-white/10 px-6 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/30" />
                            </div>
                            <div className="flex flex-col gap-3">
                               <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70">Phone Number</label>
                               <input type="tel" placeholder="+91 00000 00000" className="bg-white/5 border border-white/10 px-6 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/30" />
                            </div>
                         </div>
                      </div>

                      <div className="flex flex-col gap-4">
                         <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70">Service Needed</label>
                         <div className="flex flex-wrap gap-3">
                            {['Brand Identity', 'Video Production', 'Web Systems', 'Growth Strategy', 'AI Synthesis'].map(cat => (
                              <button 
                                key={cat} 
                                type="button" 
                                onClick={() => toggleService(cat)}
                                className={`px-6 py-3 rounded-none border transition-all text-[10px] uppercase tracking-widest ${
                                  selectedServices.includes(cat) 
                                    ? 'bg-[#E6FF00] border-[#E6FF00] text-black font-bold' 
                                    : 'bg-white/5 border-white/20 text-white/60 hover:border-[#E6FF00] hover:text-[#E6FF00]'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                         </div>
                      </div>
                      <div className="flex flex-col gap-3">
                         <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70">Message</label>
                         <textarea placeholder="Tell us about your project..." rows={4} className="bg-white/5 border border-white/10 px-6 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all resize-none placeholder:text-white/30" />
                      </div>
                      <PremiumButton type="submit" className="!pl-10 mt-10 w-full md:w-fit">
                         Send Message
                      </PremiumButton>
                   </form>
                </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-12 pt-10">
               <div className="flex flex-col gap-4">
                  <span className="subtitle-premium">Direct Sync</span>
                  <div className="flex flex-col gap-8">
                     <div className="flex gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                           <Mail className="w-5 h-5" />
                        </div>
                        <div>
                           <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Electronic Mail</span>
                           <span className="text-white text-[16px] font-medium tracking-tight">hello@theaurge.com</span>
                        </div>
                     </div>
                     <div className="flex gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Global HQ</span>
                           <span className="text-white text-[16px] font-medium tracking-tight">Maharashtra, India</span>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="p-10 glass-panel !bg-white/[0.01] mt-auto">
                  <Sparkles className="w-6 h-6 text-accent mb-6 opacity-30" />
                  <h4 className="h-sm mb-4 leading-tight">Fast-track your <br /> project deployment.</h4>
                  <p className="body-text mb-6">Our system is designed to respond within 24 business hours to high-intent inquiries.</p>
               </div>
            </div>

         </div>
      </section>

      <Footer />
    </main>
  );
}

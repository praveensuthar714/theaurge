'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const footerData = {
  solutions: [
    { name: "Creative Production", href: "/services" },
    { name: "Website Experience", href: "/services" },
    { name: "Video Production", href: "/services" },
    { name: "AI Automation", href: "/services" },
    { name: "Growth Strategy", href: "/services" },
  ],
  studio: [
    { name: "Portfolio", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-4 h-4" /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-4 h-4" /> },
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden">
      
      {/* ── SAFETY BACKGROUND LAYER (UNMISSABLE) ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="/Footerbg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* TOP BLEND: Gradient patch to merge with body */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#050505] to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        
        {/* TOP ROW: BRAND & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-24">
          <div className="max-w-xl">
             <Link href="/" className="inline-block mb-8">
               <img 
                 src="/the-Aurge-e1754069744650.png" 
                 alt="theAurge" 
                 className="h-9 md:h-11 w-auto object-contain brightness-110"
               />
             </Link>
             <h3 className="text-2xl md:text-3xl font-medium text-white/90 leading-snug tracking-tight max-w-sm md:max-w-md">
               Crafting high-precision cinematic digital experiences for global leaders.
             </h3>
          </div>

          <Link
            href="/contact"
            className="group relative flex items-center gap-6 bg-[#E6FF00] pl-7 pr-1 py-1 rounded-none text-black text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(230,255,0,0.2)]"
          >
            <span className="pl-1">Get in Touch</span>
            <div className="relative w-10 h-10 rounded-none bg-black flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:w-14 group-hover:bg-black text-white">
              <ArrowRight className="w-4 h-4 -translate-x-5 opacity-0 absolute transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              <ArrowRight className="w-4 h-4 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover:translate-x-5 group-hover:opacity-0" />
            </div>
          </Link>
        </div>

        {/* MIDDLE ROW: NAVIGATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24 border-t border-white/5 pt-16">
          <div className="lg:col-span-3">
             <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Solutions</h4>
             <ul className="space-y-4">
               {footerData.solutions.map((item, i) => (
                 <li key={i}>
                   <Link href={item.href} className="text-white/40 hover:text-[#E6FF00] text-[14px] transition-all duration-300">
                     {item.name}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-3">
             <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Studio</h4>
             <ul className="space-y-4">
               {footerData.studio.map((item, i) => (
                 <li key={i}>
                   <Link href={item.href} className="text-white/40 hover:text-[#E6FF00] text-[14px] transition-all duration-300">
                     {item.name}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-3">
             <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
             <div className="space-y-6">
               <a href="mailto:hello@theaurge.com" className="text-white group block">
                  <span className="text-white/40 block text-[10px] uppercase mb-1">Email</span>
                  <span className="text-[16px] group-hover:text-[#E6FF00] transition-colors underline underline-offset-4 decoration-white/10">hello@theaurge.com</span>
               </a>
               <div className="flex items-center gap-4">
                  {footerData.social.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="w-9 h-9 border border-white/5 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
               </div>
             </div>
          </div>

          <div className="lg:col-span-3 lg:text-right flex flex-col items-start lg:items-end">
             <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Location</h4>
             <p className="text-white/40 text-[14px] leading-relaxed">
               Maharashtra, India <br />
               Global Operations Hub <br />
               Remote First Studio.
             </p>
          </div>
        </div>

        {/* BOTTOM ROW: LEGAL */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-8 text-[11px] text-white/20 font-medium">
             <span>&copy; {new Date().getFullYear()} The Aurge</span>
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
           </div>

           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="flex items-center gap-4 group"
           >
             <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors">Origins</span>
             <div className="relative w-10 h-10 border border-white/5 rounded-none flex items-center justify-center overflow-hidden text-white/20 group-hover:border-[#E6FF00] group-hover:text-[#E6FF00] transition-all">
                <ArrowUpRight className="w-4 h-4 -translate-x-5 -translate-y-[-5px] opacity-0 absolute transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                <ArrowUpRight className="w-4 h-4 translate-x-0 translate-y-0 opacity-100 absolute transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-[-5px] group-hover:opacity-0" />
             </div>
           </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

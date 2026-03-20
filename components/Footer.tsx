'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerLinks = [
  {
    title: "Studio",
    links: [
      { name: "Work", href: "/work" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Journal", href: "/blog" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Video Production", href: "/services" },
      { name: "Brand Identity", href: "/services" },
      { name: "Web Experiences", href: "/services" },
      { name: "Digital Strategy", href: "/services" },
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Facebook", href: "https://facebook.com" },
    ]
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E6FF00]/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16 lg:gap-0">
          
          {/* Logo & Manifesto Short */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-10">
              <img 
                src="/the-Aurge-e1754069744650.png" 
                alt="theAurge Logo" 
                className="h-10 md:h-12 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-white/40 text-[15px] max-w-sm leading-relaxed mb-10">
              We are a premium creative studio dedicated to crafting cinematic digital experiences that bridge the gap between imagination and reality.
            </p>
            <div className="flex items-center gap-5">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-[4px] border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-500">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">{group.title}</h4>
                <ul className="flex flex-col gap-5">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link 
                        href={link.href} 
                        className="text-white/40 hover:text-white transition-colors duration-500 text-[13px] font-medium flex items-center group/link"
                      >
                        {link.name}
                        {link.href.startsWith('http') && <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-500" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">
            &copy; {new Date().getFullYear()} theAurge Studio / All Rights Reserved
          </div>
          
          <div className="flex items-center gap-10">
             <Link href="/privacy" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-[0.3em] font-medium">Privacy</Link>
             <Link href="/terms" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-[0.3em] font-medium">Terms</Link>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
             <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium group-hover:text-white transition-colors">Back to top</span>
             <div className="w-8 h-8 rounded-[4px] border border-white/10 flex items-center justify-center text-white/30 group-hover:border-white transition-all duration-500 group-hover:-translate-y-1">
                <ArrowUpRight className="w-3 h-3" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

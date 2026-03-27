'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Sparkles, Monitor, Video, Layers } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const navItems = [
  { name: 'Portfolio', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const serviceCategories = [
  {
    title: "Creative",
    items: [
      { name: "Video Production", slug: "video-production" },
      { name: "Photography", slug: "photography" },
      { name: "Brand Identity", slug: "brand-identity-design" },
    ]
  },
  {
    title: "Digital",
    items: [
      { name: "Website Development", slug: "web-development" },
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "SEO Optimization", slug: "seo" },
    ]
  },
  {
    title: "Marketing",
    items: [
      { name: "Performance Marketing", slug: "marketing" },
      { name: "AI Marketing", slug: "ai-marketing" },
      { name: "Inbound Messaging", slug: "inbound-messaging" },
    ]
  },
  {
    title: "Strategy",
    items: [
      { name: "Business Consultancy", slug: "business-consultancy" },
      { name: "AI Automation", slug: "ai-automation" },
      { name: "Growth Strategy", slug: "growth-strategy" },
    ]
  }
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[200] pt-4 px-4 md:px-6 lg:px-12 transition-all duration-700 pointer-events-none"
      >
        <div className="max-w-[1700px] mx-auto flex items-center justify-between pointer-events-auto">
          
          <Link href="/" className="shrink-0 flex items-center group overflow-hidden">
            <img 
              src="/the-Aurge-e1754069744650.png" 
              alt="theAurge Logo" 
              className="h-8 md:h-[35px] lg:h-[42px] w-auto object-contain transition-all duration-700 group-hover:scale-[1.03] origin-left opacity-95 group-hover:opacity-100"
              style={{ filter: isMegaMenuOpen ? 'invert(0)' : 'none' }}
            />
          </Link>

          {/* Navigation Capsule — REFINED AS PER SCREENSHOT */}
          <div className="hidden xl:flex items-center px-10 py-3 rounded-none bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-2xl transition-all duration-700 hover:bg-black/20">
            <nav 
              className="flex items-center gap-14 relative"
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => item.name === 'Services' ? setIsMegaMenuOpen(true) : null}
                  className={`relative group text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 py-1 ${isMegaMenuOpen && item.name === 'Services' ? 'text-[#E6FF00]' : 'text-white/80 hover:text-[#E6FF00]'}`}
                >
                  {item.name === 'Services' ? (
                    <div className="flex items-center gap-1 focus:outline-none">
                      {item.name}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isMegaMenuOpen ? 'rotate-180 text-[#E6FF00]' : ''}`} />
                    </div>
                  ) : (
                    item.name
                  )}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] rounded-full bg-[#E6FF00] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100 ${isMegaMenuOpen && item.name === 'Services' ? 'w-full opacity-100' : ''}`} />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section — CTA */}
          <div className="shrink-0 flex items-center gap-3">
            <PremiumButton href="/contact">
              Get in Touch
            </PremiumButton>

            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex flex-col gap-1.5 cursor-pointer group p-2 relative z-[210] focus:outline-none xl:hidden"
            >
              <div className={`w-8 h-[1.5px] bg-white transition-all duration-500 ${isMegaMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-[1.5px] bg-white transition-all duration-500 ml-auto ${isMegaMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-8 h-[1.5px] bg-white transition-all duration-500 ${isMegaMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── REFINED COMPACT MEGA MENU ── */}
      <motion.div
        initial={false}
        animate={isMegaMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -20, pointerEvents: 'none' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[150] h-auto max-h-[85vh] overflow-hidden pt-[100px]"
      >
        {/* Backdrop / Glass layer - Contained height */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[80px] border-b border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]" />
        
        <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-12 lg:py-16 overflow-y-auto max-h-[calc(85vh-100px)]">
          
            {/* CATEGORIZED SERVICES GRID (Full Width) */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
              {serviceCategories.map((cat, catIdx) => (
                <div key={cat.title} className="flex flex-col gap-8">
                  <span className="text-[#E6FF00] text-[9px] font-bold uppercase tracking-[0.5em] opacity-40">
                    {cat.title}
                  </span>
                  <div className="flex flex-col gap-5">
                    {cat.items.map((item, idx) => (
                      <Link 
                        key={item.name}
                        href={`/services/${item.slug}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="group flex items-center gap-2 text-white/50 text-[13px] md:text-[14px] font-medium transition-all duration-300 hover:text-[#E6FF00]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          {/* MOBILE MAIN NAVIGATION (Integrated for Mobile Screens) */}
          <div className="xl:hidden flex flex-col gap-6 mt-16 pt-12 border-t border-white/5 text-center">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMegaMenuOpen(false)}
                className="text-white text-xl font-light tracking-widest uppercase hover:text-[#E6FF00] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default Header;

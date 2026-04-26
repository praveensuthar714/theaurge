'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { PremiumButton } from '@/components/ui/PremiumButton';

const ArrowRight = dynamic(() => import('lucide-react').then(mod => mod.ArrowRight));
const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown));
const ChevronRight = dynamic(() => import('lucide-react').then(mod => mod.ChevronRight));
const Sparkles = dynamic(() => import('lucide-react').then(mod => mod.Sparkles));
const Monitor = dynamic(() => import('lucide-react').then(mod => mod.Monitor));
const Video = dynamic(() => import('lucide-react').then(mod => mod.Video));
const Layers = dynamic(() => import('lucide-react').then(mod => mod.Layers));

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
        className={`fixed top-0 left-0 w-full z-[200] pt-5 pb-5 px-4 md:px-6 lg:px-12 transition-all duration-700 pointer-events-none ${
          isScrolled ? 'bg-black/60 backdrop-blur-xl shadow-2xl' : ''
        }`}
      >
        <div className="max-w-[1700px] mx-auto flex items-center justify-between pointer-events-auto">
          
          <Link href="/" className="shrink-0 flex items-center group overflow-hidden">
            <NextImage 
              src="/the-Aurge-e1754069744650.png" 
              alt="theAurge Logo" 
              width={160}
              height={42}
              priority
              className="h-8 md:h-[35px] lg:h-[42px] w-auto object-contain transition-all duration-700 group-hover:scale-[1.03] origin-left opacity-95 group-hover:opacity-100"
              style={{ filter: isMegaMenuOpen ? 'invert(0)' : 'none' }}
            />
          </Link>

          <div className="hidden xl:flex items-center px-10 py-3 rounded-none bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-2xl transition-all duration-700 hover:bg-black/20">
            <nav className="flex items-center gap-14 relative">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 py-1 text-white/80 hover:text-[#E6FF00]"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] rounded-full bg-[#E6FF00] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
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
        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-3xl overflow-y-auto pt-[100px] pb-12 px-6"
      >
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Main Navigation (Always visible in Mega Menu) */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <span className="text-accent text-[9px] font-bold tracking-[0.4em] uppercase opacity-40 mb-2">Navigation</span>
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMegaMenuOpen(false)}
                className="text-white text-3xl md:text-5xl font-medium tracking-tight hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Service Taxonomy (Visible in Mega Menu) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <span className="text-white/20 text-[9px] font-bold tracking-[0.4em] uppercase border-l-2 border-accent/20 pl-4">{cat.title}</span>
                <div className="flex flex-col gap-3">
                  {cat.items.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="text-white/60 hover:text-white text-[13px] md:text-[15px] font-medium transition-colors flex items-center group"
                    >
                      {service.name}
                      <ChevronRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default Header;

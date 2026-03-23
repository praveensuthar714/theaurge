'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Sparkles, Monitor, Video, Layers } from 'lucide-react';

const navItems = [
  { name: 'Portfolio', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

const serviceItems = [
  { name: "Video Production", slug: "video-production" },
  { name: "Brand Identity Design", slug: "brand-identity-design" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Photography", slug: "photography" },
  { name: "Business Consultancy", slug: "business-consultancy" },
  { name: "Web Development", slug: "web-development" },
  { name: "Performance Marketing", slug: "performance-marketing" },
  { name: "SEO", slug: "seo" },
  { name: "AI Marketing", slug: "ai-marketing" },
  { name: "Event Marketing", slug: "event-marketing" },
  { name: "Offline Marketing", slug: "offline-marketing" },
  { name: "Inbound Messaging", slug: "inbound-messaging" },
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
            <nav className="flex items-center gap-14 relative">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.name === 'Services' ? setIsMegaMenuOpen(!isMegaMenuOpen) : null}
                  className={`relative group text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 py-1 ${isMegaMenuOpen && item.name === 'Services' ? 'text-[#E6FF00]' : 'text-white/80 hover:text-[#E6FF00]'}`}
                >
                  {item.name === 'Services' ? (
                    <div className="flex items-center gap-1 focus:outline-none">
                      {item.name}
                    </div>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] rounded-full bg-[#E6FF00] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100 ${isMegaMenuOpen && item.name === 'Services' ? 'w-full opacity-100' : ''}`} />
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section — CTA */}
          <div className="shrink-0 flex items-center gap-3">
            <Link 
              href="/contact" 
              className="group/btn relative flex items-center justify-between gap-5 bg-[#E6FF00] pl-6 pr-1 py-1 rounded-none text-black text-[10px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="pl-1">Start a Project</span>
              <div className="relative w-8 h-8 rounded-none bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-12 group-hover/btn:bg-black text-black group-hover/btn:text-white">
                <ArrowRight className="w-3.5 h-3.5 -translate-x-4 opacity-0 absolute transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                <ArrowRight className="w-3.5 h-3.5 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/btn:translate-x-4 group-hover/btn:opacity-0" />
              </div>
            </Link>

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

      {/* ── PREMIUM FULL-SCREEN MEGA MENU (REBUILT FOR 12 SERVICES) ── */}
      <motion.div
        initial={false}
        animate={isMegaMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -40, pointerEvents: 'none' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[150] bg-black/98 backdrop-blur-[60px] pt-36 pb-20 px-6 lg:px-12 overflow-y-auto overflow-x-hidden"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[#E6FF00] text-[9px] font-bold uppercase tracking-[0.6em] mb-4 block opacity-50">Ecosystem</span>
            <h3 className="text-white text-[24px] md:text-[32px] font-light tracking-tight">Our High-Impact Solutions.</h3>
          </div>

          {/* Mobile Main Navigation */}
          <div className="xl:hidden flex flex-col gap-6 mb-16 text-center border-b border-white/10 pb-12">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMegaMenuOpen(false)}
                className="text-white text-2xl font-light tracking-widest uppercase hover:text-[#E6FF00] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pb-20">
            {serviceItems.map((svc, idx) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isMegaMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
              >
                <Link 
                  href={`/services/${svc.slug}`}
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="group relative flex items-center justify-between p-7 lg:p-10 rounded-none bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#E6FF00]/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="flex flex-col gap-1 relative z-10">
                    <span className="text-white text-[13px] md:text-[14px] font-bold uppercase tracking-widest group-hover:text-white group-hover:translate-x-1 transition-all">
                      {svc.name.includes(' ') ? (
                        <>
                          {svc.name.split(' ')[0]} <br />
                          {svc.name.split(' ').slice(1).join(' ')}
                        </>
                      ) : svc.name}
                    </span>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#E6FF00] group-hover:border-[#E6FF00] group-hover:rotate-[-45deg]">
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" />
                  </div>

                  {/* Kinetic Shadow Background (Subtle) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action or Footer inside Mega Menu */}
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
             <div className="flex flex-col gap-1">
                <span className="text-white text-[16px] font-medium tracking-tight">Ready to activate your brand?</span>
                <span className="text-white/20 text-[11px] tracking-widest font-bold uppercase">Let's build something extraordinary.</span>
             </div>
             <Link 
              href="/contact" 
              onClick={() => setIsMegaMenuOpen(false)}
              className="flex items-center gap-4 text-[#E6FF00] group"
             >
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Start Deployment</span>
                <div className="w-10 h-10 rounded-full border border-[#E6FF00]/20 flex items-center justify-center group-hover:bg-[#E6FF00] group-hover:text-black transition-all">
                   <ArrowRight className="w-4 h-4" />
                </div>
             </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;

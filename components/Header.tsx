'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Sparkles, Monitor, Video, Layers } from 'lucide-react';

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Studio', href: '/about' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('creativeProduction');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const megaMenuData: Record<string, any> = {
    creativeProduction: {
      id: 'creativeProduction',
      title: "01. Creative Production",
      label: "Visual Narrative",
      services: [
        { 
          name: "Video Production", 
          slug: "video-production",
          subs: ["Ad Films", "Documentaries", "Corporate Videos"] 
        },
        { 
          name: "Photography", 
          slug: "photography",
          subs: ["Product Shoots", "Event Shoots", "Architectural Shoots"] 
        }
      ]
    },
    brandIdentity: {
      id: 'brandIdentity',
      title: "02. Brand Identity",
      label: "Visual DNA",
      services: [
        { 
          name: "Brand Identity Design", 
          slug: "brand-identity-design",
          subs: ["Logo Design", "Stationery Design", "Brand Guidelines"] 
        }
      ]
    },
    digitalMarketing: {
      id: 'digitalMarketing',
      title: "03. Digital Marketing",
      label: "Market Dominance",
      services: [
        { 
          name: "Digital Marketing", 
          slug: "digital-marketing",
          subs: ["Social Media Marketing", "Influencer Marketing", "E-commerce Marketing"] 
        },
        { 
          name: "Performance Marketing", 
          slug: "performance-marketing",
          subs: ["Data-driven campaigns", "Targeted audience reach", "ROI Growth"] 
        },
        { 
          name: "SEO", 
          slug: "seo",
          subs: ["AEO & GEO", "Website & Local SEO", "Keyword Optimization"] 
        }
      ]
    },
    technology: {
      id: 'technology',
      title: "04. Technology",
      label: "Digital Infrastructure",
      services: [
        { 
          name: "Web Development", 
          slug: "web-development",
          subs: ["Modern UI/UX Design", "CRM Development", "Maintenance & Support"] 
        }
      ]
    },
    aiAutomation: {
      id: 'aiAutomation',
      title: "05. AI & Automation",
      label: "Intelligent Systems",
      services: [
        { 
          name: "AI Marketing", 
          slug: "ai-marketing",
          subs: ["AI Calling Agent", "AI Chat Bots", "Automation Systems"] 
        }
      ]
    },
    strategyExpansion: {
      id: 'strategyExpansion',
      title: "06. Strategy & Expansion",
      label: "Future Proofing",
      services: [
        { 
          name: "Business Consultancy", 
          slug: "business-consultancy",
          subs: ["Competitor & Market Analysis", "Strong Brand Positioning", "Sales Funnel & Strategy"] 
        },
        { 
          name: "Event Marketing", 
          slug: "event-marketing",
          subs: ["Brand Event Designing", "Audience Engagement", "Offline-Online Promotions"] 
        },
        { 
          name: "Inbound Messaging", 
          slug: "inbound-messaging",
          subs: ["WhatsApp Marketing", "Email Marketing", "Telegram Marketing"] 
        },
        { 
          name: "Offline Marketing", 
          slug: "offline-marketing",
          subs: ["Billboards & Print Ads", "Radio & PVR Ads", "On-ground Promotions"] 
        }
      ]
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[200] pt-4 px-6 lg:px-12 transition-all duration-700 pointer-events-none"
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

          {/* Navigation Capsule — RESTORED */}
          <div className="hidden xl:flex items-center px-8 py-2.5 rounded-[4px] bg-black/15 backdrop-blur-[32px] border border-white/20 shadow-xl transition-all duration-700 hover:bg-black/25">
            <nav className="flex items-center gap-12 relative">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.name === 'Services' ? setIsMegaMenuOpen(!isMegaMenuOpen) : null}
                  className="relative group text-white/80 hover:text-white text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-500 py-1"
                >
                  {item.name === 'Services' ? (
                    <div className="flex items-center gap-1.5 focus:outline-none">
                      {item.name}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                    </div>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] rounded-full bg-[#E6FF00] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100 ${isMegaMenuOpen && item.name === 'Services' ? 'w-full opacity-100' : ''}`} />
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section — RESTORED CTA */}
          <div className="shrink-0 flex items-center gap-6">
            <Link 
              href="/contact" 
              className="group/btn relative hidden sm:flex items-center justify-between gap-5 bg-[#E6FF00] pl-6 pr-1 py-1 rounded-[4px] text-black text-[10px] font-bold tracking-widest uppercase transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="pl-1">Start a Project</span>
              <div className="relative w-8 h-8 rounded-[4px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-12 group-hover/btn:bg-black text-black group-hover/btn:text-white">
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

      {/* ── PREMIUM TABS-BASED MEGA MENU ── */}
      <motion.div
        initial={false}
        animate={isMegaMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -20, pointerEvents: 'none' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-[50px] pt-32 pb-20 px-6 lg:px-12 flex items-center"
      >
        <div className="max-w-[1700px] w-full mx-auto grid grid-cols-12 gap-0 h-[70vh] items-stretch border border-white/5 rounded-[4px] bg-black/40 overflow-hidden shadow-3xl">
          
          {/* TAB SIDEBAR */}
          <div className="col-span-4 lg:col-span-3 border-r border-white/10 flex flex-col pt-12">
             <div className="px-10 mb-12">
                <span className="text-[#E6FF00] text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block">the System</span>
                <h3 className="text-white text-[18px] font-light leading-tight">High-Impact Ecosystem.</h3>
             </div>
             
             <div className="flex flex-col overflow-y-auto scrollbar-hide">
                {Object.values(megaMenuData).map((tab: any) => (
                  <button
                    key={tab.id}
                    onMouseEnter={() => setActiveTab(tab.id)}
                    className={`group relative text-left py-6 px-10 transition-all duration-500 border-b border-white/5 ${activeTab === tab.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
                  >
                     <div className="flex flex-col gap-1">
                        <span className={`text-[9px] uppercase tracking-widest font-bold transition-all duration-500 ${activeTab === tab.id ? 'text-[#E6FF00]' : 'text-white/20'}`}>{tab.title}</span>
                        <span className={`text-[15px] font-medium tracking-tight transition-all duration-500 ${activeTab === tab.id ? 'text-white translate-x-2' : 'text-white/40'}`}>{tab.label}</span>
                     </div>
                     <ChevronRight className={`absolute top-1/2 right-6 -translate-y-1/2 w-4 h-4 transition-all duration-500 ${activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                  </button>
                ))}
             </div>
             
             <div className="mt-auto p-10 border-t border-white/5 opacity-30">
                <div className="flex gap-8">
                   {['IG', 'TW', 'LI'].map(s => <span key={s} className="text-[9px] font-bold tracking-widest">{s}</span>)}
                </div>
             </div>
          </div>

          {/* CONTENT AREA */}
          <div className="col-span-8 lg:col-span-6 p-16 overflow-y-auto scrollbar-hide bg-black/20">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
             >
                {megaMenuData[activeTab].services.map((svc: any, idx: number) => (
                   <div key={idx} className="flex flex-col gap-6">
                      <Link 
                        href={`/services/${svc.slug}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="text-white text-[20px] font-bold uppercase tracking-wide hover:text-[#E6FF00] transition-colors group flex items-center gap-4"
                      >
                         {svc.name}
                         <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                      <div className="flex flex-col gap-3">
                         {svc.subs.map((sub: string, sidx: number) => (
                           <Link 
                            key={sidx}
                            href={`/services/${svc.slug}#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-white/30 text-[13px] hover:text-white transition-colors flex items-center gap-3 group/sub"
                           >
                              <div className="w-1.5 h-[1px] bg-white/10 group-hover/sub:w-4 group-hover/sub:bg-[#E6FF00] transition-all" />
                              {sub}
                           </Link>
                         ))}
                      </div>
                   </div>
                ))}
             </motion.div>
          </div>

          {/* FEATURED PANEL */}
          <div className="hidden lg:col-span-3 lg:flex flex-col border-l border-white/10 p-12 bg-neutral-950/20">
             <div className="group relative rounded-[4px] overflow-hidden aspect-[4/5] border border-white/10 bg-black cursor-pointer mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-[1.1] group-hover:scale-100" 
                  alt="Spotlight"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <span className="text-[#E6FF00] text-[9px] font-bold tracking-[0.4em] mb-4 block">SPOTLIGHT</span>
                   <h4 className="text-white text-[18px] font-medium leading-tight mb-6">Lumina Noir. Visual Architecture.</h4>
                   <Link href="/work/1" onClick={() => setIsMegaMenuOpen(false)} className="inline-flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                   </Link>
                </div>
             </div>
             
             <Link 
              href="/contact" 
              onClick={() => setIsMegaMenuOpen(false)}
              className="mt-auto group/btn flex items-center justify-between p-6 border border-white/5 hover:border-[#E6FF00]/30 transition-all rounded-[4px]"
             >
                <div className="flex flex-col">
                   <span className="text-white text-[12px] font-bold tracking-widest">START A PROJECT</span>
                   <span className="text-white/20 text-[9px] tracking-widest mt-1">Global Delivery Units</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#E6FF00] group-hover/btn:text-black transition-all">
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

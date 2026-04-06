'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, Terminal, LineChart, Layers, Zap, Sparkles, Globe, Cpu } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const InteractiveServices = dynamic(() => import("@/components/InteractiveServices"), { ssr: false });

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const allServices = [
  { id: "01", name: "Film Production", slug: "film-production", image: '/services_v2/video_production.png', desc: 'Cinematic storytelling driven by emotion, detail, and vision.' },
  { id: "02", name: "Video Production", slug: "video-production", image: '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png', desc: 'Purposeful visual narratives that connect and inspire.' },
  { id: "03", name: "Brand Identity Design", slug: "brand-identity-design", image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png', desc: 'Distinctive identities that build trust and long-term connection.' },
  { id: "04", name: "Social Media Marketing", slug: "social-media-marketing", image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png', desc: 'Cutting through the noise with result-driven digital strategies.' },
  { id: "05", name: "Photography", slug: "photography", image: '/branding/imgi_17_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg', desc: 'Capturing moments and stories within a single frame.' },
  { id: "06", name: "Brand Strategy", slug: "brand-strategy", image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png', desc: 'Deep market insights combined with practical execution plans.' },
  { id: "07", name: "Web Development", slug: "web-development", image: '/scene2.png', desc: 'Highly functional, user-focused digital experiences.' },
  { id: "08", name: "Performance Marketing", slug: "performance-marketing", image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png', desc: 'Data-driven strategies focused on measurable results.' },
  { id: "09", name: "SEO", slug: "seo", image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', desc: 'Building organic presence through intent and relevance.' },
  { id: "10", name: "AI Marketing", slug: "ai-marketing", image: '/ai-automation/imgi_89_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png', desc: 'Intelligent, automated, and highly personalized future marketing.' },
  { id: "11", name: "Event Marketing", slug: "event-marketing", image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png', desc: 'Creating real human connections through memorable moments.' },
  { id: "12", name: "Offline Marketing", slug: "offline-marketing", image: '/bgimagectaservice.png', desc: 'Impactful real-world presence and strategic recall.' },
  { id: "13", name: "Inbound Messaging", slug: "inbound-messaging", image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg', desc: 'Direct, personalized communication flow that builds trust.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black bg-black">
      <Header />
      
      {/* ── SECTION 1: CINEMATIC HERO ────────────────────────────────── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-black border-b border-white/5">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 scale-110 pointer-events-none">
          <img 
            src="/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png?v=1" 
            alt="" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="section-container relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
          <div className="max-w-[75rem]">
            <span className="text-[#E6FF00] font-mono text-[10px] uppercase tracking-[0.5em] mb-6 block opacity-60">
              STRATEGIC CAPABILITIES
            </span>
            <h1 className="h-xl tracking-tighter mb-8 leading-[0.9]">
              Services & <br />
              Capabilities.
            </h1>
            <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed mb-10">
              Expertly crafted creative and digital solutions designed to elevate your brand's global impact.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 mt-16 items-start md:items-center">
               <div className="flex flex-col">
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">SERVICES OVERVIEW</p>
                  <span className="text-[13px] text-white/60 font-medium">Operational in 14 Markets</span>
               </div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICE GRID ────────────────────────────────── */}
      <section className="pb-32 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="group relative flex flex-col h-[520px] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#E6FF00]/50"
                >
                  {/* Card Background - Direct Visibility with color images */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={`${service.image}?v=1`} 
                      alt={service.name} 
                      className="w-full h-full object-cover opacity-100 transition-all duration-[2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-700" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-10 h-full flex flex-col">
                    <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-4 opacity-50">ST-{service.id}</span>
                    <h3 className="h-md leading-[0.9] tracking-tighter mb-4 group-hover:text-accent transition-colors duration-500">
                      {service.name}
                    </h3>
                    
                    <p className="body-text text-[15px] opacity-60 group-hover:opacity-100 transition-opacity mb-8 max-w-[280px]">
                      {service.desc}
                    </p>
                    
                    {/* The small neon dot from the screenshot - kept as a subtle accent */}
                    <div className="w-2 h-2 rounded-full bg-[#E6FF00] mb-8 shadow-[0_0_10px_rgba(230,255,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="mt-auto transition-all duration-700">
                      <PremiumButton href={`/services/${service.slug}`} className="!px-6 !py-3 !text-[9px]">
                        Explore Service
                      </PremiumButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE TOPOLOGY (HUB VISUAL) ────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="section-container relative z-10 mb-12 text-center lg:text-left">
            <span className="subtitle-premium">System Architecture</span>
            <h2 className="h-lg max-w-3xl">Synchronized <br /> <span className="text-white/20">Operational Flow.</span></h2>
            <div className="h-[1px] w-24 bg-[#E6FF00] mt-8 opacity-40" />
        </div>
        <div className="relative h-[800px] md:h-[900px] -mt-10">
          <InteractiveServices />
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY LOOP (MARQUEE) ────────────────────── */}
      <section className="py-32 bg-black overflow-hidden border-b border-white/5">
        <div className="flex gap-20 whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {['Cinematic Storytelling', 'Frontier AI Automation'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10">
                  <span className="text-[60px] md:text-[120px] font-bold text-white/[0.03] uppercase tracking-tighter hover:text-accent transition-colors duration-700">{item}</span>
                  <div className="w-4 h-4 rounded-full bg-accent opacity-20" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: FINAL DEPLOYMENT ─────────────────────────────── */}
      <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/bgimagectaservice.png" 
            className="w-full h-full object-cover scale-105" 
            alt="CTA Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          <div className="absolute inset-x-0 md:inset-0 bg-black/30 z-10" />
        </div>

        <div className="section-container relative z-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-12"
          >
            <h2 className="h-xl max-w-4xl mx-auto leading-[0.9]">
              Architect your <br />
              <span className="text-white/20">global impact.</span>
            </h2>
            <div className="flex flex-col items-center gap-8">
               <PremiumButton href="/contact" className="scale-125">
                 Contact Us
               </PremiumButton>
               <span className="text-[#E6FF00]/40 font-mono text-[9px] uppercase tracking-[0.3em]">System Standing By</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
  { id: "01", name: "Video Production", slug: "video-production", image: '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png', desc: 'Cinematic brand films and high-impact advertisements.' },
  { id: "02", name: "Designing / Creatives", slug: "design", image: '/branding/imgi_15_18990d94cc12d56d2c085ecdfb53274f8750514a-2800x1450.png', desc: 'Visual storytelling and architectural design systems.' },
  { id: "03", name: "Website Development", slug: "web-development", image: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', desc: 'High-performance digital infrastructure for global scale.' },
  { id: "04", name: "AI Automation", slug: "ai-automation", image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png', desc: 'Next-gen intelligent workflows and system architectural.' },
  { id: "05", name: "Brand Identity", slug: "brand-identity-design", image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png', desc: 'Institutional branding that commands market authority.' },
  { id: "06", name: "UI/UX Design", slug: "ui-ux-design", image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png', desc: 'Intuitive experience engineering for complex platforms.' },
  { id: "07", name: "Performance Marketing", slug: "marketing", image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png', desc: 'ROI-driven market capture and growth frameworks.' },
  { id: "08", name: "Photography", slug: "photography", image: '/branding/imgi_17_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg', desc: 'Premium editorial and commercial visual assets.' },
  { id: "09", name: "AI Marketing", slug: "ai-marketing", image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png', desc: 'Data-intelligent kampaigns driven by neural growth.' },
  { id: "10", name: "SEO Optimization", slug: "seo", image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', desc: 'Algorithmic dominance for maximum organic visibility.' },
  { id: "11", name: "Business Consultancy", slug: "business-consultancy", image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png', desc: 'Master planning for institutional scaling and impact.' },
  { id: "12", name: "Growth Strategy", slug: "growth-strategy", image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', desc: 'Tactical roadmaps for sustainable market leadership.' },
  { id: "13", name: "Inbound Messaging", slug: "inbound-messaging", image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg', desc: 'High-conversion narrative systems for audience capture.' },
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
            className="max-w-4xl"
          >
            <span className="subtitle-premium">Institutional Capability</span>
            <h1 className="h-xl tracking-tighter mb-10">
              The Services <br />
              Aesthetic Matrix.
            </h1>
            <p className="body-text text-[18px] md:text-[22px] max-w-2xl leading-relaxed opacity-70">
              We architect high-velocity brand systems by synchronizing cinematic creativity, frontier technology, and tactical market intelligence.
            </p>
            
            <div className="flex flex-col md:flex-row gap-12 mt-20 items-start md:items-center">
               <div className="flex gap-4">
                  {['01', '02', '03', '04'].map(i => (
                    <span key={i} className="w-12 h-[1px] bg-white/20" />
                  ))}
               </div>
               <div className="flex flex-col">
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">Protocol: Services Hub</p>
                  <span className="text-[13px] text-white/60 font-medium">Operational in 14 Markets</span>
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
                  {/* Card Background - Direct Visibility (Reversed Hover) */}
                  <div className="absolute inset-0">
                    <img 
                      src={`${service.image}?v=1`} 
                      alt={service.name} 
                      className="w-full h-full object-cover opacity-100 grayscale-0 group-hover:grayscale group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-700" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-10 h-full flex flex-col">
                    <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-4 opacity-50">ST-{service.id}</span>
                    <h3 className="h-md leading-[0.9] tracking-tighter mb-4 group-hover:text-accent transition-colors duration-500">{service.name}</h3>
                    <p className="body-text text-[15px] opacity-60 group-hover:opacity-100 transition-opacity mb-8 max-w-[280px]">
                      {service.desc}
                    </p>
                    <div className="mt-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      <PremiumButton href={`/services/${service.slug}`} className="!px-6 !py-3 !text-[9px]">
                        Launch Service
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
      <section className="section-v-spacing text-center relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="h-xl mb-16 max-w-4xl mx-auto leading-[0.9]">
              Architect your <br />
              <span className="text-white/20">global impact.</span>
            </h2>
            <div className="flex justify-center flex-col items-center gap-8">
               <PremiumButton href="/contact" className="scale-125">
                 Initiate Deployment
               </PremiumButton>
               <span className="text-[#E6FF00]/40 font-mono text-[9px] uppercase tracking-[0.3em]">System Standing By</span>
            </div>
          </motion.div>
        </div>

        {/* Absolute Deco */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#E6FF00]/5 rounded-full blur-[150px]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

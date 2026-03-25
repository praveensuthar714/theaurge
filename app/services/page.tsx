'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, Sparkles, Fingerprint, LineChart, Terminal, Cpu, Target, Palette, Zap, Box, Globe, ShieldCheck, Layers } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const serviceGroups = [
  {
    id: "01",
    title: "Creative Pillar",
    desc: "Cinematic visuals and architectural design systems that command brand authority.",
    icon: Play,
    items: [
      { name: "Designing / Creatives", slug: "design" },
      { name: "Video Production", slug: "video-production" },
      { name: "Photography", slug: "photography" },
      { name: "Brand Identity", slug: "brand-identity-design" }
    ]
  },
  {
    id: "02",
    title: "Technology Pillar",
    desc: "Next-gen digital infrastructure and intelligent automation systems.",
    icon: Terminal,
    items: [
      { name: "Website Development", slug: "web-development" },
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "AI Automation", slug: "ai-automation" }
    ]
  },
  {
    id: "03",
    title: "Intelligence & Ads",
    desc: "ROI-driven market capture through data-backed growth frameworks.",
    icon: LineChart,
    items: [
      { name: "Marketing / Growth", slug: "marketing" },
      { name: "AI Marketing", slug: "ai-marketing" },
      { name: "SEO Optimization", slug: "seo" }
    ]
  },
  {
    id: "04",
    title: "Strategy Pillar",
    desc: "Strategic consultancy and master planning for institutional scaling.",
    icon: Layers,
    items: [
      { name: "Business Consultancy", slug: "business-consultancy" },
      { name: "Growth Strategy", slug: "growth-strategy" },
      { name: "Inbound Messaging", slug: "inbound-messaging" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (REFINED TYPOGRAPHY) */}
      <section className="pt-44 pb-32 relative overflow-hidden">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subtitle-premium">The Ecosystem</span>
            <h1 className="h-xl mb-14 max-w-5xl">
              Engineered for impact. <br />
              Synchronized for scale.
            </h1>
            <p className="body-text text-[18px] md:text-[24px] max-w-2xl leading-relaxed mb-16">
              We combine cinematic creativity, frontier technology, and tactical strategy to architect high-impact brand systems that command the global market.
            </p>
          </motion.div>
        </div>
        
        {/* Cinematic Atmospheric BG */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* SECTION 2 — SYSTEM BLUEPRINT (THE HUB) */}
      <section className="section-v-spacing bg-secondary border-t border-white/5">
        <div className="section-container">
           <div className="relative h-[550px] w-full glass-panel overflow-hidden flex items-center justify-center group">
              {/* Spinning Rings (Wireframe Aesthetic) */}
              <div className="absolute inset-0 opacity-[0.05]">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white rounded-full animate-slow-spin" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-dashed border border-white rounded-full animate-slow-spin-reverse" />
              </div>
              
              <div className="relative z-10 text-center px-6">
                 <div className="w-28 h-28 rounded-none bg-accent mx-auto mb-10 flex items-center justify-center shadow-[0_0_60px_rgba(230,255,0,0.4)] group-hover:scale-110 transition-transform duration-700">
                    <Zap className="w-12 h-12 text-black" />
                 </div>
                 <span className="subtitle-premium !mb-4">Unified Architecture</span>
                 <h3 className="h-md mb-6 max-w-md mx-auto leading-tight">Interconnected <br /> Excellence.</h3>
                 <p className="body-text max-w-sm mx-auto">
                   Our services are not silos. They are components of a single, synchronized engine designed for total market dominance.
                 </p>
              </div>

              {/* Orbiting Icons (Representation of categories) */}
              {[Play, Fingerprint, Terminal, LineChart, Cpu].map((Icon, i) => (
                <div 
                  key={i} 
                  className="absolute hidden md:block opacity-20"
                  style={{ 
                    top: `${50 + 38 * Math.sin(i * Math.PI / 2.5)}%`, 
                    left: `${50 + 38 * Math.cos(i * Math.PI / 2.5)}%` 
                  }}
                >
                  <div className="w-14 h-14 glass-panel flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3 — THE SERVICE MATRIX */}
      <section className="section-v-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-44">
            {serviceGroups.map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Header of the category */}
                <div className="mb-14">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-accent font-mono text-[11px] font-bold">ST-{group.id}</span>
                    <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 transition-all duration-700" />
                    <group.icon className="w-5 h-5 text-white/20" />
                  </div>
                  <h2 className="h-md mb-6 group-hover:text-accent transition-colors">{group.title}</h2>
                  <p className="body-text mb-0 max-w-md">
                    {group.desc}
                  </p>
                </div>

                {/* Distributed list of specific services */}
                <div className="flex flex-col border-t border-white/10 pt-8">
                  {group.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={`/services/${item.slug}`}
                      className="flex items-center justify-between py-6 border-b border-white/5 hover:border-white/20 transition-all group/item px-2"
                    >
                      <div className="flex items-center gap-5">
                        <span className="w-1 h-1 rounded-full bg-accent/0 group-hover/item:bg-accent group-hover/item:scale-[2] transition-all duration-500" />
                        <span className="text-white/50 text-[17px] group-hover/item:text-white transition-colors font-light tracking-tight">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4 opacity-0 group-hover/item:opacity-100 transition-all duration-500 -translate-x-4 group-hover/item:translate-x-0">
                         <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">View Detail</span>
                         <ArrowUpRight className="w-4 h-4 text-accent group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Group Decoration */}
                <div className="absolute -z-10 top-0 -left-10 w-full h-full bg-accent/[0.01] rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ECOSYSTEM FLOW */}
      <section className="section-v-spacing bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        
        <div className="section-container text-center relative z-10">
           <span className="subtitle-premium !mb-14">The Lifecycle Loop</span>
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 text-[16px] md:text-[24px] font-medium tracking-tighter">
              {['Capture', 'Identity', 'Engineering', 'Ads', 'AI', 'Scaling'].map((step, i, arr) => (
                <React.Fragment key={step}>
                   <span className="text-white/40 hover:text-white transition-all cursor-default hover:scale-110 duration-500">{step}</span>
                   {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </React.Fragment>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CALL TO ACTION */}
      <section className="section-v-spacing text-center bg-black relative">
         <div className="section-container relative z-10">
            <h2 className="h-xl mb-20 max-w-4xl mx-auto">
               Ready to architect <br /> your <span className="text-white/30">market impact</span>?
            </h2>
                        <PremiumButton href="/contact" className="scale-125 md:scale-150">
               Initiate Deployment
            </PremiumButton>
         </div>

         {/* BG Subtle Deco */}
         <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center pointer-events-none">
            <div className="w-[1200px] h-[600px] border border-white/5 rounded-full blur-[100px]" />
         </div>
      </section>

      <Footer />
    </main>
  );
}

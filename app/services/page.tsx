'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, Sparkles, Fingerprint, LineChart, Terminal, Cpu, Target, Palette, Zap, Box, Globe, ShieldCheck } from 'lucide-react';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const serviceGroups = [
  {
    id: "01",
    title: "Creative Production",
    desc: "Cinematic visuals that define brand legacies and command market authority.",
    icon: Play,
    items: [
      { name: "Video Architecture", slug: "video-production" },
      { name: "Ad Film Systems", slug: "ad-films" },
      { name: "Motion Graphics & VFX", slug: "motion-production" },
      { name: "Cinematic Photography", slug: "photography" }
    ]
  },
  {
    id: "02",
    title: "Identity Engineering",
    desc: "Building the visual DNA and strategic architecture of the top 1% brands.",
    icon: Fingerprint,
    items: [
      { name: "Brand Strategy", slug: "brand-strategy" },
      { name: "Identity Design", slug: "brand-identity-design" },
      { name: "Visual Guidelines", slug: "designing-creatives" },
      { name: "Architecture of Perception", slug: "visual-architecture" }
    ]
  },
  {
    id: "03",
    title: "Digital Engineering",
    desc: "Next-gen infrastructure and high-performance digital environments.",
    icon: Terminal,
    items: [
      { name: "Web Infrastructure", slug: "web-development" },
      { name: "Next-Gen E-commerce", slug: "ecommerce-systems" },
      { name: "App Development", slug: "app-design" },
      { name: "Custom CRM & Dashboards", slug: "dashboards" }
    ]
  },
  {
    id: "04",
    title: "Performance Growth",
    desc: "ROI-driven market dominance through raw data and aggressive technical scaling.",
    icon: LineChart,
    items: [
      { name: "Performance Marketing", slug: "performance-marketing" },
      { name: "Search Engine Dominance", slug: "seo" },
      { name: "ROI-Driven Ad Strategy", slug: "creative-marketing" },
      { name: "Funnel Architecture", slug: "digital-strategy" }
    ]
  },
  {
    id: "05",
    title: "AI Synthesis",
    desc: "Integrating artificial intelligence into your business engine to replace friction with precision.",
    icon: Cpu,
    items: [
      { name: "AI Marketing Agents", slug: "ai-marketing" },
      { name: "Workflow Automation", slug: "ai-automation" },
      { name: "AI Voice & Chat Systems", slug: "ai-agents" },
      { name: "Data Intelligence", slug: "data-intelligence" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (REFINED TYPOGRAPHY) */}
      <section className="pt-44 pb-32 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subtitle-premium">The Ecosystem</span>
            <h1 className="text-[48px] md:text-[98px] font-medium leading-[0.95] tracking-tight text-white mb-14 max-w-5xl">
              Engineered <span className="font-light text-white/30">for impact</span>. <br />
              Synchronized for scale.
            </h1>
            <p className="text-white/50 text-[18px] md:text-[24px] max-w-2xl leading-relaxed font-light mb-16">
              We combine cinematic creativity, frontier technology, and tactical strategy to architect high-impact brand systems that command the global market.
            </p>
          </motion.div>
        </div>
        
        {/* Cinematic Atmospheric BG */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E6FF00]/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* SECTION 2 — SYSTEM BLUEPRINT (THE HUB) */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
           <div className="relative h-[550px] w-full rounded-[4px] border border-white/5 bg-black/40 overflow-hidden flex items-center justify-center group backdrop-blur-xl">
              {/* Spinning Rings (Wireframe Aesthetic) */}
              <div className="absolute inset-0 opacity-[0.05]">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white rounded-full animate-slow-spin" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-dashed border border-white rounded-full animate-slow-spin-reverse" />
              </div>
              
              <div className="relative z-10 text-center px-6">
                 <div className="w-28 h-28 rounded-[4px] bg-[#E6FF00] mx-auto mb-10 flex items-center justify-center shadow-[0_0_60px_rgba(230,255,0,0.4)] group-hover:scale-110 transition-transform duration-700">
                    <Zap className="w-12 h-12 text-black" />
                 </div>
                 <span className="subtitle-premium !mb-4">Unified Architecture</span>
                 <h3 className="text-white text-[28px] md:text-[36px] font-medium tracking-tighter mb-6 max-w-md mx-auto leading-tight">Interconnected <br /> Excellence.</h3>
                 <p className="text-white/40 text-[15px] max-w-sm mx-auto font-light leading-relaxed">
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
                  <div className="w-14 h-14 rounded-[4px] border border-white/10 bg-black/50 backdrop-blur-3xl flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3 — THE SERVICE MATRIX */}
      <section className="py-44 px-6 relative">
        <div className="container mx-auto max-w-7xl">
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
                    <span className="text-[#E6FF00] font-mono text-[11px] font-bold">ST-{group.id}</span>
                    <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 transition-all duration-700" />
                    <group.icon className="w-5 h-5 text-white/20" />
                  </div>
                  <h2 className="text-[34px] md:text-[48px] font-medium text-white mb-6 tracking-tight leading-none group-hover:text-[#E6FF00] transition-colors">{group.title}</h2>
                  <p className="text-white/30 text-[16px] md:text-[18px] mb-0 max-w-md leading-relaxed font-light">
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
                        <span className="w-1 h-1 rounded-full bg-[#E6FF00]/0 group-hover/item:bg-[#E6FF00] group-hover/item:scale-[2] transition-all duration-500" />
                        <span className="text-white/50 text-[17px] group-hover/item:text-white transition-colors font-light tracking-tight">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4 opacity-0 group-hover/item:opacity-100 transition-all duration-500 -translate-x-4 group-hover/item:translate-x-0">
                         <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">View Detail</span>
                         <ArrowUpRight className="w-4 h-4 text-[#E6FF00] group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Group Decoration */}
                <div className="absolute -z-10 top-0 -left-10 w-full h-full bg-[#E6FF00]/[0.01] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ECOSYSTEM FLOW */}
      <section className="py-44 px-6 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
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
      <section className="py-64 text-center bg-black relative">
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-[48px] md:text-[88px] font-light text-white tracking-tighter leading-[0.9] mb-20 max-w-4xl mx-auto">
               Ready to architect <br /> your <span className="text-white/30">market impact</span>?
            </h2>
            <Link 
              href="/contact" 
              className="group/btn relative inline-flex items-center justify-between gap-12 bg-[#E6FF00] pl-12 pr-1.5 py-1.5 rounded-[4px] text-black text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(230,255,0,0.2)]"
            >
              <span className="pl-4">Initiate Deployment</span>
              <div className="relative w-14 h-14 rounded-[3px] bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover/btn:w-24 group-hover/btn:bg-black text-black group-hover/btn:text-[#E6FF00]">
                <ArrowRight className="w-6 h-6 -translate-x-12 opacity-0 absolute transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                <ArrowRight className="w-6 h-6 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/btn:translate-x-12 group-hover/btn:opacity-0" />
              </div>
            </Link>
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

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Zap, Target, Cpu, Layers, Award, Sparkles, Play, ShieldCheck, Microscope, LineChart, Globe, Terminal, Fingerprint } from 'lucide-react';
import { useParams } from 'next/navigation';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const serviceData: Record<string, any> = {
  // ── CREATIVE PRODUCTION ──
  'video-production': {
    title: 'Video Architecture',
    tagline: 'High-fidelity cinematic legacy.',
    desc: 'We engineer visual narrative systems from Ad Films to Documentaries, ensuring every frame commands market authority and builds trust.',
    philosophy: 'Cinema is the ultimate trust-building engine. We don’t just film; we architect moments that stay with your audience long after they’ve scrolled past.',
    process: ['Narrative Logic', 'Visual Architecture', 'Tactical Capture', 'The Edit Laboratory', 'Global Distribution'],
    deliverables: ['The Hero Piece', 'Social Ecosystem Clips', 'Motion Identity Assets', 'Raw Archive Access'],
    icon: Play,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop'
  },
  'ad-films': {
    title: 'Ad Film Systems',
    tagline: 'Precision-engineered for conversion.',
    desc: 'Short-form cinematic ads built on psychological hooks and high-end visual fidelity. Designed for the 3-second attention span.',
    philosophy: 'An ad isn’t a story; it’s a disruption. We architect visual patterns that stop the scroll and force engagement.',
    process: ['Hook Strategy', 'Visual Rhythm', 'Production Sprint', 'Impact Grading', 'Split-Test Masters'],
    deliverables: ['15s Hook Master', '30s Narrative Master', 'Platform Variants', 'CTA Sync Files'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop'
  },

  // ── BRAND IDENTITY ──
  'brand-identity-design': {
    title: 'Identity Engineering',
    tagline: 'Visual DNA for the top 1%.',
    desc: 'We define the visual and linguistic core of your brand, from Symbolism to comprehensive Design Guidelines.',
    philosophy: 'A brand isn’t a logo; it’s a set of rules for perception. We build the system that makes your brand unmistakable.',
    process: ['DNA Discovery', 'Symbol Logic', 'System Grid Build', 'Guidelines Package', 'Asset Deployment'],
    deliverables: ['Vector Identity System', 'The Brand Manifesto', 'Typography Suite', 'Visual Guidelines'],
    icon: Fingerprint,
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop'
  },

  // ── PERFORMANCE ──
  'performance-marketing': {
    title: 'Performance Growth',
    tagline: 'ROI-driven market dominance.',
    desc: 'Hyper-targeted lead gen and sales systems built on raw data and aggressive technical scaling.',
    philosophy: 'Marketing is math. We solve for ROI by eliminating friction points and maximizing high-intent traffic flow.',
    process: ['Funnel Architecture', 'Creative Splitting', 'Ad Spend Control', 'Data Attribution', 'Scaling Phase'],
    deliverables: ['ROI Dashboard', 'Lead Gen Funnels', 'Ad Creative Sets', 'Performance Reports'],
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },

  // ── TECH ──
  'web-development': {
    title: 'Web Infrastructure',
    tagline: 'Next-gen digital environments.',
    desc: 'High-performance web systems, custom CRMs, and robust maintenance protocols for the modern tech stack.',
    philosophy: 'Speed is the baseline. Experience is the differentiator. We build digital homes that feel premium and work flawlessly.',
    process: ['Logic Discovery', 'System Architecture', 'Frontend Synthesis', 'Backend Security', 'Maintenance Loop'],
    deliverables: ['Production Codebase', 'Admin Dashboard', 'API Documentation', '1-Year Support'],
    icon: Terminal,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
  },

  // ── AI ──
  'ai-marketing': {
    title: 'AI Synthesis',
    tagline: 'Automated intelligence for scale.',
    desc: 'Integrating AI Calling Agents, Chatbots, and Workflow Automation into your existing marketing engine.',
    philosophy: 'Artificial intelligence is the ultimate multiplier. We weave it into your business to replace human friction with binary precision.',
    process: ['Logic Audit', 'Prompt Design', 'Agent Instance Build', 'CRM Hookup', 'Live Training'],
    deliverables: ['AI Voice Instances', 'Automated Workflows', 'Dashboard of Savings', 'Logic Flows'],
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  }
};

const defaultService = {
  title: 'theAurge System',
  tagline: 'Strategic execution at scale.',
  desc: 'This capability is part of our integrated creative house, designed to provide high-end solutions for market leaders.',
  philosophy: 'Excellence is non-negotiable. Our system ensures that every project, no matter the scale, is executed with technical precision.',
  process: ['Discovery', 'Design', 'Execution', 'Refinement', 'Deployment'],
  deliverables: ['Success Roadmap', 'Strategic Assets', 'Final Master Package'],
  icon: ShieldCheck,
  image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop'
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const service = serviceData[id] || defaultService;
  const Icon = service.icon || defaultService.icon;

  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />
      
      {/* SECTION 1 — HERO (REDUCED BULKINESS) */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
           <Link href="/services" className="inline-flex items-center gap-2 text-white/20 hover:text-white text-[9px] uppercase tracking-[0.4em] font-bold mb-12 transition-all group">
             <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
             Back to Ecosystem
           </Link>
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
           >
              <h1 className="text-[42px] md:text-[68px] font-medium text-white tracking-tighter leading-none mb-10 max-w-4xl">
                 {service.title}. <br />
                 <span className="text-white/20 italic font-light">{service.tagline}</span>
              </h1>
              <div className="h-[1px] w-24 bg-[#E6FF00]/50 mb-10" />
              <p className="text-white/40 text-[16px] md:text-[19px] max-w-2xl leading-relaxed mb-12 font-light">
                 {service.desc}
              </p>
           </motion.div>
        </div>
        
        {/* Visual Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] pointer-events-none">
           <img src={service.image} className="w-full h-full object-cover grayscale" alt="Background" />
           <div className="absolute inset-0 bg-gradient-to-l from-black via-black to-transparent" />
        </div>
      </section>

      {/* SECTION 2 — THE STRATEGY BLOCK */}
      <section className="py-32 px-6 border-y border-white/5 bg-[#050505]">
         <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
               <div className="lg:w-1/2">
                  <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">01 / Strategic Intent</span>
                  <h2 className="text-white text-[28px] md:text-[36px] font-medium tracking-tight mb-8 leading-snug">
                     A system built on <br /> <span className="text-[#E6FF00] italic">market-logic</span> and intuition.
                  </h2>
                  <p className="text-white/30 text-[15px] leading-relaxed max-w-lg mb-12">
                     {service.philosophy}
                  </p>
                  <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                     <div>
                        <span className="text-white text-[13px] font-bold block mb-2 uppercase tracking-widest">Efficiency</span>
                        <span className="text-white/20 text-[11px] leading-relaxed uppercase tracking-widest ">Synchronized Workflow</span>
                     </div>
                     <div>
                        <span className="text-white text-[13px] font-bold block mb-2 uppercase tracking-widest">Fidelity</span>
                        <span className="text-white/20 text-[11px] leading-relaxed uppercase tracking-widest">Lossless Execution</span>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-10 rounded-[4px] bg-white/[0.02] border border-white/5 flex flex-col gap-6 group hover:border-[#E6FF00]/20 transition-all">
                     <Microscope className="w-6 h-6 text-[#E6FF00]/50 group-hover:text-[#E6FF00] transition-colors" />
                     <h4 className="text-white text-[15px] font-bold uppercase tracking-widest">Technical Audit</h4>
                     <p className="text-white/20 text-[13px] leading-relaxed">Deep analysis of existing infrastructure and competition.</p>
                  </div>
                  <div className="p-10 rounded-[4px] bg-white/[0.02] border border-white/5 flex flex-col gap-6 group hover:border-[#E6FF00]/20 transition-all">
                     <ShieldCheck className="w-6 h-6 text-[#E6FF00]/50 group-hover:text-[#E6FF00] transition-colors" />
                     <h4 className="text-white text-[15px] font-bold uppercase tracking-widest">High Integrity</h4>
                     <p className="text-white/20 text-[13px] leading-relaxed">We protect brand equity through uncompromising quality.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 3 — WORKFLOW (ST-01 STYLE) */}
      <section className="py-44 px-6">
         <div className="container mx-auto max-w-7xl">
            <h3 className="text-white text-[24px] md:text-[32px] font-light tracking-tight mb-20">The <span className="text-white/30 italic">Studio</span> Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-white/10 rounded-[4px] overflow-hidden">
               {service.process.map((step: string, i: number) => (
                 <div key={i} className="flex flex-col p-10 border-r border-white/10 last:border-0 bg-[#080808] hover:bg-[#E6FF00]/[0.02] transition-colors group">
                    <span className="text-[#E6FF00] font-mono text-[9px] font-bold mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <h4 className="text-white text-[14px] font-bold uppercase tracking-wider leading-tight group-hover:text-white transition-colors">{step}</h4>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4 — DELIVERABLES */}
      <section className="py-44 px-6 border-t border-white/5 bg-[#050505]">
         <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-32 items-center">
               <div className="lg:w-1/2">
                   <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">02 / Outputs</span>
                   <h3 className="text-white text-[32px] font-medium tracking-tight mb-16 px-1 leading-tight">Tangible Results. <br /> <span className="text-white/20">The Deployment Package.</span></h3>
                   <div className="flex flex-col">
                      {service.deliverables.map((item: string, i: number) => (
                        <div key={i} className="flex items-center justify-between py-6 border-b border-white/5 transition-all group px-2">
                           <div className="flex gap-6 items-center">
                              <div className="w-1 h-1 rounded-full bg-[#E6FF00] opacity-30 group-hover:opacity-100 transition-all" />
                              <span className="text-white/50 text-[16px] group-hover:text-white transition-colors font-light">{item}</span>
                           </div>
                           <ArrowUpRight className="w-4 h-4 text-white/5 group-hover:text-[#E6FF00] transition-all" />
                        </div>
                      ))}
                   </div>
               </div>
               <div className="lg:w-1/2 aspect-square rounded-[4px] overflow-hidden border border-white/10 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
                  <img src={service.image} className="w-full h-full object-cover" alt="Output Spotlight" />
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 5 — FINAL ACTION */}
      <section className="py-56 text-center border-t border-white/5 bg-black">
         <div className="container mx-auto px-6">
            <h2 className="text-[32px] md:text-[52px] font-medium text-white tracking-tight leading-tight mb-16 max-w-3xl mx-auto">
               Ready to architect <br /> your <span className="italic text-white/30">market impact</span>?
            </h2>
            <Link 
              href="/contact" 
              className="group/btn relative inline-flex items-center justify-center border border-white/20 hover:border-[#E6FF00] px-12 py-5 rounded-full text-white text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[#E6FF00] hover:text-black"
            >
              Start Project Deployment
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}

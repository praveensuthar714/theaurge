#!/usr/bin/env python3
"""Fix brand-strategy and update About + Contact pages."""
import os

BASE = r'c:\Users\offic\Desktop\theAurge'

def write(rel, content):
    path = os.path.join(BASE, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {rel}")

# ─── Brand Strategy (FIX — proper quote escaping) ─────────────────────────────
write('app/services/brand-strategy/page.tsx', r"""'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 06',
  heroHeading: 'Brand',
  heroSubheading: 'Strategy.',
  heroDescription: 'Behind every successful brand lies a strong and well-defined strategy. We help businesses navigate complexity with clarity and purpose.',
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Strategic Clarity',
  valuePropAccent: 'Long-term Sustainability.|',
  valuePropBody: [
    'By combining deep market insights with practical execution plans — from understanding your competition to identifying opportunities and defining your unique position — we build strategies that create direction and purpose.',
    '"Growth doesn\'t happen by chance — it happens by design. We design systems, funnels, and strategies that align with your business objectives and drive measurable results."',
  ],

  bentoHeading: 'Our Strategy',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Market Ops',
  bentoMainDesc: 'Developing the core strategic framework for brands to define their position and grow with clarity.',
  bentoCard1Title: 'Market Research',
  bentoCard1Desc: 'Deep analysis of industry trends, consumer intent, and competitive landscape.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Nexus Expansion', category: 'Growth Blueprint', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Market Entry', category: 'Competitor Analysis', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Vortex Positioning', category: 'Brand Direction', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Global Revenue', category: 'Sales Funnel Design', image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Market Research', description: 'Deep analysis of industry trends, consumer behaviour, and opportunities in your market.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Competitor Analysis', description: "Understanding your competitors' strengths and gaps to identify your strategic advantage.", image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Brand Positioning', description: 'Defining your unique place in the market and how your audience should perceive you.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Sales Funnel Design', description: 'Creating structured customer journeys from discovery to conversion and loyalty.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Growth Strategy', description: 'Planning scalable and sustainable business growth aligned with your long-term goals.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Globe, title: 'Market Expansion', description: 'Strategies to help you reach new customers and enter new markets with confidence.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Strategy',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Market Deep Dive', description: 'Researching your industry, audience, and competitors to understand the full landscape.' },
    { title: 'Positioning Design', description: 'Defining your unique value proposition and brand direction in the market.' },
    { title: 'Execution Blueprint', description: 'Building the strategic roadmap, funnels, and systems to achieve measured growth.' },
    { title: 'Monitoring & Scale', description: 'Tracking results and refining strategy to ensure long-term sustainability.' },
  ],

  differentiators: [
    { title: 'Insight-Driven', description: 'Every strategy is built on real market data and deep competitive analysis.' },
    { title: 'Purposeful Direction', description: 'We create clarity — every decision aligns with your long-term business goals.' },
    { title: 'Built to Scale', description: 'Strategies designed not just for today, but for sustainable long-term growth.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The strategic blueprint they built gave our team total clarity. We went from scattered efforts to a focused, measurable growth engine.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Strategic Clarity', value: '100%' },
      { label: 'Growth Lift', value: '2.8x' },
      { label: 'Revenue ROI', value: '110%' },
    ],
    caseStudy: {
      title: 'Success: Building a Growth Strategy for Nexus',
      image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to engineer',
  ctaSubheading: 'your brand strategy?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Brand Strategy',
  faqs: [
    { question: 'What does a brand strategy include?', answer: 'Market research, competitor analysis, brand positioning, sales funnels, and a long-term growth roadmap.' },
    { question: 'How long does strategy take?', answer: 'A full brand strategy engagement typically takes 4-8 weeks from research to final presentation.' },
    { question: 'Do you help with sales funnel design?', answer: 'Yes — we build structured customer journey maps from first touch to conversion and retention.' },
  ],
};

export default function BrandStrategyPage() {
  return <ServicePageTemplate data={data} />;
}
""")

# ─── Performance Marketing ────────────────────────────────────────────────────
write('app/services/marketing/page.tsx', r"""'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 08',
  heroHeading: 'Performance',
  heroSubheading: 'Marketing.',
  heroDescription: "In today's competitive landscape, marketing needs to do more than just reach — it needs to perform. We specialize in data-driven strategies that deliver real, measurable results.",
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'ROI Engineering',
  valuePropAccent: 'Results-Driven Growth.|',
  valuePropBody: [
    'Every campaign we create is backed by insights, optimised continuously, and aligned with clear business objectives. From precise audience targeting to conversion optimisation, we ensure that every effort contributes to growth and ROI.',
    '"True marketing success is not measured by impressions alone, but by the impact it creates and the results it delivers."',
  ],

  bentoHeading: 'Our Marketing',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Campaign Ops',
  bentoMainDesc: 'Designing precision marketing campaigns that are result-oriented, data-backed, and continuously optimised.',
  bentoCard1Title: 'Audience Targeting',
  bentoCard1Desc: 'Reaching the right audience with precision at the right moment and the right message.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'ROI Growth',
  bentoCard2Icon: TrendingUp,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Campaigns',
  showcaseItems: [
    { title: 'Nexus Launch', category: 'Campaign Strategy', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Acquisition', category: 'Audience Targeting', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Vortex Scale', category: 'Ad Optimisation', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Global Revenue', category: 'Conversion Ops', image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Campaign Strategy', description: 'Planning result-oriented marketing campaigns aligned with clear business objectives.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: Zap, title: 'Audience Targeting', description: 'Reaching the exact right audience with precision through data-backed segmentation.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Ad Optimisation', description: 'Continuously improving campaign performance through real-time data analysis.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Conversion Tracking', description: 'Monitoring and improving every funnel step to maximise conversions and ROI.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: TrendingUp, title: 'ROI Growth', description: 'Ensuring every rupee spent delivers measurable value and business outcome.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Shield, title: 'Performance Audit', description: 'Regular audits across all live campaigns to identify waste and scale winners.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Campaign',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Strategy Session', description: 'Defining campaign goals, target audiences, and key performance benchmarks.' },
    { title: 'Build & Launch', description: 'Creating ad creatives, setting up targeting, and deploying campaigns with precision.' },
    { title: 'Optimise Daily', description: 'Monitoring performance data and making real-time adjustments for maximum ROI.' },
    { title: 'Scale Winners', description: 'Identifying top-performing campaigns and scaling them for exponential results.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every decision is driven by real performance data, not assumptions.' },
    { title: 'ROI Precision', description: 'Focussed entirely on delivering measurable returns on every campaign.' },
    { title: 'Continuous Optimisation', description: 'Campaigns are refined daily — we never set it and forget it.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "Their performance campaigns delivered a 4x return within 60 days. The targeting precision was exceptional — we reached exactly the right audience.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'CPA Drop', value: '38%' },
      { label: 'Conv. Rate', value: '3.8x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Performance Marketing',
      image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to drive',
  ctaSubheading: 'measurable results?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Performance Marketing',
  faqs: [
    { question: 'What platforms do you run ads on?', answer: 'We run campaigns on Meta (Facebook/Instagram), Google, YouTube, and LinkedIn depending on your audience.' },
    { question: 'How do you measure success?', answer: 'Through ROAS, CPA, conversion rates, and revenue attribution tracked in real-time.' },
    { question: 'How long to see results?', answer: 'Initial results appear within 2-4 weeks. Full optimisation and scale typically takes 60-90 days.' },
  ],
};

export default function PerformanceMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
""")

# ─── About Page ───────────────────────────────────────────────────────────────
write('app/about/page.tsx', r"""'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Cpu, Film, Target, Palette, Globe, Award } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const AboutHero = dynamic(() => import("@/components/AboutHero"), { ssr: false });
const ManifestoSection = dynamic(() => import("@/components/ManifestoSection"), { ssr: false });

const capabilities = [
  { icon: Film, label: 'Film Production', desc: 'Ad films, brand films, TVCs, documentaries, and short films — from concept to final cut.' },
  { icon: Palette, label: 'Brand Identity', desc: 'Logos, visual systems, guidelines, and full brand identity design built to last.' },
  { icon: Target, label: 'Performance Marketing', desc: 'Paid campaigns, SEO, social media, and AI-powered marketing that delivers measurable ROI.' },
  { icon: Globe, label: 'Web Development', desc: 'High-performance, responsive websites and digital platforms built for growth.' },
  { icon: Cpu, label: 'AI Marketing', desc: 'Chatbots, automation flows, and intelligent systems that scale your customer acquisition.' },
  { icon: Award, label: 'Photography', desc: 'Product, event, architectural, and lifestyle photography with cinematic post-production.' },
];

const clients = [
  'Royal Enfield', 'Yamaha', 'Brixton', 'Heera Panna', 'Rotex IT Solutions',
  'Ashish Food & Beverages', 'Beyond Travelers', 'Everloved Stories',
  'Nourishing Farm', 'Nisarg Resort', 'Suprito Fashion', 'Marvelous Hair Studio',
  'KPT Industries', 'Captain GBP', 'Nexus Civil', 'Chipde Saraf', 'Shidori',
];

export default function StudioPage() {
  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />

      {/* CINEMATIC HERO */}
      <AboutHero />

      {/* MANIFESTO */}
      <ManifestoSection />

      {/* SECTION 1 — WHO WE ARE */}
      <section className="pt-44 pb-32">
        <div className="section-container">
          <span className="subtitle-premium">The Studio</span>
          <h1 className="h-lg max-w-4xl mb-16 px-1">
            Building trust.<br />
            Connecting audiences.<br />
            Impact at institutional scale.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <p className="body-text text-[18px] md:text-[22px] max-w-2xl leading-relaxed">
              The Aurge is a creative production and strategy-driven marketing house — specialising in film production, TV commercials, high-impact brand stories, and performance-driven digital marketing. We don't just execute projects; we build lasting brand ecosystems.
            </p>
            <div className="flex gap-16 border-l border-white/10 pl-16 opacity-30 h-fit pb-2">
              <div className="flex flex-col gap-1">
                <span className="text-accent text-[14px] font-bold tracking-widest">13+</span>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Services</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-accent text-[14px] font-bold tracking-widest">50+</span>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-accent text-[14px] font-bold tracking-widest">24/6</span>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] font-mono">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT WE DO */}
      <section className="section-v-spacing bg-secondary relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <span className="subtitle-premium mb-4 block">Full-Service Ecosystem</span>
              <h2 className="h-md mb-6">13 Services. One Studio.</h2>
              <p className="body-text max-w-xl">From ideation to execution, we cover every touchpoint of your brand's digital and cinematic journey — under one roof, with one unified vision.</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/10">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex flex-col gap-6 group p-8 border border-white/5 hover:border-white/20 transition-all duration-500">
                <cap.icon className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors" />
                <div>
                  <h3 className="text-white text-[11px] font-bold tracking-[0.4em] uppercase mb-3">{cap.label}</h3>
                  <p className="text-white/30 text-[14px] leading-relaxed group-hover:text-white/50 transition-colors">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR COLLECTIVE */}
      <section className="section-v-spacing relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="mb-24">
            <span className="subtitle-premium mb-4 block">The Team</span>
            <h2 className="h-md mb-6">A Synchronized Collective.</h2>
            <p className="body-text max-w-2xl">Our team comprises talented directors, cinematographers, photographers, brand designers, SEO specialists, and performance marketers — all driven by a shared commitment to excellence and measurable impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {[
              { t: "Creative Engine", d: "Directors, cinematographers, and designers focused on high-fidelity cinematic brand storytelling and visual identity." },
              { t: "Growth Architects", d: "Performance marketing, SEO, and AI experts dedicated to ROI, market dominance, and measurable business growth." },
              { t: "System Integrity", d: "Strategists and developers who build the systems, funnels, and platforms that keep your brand operating at peak scale." }
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-8 group">
                <div className="h-[1px] w-8 bg-[#E6FF00]/50 group-hover:w-full transition-all duration-1000" />
                <h3 className="text-white text-[11px] font-bold tracking-[0.4em] uppercase">{v.t}</h3>
                <p className="text-white/20 text-[14px] leading-relaxed group-hover:text-white/40 transition-colors">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BRANDS WE'VE WORKED WITH */}
      <section className="section-v-spacing bg-secondary">
        <div className="section-container">
          <div className="mb-16">
            <span className="subtitle-premium mb-4 block">Our Clients</span>
            <h2 className="h-md">Brands that trust us.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {clients.map((client, i) => (
              <span key={i} className="px-6 py-3 border border-white/10 text-white/30 text-[10px] uppercase tracking-widest hover:border-white/30 hover:text-white/60 transition-all cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MISSION STATEMENT */}
      <section className="section-v-spacing relative overflow-hidden">
        <div className="section-container max-w-5xl text-center">
          <h2 className="h-md mb-20 px-4">
            "At The Aurge, your brand's <span className="text-accent">success, visibility, and credibility</span> are our top priority."
          </h2>
          <div className="h-[1px] w-12 bg-white/10 mx-auto" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[140px] pointer-events-none" />
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="section-v-spacing text-center">
        <div className="section-container">
          <h2 className="h-lg mb-20">
            Ready to build <br /> your <span className="text-white/20">brand legacy</span>?
          </h2>
          <PremiumButton href="/contact" className="scale-125 md:scale-150">
            Start a Conversation
          </PremiumButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
""")

# ─── Contact Page ─────────────────────────────────────────────────────────────
write('app/contact/page.tsx', r"""'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const services = [
  'Film Production', 'Video Production', 'Brand Identity', 'Social Media Marketing',
  'Photography', 'Brand Strategy', 'Web Development', 'Performance Marketing',
  'SEO', 'AI Marketing', 'Event Marketing', 'Offline Marketing', 'Inbound Messaging',
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  return (
    <main className="min-h-screen selection:bg-[#E6FF00] selection:text-black">
      <Header />

      {/* HERO */}
      <section className="pt-44 pb-20">
        <div className="section-container">
          <span className="subtitle-premium">Connection Hub</span>
          <h1 className="h-lg max-w-4xl px-1 mt-4">
            Let's architect<br />your brand legacy.
          </h1>
          <p className="body-text max-w-xl mt-8 text-white/40">
            We'd love to understand your vision, objectives, and timeline. Fill in the form below and our team will get back to you within 24 business hours.
          </p>
        </div>
      </section>

      {/* FORM + INFO GRID */}
      <section className="section-v-spacing relative overflow-hidden">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-24 font-light">

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-10 md:p-14 glass-panel">
              <form className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Your Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Company / Brand</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Services You're Interested In</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggle(s)}
                        className={`px-5 py-2 rounded-full border text-[10px] uppercase tracking-widest transition-all ${
                          selected.includes(s)
                            ? 'border-[#E6FF00] text-[#E6FF00] bg-[#E6FF00]/10'
                            : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">Tell Us About Your Project</label>
                  <textarea
                    placeholder="Briefly describe your vision, goals, and timeline..."
                    rows={5}
                    className="bg-transparent border-b border-white/10 py-4 text-white text-[16px] focus:border-[#E6FF00] focus:outline-none transition-all resize-none placeholder:text-white/10"
                  />
                </div>

                <PremiumButton type="submit" className="!pl-10 mt-4 w-full md:w-fit">
                  Send Message
                </PremiumButton>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-12 pt-10">
            <div className="flex flex-col gap-4">
              <span className="subtitle-premium">Direct Sync</span>
              <div className="flex flex-col gap-8 mt-6">
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Email</span>
                    <span className="text-white text-[16px] font-medium tracking-tight">hello@theaurge.com</span>
                  </div>
                </div>

                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white/20 text-[9px] uppercase tracking-widest block mb-1">Studio HQ</span>
                    <span className="text-white text-[16px] font-medium tracking-tight">Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services list */}
            <div className="flex flex-col gap-4">
              <span className="subtitle-premium">What We Do</span>
              <div className="flex flex-col gap-2 mt-2">
                {[
                  'Film Production & Video Production',
                  'Brand Identity & Strategy',
                  'Social Media Marketing',
                  'Performance Marketing & SEO',
                  'AI Marketing & Automation',
                  'Web Development',
                  'Photography',
                  'Event & Offline Marketing',
                  'Inbound Messaging Systems',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/30 text-[13px] py-2 border-b border-white/5">
                    <ArrowRight className="w-3 h-3 text-accent/50 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 glass-panel !bg-white/[0.01] mt-auto">
              <Sparkles className="w-6 h-6 text-accent mb-6 opacity-30" />
              <h4 className="h-sm mb-4 leading-tight">Fast-track your<br />project deployment.</h4>
              <p className="body-text">Our team responds within 24 business hours to all high-intent inquiries. Let's build something extraordinary together.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
""")

print("All pages updated successfully!")
print("  brand-strategy/page.tsx - FIXED + updated")
print("  marketing/page.tsx - Updated")
print("  about/page.tsx - Fully rewritten with PDF content")
print("  contact/page.tsx - Fully rewritten with all 13 services")

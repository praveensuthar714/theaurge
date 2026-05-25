'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Plus, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { gsap } from '@/lib/scrollEngine';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import { PremiumButton } from '@/components/ui/PremiumButton';

// ── Data Shape ──────────────────────────────────────────────────────────────
export interface ServiceModule {
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ShowcaseItem {
  title: string;
  category: string;
  image: string;
  span?: string; // tailwind col/row span classes
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  moduleLabel: string;         // e.g. "Creative Module / 01"
  heroHeading: string;         // e.g. "Designing"
  heroSubheading: string;      // e.g. "Ecosystems for Scale."
  heroDescription: string;
  heroBg: string;              // image path or URL
  primaryCTA: string;
  primaryCTAHref?: string;

  valuePropLabel: string;      // e.g. "The Friction of Obscurity."
  valuePropAccent: string;     // yellow-highlighted word/phrase
  valuePropBody: string[];     // paragraphs

  bentoHeading: string;
  bentoSubheading: string;
  bentoMainImage: string;
  bentoMainTitle: string;
  bentoMainSubtitle: string;
  bentoMainDesc: string;
  bentoCard1Title: string;
  bentoCard1Desc: string;
  bentoCard1Icon: React.ElementType;
  bentoCard1Image?: string;
  bentoCard2Title: string;
  bentoCard2Icon: React.ElementType;
  bentoCard2Image?: string;

  showcaseHeading: string;
  showcaseItems: ShowcaseItem[];

  modules: ServiceModule[];

  processLabel: string;
  processHeading: string;
  processSubheading: string;
  processSteps: ProcessStep[];

  differentiators: { title: string; description: string }[];

  ctaHeading: string;
  ctaSubheading: string;
  ctaCTA: string;

  faqHeading: string;
  faqs: FAQ[];
  
  // Testimonial / Results Section
  results?: {
    company: string;
    quote: string;
    author: string;
    role: string;
    avatar: string;
    metrics: { label: string; value: string }[];
    caseStudy?: {
      title: string;
      image: string;
    };
  };
}

// ── Framer entrance preset (matches homepage) ────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

// ── Component ────────────────────────────────────────────────────────────────
export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Growing vertical timeline progress line
      if (timelineRef.current && timelineProgressRef.current) {
        gsap.fromTo(timelineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 40%',
              end: 'bottom 60%',
              scrub: 0.5,
            },
          }
        );

        // 2. Individual node and label 'activation' on scroll
        const nodes = document.querySelectorAll('.timeline-node');
        const labels = document.querySelectorAll('.timeline-phase-label');

        nodes.forEach((node, i) => {
          gsap.to(node, {
            borderColor: '#E6FF00',
            color: '#E6FF00',
            boxShadow: '0 0 25px rgba(230,255,0,0.2)',
            duration: 0.1,
            scrollTrigger: {
              trigger: node,
              start: 'top 45%',
              toggleActions: 'play none none reverse',
            }
          });

          if (labels[i]) {
            gsap.to(labels[i], {
              opacity: 1,
              color: '#E6FF00',
            duration: 0.1,
            scrollTrigger: {
              trigger: node,
              start: 'top 45%',
              toggleActions: 'play none none reverse',
            }
          });
          }
        });
      }

      // Marquee scroll
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, { x: '-50%', duration: 40, repeat: -1, ease: 'linear' });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const { icon: BentoCard1Icon } = { icon: data.bentoCard1Icon };
  const { icon: BentoCard2Icon } = { icon: data.bentoCard2Icon };

  return (
    <main className="bg-black min-h-screen">
      <Header />
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[100vh] w-full flex flex-col justify-start overflow-hidden bg-black pt-4 px-4 md:px-6 lg:px-12">
        
        {/* BG Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src={data.heroBg} 
            className="object-cover transform scale-105 opacity-70"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
          />
          {/* Cinematic Left Shadow Overlay - Replicated for all pages */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        </div>
 
        <div className="max-w-[1700px] mx-auto relative z-10 pt-32 md:pt-44 pb-40 md:pb-48 w-full text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[900px] flex flex-col gap-5 items-start"
          >
            <span className="subtitle-premium block tracking-[0.3em] font-bold text-accent italic items-start">{data.moduleLabel}</span>
            <h1 className="h-lg md:h-xl leading-[1.05] tracking-tight text-white text-left">
              {data.heroHeading} {data.heroSubheading}
            </h1>
            <p className="text-white/60 text-base md:text-xl max-w-xl leading-relaxed text-left">
              {data.heroDescription}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
              <PremiumButton href="/contact">
                {data.primaryCTA}
              </PremiumButton>
              <button className="group flex items-center gap-3 text-white/40 hover:text-white transition-all text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                View Portfolio
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── ENTERPRISE SQUARE SPLIT-CHIP MARQUEE ── */}
        <div className="absolute bottom-4 left-0 w-full z-20 overflow-hidden select-none px-4 md:px-12">
           <div className="max-w-[1700px] mx-auto">
             <div 
               ref={marqueeRef} 
               className="flex items-center gap-4 md:gap-6 w-fit whitespace-nowrap py-6"
             >
               {[...data.modules, ...data.modules, ...data.modules].map((mod, i) => (
                 <div 
                   key={i} 
                   className="flex items-center bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-neutral-50 hover:border-black/10 transition-all duration-700 group hover:-translate-y-2 overflow-hidden p-[4px] md:p-[5px] pr-6 md:pr-8"
                 >
                   <div className="w-20 h-16 md:w-24 md:h-20 bg-neutral-100 relative">
                      {mod.image ? (
                        <Image 
                          src={mod.image} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100" 
                          alt={mod.title}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/5">
                           <mod.icon className="w-6 h-6 md:w-8 md:h-8 text-black/20" />
                        </div>
                      )}
                   </div>
                   <div className="flex flex-col gap-0.5 px-4 md:px-6">
                      <span className="text-black text-[16px] md:text-[18px] font-bold tracking-tight">
                         {mod.title}
                      </span>
                      <span className="text-black/30 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.15em] group-hover:text-black/60 transition-colors">
                         Capability
                      </span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── SECTION 3: VALUE PROPOSITION ────────────────────────────────── */}
      <section className="section-v-spacing py-20 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="border-l border-[#E6FF00]/20 pl-6 md:pl-10"
            >
              <span className="subtitle-premium mb-4">{data.valuePropLabel}</span>
              <h2 className="text-2xl md:h-md leading-tight text-white">
                {data.valuePropAccent.replace('|', ' ')}
              </h2>
              <div className="h-[2px] w-12 bg-[#E6FF00]/40 mt-6" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="flex flex-col gap-6 md:gap-8"
            >
              {data.valuePropBody.map((para, i) => (
                <p
                  key={i}
                  className={`body-text leading-relaxed ${i === 0 ? 'text-[15px] md:text-[17px]' : 'text-[13px] md:text-[14px] border-l-2 border-[#E6FF00]/15 pl-6'}`}
                  style={{ opacity: i === 0 ? 0.6 : 0.35 }}
                >
                  {para}
                </p>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
 
      {/* ── NEW SECTION: INSTITUTIONAL RESULTS ── */}
      {data.results && (
        <section className="section-v-spacing bg-[#0a0a0a] border-y border-white/5 overflow-hidden py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
              
              {/* Left: Avatar Bubble */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="lg:col-span-4 flex justify-center lg:justify-start"
              >
                <div className="relative w-48 h-48 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-[1s] group">
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#E6FF00]/40 transition-all duration-700" />
                  <div className="absolute inset-3 md:inset-4 rounded-full overflow-hidden border border-white/5">
                    <Image 
                      src={data.results.avatar} 
                      className="object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                      alt="Testimonial author avatar" 
                      fill
                      sizes="(max-width: 768px) 192px, 320px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right: Content Block */}
              <div className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[#E6FF00] text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">
                    Trusted by {data.results.company}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-medium leading-[1.15] tracking-tight text-white/90">
                    "{data.results.quote}"
                  </h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-sm font-bold">{data.results.author}</span>
                    <span className="text-white/30 text-[10px] md:text-[11px] uppercase tracking-widest">{data.results.role}</span>
                  </div>
                </motion.div>

                {/* Metrics */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-end gap-10 md:gap-20 pt-10 border-t border-white/5"
                >
                  <div className="flex items-center gap-10 md:gap-12">
                    {data.results.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col gap-1 md:gap-2">
                        <span className="text-2xl md:text-4xl font-bold text-white tracking-tighter">
                          {metric.value}
                        </span>
                        <span className="text-white/30 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] max-w-[70px] leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {data.results.caseStudy && (
                    <Link 
                      href="/work" 
                      className="ml-auto group flex items-center bg-white/5 border border-white/10 p-4 gap-4 hover:bg-white/10 hover:border-[#E6FF00]/40 transition-all duration-500 max-w-[320px]"
                    >
                      <div className="w-16 h-12 overflow-hidden bg-black/40 relative">
                        <Image 
                          src={data.results.caseStudy.image} 
                          className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" 
                          alt="Case study thumbnail" 
                          fill
                          sizes="64px"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[#E6FF00]/40 text-[8px] uppercase font-bold tracking-widest group-hover:text-[#E6FF00] text-left">{data.results.company}</span>
                        <span className="text-white/80 text-[10px] font-bold leading-tight line-clamp-2 text-left group-hover:text-white transition-colors">{data.results.caseStudy.title}</span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-white/20 ml-2" />
                    </Link>
                  )}
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 4: BENTO FEATURE GRID ───────────────────────────────── */}
      <section className="section-v-spacing bg-[#080808] border-y border-white/5 py-24 md:py-32">
        <div className="section-container">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:h-md !pb-0">
              {data.bentoHeading} {data.bentoSubheading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto lg:h-[580px]">
            {/* Large Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-black border border-white/5 hover:border-[#E6FF00]/20 transition-all duration-700 min-h-[340px] md:min-h-[400px]"
            >
              <Image
                src={data.bentoMainImage}
                className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s]"
                alt="Bento main showcase image"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-6 md:inset-x-10 bottom-6 md:bottom-10 z-10">
                <span className="subtitle-premium mb-3 md:mb-4">Internal System</span>
                <h3 className="text-xl md:h-sm">
                  {data.bentoMainTitle} {data.bentoMainSubtitle}
                </h3>
              </div>
            </motion.div>

            {/* Smaller cards container - stack on mobile, 2 cols on md, sidebar on lg */}
            <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {/* Card 2 */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="group relative bg-black border border-white/5 hover:border-[#E6FF00]/20 transition-all duration-700 p-8 md:p-10 flex flex-col min-h-[220px] overflow-hidden"
              >
                {data.bentoCard1Image && (
                  <>
                    <Image 
                      src={data.bentoCard1Image} 
                      className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-[2s]" 
                      alt="Bento Card 1 Image" 
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <BentoCard1Icon className="w-5 h-5 text-[#E6FF00]/40 group-hover:text-[#E6FF00] transition-colors" />
                  <h3 className="text-lg md:h-sm !text-white mt-auto">{data.bentoCard1Title}</h3>
                  <p className="body-text text-[11px] md:text-[12px] mt-2 opacity-40">{data.bentoCard1Desc}</p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="group relative bg-[#050505] border border-white/5 hover:border-[#E6FF00]/20 transition-all duration-700 p-8 md:p-10 flex flex-col items-start justify-end min-h-[220px] overflow-hidden"
              >
                {data.bentoCard2Image && (
                  <>
                    <Image 
                      src={data.bentoCard2Image} 
                      className="object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-[2s]" 
                      alt="Bento Card 2 Image" 
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  </>
                )}
                <div className="relative z-10 w-full">
                  <BentoCard2Icon className="w-5 h-5 text-white/10 group-hover:text-[#E6FF00]/40 transition-colors mb-auto" />
                  <h3 className="text-lg md:h-sm !text-white">{data.bentoCard2Title}</h3>
                  <div className="h-[1px] w-0 bg-[#E6FF00] mt-4 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 6: CAPABILITY INTELLIGENCE ── */}
      <section className="section-v-spacing bg-black py-24 md:py-32">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 mb-16 md:mb-24 text-left"
          >
            <span className="subtitle-premium">System Capabilities</span>
            <h2 className="text-3xl md:h-md !pb-0 font-medium tracking-tight">Technical Architecture.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-20">
            {data.modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex flex-col items-start gap-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-[#E6FF00] transition-all duration-500">
                  <mod.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <h4 className="text-white text-lg md:text-[20px] font-medium tracking-tight group-hover:text-[#E6FF00] transition-colors">
                    {mod.title}
                  </h4>
                  <p className="text-white/40 text-[13px] md:text-[14px] leading-relaxed max-w-[280px] group-hover:text-white/60 transition-colors">
                    {mod.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: THE NARRATIVE PIPELINE ── */}
      <section ref={timelineRef} className="section-v-spacing py-24 md:py-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">

            {/* Sticky Left Pillar */}
            <div className="lg:col-span-5 h-fit lg:sticky lg:top-40 mb-12 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 md:gap-6"
              >
                <span className="subtitle-premium mb-0">{data.processLabel}</span>
                <h2 className="text-3xl md:h-md uppercase font-medium leading-tight">
                   {data.processHeading}<br />
                   <span className="text-white/30">{data.processSubheading}</span>
                </h2>
                <p className="body-text text-white/50 max-w-sm mt-2 text-[13px] md:text-[14px] leading-relaxed">
                   Systematic execution designed for institutional-grade outcomes. Every phase is a deliberate step toward market authority.
                </p>
                <div className="mt-4 md:mt-6 flex flex-col gap-4">
                   <div className="flex items-center gap-3 text-white/20 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">
                      <Zap className="w-4 h-4 text-[#E6FF00]/40" />
                      Status: Execution Active
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Scrolling Phases */}
            <div className="lg:col-span-7 relative flex flex-col gap-24 md:gap-44 pt-6 md:pt-10">
              {/* Dynamic Track (Base) */}
              <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-px bg-white/5" />
              
              {/* Active Growing Highlight */}
              <div
                ref={timelineProgressRef}
                className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-px bg-[#E6FF00] origin-top z-10"
              />

              {data.processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative group pl-20 md:pl-32"
                >
                  {/* Node Circle */}
                  <div className="absolute left-[7px] md:left-[15px] top-1 z-20 transition-transform duration-700">
                    <div className="timeline-node w-11 h-11 md:w-12 md:h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/20 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                       <span className="text-[14px] md:text-[16px] font-bold tracking-tighter">
                          {i + 1}
                       </span>
                    </div>
                  </div>

                  {/* Phase Label */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    <span className="timeline-phase-label text-white/10 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.4em] transition-colors duration-500">
                      Phase 0{i + 1}
                    </span>
                    <h3 className="text-xl md:h-sm !pb-0 text-white font-medium transition-all duration-500">
                      {step.title}
                    </h3>
                    <p className="body-text text-white/40 text-[12px] md:text-[13px] max-w-lg leading-relaxed transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Phase Decorative Line */}
                  <div className="mt-6 flex items-center gap-4">
                     <div className="h-px w-6 bg-white/10 group-hover:w-full group-hover:bg-[#E6FF00]/20 max-w-[60px] md:max-w-[80px] transition-all duration-1000" />
                     <ArrowUpRight className="w-3 h-3 text-[#E6FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: REVOLUTIONARY CTA ── */}
      <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bgimagectaservice.png" 
            className="object-cover scale-105" 
            alt="CTA Background" 
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          <div className="absolute inset-x-0 md:inset-0 bg-black/30 z-10" />
        </div>

        <div className="section-container relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col items-start gap-6 md:gap-8"
          >
            <h2 className="text-3xl md:text-6xl font-medium leading-[1.1] tracking-tight text-white max-w-xl">
               {data.ctaHeading} {data.ctaSubheading}
            </h2>
            <p className="body-text text-white/70 text-[14px] md:text-[16px] max-w-md leading-relaxed">
               Systematic execution is the engine; creative power is the soul. Secure your spot in our execution pipeline today.
            </p>
            <div className="mt-2 md:mt-4">
              <PremiumButton href="/contact">
                {data.ctaCTA}
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: FAQ ── */}
      <section className="section-v-spacing py-24 md:py-32">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:h-md">
              {data.faqHeading} Clarified.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group border border-white/5 bg-[#050505] hover:border-white/10 transition-all duration-500">
                <summary className="flex items-center justify-between p-6 md:p-7 cursor-pointer list-none">
                  <h4 className="text-[12px] md:h-sm !text-[14px] !pb-0 uppercase tracking-widest text-left">{faq.question}</h4>
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-500">
                    <ChevronDown className="w-3.5 h-3.5 text-white/40" />
                  </div>
                </summary>
                <div className="px-6 md:px-7 pb-6 md:pb-7 border-t border-white/5">
                  <p className="body-text text-[13px] md:text-[14px] pt-6 max-w-2xl">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

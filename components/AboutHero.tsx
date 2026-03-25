'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { PremiumButton } from '@/components/ui/PremiumButton';

// ─── constants ────────────────────────────────────────────────────────────────
/** Total hero scroll height — gives enough runway for the full video. */
const HERO_HEIGHT = '380vh';
const HERO_HEIGHT_MOBILE = '250vh';

/** Where (0-1) the initial hero text fades out */
const HERO_TEXT_FADE_END = 0.12;

/** Where (0-1) mid-scroll statement begins to appear */
const MID_TEXT_START = 0.38;
const MID_TEXT_FULL  = 0.75;

export const AboutHero: React.FC = () => {
  const containerRef   = useRef<HTMLDivElement>(null);
  const stickyRef      = useRef<HTMLDivElement>(null);
  const videoRef       = useRef<HTMLVideoElement>(null);
  const rafRef         = useRef<number>(0);

  const [progress, setProgress]    = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  // ─── Smooth-lerp target for scrubbing ─────────────────────────────────────
  const targetTimeRef  = useRef(0);
  const currentTimeRef = useRef(0);

  // ─── Scrub loop: lerp currentTime → targetTime every rAF ─────────────────
  const lastUpdateRef = useRef(0);
  const scrubLoop = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration > 0 && !video.seeking) {
      const diff = targetTimeRef.current - currentTimeRef.current;
      
      // OPTIMIZATION: High-Efficiency Decoder Protection
      // We limit 'currentTime' updates to ~30fps (33ms) to avoid overloading 
      // the hardware decoder on mobile devices. This is the #1 fix for 'lag'.
      const now = performance.now();
      if (now - lastUpdateRef.current > 33) {
        if (Math.abs(diff) > 0.02) { 
          // Damping factor of 0.06 is extremely smooth/premium
          currentTimeRef.current += diff * 0.06;
          
          try {
            video.currentTime = currentTimeRef.current;
            lastUpdateRef.current = now;
          } catch (e) {
            // Decoding fallback
          }
        }
      }
    }
    rafRef.current = requestAnimationFrame(scrubLoop);
  }, []);

  // ─── Progress → targetTime ────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady) return;
    targetTimeRef.current = Math.max(0, Math.min(video.duration, progress * video.duration));
  }, [progress, videoReady]);

  // ─── ScrollTrigger — drives progress ──────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Direct window escape for the fallback script
    (window as any).setVideoReadyFallback = () => {
      setVideoReady(true);
    };

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => st.kill();
  }, []);


  // ─── rAF scrub loop lifecycle ─────────────────────────────────────────────
  useEffect(() => {
    rafRef.current = requestAnimationFrame(scrubLoop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [scrubLoop]);

  // ─── Overlay opacity helpers ──────────────────────────────────────────────
  // Initial hero block fades out early
  const heroOpacity = progress < 0.05 ? 1 : Math.max(0, 1 - (progress - 0.05) / (HERO_TEXT_FADE_END - 0.05));
  const heroY       = progress < 0.05 ? 0 : -(progress - 0.05) * 300;

  // Mid-scroll statement
  const showMidText  = progress > MID_TEXT_START * 0.9;
  const midOpacity   = progress >= 0.9 
    ? Math.max(0, 1 - (progress - 0.9) / 0.05) 
    : progress >= MID_TEXT_FULL
      ? 1
      : progress >= MID_TEXT_START
        ? (progress - MID_TEXT_START) / (MID_TEXT_FULL - MID_TEXT_START)
        : 0;

  // Scroll indicator
  const scrollIndicatorOpacity = Math.max(0, 1 - progress * 8);

  // ─── EXIT transition: hero card shrink at ≥ 92% scroll ───────────────────
  const exitProgress = Math.max(0, (progress - 0.92) / 0.08); // 0→1 as progress 0.92→1
  const exitScale    = 1 - exitProgress * 0.045;
  const exitRadius   = exitProgress * 32;
  const exitBlur     = exitProgress * 6;
  const exitOpacity  = 1 - exitProgress; // Fade out completely to 0

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black z-40"
      style={{ height: (typeof window !== 'undefined' && window.innerWidth < 768) ? HERO_HEIGHT_MOBILE : HERO_HEIGHT }}
    >
      {/* ── Sticky viewport ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          transform: `scale(${exitScale})`,
          borderRadius: `${exitRadius}px`,
          opacity: exitOpacity,
          filter: `blur(${exitBlur}px)`,
          transition: exitProgress > 0 ? 'none' : 'none', // driven by scroll, no CSS delay
          willChange: 'transform, border-radius, filter, opacity',
        }}
      >
        {/* ══ VIDEO BACKGROUND ══════════════════════════════════════════════ */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => {
            const v = videoRef.current;
            if (v) {
              v.currentTime = 0.1; // Jump past frame 0 to force-buffer first frame
              currentTimeRef.current = 0.1;
              targetTimeRef.current  = 0.1;
              setVideoReady(true);
            }
          }}
        >
          {/* Using metadata-only preload to speed up initial site appearance */}
          <source src="/video/hero.webm#t=0.1" type="video/webm" />
          <source src="/video/scene1_scrub.mp4#t=0.1" type="video/mp4" />
        </video>

        {/* --- PERFORMANCE FALLBACK / LOADER --- */}
        {!videoReady && (
          <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-black">
            <div className="relative w-48 h-[1px] bg-white/10 mb-6 overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-white/60"
                 animate={{ x: ['-100%', '100%'] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               />
            </div>
            <span className="text-[9px] text-white/40 uppercase tracking-[0.4em] animate-pulse">
              Initializing Cinematic Experience
            </span>
          </div>
        )}

        {/* --- PERFORMANCE FALLBACK: Prevents the initial 'Black Screen' on Mobile --- */}
        {!videoReady && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop")',
              backgroundBlendMode: 'overlay' 
            }}
          />
        )}

        {/* --- VIDEO LOAD FALLBACK --- */}
        <script dangerouslySetInnerHTML={{ __html: `
          setTimeout(() => {
            if (window.setVideoReadyFallback) window.setVideoReadyFallback();
          }, 3000);
        `}} />


        {/* Subtle vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* ── OVERLAY CONTENT ─────────────────────────────────────────────── */}
        <div className="absolute inset-0 z-20 pointer-events-none">

          {/* ── 1. INITIAL HERO ──────────────────────────────────────────── */}
          <div
            className="absolute left-6 md:left-12 bottom-32 md:bottom-28 max-w-3xl text-left"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${heroY}px)`,
              pointerEvents: progress < 0.15 ? 'auto' : 'none',
              transition: 'none',
            }}
          >
            <span className="subtitle-premium !text-left !mb-4">
              theAurge Agency
            </span>

            <h1 className="h-md mb-5 !text-left">
              A creative studio <br className="hidden sm:block" />
              where ideas become <br className="hidden sm:block" />
              cinematic brands.
            </h1>

            <p className="body-text !text-white/70 !text-[14px] sm:!text-[15px] max-w-sm mb-10 !text-left">
              We specialize in high-end visual storytelling, crafting intentional digital
              experiences for the modern era.
            </p>
            <div className="flex flex-row items-center gap-4 mt-8 md:mt-6 pointer-events-auto flex-wrap">
              <PremiumButton href="#contact" className="scale-[0.85] sm:scale-100">
                Get in Touch
              </PremiumButton>

              <Link
                href="#work"
                className="group/btn relative flex items-center justify-between gap-4 bg-white/10 backdrop-blur-xl border border-white/20 pl-5 pr-1 py-1 rounded-[4px] text-white/90 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase transition-all duration-500 hover:scale-[1.02] w-fit sm:w-auto"
              >
                <span className="pl-1">View Work</span>
                <div className="w-8 h-8 rounded-[4px] bg-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/btn:w-11 group-hover/btn:bg-white text-white group-hover/btn:text-[#333]">
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-4 opacity-0 absolute transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                  <ArrowRight className="w-3.5 h-3.5 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/btn:translate-x-4 group-hover/btn:opacity-0" />
                </div>
              </Link>
            </div>
          </div>

          {/* ── 2. MID-SCROLL STATEMENT ──────────────────────────────────── */}
          <div
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none px-6"
            style={{
              opacity: midOpacity,
              display: showMidText ? 'flex' : 'none',
              transform: `translateY(${(1 - midOpacity) * 15}px)`,
              transition: 'none',
            }}
          >
            <div className="flex flex-col items-center justify-center text-center w-full mt-[-35vh]">
              <h1 className="text-3xl md:text-6xl font-medium leading-[1.1] tracking-tighter text-[#F5F5F5] drop-shadow-2xl">
                Best video production <br className="hidden md:block" />
                <span className="block md:inline-block opacity-100 font-light text-white/90 md:text-[#F5F5F5] md:font-normal">
                  company in maharashtra
                </span>
              </h1>
            </div>
          </div>

        </div>{/* /overlay */}

        {/* ── Scroll Indicator ─────────────────────────────────────────────── */}
        <div
          className="absolute bottom-12 flex flex-col items-center gap-3 z-30 pointer-events-none w-full"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[9px] text-white/40 uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white/40 h-full"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </div>
        </div>

      </div>{/* /sticky */}
    </div>
  );
};

export default AboutHero;

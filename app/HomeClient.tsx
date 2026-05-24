'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, memo } from 'react';

// Optimized Dynamic Imports for Performance
const HeroVideo = dynamic(() => import("@/components/HeroVideo").then(mod => mod.HeroVideo), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-black" />
});

const WorldMapSection = dynamic(() => import("@/components/WorldMapSection").then(mod => mod.WorldMapSection), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-black" />
});

const ServicesAssembly = dynamic(() => import("@/components/ServicesAssembly").then(mod => mod.ServicesAssembly), {
  ssr: false
});
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands"), { ssr: false });
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), { ssr: false });

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

function HomeClientContent() {
  return (
    <main className="relative bg-black min-h-screen flex flex-col pt-0">
      <Header />
      
      {/* ABOVE THE FOLD - High Priority for FCP */}
      <HeroVideo />

      <TrustedBrands />
      <WorldMapSection />

      {/* HEAVY ELEMENTS - Deferred for better interaction metrics */}
      <ServicesAssembly />
      <ComparisonSection />

      {/* FOOTER will follow from Page.tsx context */}
    </main>
  );
}

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // CRITICAL: Initialize high-perf scroll engine after mount
    import('@/lib/scrollEngine').then((module) => {
      if (module.initScrollAnimations) module.initScrollAnimations();
    });
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return <HomeClientContent />;
}

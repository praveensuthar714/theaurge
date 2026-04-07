'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";

import { useState, useEffect } from 'react';

// Dynamic imports with SSR disabled to prevent hydration 'insertBefore' errors
import { ServicesAssembly } from "@/components/ServicesAssembly";
import { HeroVideo } from "@/components/HeroVideo";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands"), { ssr: false });
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), { ssr: false });
const WorldMapSection = dynamic(() => import("@/components/WorldMapSection"), { ssr: false });

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // IMPORT SCROLL ENGINE 
    import('@/lib/scrollEngine').then((module) => {
      module.initScrollAnimations();
    });
  }, []);

  return (
    <main className="relative bg-black min-h-screen flex flex-col pt-0">
      <Header />
      {/* 1. Hero Video (Autoplay YouTube) */}
      <HeroVideo />

      {/* 2. Trusted Brands Section */}
      <TrustedBrands />

      {/* 3. Global World Map - NEW PLACEMENT */}
      <WorldMapSection />

      {/* 4. Unified Services Assembly (Progressive Pinned Reveal) */}
      <ServicesAssembly />

      {/* NEW: Comparison Section (Why The Aurge vs Alternatives) */}
      <ComparisonSection />

      {/* FOOTER will follow the Suspense block in Page.tsx */}
    </main>
  );
}

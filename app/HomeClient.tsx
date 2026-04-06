'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";

import { useState, useEffect } from 'react';

// Dynamic imports with SSR disabled to prevent hydration 'insertBefore' errors
import { ServicesAssembly } from "@/components/ServicesAssembly";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HeroVideo = dynamic(() => import("@/components/HeroVideo"), { ssr: false });
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands"), { ssr: false });
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), { ssr: false });
const PortfolioCarouselV2 = dynamic(() => import("@/components/PortfolioCarouselV2"), { ssr: false });
const WorldMapSection = dynamic(() => import("@/components/WorldMapSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function HomeClient({ portfolioAssets }: { portfolioAssets: any[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // IMPORT SCROLL ENGINE 
    import('@/lib/scrollEngine').then((module) => {
      module.initScrollAnimations();
    });
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

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

      {/* 5. Portfolio Horizontal Carousel (V2 - Arrow Based) */}
      <div id="work" className="bg-black">
        <PortfolioCarouselV2 assets={portfolioAssets} />
      </div>

      <Footer />
    </main>
  );
}

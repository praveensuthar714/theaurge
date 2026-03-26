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
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"), { ssr: false });
const GlobalReach = dynamic(() => import("@/components/GlobalReach"), { ssr: false });

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
    <main className="relative bg-black min-h-screen flex flex-col">
      <Header />
      {/* 1. Hero Video (Autoplay YouTube) */}
      <HeroVideo />

      {/* 2. Trusted Brands Section */}
      <TrustedBrands />

      {/* 3. Unified Services Assembly (Progressive Pinned Reveal) */}
      <ServicesAssembly />

      {/* NEW: Comparison Section (Why The Aurge vs Alternatives) */}
      <ComparisonSection />

      {/* 5. Portfolio Grid */}
      <div id="work">
        <PortfolioGrid assets={portfolioAssets} />
      </div>

      {/* 6. Global Reach Globe */}
      <GlobalReach />

      <Footer />
    </main>
  );
}

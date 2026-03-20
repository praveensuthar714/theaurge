'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";

import { useState, useEffect } from 'react';

// Dynamic imports with SSR disabled to prevent hydration 'insertBefore' errors
import { ServicesAssembly } from "@/components/ServicesAssembly";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands"), { ssr: false });
const ManifestoSection = dynamic(() => import("@/components/ManifestoSection"), { ssr: false });
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), { ssr: false });
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"), { ssr: false });

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="relative bg-black min-h-screen flex flex-col">
      <Header />
      {/* 1. Hero Scene (500vh Scroll) */}
      <HeroScene />

      {/* 2. Trusted Brands Section */}
      <TrustedBrands />

      {/* 3. Manifesto Section (Intro Philosophy) */}
      <ManifestoSection />

      {/* 4. Unified Services Assembly (Progressive Pinned Reveal) */}
      <ServicesAssembly />

      {/* NEW: Comparison Section (Why The Aurge vs Alternatives) */}
      <ComparisonSection />

      {/* 5. Portfolio Grid */}
      <div id="work">
        <PortfolioGrid />
      </div>

      <Footer />
    </main>
  );
}

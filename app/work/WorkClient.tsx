'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { DrivePortfolioItem } from '@/lib/drivePortfolio';
import type { DriveFolderNode } from '@/lib/portfolioNormalize';
import { PortfolioShowcase } from '@/components/portfolio/PortfolioShowcase';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function WorkClient({
  portfolioAssets,
  folderTree = [],
}: {
  portfolioAssets: DrivePortfolioItem[];
  folderTree?: DriveFolderNode[];
}) {
  return (
    <main className="min-h-screen bg-black selection:bg-[#E6FF00] selection:text-black">
      <Header />

      <PortfolioShowcase
        driveItems={portfolioAssets}
        folderTree={folderTree}
        mode="full"
        sectionId="work"
        layout="work"
      />

      <section className="relative w-full overflow-hidden border-t border-white/5 py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img
            src="/bgimagectaservice.png"
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        </div>
        <div className="section-container relative z-20 flex items-center px-6 md:px-12">
          <div className="max-w-[560px]">
            <h2 className="mb-5 font-sans text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[48px]">
              Ready to create your <br /> next project?
              <span className="ml-2 text-[#E6FF00]">●</span>
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Systematic execution is the engine; creative power is the soul. Secure your spot in our execution
              pipeline today.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 bg-[#E6FF00] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] text-black"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

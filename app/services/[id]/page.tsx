'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useParams, notFound } from 'next/navigation';
import { servicesData } from '@/lib/services-content';

// Dynamic imports for standard components
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

// Service Sections
import { ServiceHero } from "@/components/service/ServiceHero";
import { ProblemSection } from "@/components/service/ProblemSection";
import { SolutionSection } from "@/components/service/SolutionSection";
import { ServiceProcess } from "@/components/service/ServiceProcess";
import { ServiceProof } from "@/components/service/ServiceProof";
import { ServiceSticky } from "@/components/service/ServiceSticky";
import { ServiceCTA } from "@/components/service/ServiceCTA";

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return notFound();
  }

  return (
    <main className="bg-black min-h-screen selection:bg-[#E6FF00] selection:text-black scroll-smooth">
      <Header />
      
      {/* 1. HERO — High Impact */}
      <ServiceHero 
        title={service.title} 
        tagline={service.tagline} 
        image={service.heroImage} 
      />

      {/* 2. PROBLEM — Diagnostic Narrative */}
      <ProblemSection 
        title={service.problem.title} 
        desc={service.problem.desc} 
      />

      {/* 3 & 4. SOLUTION & BREAKDOWN — The Capability Matrix (Bento) */}
      <SolutionSection 
        title={service.solution.title} 
        desc={service.solution.desc} 
        features={service.features}
      />

      {/* 5. PROCESS — Animated Protocol Timeline */}
      <ServiceProcess 
        steps={service.process} 
      />

      {/* 6. PROOF — Outcome Benchmarks */}
      <ServiceProof />

      {/* 7. DIFFERENTIATION — Sticky Scroll Storytelling */}
      <ServiceSticky />

      {/* 8. CTA — Full Conversion Transition */}
      <ServiceCTA />

      <Footer />
    </main>
  );
}

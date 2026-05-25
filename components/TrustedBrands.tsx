'use client';

import React from 'react';
import { PerspectiveMarquee } from '@/components/ui/perspective-marquee';

const configMap: Record<number, { scale: number }> = {
  1: { scale: 1.2 },
  2: { scale: 1.3 },   // Mauli Trucking
  3: { scale: 1.0 },
  4: { scale: 1.4 },   // Nourishing Farms
  5: { scale: 1.0 },
  6: { scale: 1.5 },   // Nexus
  7: { scale: 1.2 },
  8: { scale: 1.3 },   // Heera Panna
  9: { scale: 1.0 },
  10: { scale: 1.2 },
  11: { scale: 1.2 },
  12: { scale: 1.2 },
  13: { scale: 1.6 },  // Eagle Book
  14: { scale: 1.0 },
  15: { scale: 1.3 },  // Brixton
  17: { scale: 1.2 },
  20: { scale: 1.1 },
  21: { scale: 1.0 },
};

const validBrandIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 20, 21];

const allBrands = validBrandIds.map(id => {
  const conf = configMap[id] || { scale: 1.0 };
  return {
    src: `/clientlogos/${id}.png`,
    alt: `Brand ${id}`,
    scale: conf.scale,
  };
});

export const TrustedBrands: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-0 relative z-10 bg-black">
      <div className="section-container text-center mb-16">
        <span className="subtitle-premium">
          RECOGNITION
        </span>
        <h2 className="h-lg mb-6">
          Trusted by Global Leaders
        </h2>
        <p className="body-text max-w-xl mx-auto">
          We collaborate with technology leaders and creative agencies to engineer cinematic brand experiences.
        </p>
      </div>

      <div className="w-full border-y border-white/[0.05] bg-white/[0.01] py-8 backdrop-blur-sm">
        <PerspectiveMarquee
          images={allBrands}
          logoHeight={45}
          logoMaxWidth={130}
          gap={96}
          fadeColor="#000000"
          background="transparent"
          duration={25}
          className="flex items-center"
        />
      </div>
    </section>
  );
};

export default TrustedBrands;

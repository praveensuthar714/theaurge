'use client';

import React from 'react';
import { Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GridScan = dynamic(() => import('./GridScan'), { ssr: false });

const columns = [
  "Speed",
  "Flexibility",
  "Quality",
  "Scalability",
  "ROI"
];

const comparisonData = [
  {
    target: "The Aurge.",
    desc: "Elite global creative talent, synchronized for total market dominance.",
    isAurge: true,
    scores: [true, true, true, true, true]
  },
  {
    target: "In-house teams",
    desc: "Limited bandwidth and restricted skill mix for rapid evolution.",
    isAurge: false,
    scores: [false, false, true, false, false]
  },
  {
    target: "Traditional agencies",
    desc: "Slow, costly infrastructure with highly inflexible constraints.",
    isAurge: false,
    scores: [false, false, true, true, false]
  },
  {
    target: "Freelancers",
    desc: "Unreliable scalability resulting in inconsistent brand quality.",
    isAurge: false,
    scores: [true, true, false, false, true]
  },
  {
    target: "Self-serve tools",
    desc: "Incremental automation for purely basic, repetitive tasks.",
    isAurge: false,
    scores: [true, false, false, true, true]
  }
];

export const ComparisonSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-40 px-6 z-20 overflow-hidden">
      
      {/* --- CINEMATIC GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-80">
        <GridScan
          sensitivity={0.4}
          lineThickness={0.3}     // Thinner lines for elegance
          linesColor="#0d0d0d"   // Very subtle dark grid
          gridScale={0.12}
          scanColor="#E6FF00"    // Brand Lime subtle glow
          scanOpacity={0.12}     // Minimal highlight
          enablePost={true}
          bloomIntensity={0.2}
          chromaticAberration={0.001}
          noiseIntensity={0.02}
          scanDuration={6.0}     // Extremely slow "magic ring" style
          scanDelay={1.0}
        />
      </div>

      {/* Smooth blending overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-20">
        
        {/* Header - Matches What We Do Section Exactly */}
        <div className="text-center mb-16 md:mb-24">
          <span className="subtitle-premium block mb-4 mx-auto">Superior Ecosystem</span>
          <h2 className="text-[28px] md:text-[42px] font-medium leading-tight tracking-tight mb-5 text-white">
            Traditional outsourcing versus The Aurge.
          </h2>
          <div className="flex flex-col items-center gap-1">
            <p className="text-white/40 text-[14px] font-light tracking-wide max-w-md">
              Compare our elite architecture against traditional market friction.
            </p>
          </div>
        </div>

        {/* Ultra-Premium Liquid Glass Table (Borderless) */}
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
          <div className="min-w-[800px] relative">
            
            {/* Strong Liquid Glass Slab / Sharp Edges WITHOUT Borders */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-[40px] rounded-[4px] z-0 shadow-2xl" />
            
            <div className="relative z-10 pb-4">
              {/* Table Header */}
              <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 md:px-10 py-8">
                <div></div>
                {columns.map((col, idx) => (
                  <div key={idx} className="text-center text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                    {col}
                  </div>
                ))}
              </div>

              {/* Table Body */}
              <div className="flex flex-col gap-2 px-2">
                {comparisonData.map((row, index) => {
                  const isAurge = row.isAurge;

                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-4 items-center px-4 md:px-8 py-7 md:py-9 transition-colors duration-500 hover:bg-white/[0.04] rounded-[4px] ${
                        isAurge ? "bg-white/[0.03]" : ""
                      }`}
                    >
                      {/* Brand Info Column */}
                      <div className="flex flex-col gap-1 pr-6 md:pr-12">
                        <h4 className={`text-[20px] md:text-[24px] font-medium tracking-tight ${
                          isAurge ? "text-[#E6FF00]" : "text-white"
                        }`}>
                          {row.target}
                        </h4>
                        <p className={`text-[13px] md:text-[14px] leading-relaxed font-light ${
                          isAurge ? "text-[#E6FF00]/70" : "text-white/40"
                        }`}>
                          {row.desc}
                        </p>
                      </div>

                      {/* Scores Columns */}
                      {row.scores.map((score, idx) => (
                        <div key={idx} className="flex justify-center items-center">
                          {score ? (
                            isAurge ? (
                              <Check className="w-6 h-6 stroke-[2.5px] text-[#E6FF00] drop-shadow-[0_0_8px_rgba(230,255,0,0.4)]" />
                            ) : (
                              <motion.div
                                animate={{
                                  color: [
                                    'rgba(255,255,255,0.3)', 
                                    'rgba(255,255,255,0.3)', 
                                    'rgba(230,255,0,1)', 
                                    'rgba(230,255,0,0.6)', 
                                    'rgba(255,255,255,0.3)', 
                                    'rgba(255,255,255,0.3)'
                                  ],
                                  opacity: [1, 1, 1, 0.5, 1, 1],
                                  filter: [
                                    'drop-shadow(0 0 0px rgba(230,255,0,0))',
                                    'drop-shadow(0 0 0px rgba(230,255,0,0))',
                                    'drop-shadow(0 0 15px rgba(230,255,0,0.9))',
                                    'drop-shadow(0 0 5px rgba(230,255,0,0.4))',
                                    'drop-shadow(0 0 0px rgba(230,255,0,0))',
                                    'drop-shadow(0 0 0px rgba(230,255,0,0))'
                                  ]
                                }}
                                transition={{
                                  duration: 3.5 + (idx % 3),
                                  repeat: Infinity,
                                  times: [0, 0.85, 0.88, 0.92, 0.94, 1], // Very quick glitch at the end of the steady loop
                                  ease: "linear",
                                  delay: idx * 0.25 + index * 0.15
                                }}
                              >
                                <Check className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5px]" style={{ color: "currentColor" }} />
                              </motion.div>
                            )
                          ) : (
                            <div className="w-5 h-5 flex items-center justify-center opacity-30">
                              <span className="w-3 h-[1.5px] bg-white rounded-full" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
    </section>
  );
};

export default ComparisonSection;

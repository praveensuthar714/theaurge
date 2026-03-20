'use client';

import React from 'react';
import { Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GridScan = dynamic(() => import('./GridScan'), { ssr: false });

const columns = [
  { key: "speed", label: "Speed" },
  { key: "flexibility", label: "Flexibility" },
  { key: "quality", label: "Quality" },
  { key: "scalability", label: "Scalability" },
  { key: "roi", label: "ROI" }
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
          lineThickness={0.3}
          linesColor="#0d0d0d"
          gridScale={0.12}
          scanColor="#E6FF00"
          scanOpacity={0.12}
          enablePost={true}
          bloomIntensity={0.2}
          chromaticAberration={0.001}
          noiseIntensity={0.02}
          scanDuration={6.0}
          scanDelay={1.0}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center mb-16 md:mb-24">
          <span className="subtitle-premium block mb-4 mx-auto">Superior Ecosystem</span>
          <h2 className="text-[28px] md:text-[42px] font-medium leading-tight tracking-tight mb-5 text-white">
            Traditional outsourcing versus The Aurge.
          </h2>
          <p className="text-white/40 text-[14px] font-light tracking-wide max-w-md mx-auto">
            Compare our elite architecture against traditional market friction.
          </p>
        </div>

        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-[40px] rounded-[4px] z-0 shadow-2xl" />
          
          <div className="relative z-10 pb-4">
            {/* Table Header (Desktop) */}
            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-10 py-8">
              <div></div>
              {columns.map((col, idx) => (
                <div key={idx} className="text-center text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                  {col.label}
                </div>
              ))}
            </div>

            {/* Table Body */}
            <div className="flex flex-col gap-4 md:gap-2 px-2 md:px-4">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-4 md:items-center px-5 py-6 md:px-8 md:py-9 transition-colors duration-500 hover:bg-white/[0.04] rounded-[6px] md:rounded-[4px] border border-white/5 md:border-transparent ${
                    row.isAurge ? "bg-white/[0.03] border-white/10" : "bg-black/20"
                  }`}
                >
                  <div className="flex flex-col gap-2 md:gap-1 md:pr-12">
                    <h4 className={`text-[20px] md:text-[24px] font-medium tracking-tight ${row.isAurge ? "text-[#E6FF00]" : "text-white"}`}>
                      {row.target}
                    </h4>
                    <p className={`text-[13px] md:text-[14px] leading-relaxed font-light ${row.isAurge ? "text-[#E6FF00]/70" : "text-white/40"}`}>
                      {row.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:contents gap-4">
                    {row.scores.map((score, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:justify-center items-start md:items-center gap-1 md:gap-0">
                        <span className="md:hidden text-white/30 text-[9px] font-bold uppercase tracking-widest">{columns[idx].label}</span>
                        {score ? (
                          row.isAurge ? (
                            <Check className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5px] text-[#E6FF00] drop-shadow-[0_0_8px_rgba(230,255,0,0.4)]" />
                          ) : (
                            <motion.div
                              animate={{
                                color: ['rgba(255,255,255,0.3)', 'rgba(230,255,0,1)', 'rgba(255,255,255,0.3)'],
                                opacity: [1, 1, 1],
                              }}
                              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                            >
                              <Check className="w-5 h-5 stroke-[1.5px]" />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

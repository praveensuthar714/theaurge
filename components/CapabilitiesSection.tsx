'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/scrollEngine';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    title: "Cinematic Video Production",
    label: "Video Production",
    description: "From concept to final cut, we craft cinematic stories that bring brands to life.",
    image: "/capabilities/video-production.png",
    color: "bg-[#1A302B]", // Dark Emerald
    textColor: "text-[#D1E6E1]"
  },
  {
    title: "Brand & Creative Design",
    label: "Creative Strategy",
    description: "Defining identities through visual excellence and purposeful design systems.",
    image: "/capabilities/brand-design.png",
    color: "bg-[#F2F0EA]", // Cream/Beige
    textColor: "text-[#333]"
  },
  {
    title: "Web & Digital Experiences",
    label: "Digital Products",
    description: "Architecting high-performance digital products and immersive web environments.",
    image: "/capabilities/digital-experiences.png",
    color: "bg-[#E6FF00]", // Brand Yellow
    textColor: "text-black"
  }
];

export const CapabilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        { 
          opacity: 0, 
          y: 40,
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 pt-[200px] pb-40 px-6 bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
           <span className="subtitle-premium">Expertise</span>
           <h2 className="h-lg max-w-2xl">
             Engineering cinematic solutions <br /> for the extraordinary.
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el }}
              whileHover="hover"
              initial="initial"
              className="group relative flex flex-col aspect-square overflow-hidden rounded-[4px] cursor-pointer bg-neutral-900 border border-white/5"
            >
              {/* Top Visual Area (Static Hand-off Style) */}
              <div className="relative flex-grow overflow-hidden">
                <motion.div 
                  className="absolute inset-0 z-0 h-full w-full"
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image 
                     src={cap.image} 
                     alt={cap.title}
                     fill
                     sizes="(max-width: 768px) 100vw, 33vw"
                     className="object-cover transition-all duration-[1.5s]"
                   />
                </motion.div>
                
                {/* Overlay for description reveal */}
                <motion.div 
                  className="absolute inset-0 bg-black/85 z-10 flex flex-col items-center justify-center p-10 text-center"
                  variants={{
                    initial: { opacity: 0, backdropFilter: "blur(0px)" },
                    hover: { opacity: 1, backdropFilter: "blur(12px)" }
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent text-[14px] leading-relaxed font-medium">
                    {cap.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Color-Blocked Label (Restored High Contrast) */}
              <div className={`h-[100px] ${cap.color} flex items-center justify-between px-6 transition-all duration-700 group-hover:brightness-105`}>
                 <div className="flex flex-col">
                    <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mb-1 opacity-60 ${cap.textColor}`}>
                       {cap.label}
                    </span>
                    <h3 className={`text-[17px] font-semibold tracking-tight leading-tight ${cap.textColor}`}>
                      {cap.title}
                    </h3>
                 </div>
                 <div className={`w-8 h-8 rounded-[4px] border flex items-center justify-center border-current opacity-40 transition-transform duration-500 group-hover:rotate-45 ${cap.textColor}`}>
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </div>

              {/* Hover Glow Border */}
              <motion.div 
                className="absolute inset-0 rounded-[4px] pointer-events-none z-30"
                variants={{
                  initial: { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" },
                  hover: { boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.1)" }
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

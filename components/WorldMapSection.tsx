'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WorldMap } from './ui/world-map';

export const WorldMapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  return (
    <section 
      ref={containerRef}
      className="relative z-10 bg-black pt-16 md:pt-20 pb-0 overflow-hidden w-full"
    >
      {/* Dynamic Global Atmosphere */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#E6FF00]/[0.20] blur-[180px] rounded-full pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

      <div className="w-full relative z-10">

        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, filter: "blur(0px)" }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full relative"
           style={{ willChange: 'opacity, filter' }}
        >

           
           <WorldMap 
             lineColor="#E6FF00"
             dots={[
               {
                 start: { lat: 20.59, lng: 78.96, label: "India Center" },
                 end: { lat: 40.71, lng: -74.00, label: "New York" }
               },
               {
                 start: { lat: 20.59, lng: 78.96 },
                 end: { lat: 51.50, lng: -0.12, label: "London" }
               },
               {
                 start: { lat: 20.59, lng: 78.96 },
                 end: { lat: 25.20, lng: 55.27, label: "Dubai" }
               },
               {
                 start: { lat: 20.59, lng: 78.96 },
                 end: { lat: 35.67, lng: 139.65, label: "Tokyo" }
               },
               {
                 start: { lat: 20.59, lng: 78.96 },
                 end: { lat: -33.86, lng: 151.20, label: "Sydney" }
               }
             ]}
           />
        </motion.div>
      </div>
    </section>
  );
};

export default WorldMapSection;

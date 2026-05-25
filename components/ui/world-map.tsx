"use client";

import React, { useMemo, useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoPath, geoMercator } from "d3-geo";

// Specialized GeoJSON for high-performance rendering
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#E6FF00",
}: MapProps) {
  
  // Responsive Projection Logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Track which destination is currently highlighted
  const [activeDestination, setActiveDestination] = useState(0);
  
  // Cycle through destinations with 3-second intervals
  useEffect(() => {
    if (!dots || dots.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % (dots.length - 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [dots]);

  const projection = useMemo(() => {
    return geoMercator()
      .scale(isMobile ? 100 : 135) // Balanced scale for proper fit
      .translate(isMobile ? [400, 310] : [420, 300]); 
  }, [isMobile]);

  return (
    <div className="w-full aspect-[1/1] sm:aspect-[1.8/1] md:aspect-[2.3/1] bg-black relative overflow-hidden flex items-center justify-center p-4 md:p-6">

      {/* Deep Space Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(230,255,0,0.08)_0%,transparent_75%)] pointer-events-none" />
      
      <ComposableMap
        projection={projection}
        width={800}
        height={500}
        className="w-full h-full max-w-[1200px] touch-none"
      >
        <defs>
          <filter id="arc-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dotted Land Pattern */}
          <pattern
            id="dotted-land"
            x="0"
            y="0"
            width="2.5"
            height="2.5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="#FFFFFF45" />
          </pattern>

          {/* Highlighted Land Pattern */}
          <pattern
            id="highlighted-land"
            x="0"
            y="0"
            width="2.5"
            height="2.5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="#FFFFFF" />
          </pattern>

          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── CONTINENTS ── */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Helper function to determine if this country is highlighted (India + current destination)
              const getIsHighlighted = () => {
                const geoName = geo.properties.name;
                
                // Always highlight India
                if (geoName === "India") return true;
                
                // Also highlight the current destination
                if (dots.length === 0) return false;
                const destinationCountry = dots[activeDestination + 1];
                if (!destinationCountry) return false;
                
                const countryNames: { [key: number]: string[] } = {
                  0: ["United States of America", "USA"], // New York
                  1: ["United Kingdom"], // London
                  2: ["United Arab Emirates"], // Dubai
                  3: ["Japan"], // Tokyo
                  4: ["Australia"], // Sydney
                };
                
                const activeCountryNames = countryNames[activeDestination];
                return activeCountryNames && activeCountryNames.includes(geoName);
              };
              
              const isHighlighted = getIsHighlighted();
              
              if (geo.properties.name === "Antarctica") return null;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "url(#highlighted-land)" : "url(#dotted-land)"}
                  stroke={isHighlighted ? "#FFFFFF" : "#FFFFFF15"}
                  strokeWidth={isHighlighted ? 0.5 : 0.2}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#FFFFFF55", outline: "none", cursor: "pointer" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* ── CONNECTION STREAMS ── */}
        {dots.map((dot, i) => {
          const start = projection([dot.start.lng, dot.start.lat]);
          const end = projection([dot.end.lng, dot.end.lat]);
          
          if (!start || !end) return null;

          // Parabolic arc path
          const midX = (start[0] + end[0]) / 2;
          const midY = (start[1] + end[1]) / 2 - Math.abs(end[0] - start[0]) * 0.15 - 30;
          const pathD = `M ${start[0]} ${start[1]} Q ${midX} ${midY} ${end[0]} ${end[1]}`;

          return (
            <g key={`stream-${i}`}>
              <path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth={0.5}
                className="opacity-[0.4]"
              />

              {/* Data Pulse Segment */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth={isMobile ? 1 : 1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathOffset: [0, 1.1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                filter="url(#arc-glow)"
              />
            </g>
          );
        })}

        {/* ── HUB & NODES ── */}
        {dots.map((dot, i) => {
          const isMainHub = i === 0 || dot.start.label === "India Center";
          const isActiveDestination = i - 1 === activeDestination;
          
          return (
            <React.Fragment key={`node-${i}`}>
              {/* Primary Hub Pulse (Always India) */}
              {isMainHub && (
                <Marker coordinates={[dot.start.lng, dot.start.lat]}>
                  <g filter="url(#arc-glow)">
                    <circle r={isMobile ? 2 : 3} fill="#FFFFFF" />
                    <motion.circle
                      r={isMobile ? 2 : 3}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      initial={{ opacity: 0.6 }}
                      animate={{ 
                        opacity: [0.8, 0.2, 0.8],
                        r: [isMobile ? 2 : 3, isMobile ? 12 : 15, isMobile ? 2 : 3]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                </Marker>
              )}

              {/* Distant Operational Nodes - All Destinations */}
              <Marker coordinates={[dot.end.lng, dot.end.lat]}>
                {isActiveDestination ? (
                  <g filter="url(#arc-glow)">
                    <circle r={isMobile ? 1.5 : 2} fill="#FFFFFF" />
                    <motion.circle
                      r={isMobile ? 2 : 3}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      initial={{ opacity: 0.6 }}
                      animate={{ 
                        opacity: [0.8, 0.2, 0.8],
                        r: [isMobile ? 2 : 3, isMobile ? 12 : 15, isMobile ? 2 : 3]
                      }}
                      transition={{
                        duration: 2.5,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                ) : (
                  <circle r={isMobile ? 1 : 1.5} fill="white" className="opacity-30" />
                )}
                
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <motion.text
                    textAnchor="middle"
                    y={isMobile ? -8 : -10}
                    animate={{ 
                      fill: isActiveDestination ? "#FFFFFF" : "rgba(255,255,255,0.4)"
                    }}
                    className={`font-bold tracking-[0.2em] uppercase pointer-events-none transition-colors`}
                    style={{ fontSize: isMobile ? '5px' : '7px' }}
                  >
                    {dot.end.label}
                  </motion.text>
                </motion.g>
              </Marker>
            </React.Fragment>
          );
        })}
      </ComposableMap>

      {/* Grid Overlay for 'System' feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: isMobile ? '20px 20px' : '30px 30px' }} />

      {/* Cinematic Overlays */}
      <div className="absolute inset-x-0 top-0 h-16 md:h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default memo(WorldMap);

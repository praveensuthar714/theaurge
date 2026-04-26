"use client";

import React, { useMemo } from "react";
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

  const projection = useMemo(() => {
    return geoMercator()
      .scale(isMobile ? 85 : 120) // Tighten scale for mobile visibility
      .translate(isMobile ? [400, 310] : [400, 280]); 
  }, [isMobile]);

  return (
    <div className="w-full aspect-[1/1] sm:aspect-[2/1] md:aspect-[2.5/1] bg-black relative overflow-hidden flex items-center justify-center p-4">

      {/* Deep Space Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,255,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      
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
            <circle cx="1" cy="1" r="0.6" fill="#FFFFFF25" />
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
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dotted-land)"
                stroke="#FFFFFF05"
                strokeWidth={0.2}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#FFFFFF15", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
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
                className="opacity-[0.08]"
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
                  opacity: [0, 0.8, 0.8, 0],
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
          
          return (
            <React.Fragment key={`node-${i}`}>
              {/* Primary Hub Pulse (Always India) */}
              {isMainHub && (
                <Marker coordinates={[dot.start.lng, dot.start.lat]}>
                  <g filter="url(#arc-glow)">
                    <circle r={isMobile ? 2 : 3} fill={lineColor} />
                    <circle r={isMobile ? 2 : 3} fill={lineColor} className="opacity-40">
                      <animate attributeName="r" from="2" to={isMobile ? 10 : 12} dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </Marker>
              )}

              {/* Distant Operational Nodes */}
              <Marker coordinates={[dot.end.lng, dot.end.lat]}>
                <circle r={isMobile ? 1 : 1.5} fill="white" className="opacity-30" />
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <text
                    textAnchor="middle"
                    y={isMobile ? -8 : -10}
                    className={`font-bold fill-white/40 tracking-[0.2em] uppercase pointer-events-none`}
                    style={{ fontSize: isMobile ? '5px' : '7px' }}
                  >
                    {dot.end.label}
                  </text>
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

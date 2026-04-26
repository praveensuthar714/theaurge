"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoPath, geoEquirectangular, geoMercator } from "d3-geo";

// High quality world topojson
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
  lineColor = "#E6FF00", // Aurge yellow
}: MapProps) {
  
  // Define projection once to share between markers and paths
  const projection = useMemo(() => {
    return geoEquirectangular()
      .scale(150)
      .translate([400, 240]); 
  }, []);

  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection]);

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.4/1] bg-black relative overflow-hidden flex items-center justify-center">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#E6FF00]/5 to-black pointer-events-none" />
      
      <ComposableMap
        projection={projection}
        width={800}
        height={500}
        className="w-full h-full"
      >
        <defs>
          <filter id="hub-glow-large">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dotted Pattern for Continents */}
          <pattern
            id="continent-dots"
            x="0"
            y="0"
            width="3"
            height="3"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="#FFFFFF40" />
          </pattern>

          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* The World */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#continent-dots)"
                stroke="#FFFFFF10"
                strokeWidth={0.3}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "url(#continent-dots)", outline: "none", opacity: 0.8 },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Connection Arcs */}
        {dots.map((dot, i) => {
          const start = projection([dot.start.lng, dot.start.lat]);
          const end = projection([dot.end.lng, dot.end.lat]);
          
          if (!start || !end) return null;

          // Simple quadratic bezier for the arc
          const midX = (start[0] + end[0]) / 2;
          const midY = (start[1] + end[1]) / 2 - Math.abs(end[0] - start[0]) * 0.2 - 40;
          const pathD = `M ${start[0]} ${start[1]} Q ${midX} ${midY} ${end[0]} ${end[1]}`;

          return (
            <g key={`path-group-${i}`}>
              {/* Static background path */}
              <path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth={1}
                strokeDasharray="4 4"
                className="opacity-10"
              />

              {/* Animated "Snake" segments */}
              {[...Array(3)].map((_, idx) => (
                <motion.path
                  key={`segment-${i}-${idx}`}
                  d={pathD}
                  fill="none"
                  stroke={lineColor}
                  strokeWidth={2 - idx * 0.5}
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
                    delay: i * 0.5 + idx * 0.1,
                  }}
                  filter="url(#hub-glow-large)"
                />
              ))}
            </g>
          );
        })}

        {/* Markers */}
        {dots.map((dot, i) => {
          const isIndia = i === 0; // First dot is usually the hub in the user's data
          
          return (
            <React.Fragment key={`markers-${i}`}>
              {/* India Hub (Main Node) */}
              {isIndia && (
                <Marker coordinates={[dot.start.lng, dot.start.lat]}>
                  <g filter="url(#hub-glow-large)">
                    <circle r="4" fill={lineColor} />
                    <circle r="4" fill={lineColor} className="opacity-40">
                      <animate attributeName="r" from="4" to="15" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </Marker>
              )}

              {/* Destination Point */}
              <Marker coordinates={[dot.end.lng, dot.end.lat]}>
                <circle r="2.5" fill="white" className="opacity-60" />
                
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 1 }}
                >
                  <text
                    textAnchor="middle"
                    y={-12}
                    className="text-[10px] font-bold fill-white/60 tracking-tighter uppercase pointer-events-none"
                    style={{ fontSize: '9px', fontWeight: 700 }}
                  >
                    {dot.end.label}
                  </text>
                </motion.g>
              </Marker>
            </React.Fragment>
          );
        })}
      </ComposableMap>
      
      {/* Minimalistic vignette to fade edges into black */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

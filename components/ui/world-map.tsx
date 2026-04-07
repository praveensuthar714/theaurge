"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import DottedMap from "dotted-map";

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
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const svgMap = map.getSVG({
    radius: 0.22, // Slightly larger continents
    color: "#FFFFFF60", // Much brighter map dots
    shape: "circle",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
    i: number
  ) => {
    const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    const midX = (start.x + end.x) / 2;
    const arcHeight = (distance * 0.2) + (30 + i * 12);
    const midY = Math.min(start.y, end.y) - arcHeight;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[1.8/1] md:aspect-[1.5/0.8] bg-black rounded-none relative font-sans">
      <div
        className="absolute inset-x-0 h-full w-full"
        style={{
          maskImage: "linear-gradient(to bottom, white 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, white 90%, transparent)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        />
      </div>

      <svg
        ref={svgRef}
        viewBox="0 -60 800 500"
        className="w-full h-full absolute inset-0 pointer-events-none select-none overflow-visible"
      >
        <defs>
          <filter id="hub-glow">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const path = createCurvedPath(startPoint, endPoint, i);
          
          return (
            <g key={`path-group-${i}`}>
              {/* Animation Tail segments */}
              {[...Array(6)].map((_, idx) => (
                <motion.path
                  key={`segment-${i}-${idx}`}
                  d={path}
                  fill="none"
                  stroke={lineColor}
                  strokeWidth={2.4 - idx * 0.4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0 }}
                  animate={{ 
                    pathOffset: [0, 1],
                    opacity: [0, 1 - idx * 0.15, 1 - idx * 0.15, 0]
                  }}
                  transition={{
                    pathOffset: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.6 + idx * 0.06,
                    },
                    opacity: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.6 + idx * 0.06,
                    }
                  }}
                  className="blur-[1px]"
                />
              ))}

              {/* Destination Label Display Animation */}
              <motion.g
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.6 + 2.5, // Sync with snake arrival
                }}
              >
                <text
                  x={endPoint.x}
                  y={endPoint.y - 12}
                  textAnchor="middle"
                  fill="white"
                  className="text-[10px] font-bold tracking-widest uppercase opacity-70"
                >
                  {dot.end.label}
                </text>
              </motion.g>
            </g>
          );
        })}

        {/* Global Hubs */}
        {dots.map((dot, i) => {
          const startPt = projectPoint(dot.start.lat, dot.start.lng);
          const endPt = projectPoint(dot.end.lat, dot.end.lng);
          
          return (
            <g key={`pts-${i}`}>
               {/* India Center (Only draw once) */}
               {i === 0 && (
                 <g filter="url(#hub-glow)">
                    <circle cx={startPt.x} cy={startPt.y} r="3.5" fill={lineColor} />
                    <circle cx={startPt.x} cy={startPt.y} r="3.5" fill={lineColor} className="opacity-40 shadow-2xl">
                       <animate attributeName="r" from="3.5" to="15" dur="3s" repeatCount="indefinite" />
                       <animate attributeName="opacity" from="0.4" to="0" dur="3s" repeatCount="indefinite" />
                    </circle>
                 </g>
               )}

               {/* Destinations */}
               <circle cx={endPt.x} cy={endPt.y} r="2" fill="white" className="opacity-40 shadow-lg" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

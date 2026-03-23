"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import { Globe2 } from 'lucide-react';

// Require dynamic import for the globe to prevent SSR canvas issues
const Globe = dynamic(() => import('@/components/ui/cobe-globe').then(mod => mod.Globe), { ssr: false });

const markers = [
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number], label: "Sydney" },
];

const arcs = [
  { id: "sf-tokyo", from: [37.7595, -122.4367] as [number, number], to: [35.6762, 139.6503] as [number, number], label: "SF → TOKYO" },
  { id: "nyc-london", from: [40.7128, -74.006] as [number, number], to: [51.5074, -0.1278] as [number, number], label: "NYC → LON" },
  { id: "london-dubai", from: [51.5074, -0.1278] as [number, number], to: [25.2048, 55.2708] as [number, number], label: "LON → DXB" },
  { id: "dubai-singapore", from: [25.2048, 55.2708] as [number, number], to: [1.3521, 103.8198] as [number, number], label: "DXB → SIN" },
  { id: "singapore-sydney", from: [1.3521, 103.8198] as [number, number], to: [-33.8688, 151.2093] as [number, number], label: "SIN → SYD" },
];

export const GlobalReach = () => {
  return (
    <section className="relative z-10 bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="subtitle-premium">
          GLOBAL FOOTPRINT
        </span>
        <h2 className="h-lg mb-6 mt-4">
          Aurge Across <span className="text-white/40">Borders.</span>
        </h2>
        <p className="body-text max-w-xl mx-auto">
          As a premier global service provider, we engineer cinematic brand experiences for clients across multiple countries, transcending boundaries to deliver world-class digital solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        {/* Cobe Globe */}
        <div className="w-full flex items-center justify-center relative min-h-[400px] sm:min-h-[600px]">
          {/* Subtle Ambient Glow aligned with Yellow/Gold arcs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#eab308]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="w-full max-w-[800px] aspect-square relative z-10">
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[1, 1, 1]}           // Pure white markers
              baseColor={[0.3, 0.3, 0.3]}       // Elegant dark gray base
              arcColor={[1, 0.84, 0]}           // Premium yellow/gold arcs
              glowColor={[0.02, 0.02, 0.02]}    // Minimal glow
              dark={1}                          // Clean shading
              mapBrightness={5}                 // Balanced visibility
              markerSize={0.04}             
              markerElevation={0.02}
              arcWidth={0.6}                    // Thinner, elegant arcs
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;

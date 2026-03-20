'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, MotionPathPlugin } from '@/lib/scrollEngine';
import { Palette, Globe, Film, Cpu, Target, LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  x: number; 
  y: number; 
}

const services: Service[] = [
  { id: '1', name: 'Brand Strategy', icon: Target, x: 50, y: 20 },
  { id: '2', name: 'Website Development', icon: Globe, x: 30, y: 40 },
  { id: '3', name: 'Video Production', icon: Film, x: 70, y: 40 },
  { id: '4', name: 'Designing / Creatives', icon: Palette, x: 10, y: 65 },
  { id: '5', name: 'AI Automation', icon: Cpu, x: 90, y: 65 },
];

export const InteractiveServices: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const centerNodeRef = useRef<HTMLDivElement>(null);
  const serviceNodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const serviceIconsRef = useRef<(SVGSVGElement | null)[]>([]);
  const linesRef = useRef<(SVGPathElement | null)[]>([]);
  const pulsesRef = useRef<(SVGCircleElement | null)[]>([]);
  const intersectionNodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    updateDimensions();

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !centerNodeRef.current || dimensions.width === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          once: true,
        }
      });

      // 1. Reveal center branding hub
      gsap.set(centerNodeRef.current, { xPercent: -50, yPercent: 50 });
      tl.fromTo(centerNodeRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // 2. Animate wire reveal sequence
      linesRef.current.forEach((line, i) => {
        if (!line) return;
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        
        tl.to(line, {
          strokeDashoffset: 0,
          opacity: 0.6,
          duration: 1.5,
          ease: "power2.inOut"
        }, "-=0.8");
      });

      // 3. Reveal junction points
      intersectionNodesRef.current.forEach((node, i) => {
        if (!node) return;
        tl.fromTo(node,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
          "-=1"
        );
      });

      // 4. Reveal service nodes
      serviceNodesRef.current.forEach((node, i) => {
        if (!node) return;
        gsap.set(node, { xPercent: -50, yPercent: -50 });
        tl.fromTo(node,
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" },
          "-=0.8"
        );
      });

      // 5. Active signaling (Blinkers)
      pulsesRef.current.forEach((pulse, i) => {
        if (!pulse || !linesRef.current[i]) return;
        
        gsap.to(pulse, {
          motionPath: {
            path: linesRef.current[i]!,
            align: linesRef.current[i]!,
            autoRotate: true,
            start: 0,
            end: 1,
            alignOrigin: [0.5, 0.5]
          },
          duration: 4,
          repeat: -1,
          ease: "none",
          delay: i * 0.4,
          onUpdate: function() {
            const progress = this.progress();
            const icon = serviceIconsRef.current[i];
            if (icon && progress > 0.96 && progress < 0.99) {
              gsap.to(icon, { x: 3, duration: 0.05, yoyo: true, repeat: 3, ease: "none" });
            }
          }
        });

        gsap.to(pulse, { opacity: 1, duration: 0.4, repeat: -1, yoyo: true });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [dimensions]);

  // Calculations for safe dimensions
  const actualContWidth = Math.min(dimensions.width, 1240);
  const localCenterX = actualContWidth / 2;
  const localCenterY = dimensions.height;
  const junctionYValue = localCenterY * 0.75; // Balanced junction point
  const brandStrategyYValue = (20 / 100) * localCenterY; // Top node start point

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[110vh] min-h-[850px] overflow-visible z-20"
    >
      {/* ── ATMOSPHERIC SCENE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="/services_bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-top"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-black via-black/40 to-transparent" />
      </div>

      <div className="relative w-full h-full max-w-[1240px] mx-auto z-10 px-6">
        
        {/* NETWORK TOPOLOGY SYSTEM */}
        <svg 
          className="absolute inset-0 z-10 pointer-events-none overflow-visible" 
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <filter id="network-glow">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {dimensions.width > 0 && (
            <g>
              {/* PRIMARY STRUCTURAL AXIS - EXPLICITLY RE-INSERTED FOR MAXIMUM VISIBILITY */}
              <path
                d={`M ${localCenterX} ${localCenterY} L ${localCenterX} ${brandStrategyYValue}`}
                stroke="white"
                strokeWidth="2.5"
                strokeOpacity="0.8"
                fill="none"
                filter="url(#network-glow)"
              />
              
              {/* ANIMATED WIRE LAYERS */}
              {services.map((service, i) => {
                const targetX = (service.x / 100) * actualContWidth;
                const targetY = (service.y / 100) * dimensions.height;
                
                let path = "";
                if (service.id === '1') {
                   // Straight vertical path
                   path = `M ${localCenterX} ${localCenterY} L ${localCenterX} ${targetY}`;
                } else {
                   // Branched path
                   path = `M ${localCenterX} ${localCenterY} L ${localCenterX} ${junctionYValue} L ${targetX} ${junctionYValue} L ${targetX} ${targetY}`;
                }
                
                return (
                  <g key={`topo-v4-${service.id}`}>
                    <path
                      ref={(el) => { if (linesRef.current) linesRef.current[i] = el; }}
                      d={path}
                      stroke="rgba(255, 255, 255, 0.5)" 
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <circle
                      ref={(el) => { if (pulsesRef.current) pulsesRef.current[i] = el; }}
                      r="3.5"
                      fill="#E6FF00"
                      opacity="0"
                    />
                  </g>
                );
              })}

              {/* JUNCTION INTERSECTIONS */}
              <circle
                ref={(el) => { intersectionNodesRef.current[0] = el; }}
                cx={localCenterX}
                cy={junctionYValue}
                r="4"
                fill="white"
                className="opacity-90 shadow-2xl"
                filter="url(#network-glow)"
              />
              {[30, 70, 10, 90].map((xPerc, idx) => (
                <circle
                  key={`node-v4-${idx}`}
                  ref={(el) => { intersectionNodesRef.current[idx+1] = el; }}
                  cx={(xPerc / 100) * actualContWidth}
                  cy={junctionYValue}
                  r="2.5"
                  fill="white"
                  className="opacity-60"
                />
              ))}
            </g>
          )}
        </svg>

        {/* SERVICE INTERACTIVE NODES */}
        {services.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => { serviceNodesRef.current[i] = el; }}
            style={{ 
              position: 'absolute', 
              left: `${service.x}%`, 
              top: `${service.y}%`, 
              zIndex: 30,
              opacity: 0
            }}
          >
            <div className="flex items-center gap-3 py-3 pl-5 pr-6 rounded-[4px] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl group cursor-pointer transition-all duration-500 hover:bg-black/80 hover:border-white/20">
              <div 
                ref={(el) => { if (el) serviceIconsRef.current[i] = el as unknown as SVGSVGElement; }}
                className="shrink-0 transition-transform duration-300"
              >
                <service.icon className="w-5 h-5 text-[#B0B0B0] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[13px] md:text-[14px] font-bold tracking-[0.12em] text-[#EBEBEB] group-hover:text-white uppercase transition-colors duration-500 whitespace-nowrap">
                {service.name}
              </span>
            </div>
          </div>
        ))}

        {/* BRIDGING CENTRAL HUB */}
        <div
          ref={centerNodeRef}
          className="absolute z-[100] left-1/2 bottom-0 group cursor-pointer"
          style={{ opacity: 0 }}
        >
          <div className="relative p-2.5 rounded-[4px] backdrop-blur-3xl bg-black/40 border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition-all duration-700 hover:border-white/20">
             <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-[4px] bg-[#080808] border border-white/5 relative overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="" 
                  className="w-14 h-14 md:w-22 md:h-22 object-contain z-10 transition-transform duration-700 group-hover:scale-110" 
                />
             </div>
             <div className="absolute inset-0 -m-4 rounded-[4px] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveServices;

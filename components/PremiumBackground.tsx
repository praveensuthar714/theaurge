'use client';

import React from 'react';

interface PremiumBgProps {
  className?: string;
}

const PremiumBackground: React.FC<PremiumBgProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      
      {/* Film grain overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Orb 1: Primary lime-yellow — top left drift */}
      <div
        className="absolute rounded-full mix-blend-screen"
        style={{
          width: '55vw',
          height: '55vw',
          top: '-10%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(230,255,0,0.12) 0%, rgba(230,255,0,0.05) 40%, transparent 70%)',
          animation: 'orb-drift-1 18s ease-in-out infinite alternate',
          filter: 'blur(60px)',
        }}
      />

      {/* Orb 2: Soft white — center right shift */}
      <div
        className="absolute rounded-full mix-blend-screen"
        style={{
          width: '45vw',
          height: '45vw',
          top: '10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)',
          animation: 'orb-drift-2 22s ease-in-out infinite alternate',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 3: Warm lime accent — bottom center */}
      <div
        className="absolute rounded-full mix-blend-screen"
        style={{
          width: '40vw',
          height: '40vw',
          bottom: '-5%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(200,247,0,0.09) 0%, rgba(200,247,0,0.03) 50%, transparent 70%)',
          animation: 'orb-drift-3 26s ease-in-out infinite alternate',
          filter: 'blur(70px)',
        }}
      />

      {/* Subtle horizontal light line — like a horizon glow */}
      <div
        className="absolute inset-x-0"
        style={{
          height: '1px',
          top: '42%',
          background: 'linear-gradient(to right, transparent, rgba(230,255,0,0.08) 30%, rgba(255,255,255,0.06) 50%, rgba(230,255,0,0.08) 70%, transparent)',
          animation: 'line-pulse 6s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes orb-drift-1 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(8%, 6%) scale(1.06); }
          66%  { transform: translate(4%, -4%) scale(0.97); }
          100% { transform: translate(10%, 8%) scale(1.04); }
        }
        @keyframes orb-drift-2 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(-6%, 10%) scale(1.08); }
          100% { transform: translate(-4%, 4%) scale(0.95); }
        }
        @keyframes orb-drift-3 {
          0%   { transform: translate(0%, 0%) scale(1); }
          40%  { transform: translate(-8%, -6%) scale(1.05); }
          100% { transform: translate(6%, -8%) scale(0.98); }
        }
        @keyframes line-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;

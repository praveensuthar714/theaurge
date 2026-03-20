'use client';

import React, { useMemo } from 'react';
import './Beams.css';

interface BeamsProps {
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  rotation?: number;
  opacity?: number;
}

const Beams: React.FC<BeamsProps> = ({
  beamNumber = 15,
  lightColor = '#E6FF00',
  speed = 2,
  rotation = 20,
  opacity = 0.3,
}) => {
  const beams = useMemo(() => {
    return Array.from({ length: beamNumber }, (_, i) => ({
      id: i,
      left: `${(i / beamNumber) * 110 - 5}%`,
      width: `${Math.random() * 2 + 1}px`,
      duration: `${(Math.random() * 4 + speed * 1.5)}s`,
      delay: `${-(Math.random() * 8)}s`,
      height: `${Math.random() * 40 + 60}%`,
      blurAmount: `${Math.random() * 6 + 2}px`,
    }));
  }, [beamNumber, speed]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Rotation wrapper */}
      <div
        className="absolute inset-[-20%]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {beams.map((beam) => (
          <div
            key={beam.id}
            className="absolute top-0 bottom-0 beams-ray"
            style={{
              left: beam.left,
              width: beam.width,
              '--beam-color': lightColor,
              '--beam-duration': beam.duration,
              '--beam-delay': beam.delay,
              '--beam-blur': beam.blurAmount,
              '--beam-height': beam.height,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Beams;

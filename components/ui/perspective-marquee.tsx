"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export interface PerspectiveMarqueeProps {
  /** Array of image sources to display */
  images: { src: string; alt: string; scale?: number }[];
  /** Height of each logo item in px */
  logoHeight?: number;
  /** Max width of each logo item in px */
  logoMaxWidth?: number;
  /** Gap between items in px */
  gap?: number;
  /** Y-axis rotation (ignored for performance/smoothness) */
  rotateY?: number;
  /** X-axis rotation (ignored for performance/smoothness) */
  rotateX?: number;
  /** CSS perspective value (ignored for performance/smoothness) */
  perspective?: number;
  /** Background color for the container and fade overlays */
  fadeColor?: string;
  /** Background color */
  background?: string;
  /** Speed of scrolling (duration mapping) */
  duration?: number;
  /** Additional className */
  className?: string;
}

export function PerspectiveMarquee({
  images,
  logoHeight = 45,
  logoMaxWidth = 130,
  gap = 96,
  background = "transparent",
  duration = 20,
  className,
}: PerspectiveMarqueeProps) {
  // Common style for individual brand item container
  const itemStyle = {
    height: "100px", // Spacious wrapper height forces react-fast-marquee track to be tall
    width: "auto",   // Let the wrapper width dynamically fit the actual logo's aspect ratio (fixes uneven spacing!)
    opacity: 0.35,
    marginRight: `${gap}px`, // react-fast-marquee layout uses margins for spacing
    transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Convert duration prop (e.g. 20s) to pixels per second speed (e.g. 50)
  const speed = duration ? Math.max(30, Math.min(100, 1000 / duration)) : 50;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "120px", // Roomy vertical spacing prevents cropped logos when scaled/hovered
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background,
        // Elegant edge fading using native CSS masks (GPU accelerated)
        maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <Marquee
        speed={speed}
        gradient={false}
        play={true}
        pauseOnHover={false} // Marquee continues scrolling on hover
        className="w-full flex items-center"
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.95";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.35";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={logoMaxWidth}
              height={logoHeight}
              style={{
                objectFit: "contain",
                width: "auto",
                height: `${logoHeight}px`, // Lock to original height (45px) to leave vertical clearance inside the 100px wrapper
                maxWidth: "100%",
                maxHeight: "100%",
                transform: item.scale ? `scale(${item.scale})` : undefined,
                transition: "transform 0.3s ease",
              }}
              quality={80}
              priority={i < 8}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

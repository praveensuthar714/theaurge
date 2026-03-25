"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  if (!text) return null;

  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        const previousCharsCount = words.slice(0, wordIndex).join("").length;

        return (
          <span key={wordIndex} className="inline-flex overflow-hidden relative mr-[0.25em]">
            {word.split("").map((char, charIndex) => {
              const globalIndex = previousCharsCount + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: globalIndex * 0.02,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

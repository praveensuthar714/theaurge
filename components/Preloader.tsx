'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay (simulating heavy load completion)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center gap-12">
            {/* LOGO ANIMATION */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                filter: 'blur(0px)',
                transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
              }}
              className="relative"
            >
              <img 
                src="/the-Aurge-e1754069744650.png" 
                alt="theAurge" 
                className="h-10 md:h-14 w-auto object-contain brightness-200"
              />
              {/* Scanline Effect */}
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </motion.div>

            {/* PROGRESS INDICATOR */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#D9FF00] shadow-[0_0_15px_rgba(217,255,0,0.5)]"
                />
              </div>
              <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold animate-pulse">
                Assembling Digital Archive
              </span>
            </div>
          </div>

          {/* BACKGROUND DECORATION */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9FF00]/5 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

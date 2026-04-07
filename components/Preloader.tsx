'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Faster reveal for performance

    return () => clearTimeout(timer);
  }, []);

  const variants = {
    initial: { clipPath: 'inset(0% 0% 0% 0%)' },
    exit: { 
      clipPath: 'inset(100% 0% 0% 0%)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  } as any;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={variants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* TOP / BOTTOM CURTAINS (Subtle) */}
          <div className="flex flex-col items-center gap-12 relative z-10">
            {/* LOGO - ELEGANT REVEAL */}
            <div className="overflow-hidden">
               <motion.div
                 initial={{ y: 100, opacity: 0 }}
                 animate={{ 
                   y: 0, 
                   opacity: 1, 
                   transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                 }}
               >
                 <img 
                   src="/the-Aurge-e1754069744650.png" 
                   alt="theAurge" 
                   className="h-9 md:h-12 w-auto object-contain brightness-110"
                 />
               </motion.div>
            </div>

            {/* CINEMATIC TAGLINE STAGGER */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, letterSpacing: '1.5em' }}
                animate={{ 
                  opacity: 1, 
                  letterSpacing: '0.8em',
                  transition: { duration: 2, ease: "easeOut" } 
                }}
                className="text-[9px] text-[#D9FF00] font-bold uppercase pl-[0.8em]"
              >
                Cinematic Brand Assembly
              </motion.div>
              
              <div className="h-[40px] mt-6 flex flex-col items-center justify-center overflow-hidden">
                <motion.span 
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-medium"
                >
                  Establishing Connection
                </motion.span>
                <motion.span 
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white/10 text-[7px] uppercase tracking-[0.3em] mt-1"
                >
                  © 2024 THE AURGE
                </motion.span>
              </div>
            </div>
          </div>

          {/* NOISE OVERLAY FOR TEXTURE */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* SUBTLE GLOW */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D9FF00]/5 rounded-[100%] blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

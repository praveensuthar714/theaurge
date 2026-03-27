'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="min-h-screen flex flex-col bg-black"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;

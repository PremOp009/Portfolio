"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myPhoto from "../../portfolio photo.png";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F19]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="relative flex h-24 w-24 items-center justify-center">
              {/* Outer pulsing effect */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-30"></span>
              
              {/* Spinning Loader Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent/50 z-20"
              />

              {/* Static Face Image */}
              <div className="relative inline-flex rounded-full h-[5.5rem] w-[5.5rem] overflow-hidden items-center justify-center bg-card z-10">
                <img 
                  src={myPhoto.src} 
                  alt="Prem Patel" 
                  className="w-full h-full object-cover object-top scale-125"
                />
              </div>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white font-display text-xl tracking-widest"
            >
              PREM PATEL
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500); // Даем полсекунды задержки после 100%
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Скорость загрузки
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
    >
      {/* Анимированный логотип или иконка */}
      <div className="relative mb-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-2 border-blue-600 border-r-2 border-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-xl italic">C</span>
        </div>
      </div>

      {/* Проценты */}
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="text-6xl md:text-8xl font-black text-white italic tracking-tighter"
        >
          {percent}%
        </motion.h1>
      </div>

      {/* Полоска прогресса */}
      <div className="w-48 h-[2px] bg-zinc-900 mt-8 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-blue-600"
          initial={{ x: "-100%" }}
          animate={{ x: `${percent - 100}%` }}
        />
      </div>

      <div className="mt-6 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] animate-pulse">
        Initializing_CAIM_Systems...
      </div>
    </motion.div>
  );
};

export default Loader;
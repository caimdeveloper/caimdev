import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';

const Error = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 1. Живое фоновое свечение (Дыхание) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[400px] h-[400px] bg-red-600 rounded-full blur-[100px]"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        {/* 2. Плавающая иконка (Левитация) */}
        <div className="flex justify-center mb-8">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="p-6 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 relative group"
          >
            <WifiOff size={48} className="text-zinc-500 group-hover:text-red-500 transition-colors duration-500" />
            
            {/* Пульсирующий ореол вокруг иконки */}
            <motion.div 
              animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"
            />
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
          Connection<span className="text-red-600 not-italic">_Lost</span>
        </h1>
        
        <p className="text-zinc-500 text-sm font-light tracking-widest uppercase max-w-xs mx-auto leading-relaxed mb-12">
          Oops! It seems your internet connection has been interrupted. Please check your network to continue viewing the portfolio.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="group relative px-10 py-4 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <div className="relative z-10 flex items-center gap-3">
            <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-700" />
            <span>Try_Again</span>
          </div>
        </motion.button>
      </motion.div>

      {/* 3. Мерцающая подпись внизу */}
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em]">Offline_Mode_v1.0</p>
      </motion.div>

    </div>
  );
};

export default Error;
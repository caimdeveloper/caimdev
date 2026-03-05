import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    // Увеличим до 2.5 секунд, чтобы пользователь успел насладиться анимацией текста
    const timer = setTimeout(finishLoading, 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  // Варианты анимации для каждой буквы (постепенное появление)
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", // Улетает вверх как шторка
        transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Глубокое фоновое свечение (медленное пульсирование) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] pointer-events-none"
      />

      {/* 2. Основная часть с текстом */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Анимированный логотип над текстом */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <motion.circle 
              cx="50" cy="50" r="48" 
              stroke="white" strokeWidth="1" strokeOpacity="0.1" 
            />
            <motion.circle 
              cx="50" cy="50" r="48" 
              stroke="#2563eb" strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* ЭФФЕКТ: Рисование текста CAIM DEVELOPER */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <div className="flex overflow-hidden pb-2">
            {"CAIM".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="text-5xl md:text-7xl font-black text-white italic tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <div className="flex overflow-hidden">
            {"DEVELOPER".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="text-[10px] md:text-[12px] font-mono text-blue-500 uppercase tracking-[1.2em] ml-[1.2em]"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. Индикатор прогресса (тонкая линия внизу) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
        />
      </div>

      {/* Сетка на фоне для технологичного стиля */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </motion.div>
  );
};

export default Loader;
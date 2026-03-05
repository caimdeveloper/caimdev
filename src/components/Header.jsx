import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
          ? 'py-4 bg-black/40 backdrop-blur-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          
          {/* Логотип */}
          <div className="relative group cursor-pointer z-[101]">
            <div className="text-white font-black text-2xl tracking-tighter uppercase italic">
              CAIM<span className="text-blue-600 not-italic">.</span>
            </div>
          </div>

          {/* Десктопная Навигация (Скрывается на мобилках автоматически) */}
          <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Кнопка открытия меню для МОБИЛЬНЫХ (Живая анимация) */}
          <div className="md:hidden z-[101]">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

        </div>
      </header>

      {/* Мобильное Меню (Fullscreen Liquid Animation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/90 backdrop-blur-2xl flex flex-col justify-center p-8 md:hidden"
          >
            {/* Декоративный фон меню */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
            
            <div className="flex flex-col gap-6 relative z-10">
              <p className="text-blue-500 text-[9px] font-black uppercase tracking-[0.5em] mb-4">Navigation</p>
              
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-5xl font-black text-white uppercase italic tracking-tighter"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-blue-600" size={32} />
                </motion.a>
              ))}

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-6 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-xs shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
                >
                  Start Project
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
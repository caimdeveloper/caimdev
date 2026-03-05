import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer"  className="relative pt-32 pb-10 px-6 bg-black overflow-hidden">
      
      {/* Световой акцент сверху */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* ЛЕВАЯ ЧАСТЬ: Призыв к действию */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black text-white leading-none tracking-tighter uppercase">
              Let's build <br />
              <span className="text-transparent stroke-text-white italic">the future</span> together
            </h2>
            
            <div className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:developercaim@email.com"
                className="px-10 py-5 rounded-2xl bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] flex items-center gap-4 group"
              >
                Start a project
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              
              <div className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Available for hire</span>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Навигация и Соцсети */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">Social_Connect</p>
              <ul className="space-y-4">
                {[
                  { name: 'Instagram', icon: <Instagram size={18} />, link: 'https://www.instagram.com/caim.dev/' },
                  { name: 'GitHub', icon: <Github size={18} />, link: 'https://github.com/caimdeveloper' },
                  { name: 'Telegram', icon: <Send size={18} />, link: 'https://t.me/caimdev' },
                ].map((social) => (
                  <li key={social.name}>
                    <a href={social.link} className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                      <span className="group-hover:text-blue-500 transition-colors">{social.icon}</span>
                      <span className="text-sm font-light tracking-tight">{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-right lg:text-left">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">Local_Time</p>
              <p className="text-3xl font-light text-white font-mono tracking-tighter italic">
                {time}
              </p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest leading-relaxed">
                Bishkek, Kyrgyzstan <br />
                UTC+6
              </p>
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ: Копирайт и Scroll Top */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest italic">
              © 2026 CAIM. All rights reserved
            </p>
            <p className="text-zinc-800 text-[10px] font-mono uppercase tracking-widest hidden md:block">
              Designed by caimdev
            </p>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          transition: -webkit-text-stroke 0.5s ease;
        }
        .stroke-text-white:hover {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
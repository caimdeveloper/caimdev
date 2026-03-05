import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, ArrowUpRight, Code2 } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Твои проекты
  const projectsData = [
    { id: 1, title: "Caim Platform", category: "Web", tags: ["React", "Node.js"], icon: "globe" },
    { id: 2, title: "Mobile App", category: "Mobile", tags: ["Flutter", "Firebase"], icon: "mobile" },
    { id: 3, title: "Cloud Engine", category: "Backend", tags: ["AWS", "Docker"], icon: "code" },
    { id: 4, title: "E-Commerce", category: "Web", tags: ["Next.js", "Stripe"], icon: "globe" },
  ];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-[#000] overflow-hidden">

      {/* Динамический фон (Зеркальное пятно) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-blue-600/[0.04] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Заголовок с анимацией Reveal */}
        <div className="mb-20 space-y-4">
          <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] animate-[pulse_3s_infinite]">Selected_Cases</p>
          <div className="overflow-hidden">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
              Works<span className="text-blue-600 not-italic">.</span>
            </h2>
          </div>
        </div>

        {/* ТАБЫ (Glassmorphism Tabs) */}
        <div className="flex flex-wrap gap-4 mb-24">
          {['All', 'Web', 'Mobile', 'Backend'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700
              ${activeTab === tab ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-blue-600/10 border border-blue-500/50 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* СЕТКА (AnimatePresence) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Глянцевая карточка */}
                <div className="relative aspect-[16/11] rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700 group-hover:border-blue-500/30 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">

                  {/* Контент внутри (Иконки/Плейсхолдеры) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
                    {p.icon === 'globe' && <Globe size={80} strokeWidth={1} className="text-zinc-800 group-hover:text-blue-500/50 transition-colors duration-700" />}
                    {p.icon === 'mobile' && <Smartphone size={80} strokeWidth={1} className="text-zinc-800 group-hover:text-blue-500/50 transition-colors duration-700" />}
                    {p.icon === 'code' && <Code2 size={80} strokeWidth={1} className="text-zinc-800 group-hover:text-blue-500/50 transition-colors duration-700" />}
                  </div>

                  {/* Информация при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0">
                    <div className="flex justify-between items-end">
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          {p.tags.map(t => (
                            <span key={t} className="text-[9px] px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white uppercase font-bold tracking-widest">{t}</span>
                          ))}
                        </div>
                        <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">{p.title}</h3>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-2xl cursor-pointer"
                      >
                        <ArrowUpRight size={28} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Световой эффект (Зеркало) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Нижняя подпись */}
                <div className="mt-8 px-6 flex justify-between items-center group-hover:opacity-30 transition-opacity duration-500">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-blue-500"></span>
                    <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.4em]">{p.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-700 tracking-tighter uppercase">/ Case_0{p.id}</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Кнопка Exploration */}
        {/* <div className="mt-32 flex justify-center">
            <button className="group relative px-16 py-6 rounded-[2.5rem] bg-transparent border border-white/10 overflow-hidden transition-all hover:border-blue-600/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] active:scale-95">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.77, 0, 0.175, 1]"></div>
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400 group-hover:text-white transition-colors duration-500">
                    Discover_Archive
                </span>
            </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
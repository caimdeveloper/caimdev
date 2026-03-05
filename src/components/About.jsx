import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Projects", value: "80+", color: "text-blue-500" },
    { label: "Years of Experience", value: "5Y+", color: "text-green-500" },
    { label: "Clients", value: "Global", color: "text-purple-500" },
    { label: "Uptime", value: "99.9%", color: "text-emerald-500" },
  ];

  const skills = [
    { name: "JavaScript / TypeScript", level: 95, color: "bg-yellow-400" },
    { name: "React / Angular / Next.js", level: 88, color: "bg-blue-500" },
    { name: "Flutter / Mobile", level: 42, color: "bg-cyan-400" },
    { name: "Node.js / Architecture", level: 48, color: "bg-green-600" },
    { name: "UI/UX Engineering", level: 92, color: "bg-purple-500" },
  ];

  return (
    <section id='about' className="relative min-h-screen w-full bg-[#000] py-20 px-6 md:px-12 overflow-hidden flex flex-col items-center">

      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-green-600/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <div className="font-mono text-sm md:text-base leading-relaxed space-y-2">
              <p className="text-blue-400">const <span className="text-white">system</span> = <span className="text-green-400">"CAIM"</span>;</p>
              <p className="text-blue-400">const <span className="text-white">focus</span> = [</p>
              <p className="pl-6 text-orange-300">"Performance", "Security", "Design"</p>
              <p className="text-blue-400">];</p>
              <p className="text-blue-400">let <span className="text-white">status</span> = <span className="text-green-400">"Building the future"</span>;</p>
            </div>
            <div className="mt-10 pt-8 border-t border-white/5">
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-6 italic">About Me</h2>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                I build digital ecosystems where <span className="text-white font-medium">aesthetics</span> meet flawless code.
              </p>
            </div>
          </motion.div>

          {/* СТАТИСТИКА */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 transition-all"
              >
                <p className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА (Стек технологий) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 p-8 md:p-12 rounded-[3.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-white/20 transition-all"
        >
          <div className="flex justify-between items-end mb-16 relative z-10">
            <div>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] mb-3 animate-pulse">Core_Capabilities</p>
              <h3 className="text-4xl md:text-5xl font-light text-white tracking-tighter italic">Stack & <span className="font-black not-italic">Tech</span></h3>
            </div>
            <p className="text-white/10 font-mono text-[10px] tracking-[0.2em] hidden md:block">V.2026</p>
          </div>

          <div className="space-y-10 relative z-10">
            {skills.map((skill, i) => (
              <div key={i} className="group/skill">
                <div className="flex justify-between items-end mb-4">
                  <p className="text-white text-xs font-black tracking-[0.2em] uppercase">{skill.name}</p>
                  <p className="text-gray-600 font-mono text-[10px]">{skill.level}%</p>
                </div>
                <div className="h-[4px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ amount: 0.1 }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                    className={`h-full ${skill.color} rounded-full relative`}
                    style={{ boxShadow: `0 0 20px ${skill.color}60` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-8 relative z-10">
            <button className="px-12 py-5 rounded-2xl bg-white text-black font-black uppercase text-[11px] tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all">
              Send Inquiry
            </button>
            <div className="flex -space-x-3">
              {['Figma', 'Adobe', 'Docker'].map((tool, i) => (
                <div key={i} className="w-12 h-12 rounded-xl bg-[#080808] border border-white/10 flex items-center justify-center text-[10px] font-black text-gray-500 hover:text-white transition-all">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default About;
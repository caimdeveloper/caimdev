import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "2024 — Present",
      role: "Lead Full-stack Developer",
      company: "CAIM SERVER Project",
      desc: "Architecting high-load systems and real-time solutions. Specialized in managing Ubuntu server infrastructure, implementing secure WebSocket protocols, and Flutter-based ecosystems.",
      tech: ["Node.js", "Flutter", "Ubuntu 24.04", "WebSockets"]
    },
    {
      year: "2022 — Present",
      role: "Frontend Developer",
      company: "KeyGroup (International)",
      desc: "Developing high-performance user interfaces for international clients. Focusing on scalable React architectures and seamless user experiences.",
      tech: ["React", "TypeScript", "Redux", "Tailwind"]
    },
    {
      year: "2022 — 2024",
      role: "Senior Developer & Mentor",
      company: "IT Academies (Codify / Jarat.co)",
      desc: "Led development of complex web applications and mentored over 150+ students in Full-stack engineering and UI/UX design.",
      tech: ["Full-stack", "Mentorship", "UI/UX", "Next.js"]
    }
  ];

  const education = [
    {
      year: "2018 — 2022",
      degree: "Bachelor of Applied Informatics",
      school: "International Kuwait University",
      location: "Bishkek"
    },
    {
      year: "2022 — 2023",
      degree: "Advanced JavaScript Frontend",
      school: "ITSPACE Academy",
      location: "Certificate (10 Months)"
    },
    {
      year: "2021 — 2021",
      degree: "UI/UX Design Specialization",
      school: "Jyldyz Academy",
      location: "Professional Certificate"
    }
  ];

  return (
    <section id="experience" className="relative py-32 px-6 bg-[#000] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT: WORK EXPERIENCE */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-500">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Experience<span className="text-blue-600">.</span></h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-blue-600/0 group-hover:to-blue-600/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] bg-blue-500/10 px-3 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-zinc-500 text-sm mb-4 font-medium">{exp.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">{exp.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, idx) => (
                        <span key={idx} className="text-[9px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-500 font-bold uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDUCATION */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-500">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Education<span className="text-purple-600">.</span></h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-2xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-purple-500/50 group-hover:text-purple-500 transition-all">
                            <Calendar size={16} />
                        </div>
                        <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-3 block">
                            {edu.year}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-zinc-500 text-sm font-medium">{edu.school}</p>
                        <p className="text-zinc-600 text-[11px] uppercase tracking-widest mt-2">{edu.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-24 flex justify-center">
            <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 rounded-2xl bg-white text-black font-black uppercase text-[11px] tracking-[0.4em] transition-all overflow-hidden"
            >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download_Full_CV</span>
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
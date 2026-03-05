const Home = () => {
    return (
        <section id="home"  className="relative py-15 pt-22 w-full flex items-center justify-center bg-[#000] overflow-hidden">

            {/* 1. Живой фон */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] animate-[pulse_12s_infinite]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] animate-[pulse_8s_infinite]"></div>
            </div>

            {/* 2. Сетка и шум */}
            <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Основной контейнер с ограничением по высоте */}
            <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col justify-center">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

                    {/* БЛОК 1: Главный Заголовок (Reflective & Animated) */}
                    <div className="lg:col-span-12 mb-0 md:mb-5 relative group select-none">

                        {/* Световой блик, который гуляет за текстом */}
                        <div className="absolute -top-1/2 left-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full animate-[float_10s_infinite_ease-in-out] pointer-events-none"></div>

                        <div className="relative z-10">
                            {/* Первая строка: CAIM. */}
                            <div className="overflow-hidden">
                                <h1 className="text-[clamp(3rem,15vw,8rem)] font-black tracking-[0.06em] text-white opacity-0 animate-[reveal_1.2s_cubic-bezier(0.77,0,0.175,1)_forwards] leading-[0.85] flex items-baseline">
                                    <span className="hover:text-gray-300 transition-colors duration-500">C</span>
                                    <span className="text-green-500 relative inline-block group/ai">
                                        AI
                                        {/* Эффект свечения под AI */}
                                        <span className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover/ai:opacity-100 transition-opacity duration-700"></span>
                                    </span>
                                    <span className="hover:text-gray-300 transition-colors duration-500">M</span>
                                    <span className="text-blue-600 inline-block animate-[bounce_3s_infinite] ml-[-0.05em]">.</span>
                                </h1>
                            </div>

                            {/* Вторая строка: DEVELOPER (Зеркальная обводка) */}
                            <div className="overflow-hidden mt-[1vw] relative">
                                <h1 className="text-[clamp(3rem,15vw,10rem)] font-black tracking-[-0.06em] text-transparent stroke-text-rich opacity-0 animate-[reveal_1.2s_cubic-bezier(0.77,0,0.175,1)_0.3s_forwards] leading-[0.85] relative">
                                    DEVELOPER

                                    {/* Анимированный "блеск" внутри прозрачного текста */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmerText_5s_infinite_linear] bg-clip-text pointer-events-none">
                                        DEVELOPER
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Дополнительная декоративная линия с тех-данными */}
                        <div className="mt-8 flex items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
                            <div className="h-[1px] w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
                            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.6em]">
                                Creative_Technologist <span className="text-white/20">//</span> 2026_V.1
                            </p>
                        </div>
                    </div>

                    <style>{`
  /* Богатая зеркальная обводка */
  .stroke-text-rich {
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
    transition: -webkit-text-stroke 0.5s ease;
  }
  
  .group:hover .stroke-text-rich {
    // -webkit-text-stroke: 1.5px rgba(59, 130, 246, 0.5);
    // -webkit-text-stroke: 1.5px  rgba(0, 98, 255, 0.000);
    // color:  rgba(0, 98, 255, 0.0);
  }

  @keyframes reveal {
    from { transform: translateY(110%) skewY(5deg); opacity: 0; }
    to { transform: translateY(0) skewY(0); opacity: 1; }
  }

  @keyframes shimmerText {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -20px); }
  }
`}</style>

                    {/* БЛОК 2: Engineering (Mirror Effect) */}
                    <div className="lg:col-span-4 relative p-8 rounded-[2.5rem] bg-gradient-to-tr from-white/[0.05] to-white/[0.01] border border-white/20 overflow-hidden opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards] group transition-all duration-700 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] hover:border-white/40">
                        {/* Зеркальный блик, который "плавает" до наведения */}
                        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent rotate-45 animate-[mirrorReflect_6s_infinite] pointer-events-none"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between">
                                <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] flex items-center gap-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                    </span>
                                    Active_Core
                                </p>
                                <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 transition-all duration-700"></div>
                            </div>

                            <p className="text-gray-200 text-xl lg:text-3xl font-extralight leading-tight tracking-tighter transition-transform duration-700 group-hover:scale-[1.02]">
                                High-end <span className="text-white font-semibold">software engineering</span> <br />
                                <span className="text-blue-400/80 italic font-serif text-[18px] tracking-[0.02em]">interface design using Adobe Cloud <br /> and Figma</span>
                            </p>
                        </div>

                        {/* Интерактивная бегущая строка */}
                        <div className="relative z-10 mt-12 overflow-hidden whitespace-nowrap border-t border-white/10 pt-5">
                            <div className="animate-[marquee_25s_linear_infinite] inline-block opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[9px] text-gray-400 font-mono uppercase tracking-[0.3em] mr-12 italic">Luxury Coding — Scalable Systems — Performance 100% — Luxury Coding —</span>
                            </div>
                        </div>
                    </div>

                    {/* БЛОК 3: Tech Stack (Glossy Glass) */}
                    <div className="lg:col-span-5 relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] group hover:bg-white/[0.05] transition-all duration-500">
                        {/* Анимированное зеркальное пятно за контентом */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-blue-600/10 transition-colors duration-1000"></div>

                        <p className="relative z-10 text-gray-500 text-[9px] font-bold uppercase tracking-[0.5em] mb-10 font-mono">/ Ecosystem_Stack</p>

                        <div className="relative z-10 grid grid-cols-2 gap-x-10 gap-y-10">
                            {[
                                { label: 'Web', tech: 'React • Angular • Next', icon: '◈' },
                                { label: 'Mobile', tech: 'Flutter • iOS/Android', icon: '◇' },
                                { label: 'Backend', tech: 'Node.js • PostgreSQL • API', icon: '⬖' },
                                { label: 'Design', tech: 'Adobe Cloud • Figma', icon: '⬙' }
                            ].map((item, i) => (
                                <div key={i} className="group/item transition-all duration-500 hover:translate-x-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-500 text-[8px] animate-pulse">{item.icon}</span>
                                        <p className="text-white text-[14px] font-black tracking-widest uppercase">{item.label}</p>
                                    </div>
                                    <p className="text-gray-500 text-[12px] font-mono italic leading-tight group-hover/item:text-blue-300 transition-colors">{item.tech}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 relative z-10">
                            <button className="group/btn relative w-full h-14 rounded-2xl bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] animate-[gradientMove_4s_linear_infinite] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative z-10 text-black group-hover/btn:text-white font-black uppercase text-[10px] tracking-[0.5em]">Start Collaboration</span>
                            </button>
                        </div>
                    </div>

                    {/* БЛОК 4: Status (Chromium Edition) */}
                    <div className="lg:col-span-3 p-8 rounded-[2.5rem] bg-black border border-blue-500/20 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards] flex flex-col justify-between group relative overflow-hidden transition-all duration-500 hover:border-blue-500/60">
                        {/* Эффект "Сканирующего луча", активен всегда */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full animate-[scanLoop_5s_infinite_linear]"></div>

                        <div className="flex justify-between items-start z-10">
                            <div className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
                                <span className="text-[9px] uppercase tracking-[0.4em] text-blue-400 font-black">Online_24/7</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-[10px] text-white/20 font-mono tracking-tighter uppercase leading-none italic tracking-[0.6em]">WhatsApp</span>
                                <span className="text-[8px] text-blue-500/40 font-mono tracking-[0.3em]">
                                    +996990554478
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 z-10">
                            <div className="relative inline-block">
                                <p className="text-3xl font-extralight text-white leading-tight tracking-tighter">
                                    Remote <br />
                                    <span className="text-blue-500 font-black italic group-hover:text-blue-400 transition-colors">Worldwide</span>
                                </p>
                                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-1000"></div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex justify-between items-end">
                                <div className="space-y-1">
                                    <span className="block text-gray-600 text-[8px] uppercase tracking-[0.2em] font-mono">Location_Base</span>
                                    <span className="text-white font-bold text-[12px] uppercase tracking-widest">Bishkek, KG</span>
                                </div>
                                <div className="flex items-center gap-2 pb-1">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping"></div>
                                    <span className="text-[9px] text-blue-500/70 font-mono tracking-tighter">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{`
  @keyframes mirrorReflect {
    0% { transform: translateX(-150%) rotate(45deg); }
    100% { transform: translateX(150%) rotate(45deg); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes scanLoop {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`}</style>
                </div>
            </div>

            <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }
        @keyframes reveal {
          from { transform: translateY(110%); skewY(3deg); opacity: 0; }
          to { transform: translateY(0); skewY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

        </section>
    );
};

export default Home;
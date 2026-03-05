import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Error from './components/Error';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Ставим false по умолчанию, чтобы не вылетала ошибка при старте
  const [isOffline, setIsOffline] = useState(false); 

  useEffect(() => {
    // Функция проверки сети
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    // Слушаем изменения сети только ПОСЛЕ того, как компонент загрузился
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Финальная проверка: если интернета СОВСЕМ нет при старте
    if (!navigator.onLine) {
        setIsOffline(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-blue-600 selection:text-white">
      <AnimatePresence mode="wait">
        
        {/* 1. Если интернет пропал — показываем Error */}
        {isOffline ? (
          <motion.div 
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Error />
          </motion.div>
        ) : (
          /* 2. Если интернет есть — стандартная логика загрузки */
          <React.Fragment key="content">
            {isLoading ? (
              <Loader key="loader" finishLoading={() => setIsLoading(false)} />
            ) : (
              <motion.main
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Header />
                <Home />
                <About />
                <Projects />
                <Experience />
                <Footer />
                
                {/* Эффект шума */}
                <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </motion.main>
            )}
          </React.Fragment>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;
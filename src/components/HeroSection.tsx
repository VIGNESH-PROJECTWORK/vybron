import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleBookNow = () => {
    window.open('https://forms.google.com/placeholder', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle Button */}
      <motion.div
        className="absolute top-20 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white hover:text-white transition-all duration-300 shadow-lg"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </Button>
      </motion.div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-violet-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20" />
        {/* Subtle floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Subtle gradient orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/5 to-violet-400/5 blur-2xl"
            style={{
              width: `${150 + Math.random() * 100}px`,
              height: `${150 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Vybron
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Where Ideas Meet Professional Execution
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We transform your academic and professional projects into reality with cutting-edge technology, 
            research excellence, and unmatched expertise in full-stack development and IEEE publications.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
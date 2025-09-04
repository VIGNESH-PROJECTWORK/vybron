import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Trophy, FileText, Headphones, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyChooseUsSection = () => {
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We guarantee timely completion of all projects with strict adherence to deadlines.',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Trophy,
      title: 'Advanced Unique IEEE Titles',
      description: 'Cutting-edge research topics and innovative project titles that stand out in academic circles.',
      color: 'text-violet-600',
      bg: 'bg-violet-100',
    },
    {
      icon: FileText,
      title: 'PPTs & Reports in College Format',
      description: 'Professional presentations and comprehensive reports formatted according to your institution\'s requirements.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and support throughout your project development journey.',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle */}
        <motion.div
          className="flex justify-end mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Vybron</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Experience excellence with our proven track record and commitment to quality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center group"
            >
              <motion.div
                className={`w-20 h-20 mx-auto rounded-2xl ${feature.bg} dark:bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                whileHover={{ 
                  rotateY: 360,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
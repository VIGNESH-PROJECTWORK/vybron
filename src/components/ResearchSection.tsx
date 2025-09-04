import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Shield, CheckCircle } from 'lucide-react';

const ResearchSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Search,
      title: 'Research & Analysis Support',
      description: 'Comprehensive research methodology, data analysis, and literature review assistance.',
    },
    {
      icon: CheckCircle,
      title: 'Plagiarism-Free Writing',
      description: 'Original content creation with thorough plagiarism checks and academic integrity.',
    },
    {
      icon: Shield,
      title: 'Quality & Privacy Assurance',
      description: 'Confidential handling of your projects with guaranteed quality and data protection.',
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
    <section id="research" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Research <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Assistance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Professional research support with academic excellence and integrity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-violet-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-violet-800/40 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                whileHover={{ 
                  rotateX: 15,
                  rotateY: 15,
                  scale: 1.1
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <feature.icon className="w-12 h-12 text-blue-600" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PublicationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      icon: Award,
      title: 'IEEE Papers',
      description: 'High-impact research papers published in prestigious IEEE conferences and journals.',
      count: '150+',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: FileText,
      title: 'Scopus Indexed Papers',
      description: 'Quality research publications indexed in Scopus database with international recognition.',
      count: '200+',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Conference Papers',
      description: 'Presentations at international conferences with peer-reviewed research contributions.',
      count: '100+',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: BookOpen,
      title: 'Research Journals',
      description: 'Comprehensive research articles in top-tier journals across multiple domains.',
      count: '75+',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Recognized research contributions across leading academic platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full bg-white dark:bg-gray-700 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <pub.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className={`text-3xl font-bold bg-gradient-to-r ${pub.gradient} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {pub.count}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {pub.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
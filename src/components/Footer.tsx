import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-violet-500 rounded-xl flex items-center justify-center">
                <img src="/logo.jpg" alt="Vybron Logo" className="w-6 h-6 rounded object-cover" />
              </div>
              <span className="text-2xl font-bold">Vybron</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Where Ideas Meet Professional Execution. Transforming academic and professional projects with cutting-edge technology and research excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white font-medium">contact@vybron.com</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['Services', 'Publications', 'Research', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <motion.div
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Vybron. All rights reserved. Empowering innovation through professional execution.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
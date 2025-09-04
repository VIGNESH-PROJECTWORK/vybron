import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PublicationsSection from './components/PublicationsSection';
import ResearchSection from './components/ResearchSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = 'Vybron - Professional Project Development & Research Consultancy';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Vybron offers professional consultancy for final year projects, PhD research, IEEE publications, full-stack development, and SaaS solutions. Expert guidance with on-time delivery.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Vybron offers professional consultancy for final year projects, PhD research, IEEE publications, full-stack development, and SaaS solutions. Expert guidance with on-time delivery.';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'final year projects, PhD projects, IEEE publications, research assistance, full stack development, SaaS development, academic projects, consultancy, Scopus papers, conference papers';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Vybron - Professional Project Development & Research Consultancy';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Where Ideas Meet Professional Execution. Expert consultancy for academic and professional projects.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PublicationsSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
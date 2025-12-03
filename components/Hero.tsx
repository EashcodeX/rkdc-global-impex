import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-brand-blue/40 z-10"></div>
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt="Global Trade Logistics"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_20s_ease-out_infinite]"
          style={{ animation: 'kenburns 30s ease-out infinite alternate' }}
        />
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-start space-x-3 mb-6"
          >
            <span className="h-[2px] w-12 bg-brand-gold inline-block"></span>
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm md:text-base">
              Import & Export Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Delivering Trust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Globally.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
          >
            We bridge the gap between regional producers and international markets, ensuring seamless logistics and high-quality trade worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, 'products')}
              className="px-8 py-4 bg-brand-gold text-brand-blue font-bold rounded shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
              <Globe className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Map Elements Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-10 w-1/2 h-full">
         <svg viewBox="0 0 200 100" className="w-full h-full fill-white">
           <circle cx="150" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="animate-[spin_60s_linear_infinite]" />
           <circle cx="150" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
           <path d="M 100 50 L 150 50" stroke="currentColor" strokeWidth="0.5" />
           <circle cx="100" cy="50" r="2" fill="currentColor" />
         </svg>
      </div>
    </section>
  );
};

export default Hero;
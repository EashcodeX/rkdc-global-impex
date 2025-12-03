import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative py-24 bg-brand-blue text-white overflow-hidden scroll-mt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-brand-gold font-bold uppercase tracking-widest text-sm"
          >
            Our Mission
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mt-4 leading-tight"
          >
            "To be the trusted global partner for ethical and efficient trade, connecting markets through unwavering integrity."
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300 text-center"
            >
              <div className="mb-6 flex justify-center opacity-80">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-gold">{feature.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
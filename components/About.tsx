import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, TrendingUp } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-br-3xl -z-10"></div>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/aboutus.jpeg"
              alt="Founders Vision"
              className="w-full rounded-xl shadow-2xl object-cover h-[500px]"
            />
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -left-6 md:left-10 bg-white p-6 rounded-lg shadow-xl border-l-4 border-brand-gold max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <UserCheck className="w-8 h-8 text-brand-blue" />
                <span className="font-bold text-brand-blue">Founded by Experts</span>
              </div>
              <p className="text-sm text-slate-600">
                Baskerrao Rajkumar & Elangovan Deepak Chakravarthi
              </p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-bold uppercase tracking-widest text-sm"
            >
              Our Story
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mt-3 mb-8"
            >
              A Bridge for Global Trade
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 leading-relaxed mb-6 text-lg"
            >
              RKDC GLOBAL IMPEX PRIVATE LIMITED acts as a reliable bridge, connecting businesses worldwide through efficient sourcing and seamless global supply chain management.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 leading-relaxed mb-8"
            >
              Built on the vision of creating a more reliable global supply chain, RKDC focuses on trading high-quality fresh and preserved fruits, vegetables, rice, and other essential commodities. We aim to connect regional producers with international markets through transparency, integrity, and seamless logistics.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
               {CERTIFICATIONS.map((cert, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 + (index * 0.1) }}
                   className="flex items-center gap-3 p-4 bg-slate-50 rounded border border-slate-100"
                 >
                   <div className="p-2 bg-brand-blue/5 rounded-full text-brand-blue">
                     <TrendingUp size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-bold uppercase">{cert.name}</p>
                     <p className="text-sm font-semibold text-brand-blue font-mono">{cert.code}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
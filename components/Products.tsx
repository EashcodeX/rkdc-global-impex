import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-widest text-sm bg-blue-100 px-4 py-1 rounded-full">
            What We Trade
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-6">
            Our Product Categories
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md text-brand-blue group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  {product.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-3 flex items-center justify-between group-hover:text-brand-lightBlue transition-colors">
                  {product.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="h-1 w-0 group-hover:w-full bg-brand-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
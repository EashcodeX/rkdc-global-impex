import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    { id: 5, src: '/5.jpeg', alt: 'Gallery Image 5' },
    { id: 6, src: '/6.jpeg', alt: 'Gallery Image 6' },
    { id: 7, src: '/7.jpeg', alt: 'Gallery Image 7' },
    { id: 8, src: '/8.jpeg', alt: 'Gallery Image 8' },
    { id: 9, src: '/9.jpeg', alt: 'Gallery Image 9' },
    { id: 10, src: '/10.jpeg', alt: 'Gallery Image 10' },
    { id: 11, src: '/11.jpeg', alt: 'Gallery Image 11' },
    { id: 12, src: '/12.jpeg', alt: 'Gallery Image 12' },
    { id: 13, src: '/13.jpeg', alt: 'Gallery Image 13' },
    { id: 14, src: '/14.jpeg', alt: 'Gallery Image 14' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-6">
            Showcase of Our Products
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Explore our diverse range of high-quality products and global trade operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

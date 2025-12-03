import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PHONE, EMAIL, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
              Get in Touch
            </span>
            <h2 className="text-4xl font-serif font-bold text-brand-blue mt-4 mb-8">
              Let's Discuss Business
            </h2>
            <p className="text-slate-600 mb-12 text-lg">
              Have an inquiry about our products or want to partner with us? Reach out via phone, email, or visit our office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-50 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">Phone & WhatsApp</h4>
                  <p className="text-slate-600 mt-1">{PHONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-50 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">Email Address</h4>
                  <a href={`mailto:${EMAIL}`} className="text-slate-600 mt-1 hover:text-brand-lightBlue transition-colors">{EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-50 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors duration-300 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">Head Office</h4>
                  <p className="text-slate-600 mt-1 max-w-xs">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="p-4 bg-slate-50 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors duration-300 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">Working Hours</h4>
                  <p className="text-slate-600 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form Visual */}
          <div className="relative">
            <div className="bg-slate-100 rounded-2xl overflow-hidden h-full min-h-[400px] shadow-inner relative group">
              {/* Static Map Placeholder Image since we don't have a real API key for Maps in this demo context */}
              <img 
                src="https://picsum.photos/800/800?random=map" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-blue text-white p-4 rounded-lg shadow-2xl flex flex-col items-center animate-bounce">
                  <MapPin className="w-8 h-8 text-brand-gold mb-2" />
                  <span className="font-bold">Chennai, India</span>
                </div>
              </div>
              
              {/* Overlay Form */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-2xl">
                <h3 className="font-bold text-brand-blue mb-4">Send us a quick message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-slate-200 rounded focus:border-brand-blue focus:outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-slate-200 rounded focus:border-brand-blue focus:outline-none" />
                  <button className="w-full bg-brand-blue text-white font-bold py-3 rounded hover:bg-slate-800 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
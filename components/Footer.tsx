import React from 'react';
import { Anchor, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_NAME, TAGLINE, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-gold p-2 rounded text-slate-900">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-white">
                RKDC
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {TAGLINE}
              <br/>
              Bridging global markets with trust and integrity since our inception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Export Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for latest trade insights.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
              <button className="bg-brand-gold text-slate-900 px-4 py-2 rounded-r font-bold hover:bg-yellow-400 transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Designed with excellence for global trade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
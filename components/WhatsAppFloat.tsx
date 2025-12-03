import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE } from '../constants';

const WhatsAppFloat: React.FC = () => {
  // Strip spaces for the link
  const cleanPhone = PHONE.replace(/\s+/g, '').replace('+', '');
  const waLink = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd56] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-semibold pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
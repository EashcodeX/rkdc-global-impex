import React from 'react';
import { Leaf, Armchair, Zap, Shirt, Globe, Award, Truck, ShieldCheck } from 'lucide-react';
import { NavItem, Product, Stat, Certification } from './types';

export const COMPANY_NAME = "RKDC GLOBAL IMPEX";
export const TAGLINE = "Delivering Trust Globally.";
export const PHONE = "+91 63741 00227";
export const EMAIL = "rkdcglobalimpexpvtltd@gmail.com";
export const ADDRESS = "10 Alamelu Mangai Nagar, Nathammedu, Tiruninravur, Chennai – 602024";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Agriculture & Food",
    description: "High-quality fresh and preserved fruits, vegetables, rice, and essential food products sourced directly from regional producers.",
    icon: <Leaf className="w-8 h-8 text-brand-gold" />,
    image: "/1.jpeg"
  },
  {
    id: 2,
    title: "Furniture",
    description: "Premium imported furniture blending aesthetics with durability for modern homes and offices.",
    icon: <Armchair className="w-8 h-8 text-brand-gold" />,
    image: "/2.jpeg"
  },
  {
    id: 3,
    title: "Electrical & Electronics",
    description: "State-of-the-art electrical home devices and electronic items ensuring efficiency and innovation.",
    icon: <Zap className="w-8 h-8 text-brand-gold" />,
    image: "/3.jpeg"
  },
  {
    id: 4,
    title: "Garments",
    description: "Finest quality textiles and ready-made garments for international fashion markets.",
    icon: <Shirt className="w-8 h-8 text-brand-gold" />,
    image: "/4.jpeg"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "IEC Code", code: "AAPCR0835A" },
  { name: "GST Number", code: "33AAPCR0835A1ZQ" }
];

export const FEATURES = [
  {
    title: "Global Reach",
    description: "Connecting regional producers to international markets seamlessly.",
    icon: <Globe className="w-12 h-12 text-white" />
  },
  {
    title: "Quality Assurance",
    description: "Strict quality control for fresh produce and premium goods.",
    icon: <Award className="w-12 h-12 text-white" />
  },
  {
    title: "Reliable Logistics",
    description: "Efficient supply chain management ensuring timely delivery.",
    icon: <Truck className="w-12 h-12 text-white" />
  },
  {
    title: "Ethical Trade",
    description: "Transparency and integrity in every business transaction.",
    icon: <ShieldCheck className="w-12 h-12 text-white" />
  }
];
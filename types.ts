import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Certification {
  name: string;
  code: string;
}
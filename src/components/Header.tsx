import React from 'react';
import { Menu, Phone, Clock } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-yellow-500">{RESTAURANT_CONFIG.name}</div>
          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="hover:text-yellow-500 font-medium transition-colors">Menu</a>
            <a href="#about" className="hover:text-yellow-500 font-medium transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-yellow-500 font-medium transition-colors">Contato</a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">{RESTAURANT_CONFIG.phone}</span>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
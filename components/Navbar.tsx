
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenEnrollment, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View, href: string) => {
    if (currentView === 'home' && view === 'home') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(view);
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled || currentView !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home', '#home')}
          >
            <BrandLogo className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Auralith<span className="text-indigo-600">Bit</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.href)}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  currentView === item.view ? 'text-teal-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onOpenEnrollment}
              className="bg-primary-gradient text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 bg-white border-b' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view, item.href)}
              className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => { onOpenEnrollment(); setIsOpen(false); }}
              className="w-full bg-primary-gradient text-white px-5 py-3 rounded-xl text-base font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

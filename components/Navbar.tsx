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

  // Check if we're on the home page
  const isHomePage = currentView === 'home';
  
  // Determine if we should show light text (on home page without scroll)
  const showLightText = isHomePage && !scrolled;

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

  // Dynamic classes based on page and scroll state
  const navBgClass = showLightText 
    ? 'bg-transparent py-4 xs:py-5' 
    : 'bg-white/90 backdrop-blur-md shadow-sm py-2.5 xs:py-3';
    
  const textColorClass = showLightText ? 'text-white' : 'text-slate-900';
  const hoverColorClass = showLightText ? 'hover:text-teal-300' : 'hover:text-teal-600';
  const activeColorClass = showLightText ? 'text-teal-300' : 'text-teal-600';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-1.5 xs:gap-2 cursor-pointer"
            onClick={() => handleNavClick('home', '#home')}
          >
            <BrandLogo className="w-9 h-9 xs:w-10 xs:h-10" />
            <span className={`text-lg xs:text-xl font-bold tracking-tight ${textColorClass}`}>
              <span className={showLightText ? 'text-teal-300' : 'text-indigo-600'}>AuralithBit</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.href)}
                className={`text-sm font-medium transition-colors ${hoverColorClass} ${
                  currentView === item.view ? activeColorClass : textColorClass
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onOpenEnrollment}
              className={`${showLightText 
                ? 'bg-white/20 border border-white/30 hover:bg-white/30' 
                : 'bg-primary-gradient'} text-white px-4 xs:px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all active:scale-95`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} hover:opacity-80 focus:outline-none`}
            >
              {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 bg-white border-b' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="px-3 xs:px-4 pt-1.5 xs:pt-2 pb-5 xs:pb-6 space-y-1.5 xs:space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view, item.href)}
              className="block w-full text-left px-2.5 xs:px-3 py-3 xs:py-4 text-sm xs:text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 xs:pt-4">
            <button 
              onClick={() => { onOpenEnrollment(); setIsOpen(false); }}
              className="w-full bg-primary-gradient text-white px-4 xs:px-5 py-2.5 xs:py-3 rounded-xl text-sm xs:text-base font-semibold"
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

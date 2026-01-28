
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, LayoutPanelLeft } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';
import BrandLogo from './BrandLogo';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.4-.05.82-.01 1.22.12 1.01.7 1.99 1.58 2.51.8.47 1.78.56 2.66.33.82-.2 1.49-.81 1.83-1.55.22-.48.31-1.03.31-1.57V.02z"/>
  </svg>
);

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { Icon: Facebook, bgColor: 'bg-[#1877F2]', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583899281707&mibextid=rS40aB7S9Ucbxw6v' },
    { Icon: TikTokIcon, bgColor: 'bg-black', label: 'TikTok', href: 'https://www.tiktok.com/@auralith.bit?_r=1&_t=ZS-93Ptr3E6zKs' },
    { Icon: Linkedin, bgColor: 'bg-[#0A66C2]', label: 'LinkedIn', href: '#' },
    { Icon: Mail, bgColor: 'bg-[#EA4335]', label: 'Gmail', href: 'mailto:info@auralithbit.com.np' }
  ];

  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          <div className="lg:col-span-4 space-y-8">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
            >
              <BrandLogo className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Auralith<span className="text-indigo-600">Bit</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm font-medium">
              Designing with vision, developing with passion, and delivering with excellence. A global leader in IT education and enterprise solutions based in Nepal.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, bgColor, label, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bgColor} transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="pt-4">
               <button 
                onClick={() => { onNavigate('prototype'); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
               >
                 <LayoutPanelLeft className="w-4 h-4" />
                 Explore Design System
               </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => { onNavigate(item.view); window.scrollTo(0, 0); }}
                    className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="font-medium">info@auralithbit.com.np</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <div className="flex flex-col font-medium">
                  <span>+977 9766715783</span>
                  <span>+977 9766715793</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="font-medium">Lumbini Road, Bhairahawa<br />Rupandehi, Nepal</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">Join our local & global tech community.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
              />
              <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-all font-bold">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">© 2024 Auralith Bit. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Nepal Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

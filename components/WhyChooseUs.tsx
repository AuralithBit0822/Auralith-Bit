
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { View } from '../types';

interface WhyChooseUsProps {
  onNavigate: (view: View) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1/800/800" alt="Team collaborating" className="w-full object-cover aspect-square" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
              <p className="text-slate-800 font-bold text-lg mb-2">"Quality is never an accident; it is always the result of intelligent effort."</p>
              <div className="flex items-center gap-3">
                 <img className="w-8 h-8 rounded-full" src="https://picsum.photos/id/11/100/100" alt="Director" />
                 <span className="text-xs text-slate-500">Director, Auralith Bit</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4">Why Auralith Bit?</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Redefining Tech Education & Industry Delivery</h3>
              <p className="text-lg text-slate-600">We don't just follow trends; we set them. Our unique blend of production-grade services and intensive training creates a loop of continuous excellence.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-8 bg-white border border-teal-500/30 rounded-3xl group cursor-pointer hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col"
                  onClick={() => onNavigate('about')}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 border border-slate-50">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

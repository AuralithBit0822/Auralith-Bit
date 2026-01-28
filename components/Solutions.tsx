
import React from 'react';
import { SOLUTIONS } from '../constants';
import { View } from '../types';

interface SolutionsProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Innovative IT Solutions for Scaling Businesses</h3>
          <p className="text-lg text-slate-600">From concept to deployment, we build digital products that set you apart from the competition.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((sol) => (
            <div 
              key={sol.id} 
              onClick={() => onNavigate('solutions')}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-300 group cursor-pointer text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                {sol.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{sol.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <button 
            onClick={onOpenEnrollment}
            className="bg-primary-gradient text-white px-8 py-3 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95"
           >
             Get a Free Quote
           </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

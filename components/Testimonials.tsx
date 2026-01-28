
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Trust & Reviews</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">What Our Global Community Says</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-indigo-100 mb-6" />
                <p className="text-slate-600 text-lg leading-relaxed italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-50">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-indigo-50" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

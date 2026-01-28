
import React from 'react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { View } from '../types';

interface AboutProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const About: React.FC<AboutProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Our Story</h2>
              <h3 className="text-4xl font-extrabold text-slate-900">Your Global Partner in IT Excellence</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Auralith Bit is a premier nexus of innovation where cutting-edge technology meets world-class education. We bridge the gap between academic theory and industry reality through immersive learning and enterprise delivery.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Mission', icon: <Target className="w-6 h-6" />, text: 'Empowering global talent through technical mastery.' },
                { title: 'Vision', icon: <Eye className="w-6 h-6" />, text: 'Defining the future of digital product delivery.' },
                { title: 'Values', icon: <Heart className="w-6 h-6" />, text: 'Innovation, Integrity, and Human Impact.' }
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-lg hover:border-teal-500/30 transition-all">
                  <div className="w-12 h-12 bg-white text-teal-600 flex items-center justify-center rounded-xl shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why We Lead</h3>
              <div className="space-y-6">
                {[
                  "Global standard curriculum updated monthly",
                  "Direct mentorship from Fortune 500 engineers",
                  "Live project integration with real clients",
                  "Comprehensive career placement support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-600 p-1 rounded-full mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="mt-10 bg-primary-gradient text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all"
              >
                Discover More
              </button>
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

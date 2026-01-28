import React from 'react';
import { ArrowRight, Calendar, User, Clock, Sparkles } from 'lucide-react';
import { UPCOMING_CLASSES, STATS } from '../constants';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Premium IT Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Technology and Innovation"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layered overlay for depth and readability */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-teal-50/20" />
      </div>

      {/* Decorative Blur Elements for Modern Aesthetic */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Value Proposition & Stats */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest animate-pulse shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Innovating the Digital Frontier
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Design. Develop.<br />
                <span className="text-gradient">Deliver.</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                We design with vision, develop with passion, and deliver with excellence. Auralith Bit empowers the next generation of tech leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={onOpenEnrollment}
                  className="bg-primary-gradient text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Join our Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('solutions')}
                  className="bg-white border-2 border-slate-100 text-slate-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all hover:-translate-y-1"
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-md p-5 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group">
                  <div className="text-3xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Live Classes Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/60 shadow-indigo-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Upcoming Live Classes</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Expert-led technical workshops</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-teal-100 shadow-sm">Live Soon</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {UPCOMING_CLASSES.slice(0, 3).map((cls) => (
                  <div 
                    key={cls.id} 
                    className="relative p-5 rounded-3xl transition-all duration-300 bg-white border border-teal-500/20 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 group cursor-default shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Consistent icon UI with white background and teal hover */}
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-white text-teal-600 flex items-center justify-center shadow-sm border border-slate-50 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 truncate text-sm lg:text-base group-hover:text-indigo-600 transition-colors">{cls.title}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 mt-1.5 font-medium">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-indigo-400" /> {cls.time}</span>
                            <span className="flex items-center gap-1.5 text-teal-600 font-bold"><User className="w-3.5 h-3.5" /> {cls.instructor}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={onOpenEnrollment}
                        className="bg-primary-gradient text-white px-5 py-2.5 rounded-2xl text-[11px] font-black hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-indigo-500/20 uppercase tracking-widest"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <button 
                  onClick={() => onNavigate('courses')}
                  className="text-indigo-600 text-sm font-black hover:text-indigo-800 transition-colors flex items-center gap-2 mx-auto group"
                >
                  View Full Schedule
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Background floating elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-400/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-400/20 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
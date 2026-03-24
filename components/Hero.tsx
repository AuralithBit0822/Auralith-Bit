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
    <section
      id="home"
      className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/Hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-widest animate-pulse backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Innovating the Digital Frontier
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                Design. Develop.<br />
<span className="text-teal-300">
                  Deliver.
                </span>
              </h1>

              <p className="text-xl text-slate-100 max-w-xl leading-relaxed font-medium">
                We design with vision, develop with passion, and deliver with excellence.
                Auralith Bit empowers the next generation of tech leaders.
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
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-3xl font-extrabold text-teal-400 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/20">

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Upcoming Live Classes
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    Expert-led technical workshops
                  </p>
                </div>
                <span className="text-[10px] font-black text-teal-300 bg-teal-500/20 px-3 py-1.5 rounded-full uppercase tracking-widest border border-teal-400/40">
                  Live Soon
                </span>
              </div>

              <div className="space-y-4">
                {UPCOMING_CLASSES.slice(0, 3).map((cls) => (
                  <div
                    key={cls.id}
                    className="p-5 rounded-3xl bg-white/10 border border-teal-400/20 hover:border-teal-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/20 text-teal-300 flex items-center justify-center">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white truncate text-sm lg:text-base">
                            {cls.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-200 mt-1.5 font-medium">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-indigo-400" />
                              {cls.time}
                            </span>
                            <span className="flex items-center gap-1.5 text-teal-300 font-bold">
                              <User className="w-3.5 h-3.5" />
                              {cls.instructor}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenEnrollment}
                        className="bg-primary-gradient text-white px-5 py-2.5 rounded-2xl text-[11px] font-black hover:scale-110 transition-transform active:scale-95 uppercase tracking-widest"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
<button
                  onClick={() => onNavigate('courses')}
                  className="bg-primary-gradient text-white px-5 py-2.5 rounded-2xl text-[11px] font-black hover:scale-110 transition-transform active:scale-95 uppercase tracking-widest flex items-center gap-2 mx-auto"
                >
                  View Full Schedule
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-400/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-400/20 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

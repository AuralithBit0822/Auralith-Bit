import React from 'react';
import { Target, Eye, Heart, CheckCircle2, Award, Users, Globe, Briefcase, ArrowRight, TrendingUp, Lightbulb, Code, Rocket, Zap, Shield, Linkedin, Twitter, Mail } from 'lucide-react';
import { View } from '../types';
import { STATS } from '../constants';

const AboutPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onNavigate, onOpenEnrollment }) => {
  const teamMembers = [
    {
      name: "Aakriti Bista",
      role: "Founder & CEO",
      image: "/team/Aakriti Bista.jpeg"
    },
    {
      name: "Anjali Bista",
      role: "Chief Technical Officer",
      image: "/team/Anjali Bista.jpg"
    },
    {
      name: "Akash Prasad Barai",
      role: "Project Manager",
      image: "/team/Akas Barai.jpeg"
    },
    {
      name: "Supriya Dwivedi",
      role: "Technical Lead",
      image: "/team/Supriya Dwivedi.jpg"
    },
    {
      name: "Parwesh Kumar Karna",
      role: "Instructor",
      image: "/team/Parwesh Kumar Karna.jpg"
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* 1️⃣ Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
            alt="Professional Team and Innovation"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-none">
            About <span className="text-gradient">Auralith Bit</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-300 tracking-[0.25em] uppercase mb-6 flex items-center justify-center gap-4">
            <span>Design</span>
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>Develop</span>
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span className="text-teal-400">Deliver</span>
          </p>
          <p className="text-indigo-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Discover the nexus of technical mastery and industry delivery. We are more than an institute; we are the engine of your digital future.
          </p>
        </div>
      </section>

      {/* 2️⃣ Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em]">Our Foundation</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">What Drives Auralith Bit?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Global Mission', desc: 'To empower the next generation of engineers with production-grade skills that transcend borders.', icon: <Globe className="w-6 h-6" /> },
              { title: 'Visionary Design', desc: 'To define the future of digital products through human-centric design and technical precision.', icon: <Lightbulb className="w-6 h-6" /> },
              { title: 'Core Integrity', desc: 'Building trust through transparent delivery and a commitment to genuine human impact.', icon: <Shield className="w-6 h-6" /> }
            ].map((v, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Stats Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-5xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Experience Excellence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-tight">Bridging the Industry <br /><span className="text-indigo-600">Skill Gap.</span></h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Traditional education often fails to keep pace with the rapid evolution of technology. At Auralith Bit, we operate as both a high-end development agency and an institute, creating a unique synergy.
                </p>
                <div className="space-y-4">
                  {[
                    "Curriculum built on real client project feedback",
                    "Mentorship from engineers currently in production",
                    "A focus on scalability, security, and performance",
                    "Structured pathways into high-growth corporate roles"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="bg-teal-50 text-teal-500 p-1.5 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-bold">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <button onClick={onOpenEnrollment} className="w-full sm:w-auto bg-primary-gradient text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all active:scale-95">
                    Get Started with Us
                  </button>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl border-8 border-slate-50" alt="Team meeting" />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                     <Award className="w-10 h-10 text-indigo-600" />
                     <h4 className="font-black text-slate-900">Industry Leader</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Recognized for excellence in <br />technical delivery and training.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5️⃣ Organization Members Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em]">The Minds Behind Auralith Bit</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Our Leadership & Experts</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Meet the dedicated professionals committed to your technical growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-indigo-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-teal-600 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-black text-slate-900 tracking-tight">{member.name}</h4>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1 mb-3">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
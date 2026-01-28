
import React from 'react';
import { CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { View } from '../types';

interface InternshipProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Internship: React.FC<InternshipProps> = ({ onNavigate, onOpenEnrollment }) => {
  const features = [
    { title: 'Industry Mentorship', icon: <Award className="w-6 h-6" />, desc: 'Learn directly from seniors.' },
    { title: 'Live Client Work', icon: <Briefcase className="w-6 h-6" />, desc: 'Contribute to actual products.' },
    { title: 'Job Assurance', icon: <GraduationCap className="w-6 h-6" />, desc: 'Direct pathway to placement.' },
  ];

  return (
    <section id="internship" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 blur-[100px] -ml-48 -mb-48" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest">
                Career Fast-Track
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Bridge the Gap with our <span className="text-teal-400">Structured Internship</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Step out of the classroom and into the corporate world. Our internship program is designed to transform theoretical knowledge into battle-tested industry skills.
              </p>
              
              <div className="space-y-4">
                {['Guaranteed 12-week intensive curriculum', 'Real-world project ownership', 'Letter of recommendation & Certification'].map(text => (
                  <div key={text} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    {text}
                  </div>
                ))}
              </div>

              <button 
                onClick={onOpenEnrollment}
                className="bg-accent-gradient text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-teal-500/20 transition-all active:scale-95"
              >
                Apply for Internship
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 space-y-4 hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feat.title}</h4>
                  <p className="text-slate-400 text-sm">{feat.desc}</p>
                </div>
              ))}
              <div className="bg-primary-gradient p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm font-medium text-indigo-100">Conversion to Full-time Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

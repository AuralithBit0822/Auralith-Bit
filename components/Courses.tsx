
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COURSES } from '../constants';
import { View } from '../types';

interface CoursesProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4">Master Your Craft</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">Flagship Training Programs</h3>
            <p className="text-lg text-slate-600 mt-4">Accelerate your career with industry-vetted courses designed to make you hireable in the global market.</p>
          </div>
          <button 
            onClick={() => onNavigate('courses')}
            className="bg-primary-gradient text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-lg transition-all group"
          >
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              onClick={() => onNavigate('courses')}
              className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                {course.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-2">{course.tag}</span>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{course.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{course.description}</p>
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <button 
                  onClick={(e) => { e.stopPropagation(); onOpenEnrollment(); }}
                  className="bg-primary-gradient text-white px-4 py-2 rounded-full text-[10px] font-bold hover:shadow-md transition-all active:scale-95"
                >
                  Enrolling Now
                </button>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;

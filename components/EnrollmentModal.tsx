
import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Sparkles, User, Mail, Phone, BookOpen, Rocket, Briefcase, Building, Link as LinkIcon, Globe } from 'lucide-react';
import { ModalType } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selection: '',
    extra: '' // Used for Portfolio URL or Company Name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default selection based on type
      const defaultSelection = 
        type === 'course' ? 'Full Stack Web Development' :
        type === 'internship' ? 'Web Development Track' :
        'Custom Software Solutions';
      setFormData(prev => ({ ...prev, selection: defaultSelection }));
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setStep('form');
        setFormData({ name: '', email: '', phone: '', selection: '', extra: '' });
      }, 300);
    }
  }, [isOpen, type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1500);
  };

  const getModalContent = () => {
    switch (type) {
      case 'internship':
        return {
          title: 'Join Our Team',
          subtitle: 'Launch your career as an intern.',
          selectionLabel: 'Internship Track',
          extraLabel: 'Portfolio / LinkedIn URL',
          extraIcon: <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />,
          extraPlaceholder: 'https://...',
          options: ['Web Development Track', 'UI/UX Design Track', 'Digital Marketing Track', 'Mobile App Track', 'Graphics Design Track'],
          benefits: ["Real Client Projects", "Expert Mentorship", "Career Path Guidance"],
          successMsg: "Our HR team will review your portfolio and contact you for an initial screening."
        };
      case 'solution':
        return {
          title: 'Scale Your Business',
          subtitle: 'Get a tailored enterprise solution.',
          selectionLabel: 'Service Interest',
          extraLabel: 'Company Name',
          extraIcon: <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />,
          extraPlaceholder: 'Your Business Name',
          options: ['Custom Software Solutions', 'Mobile App Development', 'Enterprise UI/UX Strategy', 'Cloud Infrastructure', 'Digital Transformation'],
          benefits: ["Scalable Architecture", "Hardened Security", "24/7 Priority Support"],
          successMsg: "A solutions architect will call you within 24 hours to discuss your requirements."
        };
      default:
        return {
          title: 'Quick Enrollment',
          subtitle: 'Secure your spot in our next cohort.',
          selectionLabel: 'Select Program',
          extraLabel: '', // Courses don't need an extra field currently
          extraIcon: null,
          extraPlaceholder: '',
          options: ['Full Stack Web Development', 'Data Science & AI with Python', 'UI/UX Design Masterclass', 'Mobile App Engineering', 'Cybersecurity Professional'],
          benefits: ["Industry Mentorship", "Live Project Access", "Job Placement Support"],
          successMsg: "Check your email for the next steps and course orientation details."
        };
    }
  };

  const content = getModalContent();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 text-slate-400 hover:text-slate-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-12 h-full min-h-[600px]">
          {/* Decorative Sidebar */}
          <div className="hidden md:flex md:col-span-4 bg-primary-gradient p-10 flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                {type === 'internship' ? <Briefcase className="w-6 h-6" /> : type === 'solution' ? <Globe className="w-6 h-6" /> : <Rocket className="w-6 h-6" />}
              </div>
              <h2 className="text-3xl font-black leading-tight mb-4">Auralith <br /><span className="text-indigo-200">Excellence.</span></h2>
              <p className="text-indigo-100/80 text-sm font-medium leading-relaxed">
                Empowering technical minds and global businesses with precision engineering.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-indigo-100">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Applications Open
              </div>
              <div className="space-y-4">
                {content.benefits.map((txt) => (
                  <div key={txt} className="flex items-center gap-2 text-xs font-medium text-white/70">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    {txt}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="col-span-full md:col-span-8 p-8 md:p-12 bg-white flex flex-col justify-center">
            {step === 'form' ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{content.title}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">{content.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Alex Johnson"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+977 9800000000"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@company.com"
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{content.selectionLabel}</label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                      <select 
                        value={formData.selection}
                        onChange={(e) => setFormData({...formData, selection: e.target.value})}
                        className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-bold text-slate-700 appearance-none"
                      >
                        {content.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {content.extraLabel && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{content.extraLabel}</label>
                      <div className="relative">
                        {content.extraIcon}
                        <input 
                          required
                          type="text" 
                          value={formData.extra}
                          onChange={(e) => setFormData({...formData, extra: e.target.value})}
                          placeholder={content.extraPlaceholder}
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-primary-gradient text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all active:scale-95 disabled:opacity-70 group"
                    >
                      {isSubmitting ? "Processing Request..." : "Submit Application"}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-[0.2em]">
                      Auralith Bit • Secure Data Transmission
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900">Request Confirmed!</h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed max-w-[320px] mx-auto">
                    Thank you, {formData.name.split(' ')[0]}! {content.successMsg}
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                >
                  Return to Website
                </button>
                <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">
                  <Sparkles className="w-4 h-4" />
                  Experience Excellence
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;

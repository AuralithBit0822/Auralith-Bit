
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, Minimize2, MessageCircle } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

declare global {
  interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    width="34"
    height="34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path
      d="M16 2C8.3 2 2 8.3 2 16c0 2.2.6 4.3 1.6 6.1L2 28.8l6.8-2.2c1.7.9 3.6 1.4 5.6 1.4 7.7 0 14-6.3 14-14S23.7 2 16 2zm7.1 19.1c-.4 1-2.3 1.8-3.2 1.9-.9.1-1.9.2-3.1-.4-.6-.3-1.2-.7-2.2-1.2-1.9-1-3.2-2.7-3.3-2.8-.1-.1-.8-1-.8-1.8 0-.9.5-1.2.7-1.4.2-.2.4-.2.6-.2.1 0 .3 0 .4 0 .1 0 .7.2.9.7.4.9 1.2 2.7 1.3 2.8.1.1.2.4 0 .7-.1.2-.2.4-.4.6-.1.1-.3.3-.1.7.3.7 1.5 2.6 2.6 3.5.7.5 1.2.4 1.6.2.4-.1 2.8-1 3.2 1.1.1.5.1 2.9-.8 3.8z"
      fill="white"
    />
  </svg>
);

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hello! I am your Auralith Bit AI Consultant. How can I help you today with our professional IT courses or business solutions?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'model', text: "AI Consultant is temporarily unavailable. Please contact our experts via WhatsApp for immediate assistance!" }]);
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenerativeAI(apiKey);

      const systemInstruction = `You are the Auralith Bit Senior AI Consultant. Your purpose is to provide expert technical guidance to students and businesses.

          COMPANY CONTEXT:
          - Auralith Bit is an IT Institute & Solutions provider.
          - Slogan: "Design. Develop. Deliver."

          KEY OFFERINGS (Courses):
          - Full Stack Web Development (MERN Stack).
          - UI/UX Design Masterclass (Figma/User Research).
          - Data Science & AI (Python/TensorFlow).
          - Mobile App Engineering (Flutter/React Native).
          - Cybersecurity (Penetration Testing).

          KEY OFFERINGS (Solutions):
          - Custom Software Development.
          - Cloud & Security Infrastructure.
          - Maintenance & System Support.
          - UI/UX Branding & Strategy.

          INTERNSHIP PROGRAM:
          - 12-week intensive, real client projects, mentorship from seniors.

          GUIDELINES:
          - Be professional, encouraging, and technically sharp.
          - If a user asks about pricing, mention NPR values found in our catalog.
          - Always mention "Enroll Now" or "Speak to an Expert" for conversion.
          - Keep responses concise and focused on how Auralith Bit can solve the user's problem.`;

      const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: systemInstruction }],
          },
          {
            role: 'model',
            parts: [{ text: 'Understood. I am ready to assist as the Auralith Bit Senior AI Consultant.' }],
          },
          ...[...messages.slice(1), { role: 'user' as const, text: userMessage }]
            .filter((m, i) => !(i === 0 && m.role === 'model'))
            .map(m => ({
              role: m.role === 'user' ? 'user' as const : 'model' as const,
              parts: [{ text: m.text }]
            }))
        ],
      });

      const result = await chat.sendMessage(userMessage);
      const aiText = result.response.text() || "I apologize, but I'm having trouble processing that request. Please try again or reach out to our human experts via the WhatsApp button below.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Consultant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a brief technical moment. Please try again or contact us directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="mb-1 w-[90vw] sm:w-[420px] h-[600px] max-h-[80vh] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary-gradient p-6 text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-2xl shadow-inner border border-white/10">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm tracking-tight">AI IT Consultant</h4>
                <div className="text-[10px] text-indigo-100 flex items-center gap-1.5 font-bold uppercase tracking-widest mt-0.5">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                  Live Support
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-xl transition-all active:scale-90 relative z-10"
              aria-label="Minimize Chat"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fafbfc]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-4 rounded-2xl text-sm leading-relaxed font-medium shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="flex gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about courses, solutions..."
                className="flex-1 bg-transparent px-4 py-2 text-sm font-medium focus:outline-none placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary-gradient text-white p-2.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:shadow-none active:scale-90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9779766715793"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group relative flex items-center justify-center border-2 border-white/10"
      >
        <WhatsAppIcon />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
          WhatsApp Expert
        </span>
      </a>

      {/* AI Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-gradient text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <div className="flex items-center gap-3 px-2 relative z-10">
            <MessageCircle className="w-7 h-7" />
            <span className="hidden sm:inline font-black text-sm pr-1">AI Consultant</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIConsultant;

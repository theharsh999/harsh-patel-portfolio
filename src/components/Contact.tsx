/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle, Info, CalendarClock } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [messagesLog, setMessagesLog] = useState<{ name: string; timestamp: string; subject: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate interactive REST trigger callback
    setTimeout(() => {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessagesLog((prev) => [
        { name: formData.name, timestamp, subject: formData.subject || 'Inquiry' },
        ...prev
      ]);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
              06 // Let's Connect
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build <span className="text-amber-400">Something Brilliant</span>
          </h2>
          <p className="text-sm font-sans text-slate-400 mt-2">
            Get in touch for internships, client projects, or technical collaboration.
          </p>
        </div>

        {/* Balanced asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Dynamic Handles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Amazing Together</span>.
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                I am currently looking for summer/fall engineering internships, freelance consulting projects, and open-source alliances. Reach out directly on LinkedIn or dispatch deep inquiries using the interactive portal.
              </p>
            </div>

            {/* Direct Contact Nodes */}
            <div className="space-y-4" id="direct-contact-channels">
              
              {/* Mail Card */}
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-amber-400/[0.05] border border-white/[0.06] hover:border-amber-400/30 transition-all duration-300"
                id="contact-email-card"
              >
                <div className="p-3 bg-white/5 rounded-lg text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Office Mailbox</p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-amber-400/[0.05] border border-white/[0.06] hover:border-amber-400/30 transition-all duration-300"
                id="contact-linkedin-card"
              >
                <div className="p-3 bg-white/5 rounded-lg text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">LinkedIn Network</p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                    linkedin.com/in/harsh-patel
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-amber-400/[0.05] border border-white/[0.06] hover:border-amber-400/30 transition-all duration-300"
                id="contact-github-card"
              >
                <div className="p-3 bg-white/5 rounded-lg text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Code Hub Repository</p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                    github.com/theharsh999
                  </p>
                </div>
              </a>

            </div>

            {/* Simulated Live Connection Log stream */}
            {messagesLog.length > 0 && (
              <div className="p-4 bg-slate-900 border border-white/[0.05] rounded-xl space-y-3">
                <p className="text-[9px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                  <Sparkles size={8} />
                  Live client handshakes
                </p>
                <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                  {messagesLog.map((log, idx) => (
                    <div key={idx} className="text-[11px] font-mono text-slate-400 flex justify-between items-center bg-white/5 p-2 rounded">
                      <span>▸ <strong className="text-white">{log.name}</strong> connected</span>
                      <span>{log.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Side: Form Block */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/[0.08]" id="contact-form-container">
              
              {status === 'success' ? (
                <div className="py-8 text-center space-y-4" id="contact-success-view">
                  <div className="inline-flex p-4 bg-emerald-400/10 rounded-full border border-emerald-400/20 text-emerald-400">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thanks for reaching out! Your connection has been logged locally in memory. Harsh typically reviews all student and consulting inquiries within 12 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 text-xs font-mono font-bold uppercase text-black bg-amber-400 hover:bg-amber-500 rounded transition-all cursor-pointer"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6" id="contact-active-form">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-white/[0.08] focus:border-amber-400 rounded-lg text-white font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#0F172A] border border-white/[0.08] focus:border-amber-400 rounded-lg text-white font-sans text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="form-subject" className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Consulting proposal / Internship opportunities"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-white/[0.08] focus:border-amber-400 rounded-lg text-white font-sans text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      What are we building? *
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share project parameters, timelines, and technical challenges..."
                      className="w-full px-4 py-3 bg-[#0F172A] border border-white/[0.08] focus:border-amber-400 rounded-lg text-white font-sans text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 text-sm font-mono font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-500 disabled:bg-slate-700 disabled:text-slate-400 rounded-lg transition-all shadow-lg hover:shadow-amber-400/10 cursor-pointer"
                    id="submit-contact-form"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting Package...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all" />
                        Send Secured Message
                      </>
                    )}
                  </button>

                  <div className="flex items-start gap-1.5 text-[10px] font-mono text-slate-500">
                    <Info size={12} className="shrink-0 mt-0.5" />
                    <span>Submitted inquiries are saved in client session storage context. Privacy protected.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

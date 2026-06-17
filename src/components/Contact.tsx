/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Info } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }
    
    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      alert("Message is required");
      return;
    }

    setStatus('submitting');
    
    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name.trim());
      formPayload.append('email', formData.email.trim());
      formPayload.append('subject', formData.subject.trim() || 'New Portfolio Contact Form Submission');
      formPayload.append('message', formData.message.trim());
      formPayload.append('_subject', 'New Portfolio Contact Form Submission');
      formPayload.append('_captcha', 'false');
      formPayload.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/harshpatelji999@gmail.com', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission response not okay');
      }
    } catch (err) {
      console.error(err);
      alert('Could not submit the form. Please try again later.');
      setStatus('idle');
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
                    Thank You!
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been successfully delivered. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 text-xs font-mono font-bold uppercase text-black bg-amber-400 hover:bg-amber-500 rounded transition-all cursor-pointer"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit} 
                  action="https://formsubmit.co/harshpatelji999@gmail.com" 
                  method="POST"
                  className="space-y-6" 
                  id="contact-active-form"
                >
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
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
                        className={`w-full px-4 py-3 bg-[#0F172A] border ${emailError ? 'border-rose-500' : 'border-white/[0.08]'} focus:border-amber-400 rounded-lg text-white font-sans text-sm outline-none transition-all`}
                      />
                      {emailError && (
                        <p className="text-xs text-rose-400 font-mono mt-1">{emailError}</p>
                      )}
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
                        TRANSMITTING PACKAGE...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all" />
                        SEND SECURED MESSAGE
                      </>
                    )}
                  </button>

                  <div className="flex items-start gap-1.5 text-[10px] font-mono text-slate-500">
                    <Info size={12} className="shrink-0 mt-0.5" />
                    <span>Your message will be delivered directly to my inbox. I typically respond within 24–48 hours.</span>
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

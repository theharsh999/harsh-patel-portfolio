/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Linkedin, Github, Cpu, ArrowUpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer 
      className="bg-[#0b0f19] border-t border-white/[0.05] relative z-10 py-16 px-6 sm:px-8 overflow-hidden" 
      id="main-footer"
    >
      
      {/* Background soft shadow overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-400/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        
        {/* Top grid: Logo, quicklinks, back to top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.04]">
          
          {/* Logo brand block */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <button 
              onClick={scrollUp}
              className="font-display text-2xl font-black tracking-tight text-white flex items-center gap-2 cursor-pointer"
            >
              Harsh Patel
            </button>
            <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-widest text-center md:text-left">
              IT Engineering Student • Mumbai
            </p>
          </div>

          {/* Centered list indexes */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                id={`footer-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick scroll up indicator */}
          <button
            onClick={scrollUp}
            className="group flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
            title="Scroll to Top"
            id="footer-scroll-top-btn"
          >
            Back to Top
            <ArrowUpCircle size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom grid: Copyright and Social Handles */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
          
          {/* Copy Credits */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Harsh Patel. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">
              Crafted with Passion & Code.
            </p>
          </div>

          {/* Micro timezone locator decoration */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] text-slate-600 border border-white/[0.04] bg-white/[0.01] px-3 py-1 rounded">
            <Cpu size={12} className="text-amber-400" />
            <span>LOC: MUMBAI, INDIA (UTC+5:30)</span>
          </div>

          {/* Fast social nodes */}
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 border border-white/[0.04] bg-white/[0.01] hover:bg-amber-400/10 hover:border-amber-400/30 text-slate-400 hover:text-amber-400 rounded-md transition-colors"
              aria-label="Email Address Link"
              id="footer-email-social"
            >
              <Mail size={14} />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/[0.04] bg-white/[0.01] hover:bg-amber-400/10 hover:border-amber-400/30 text-slate-400 hover:text-amber-400 rounded-md transition-colors"
              aria-label="LinkedIn Profile Link"
              id="footer-linkedin-social"
            >
              <Linkedin size={14} />
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/[0.04] bg-white/[0.01] hover:bg-amber-400/10 hover:border-amber-400/30 text-slate-400 hover:text-amber-400 rounded-md transition-colors"
              aria-label="GitHub Profile Link"
              id="footer-github-social"
            >
              <Github size={14} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

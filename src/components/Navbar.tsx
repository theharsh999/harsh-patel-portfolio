/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Expertise' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of clean navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/[0.06] shadow-xl'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 cursor-pointer font-display text-2xl font-extrabold tracking-tight"
          id="nav-logo"
        >
          <span className="text-white group-hover:text-amber-400 transition-colors duration-200">
            Harsh Patel
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1 ${
                activeSection === item.id
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action: Resume */}
        <div className="hidden lg:block">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium tracking-wide uppercase text-black bg-amber-400 hover:bg-amber-500 rounded transition-all duration-200 shadow-md shadow-amber-400/10 cursor-pointer"
            id="nav-resume-btn"
          >
            <FileText size={14} className="group-hover:rotate-6 transition-transform duration-200" />
            Resume
            <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-[#0F172A] border-t border-white/[0.06] z-40 px-6 py-8 flex flex-col justify-between"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-xl font-display font-bold py-2 border-b border-white/[0.03] flex items-center justify-between ${
                  activeSection === item.id ? 'text-amber-400' : 'text-slate-400'
                }`}
                id={`mobile-nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 text-center font-mono font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-500 rounded-lg transition-all"
              id="mobile-resume-btn"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

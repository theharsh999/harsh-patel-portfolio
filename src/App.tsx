/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import { ShieldCheck, CalendarClock, Cpu, Sparkles, Check } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [lagCursorPos, setLagCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Scroll observer listener for active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      // Adjust offset height for active detection
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor tracker coordinate logic (desktop only)
  useEffect(() => {
    // Detect mobile touch pointer screen
    const detectDevice = () => {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      setIsMobile(!finePointer);
    };
    detectDevice();
    window.addEventListener('resize', detectDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  // Lag circle animation for custom cursor
  useEffect(() => {
    if (isMobile) return;
    
    let animationFrameId: number;
    const updateLagCursor = () => {
      setLagCursorPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // speed coefficient
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateLagCursor);
    };
    
    animationFrameId = requestAnimationFrame(updateLagCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos, isMobile]);

  // Listener to expand custom cursor on interactive nodes hover
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen text-white font-sans bg-[#0F172A] selection:bg-amber-400 selection:text-[#0F172A]">
      
      {/* Premium custom dynamic cursor pointers (Hidden on mobile touch screen layout) */}
      {!isMobile && (
        <>
          {/* Inner solid pinpoint */}
          <div 
            className="fixed w-2 h-2 rounded-full bg-amber-400 pointer-events-none z-50 mix-blend-difference hidden md:block"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.05s ease-out'
            }}
          />
          {/* Outer elegant lag-circle */}
          <div 
            className={`fixed rounded-full border border-amber-400 pointer-events-none z-50 hidden md:block transition-all duration-300 ${
              isHovered 
                ? 'w-12 h-12 bg-amber-400/10 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                : 'w-6 h-6 border-amber-400/40'
            }`}
            style={{
              left: `${lagCursorPos.x}px`,
              top: `${lagCursorPos.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </>
      )}

      {/* Atmospheric backgrounds and noise */}
      <AmbientBackground />

      {/* Primary Frame Context */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Sticky Bar */}
        <Navbar activeSection={activeSection} />

        {/* Content Stages */}
        <main className="flex-1">
          {/* Hero Landing Page Hero Block */}
          <Hero />

          {/* About Split stats and chronological line */}
          <About />

          {/* Bento Tech Stack metrics */}
          <Skills />

          {/* Case Projects Drawer Walkthroughs */}
          <Projects />

          {/* Engineering TIMELINE & Credentials */}
          <Experience />

          {/* Capabilities Consulting cards */}
          <Services />

          {/* Stateful Secure Connection board */}
          <Contact />
        </main>

        {/* Corporate bottom copyright */}
        <Footer />
      </div>

    </div>
  );
}

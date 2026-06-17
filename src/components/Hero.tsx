/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, Code, Cpu, Database, Network, Cloud, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [terminalLine, setTerminalLine] = useState(0);
  
  const techLogos = [
    { name: 'React', icon: Cpu, color: 'text-sky-400 bg-sky-400/10 border-sky-400/20', delay: '0s', pos: 'top-[15%] left-[5%]' },
    { name: 'Node.js', icon: Terminal, color: 'text-green-400 bg-green-400/10 border-green-400/20', delay: '1s', pos: 'bottom-[25%] left-[2%]' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', delay: '2s', pos: 'top-[5%] right-[25%]' },
    { name: 'MongoDB', icon: Database, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', delay: '1.5s', pos: 'bottom-[12%] right-[10%]' },
    { name: 'Java', icon: Shield, color: 'text-red-400 bg-red-400/10 border-red-400/20', delay: '1.8s', pos: 'top-[35%] left-[32%]' },
  ];

  const handleProjectsScroll = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 px-6 sm:px-8 flex items-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Interactive Briefing */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg artistic-badge font-mono text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-ping" />
            Available for Internships & Projects
          </div>

          <div className="space-y-4">
            <p className="font-mono text-slate-400 text-sm tracking-widest uppercase mb-1">
              // HELLO WORLD, I'M HARSH PATEL
            </p>
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-300">Developer</span> & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-amber-600 font-extrabold">
                IT Engineering
              </span> Student
            </h1>
            <p className="font-display text-xl sm:text-2xl font-bold text-slate-300 tracking-wide max-w-2xl">
              Building Digital Products That Solve Real Problems.
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            I design and develop modern web applications, solve algorithmic puzzles, and build highly performant full stack tools using robust engineering principles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button
              onClick={handleProjectsScroll}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-black bg-amber-400 hover:bg-amber-500 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] cursor-pointer"
              id="hero-view-projects"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-medium text-white hover:text-amber-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-400/40 rounded-lg transition-all duration-300 cursor-pointer"
              id="hero-download-resume"
            >
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Quick Metrics Overlay */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-10 border-t border-white/[0.06] w-full mt-6">
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">9.0+</p>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">GPA Score</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-amber-400">100+</p>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">LeetCode</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">10+</p>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">Custom Apps</p>
            </div>
          </div>

        </div>

        {/* Right 3D Terminal Mockup with Floating Interactive Icons */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          
          {/* Animated Glow Backdrops */}
          <div className="absolute w-72 h-72 rounded-full bg-amber-400/[0.04] blur-[80px] pointer-events-none animate-pulse-slow" />
          
          {/* Main Visual Terminal Screen */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] glass-panel artistic-shadow rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-4 overflow-hidden group select-none hover:border-[#FBBF24]/40 transition-all duration-500">
            
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                developer@harsh: ~/portfolio
              </span>
            </div>

            {/* Simulated Server Console Lines */}
            <div className="flex-1 font-mono text-xs sm:text-sm text-slate-300 space-y-3.5 overflow-y-auto pt-2">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">$</span>
                <span className="text-slate-400">whoami</span>
              </div>
              <div className="text-white font-medium pl-4">
                "Harsh Patel — IT Engineer & Full Stack Dev"
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-amber-400 font-bold">$</span>
                <span className="text-slate-400">fetch --skills --detailed</span>
              </div>
              <div className="text-amber-400/90 pl-4 space-y-1">
                <div>▸ Frontend: React, Tailwind, ESNext</div>
                <div>▸ Backend: Node, Express, REST APIs</div>
                <div>▸ Database: MongoDB, MySQL</div>
                <div>▸ Tools: Git, GitHub, VS Code</div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-amber-400 font-bold">$</span>
                <span className="text-slate-400">systemctl status core</span>
              </div>
              <div className="pl-4 flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active, High Performance (9+ CGPA)
              </div>

              {/* Mini Interactive trigger inside of visual panel */}
              <div className="pt-4 border-t border-white/[0.04]">
                <button 
                  onClick={() => setTerminalLine((prev) => (prev + 1) % 4)}
                  className="w-full text-left py-2 px-3 rounded bg-white/[0.03] border border-white/[0.06] hover:bg-amber-400/10 hover:border-amber-400/30 text-[11px] text-amber-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>
                    {terminalLine === 0 && "⚡ Run optimizer: build_success.sh"}
                    {terminalLine === 1 && "💡 Show philosophy: problem_solver_motto.cpp"}
                    {terminalLine === 2 && "🚀 Inspect server: ping_aws_ec2.sh"}
                    {terminalLine === 3 && "💻 Show local setup: list_environment.yaml"}
                  </span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-white">Click</span>
                </button>
                <div className="text-[11px] text-slate-400 mt-2 pl-2">
                  {terminalLine === 0 && "Output: Success (Bundle optimized 1.2s, 0 critical errors)"}
                  {terminalLine === 1 && "Output: static inline void build() { while(true) learn(); }"}
                  {terminalLine === 2 && "Output: PING ms-east-1.amazonaws.com (34.204) latency: 12ms"}
                  {terminalLine === 3 && "Output: editor: VSCode, shell: zsh, os: macOS/Ubuntu"}
                </div>
              </div>
            </div>

          </div>

          {/* Floating Technology Badges (Relative Positions) */}
          {techLogos.map((logo, index) => {
            const IconComp = logo.icon;
            return (
              <div
                key={logo.name}
                className={`absolute hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-current/20 z-20 ${logo.pos} ${logo.color}`}
                style={{
                  animation: index % 2 === 0 ? 'float 6s ease-in-out infinite' : 'float-reverse 7s ease-in-out infinite',
                  animationDelay: logo.delay
                }}
              >
                <IconComp size={14} />
                {logo.name}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Tv, Cpu, Sparkles, Check } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Tv':
        return <Tv size={24} className="text-amber-400" />;
      case 'Cpu':
        return <Cpu size={24} className="text-amber-400" />;
      case 'Sparkles':
        return <Sparkles size={24} className="text-amber-400" />;
      default:
        return <Tv size={24} className="text-amber-400" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title elements */}
        <div className="flex flex-col mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
              05 // Focus & Expertise
            </span>
            <span className="w-8 h-[1px] bg-amber-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Core <span className="text-amber-400">Interests & Skills</span>
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Expanding full-stack methodologies, engineering efficient Web interfaces, and preparing for structured development internships.
          </p>
        </div>

        {/* 3 Columns card array */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="group glass-panel p-8 rounded-2xl border border-white/[0.06] hover:border-amber-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col justify-between"
              id={`service-card-${srv.id}`}
            >
              <div className="space-y-6">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {/* Icon wrap */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-300">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Focus // 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Mini features checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.05]">
                  {srv.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Handle */}
              <div className="pt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-center py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 bg-white/5 hover:bg-amber-400/10 border border-white/[0.06] hover:border-amber-400/20 rounded transition-all cursor-pointer"
                  id={`service-inquire-btn-${srv.id}`}
                >
                  Discuss Internships & Projects
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

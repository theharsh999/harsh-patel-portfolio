/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Award, BookOpen, Milestone, ChevronRight, GraduationCap, Calendar } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE_EXPERIENCE } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'All' | 'Education' | 'Hackathons' | 'Learning'>('All');

  const filteredTimeline = TIMELINE_EXPERIENCE.filter(item => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Education') return item.type === 'Education';
    if (activeTab === 'Hackathons') return item.type === 'Achievement';
    if (activeTab === 'Learning') return item.type === 'Extracurricular';
    return true;
  });

  return (
    <section 
      id="about" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
              01 // Profile Summary
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Driven by Logic, <span className="text-amber-400">Refined by Code</span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-2">
            IT Engineering Student • Full Stack Developer • Hackathon Challenger
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Left Side: Description and Stats Grid */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <User size={20} className="text-amber-400" />
                Who is Harsh Patel?
              </h3>
              <p className="font-sans text-slate-300 leading-relaxed text-base sm:text-lg">
                {PERSONAL_INFO.aboutIntro}
              </p>
              <p className="font-sans text-slate-400 leading-relaxed text-sm">
                Focusing on distributed server patterns and clean client state, I build apps that are visually cohesive and technically optimized. I thrive in team environments, hackathons, and structured academic code tasks.
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div 
                  key={stat.label}
                  className="glass-panel artistic-shadow p-5 rounded-2xl border border-white/[0.06] group flex flex-col justify-between"
                >
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </p>
                  <div className="mt-2">
                    <p className="font-sans text-sm font-semibold text-white">{stat.label}</p>
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick callout */}
            <div className="glass-panel p-4 rounded-xl border-l-2 border-l-amber-400 bg-amber-400/[0.01] flex items-start gap-3">
              <Award className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <div className="text-xs font-mono text-slate-300">
                <span className="font-bold text-white">Hackathon Contender:</span> Building functional software solutions and working in collegiate teams under intense timelines.
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Career Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Milestone size={20} className="text-amber-400" />
                  Engineering Timeline
                </h3>
                
                {/* Micro Filter Chips */}
                <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/[0.06] overflow-x-auto text-[10px] font-mono">
                  {(['All', 'Education', 'Hackathons', 'Learning'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-all duration-200 ${
                        activeTab === tab
                          ? 'bg-amber-400 text-black font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      id={`timeline-filter-${tab}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chronological List */}
              <div className="relative border-l border-white/[0.08] pl-6 ml-2.5 space-y-8 py-3">
                {filteredTimeline.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="relative group transition-all duration-300 hover:translate-x-1"
                    id={`timeline-item-${item.id}`}
                  >
                    
                    {/* Time Dot Indicator */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0F172A] border-2 border-amber-400 flex items-center justify-center z-10 transition-transform group-hover:scale-130 group-hover:bg-amber-400" />
                    
                    {/* Glow outline line */}
                    <div className="absolute -left-[25px] top-4 w-[1px] h-full bg-gradient-to-b from-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-1">
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        <Calendar size={10} />
                        {item.period}
                      </span>
                      
                      {/* Title & Organization */}
                      <h4 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs font-semibold text-slate-400">
                        {item.organization}
                      </p>
                      
                      {/* Description */}
                      <p className="font-sans text-xs text-slate-300 pt-1.5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map(tag => (
                          <span 
                            key={tag}
                            className="text-[9px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.04] px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}

                {filteredTimeline.length === 0 && (
                  <div className="text-center py-6 font-mono text-xs text-slate-500">
                    No timeline items match this category filter.
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

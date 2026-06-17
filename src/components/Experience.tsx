/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, CheckCircle, GraduationCap, Github, Trophy, Heart, Briefcase } from 'lucide-react';

export default function Experience() {
  const achievements = [
    {
      title: 'Top Tier Scholar (9.0+ CGPA)',
      desc: 'Sustaining high academic caliber in Thakur College of Engineering & Technology (TCET), majoring in Information Technology.',
      icon: GraduationCap,
      color: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'Full Stack Engineering Expert',
      desc: 'Built custom MERN solutions, structured API endpoints, and optimized page load thresholds on real platforms.',
      icon: Briefcase,
      color: 'from-sky-400 to-blue-500'
    },
    {
      title: 'Hackathon Competitor',
      desc: 'Collaborated in multi-disciplinary groups, coding full prototypes within tight 24/36 hour formats.',
      icon: Trophy,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Problem Solver & Algorithmist',
      desc: 'Involved in competitive coding with over 100+ algorithmic challenges solved on modern learning platforms.',
      icon: Award,
      color: 'from-rose-400 to-pink-500'
    },
    {
      title: 'Open Source Supporter',
      desc: 'Actively contributing tools, documentation bug fixes, and user interface refactors on GitHub.',
      icon: Github,
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
              04 // Credentials & Achievements
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Honors & <span className="text-amber-400">Engineering Journey</span>
          </h2>
          <p className="text-sm font-sans text-slate-400 mt-2 max-w-xl">
            A cohesive collection of academic standing, campus contributions, and software milestones.
          </p>
        </div>

        {/* Visual Bento Arrangement for Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.title}
                className="group relative glass-panel p-6 rounded-2xl border border-white/[0.06] hover:border-amber-400/20 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden"
                id={`achievement-card-${i}`}
              >
                {/* Background ambient corner glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.02] group-hover:opacity-[0.06] blur-xl rounded-full transition-opacity`} />

                <div className="space-y-4">
                  {/* Icon circular boundary */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                      <IconComp size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                  <CheckCircle size={12} />
                  Verified Milestone
                </div>

              </div>
            );
          })}

          {/* Academic Highlight Big block on the end */}
          <div className="group relative col-span-1 md:col-span-2 lg:col-span-1 glass-panel p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between bg-gradient-to-b from-[#1E293B]/30 to-[#0F172A] hover:border-amber-400/20 transition-all duration-300">
            <div className="space-y-3">
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                Institution Highlights
              </span>
              <h3 className="font-display text-lg font-bold text-white">Thakur College of Engineering (TCET)</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                TCET stands as a benchmark in Mumbai engineering networks. Immersed in practical laboratories, server virtualization experiments, and advanced math algorithms to support technical builds.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>IT Dept • Mumbai</span>
              <span className="text-white font-bold">2024 - 2028</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

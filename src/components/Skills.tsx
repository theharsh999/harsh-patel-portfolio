/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Code, Terminal, Network, Globe, Database, 
  GitBranch, Layers, Cloud, FileCode, Briefcase, 
  Cpu, Compass, CheckCircle, Flame, Filter
} from 'lucide-react';
import { SKILLS } from '../data';

// Helper component to render the correct category icon
function SkillIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = { className: className || "text-amber-400", size: 24 };
  
  switch (name) {
    case 'Html':
    case 'JavaScript (ES6+)':
      return <Code {...iconProps} />;
    case 'Tv':
    case 'CSS3 / Tailwind':
      return <Layers {...iconProps} />;
    case 'Reactor':
    case 'React.js':
      return <Cpu {...iconProps} />;
    case 'Terminal':
    case 'Node.js':
      return <Terminal {...iconProps} />;
    case 'Network':
    case 'Express.js':
      return <Network {...iconProps} />;
    case 'Globe':
    case 'REST APIs':
      return <Globe {...iconProps} />;
    case 'Database':
    case 'MongoDB':
    case 'MySQL':
      return <Database {...iconProps} />;
    case 'GitBranch':
    case 'Git & GitHub':
      return <GitBranch {...iconProps} />;
    case 'Layers':
    case 'Docker':
      return <Layers {...iconProps} />;
    case 'Cloud':
    case 'AWS':
    case 'Deployment':
      return <Cloud {...iconProps} />;
    case 'FileCode':
    case 'VS Code':
      return <FileCode {...iconProps} />;
    case 'Briefcase':
    case 'Java':
      return <Briefcase {...iconProps} />;
    case 'DSA':
      return <Flame {...iconProps} />;
    case 'Cpu':
    case 'C++':
      return <Cpu {...iconProps} />;
    case 'Compass':
    case 'Python':
      return <Compass {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Languages'] as const;

  const filteredSkills = SKILLS.filter(skill => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section 
      id="skills" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-amber-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
                02 // Tech Arsenal
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills & <span className="text-amber-400">Tech Stack</span>
            </h2>
            <p className="font-mono text-xs text-slate-400 mt-2">
              Glow on hover • Fluid proficiency metrics • Filtered categories
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-white/5 p-1 rounded-xl border border-white/[0.06] max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-semibold uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id={`skills-tab-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative glass-panel p-6 rounded-2xl border border-white/[0.06] hover:border-amber-400/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/[0.02]"
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              
              {/* Highlight Overlay Spotlights on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Skill Icon with customized hover pulse action */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/[0.08] group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-300">
                  <SkillIcon name={skill.name} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Micro Category Badge */}
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-slate-400 bg-white/5 border border-white/[0.04] px-2 py-0.5 rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1 mb-6">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {skill.subText}
                </p>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500 uppercase tracking-widest">Proficiency</span>
                  <span className="text-amber-400 font-bold">{skill.proficiency}%</span>
                </div>
                
                {/* Horizontal Bar with dual track style */}
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/[0.05]">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Static Knowledge Badges footer for a Bento Accent */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-slate-900 via-[#1E293B]/40 to-slate-900">
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-1.5">
              <Flame size={16} className="text-amber-400" />
              Continuous Learning Roadmap
            </h4>
            <p className="font-sans text-xs text-slate-400">
              Adapting to distributed database models, server containerization, serverless functions, and modern UI architectures.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['GraphQL', 'Redis', 'Next.js', 'TypeScript', 'Prisma', 'OAuth 2.0'].map((item) => (
              <span 
                key={item}
                className="text-[10px] font-mono font-medium tracking-wide text-amber-400/80 bg-amber-400/5 hover:bg-amber-400/10 border border-amber-400/10 rounded-md px-2.5 py-1 transition-colors"
              >
                + {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Code, Sparkles, X, Check, Laptop, ShieldCheck, MapPin } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend'>('All');

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <section 
      id="projects" 
      className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/[0.04] bg-[#0F172A]/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-amber-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
                03 // Product Showcases
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              Featured <span className="text-amber-400">Engineering Work</span>
            </h2>
            <p className="font-mono text-xs text-slate-400">
              Interactive drawer walkthroughs • Real-world case studies • Clean frameworks
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/[0.06] mt-6 md:mt-0 max-w-max">
            {(['All', 'Full-Stack', 'Frontend'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-semibold uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id={`projects-filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between glass-panel rounded-2xl border border-white/[0.06] hover:border-amber-400/30 transition-all duration-500 overflow-hidden shadow-2xl hover:-translate-y-1.5"
              id={`project-card-${project.id}`}
            >
              
              {/* Image viewport */}
              <div className="relative aspect-video overflow-hidden border-b border-white/[0.06] cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-[#0F172A] px-2.5 py-1 rounded border border-amber-400/20 shadow-md">
                    Click to Open Case Study
                  </span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                
                {/* Info and Stack */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      MERN Architecture
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges Row */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono font-semibold text-slate-300 bg-white/5 border border-white/[0.04] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[9px] font-mono text-slate-500 px-2 py-0.5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Interactive buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 text-center py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-amber-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-amber-400/40 rounded transition-all cursor-pointer"
                    id={`project-study-btn-${project.id}`}
                  >
                    Case Study
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/5 border border-white/[0.06] rounded transition-all"
                    title="Codebase Repository"
                    id={`project-github-btn-${project.id}`}
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-amber-400 hover:bg-white/5 border border-white/[0.06] rounded transition-all"
                    title="Live Web Application"
                    id={`project-live-btn-${project.id}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Project Details Drawer / Overlay Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10" id="project-modal-backdrop">
            {/* Dark glass cover background */}
            <div 
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body Container */}
            <div 
              className="relative w-full max-w-4xl glass-panel bg-[#1E293B] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] z-10"
              id="project-case-study-modal"
            >
              
              {/* Close Button absolute */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-slate-900/50 rounded-full border border-white/[0.06] hover:border-amber-400/30 transition-all z-20 cursor-pointer"
                id="close-project-modal"
              >
                <X size={18} />
              </button>

              {/* Modal left side image + general metrics */}
              <div className="w-full md:w-1/2 relative bg-slate-950 flex flex-col justify-between border-r border-white/[0.06] min-h-[250px] md:min-h-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Top tag */}
                <div className="relative p-6 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                    {selectedProject.category} Case Overview
                  </span>
                </div>

                {/* Bottom details block */}
                <div className="relative p-6 sm:p-8 z-10 space-y-3 mt-auto">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-[9px] font-mono text-white/80 bg-white/5 border border-white/[0.05] rounded px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal right side scrolling logic, text challenge */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-2">
                      Project Objective
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1">
                      <Sparkles size={12} className="text-amber-400" />
                      Core Functions Engineered
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check size={14} className="text-amber-400 shrink-0 mt-0.5 bg-amber-400/10 p-0.5 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture blueprint */}
                  <div className="p-3 bg-slate-900 border border-white/[0.05] rounded-lg">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Code size={12} className="text-amber-400" />
                      Infrastructure Specs
                    </p>
                    <p className="text-[11px] font-mono text-slate-300 leading-relaxed">
                      Stateless JWT Auth, responsive Tailwind structures, and localized query indexing.
                    </p>
                  </div>
                </div>

                 {/* Bottom links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/[0.06]">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-500 rounded text-center transition-all cursor-pointer"
                  >
                    <Globe size={14} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-amber-400 bg-white/5 hover:bg-white/10 border border-white/[0.06] rounded text-center transition-all cursor-pointer"
                  >
                    <Github size={14} />
                    Repository
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

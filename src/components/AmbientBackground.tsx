/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate simple random positions for floating particles
    const generated = Array.from({ length: 25 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1, // px
      delay: Math.random() * 5, // sec
      duration: Math.random() * 15 + 15 // sec
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Navy Black Solid Base */}
      <div className="absolute inset-0 bg-[#0F172A]" />

      {/* Subtle Noise Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Gold Yellow Ambient Blob (Top Right) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FBBF24]/[0.03] blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Cool Slate Purple/Blue Ambient Blob (Bottom Left) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-500/[0.04] blur-[150px] pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Center ambient blob */}
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-[#FBBF24]/[0.01] blur-[160px] pointer-events-none animate-pulse-slow" style={{ animationDuration: '12s' }} />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              boxShadow: p.size > 2 ? '0 0 10px rgba(251, 191, 36, 0.4)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}

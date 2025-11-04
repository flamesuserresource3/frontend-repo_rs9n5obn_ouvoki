import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-28 md:px-12 lg:px-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for new projects
        </span>

        <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          UI/UX Designer & Frontend Developer
          <span className="block text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text">crafting delightful, accessible web experiences</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          I blend human-centered design with modern frontend engineering to ship fast, beautiful, and scalable products. With 6+ years of experience across startups and enterprise, I specialize in design systems, interaction design, and high-performance React apps.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            Contact me
          </a>
        </div>

        <div className="mt-4 flex items-center gap-4 text-white/80">
          <a href="mailto:hello@yourname.dev" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> hello@yourname.dev
          </a>
          <span className="h-4 w-px bg-white/20" />
          <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

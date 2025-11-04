import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import SkillsContact from './components/SkillsContact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Projects />
      <CaseStudies />
      <SkillsContact />
      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-10 text-sm text-white/60 md:px-12 lg:px-16">
        © {new Date().getFullYear()} Your Name — UI/UX & Frontend. Built with React, Tailwind, and Spline.
      </footer>
    </div>
  );
}

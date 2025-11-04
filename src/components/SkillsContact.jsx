import React from 'react';
import { CheckCircle2, Mail, Linkedin, Github, Globe } from 'lucide-react';

export default function SkillsContact() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Skills & Tools</h2>
          <p className="mt-2 max-w-xl text-white/70">
            A blend of product thinking, interaction design, and modern frontend engineering.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Design Tools</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {['Figma', 'Sketch', 'Adobe XD', 'Framer', 'Zeplin'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Frontend</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES2023)', 'TypeScript', 'React', 'Vite', 'Next.js', 'Zustand', 'Redux'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Other</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {['Responsive Design', 'Accessibility (WCAG 2.2)', 'Design Systems', 'User Research', 'Prototyping', 'A/B Testing', 'Performance Optimization'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Certifications</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {['Google UX Design Certificate', 'NN/g UX Certification', 'Meta Front-End Developer'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Testimonials */}
        <div id="contact" className="">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Let’s Build Something</h2>
          <p className="mt-2 max-w-xl text-white/70">
            I’m open to full-time roles, contract projects, and design system consulting. Reach out and let’s talk about your goals.
          </p>

          <div className="mt-6 space-y-3 text-white/80">
            <a href="mailto:hello@yourname.dev" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> hello@yourname.dev</a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="block inline-flex items-center gap-2 hover:text-white"><Linkedin className="h-4 w-4" /> linkedin.com/in/yourname</a>
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="block inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4" /> github.com/yourname</a>
            <a href="https://yourname.dev" target="_blank" rel="noreferrer" className="block inline-flex items-center gap-2 hover:text-white"><Globe className="h-4 w-4" /> yourname.dev</a>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-white/80 backdrop-blur">
              <p className="italic">“A rare blend of craft and speed. Our conversion jumped and the UI finally feels cohesive.”</p>
              <p className="mt-2 text-sm text-white/60">— Priya S., Product Manager</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-white/80 backdrop-blur">
              <p className="italic">“Brought clarity to complex flows and elevated our design system. A force multiplier for the team.”</p>
              <p className="mt-2 text-sm text-white/60">— Ben T., Staff Engineer</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-white/80 backdrop-blur">
              <p className="italic">“Thoughtful, user-first decisions backed by data. Our support tickets dropped noticeably.”</p>
              <p className="mt-2 text-sm text-white/60">— Lila R., Head of CX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

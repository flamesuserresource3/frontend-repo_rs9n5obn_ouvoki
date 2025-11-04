import React from 'react';
import { BarChart3, Users, Compass } from 'lucide-react';

const studies = [
  {
    title: 'Checkout Conversion Lift',
    problem:
      'A high-growth e-commerce brand saw a 38% drop-off at shipping details. The flow was long, error-prone, and not optimized for mobile.',
    process:
      'Conducted heuristic evaluation, mapped the current journey, and ran 5 moderated user tests. Synthesized insights into opportunity areas and ideated on progressive disclosure and inline validation. Built mid-fi prototypes in Figma and implemented a production experiment.',
    solution:
      'Launched a single-page, progressive form with address autocomplete, real-time validation, and Apple/Google Pay. Clear affordances and error messaging reduced cognitive load.',
    impact:
      'A/B test over 14 days showed +18.4% conversion, -26% form errors, and a 0.7s faster TTI on mobile.',
    feedback:
      '“The new checkout feels faster and less stressful. I didn’t have to guess what went wrong.” — Beta user',
    tools: ['Figma', 'React', 'React Hook Form', 'Tailwind', 'Segment', 'Optimizely']
  },
  {
    title: 'Design System Adoption',
    problem:
      'Fragmented UI across squads caused inconsistencies and slowed delivery. Accessibility gaps were frequent in audits.',
    process:
      'Inventory of UI patterns, token architecture definition, and accessibility baselines. Pairing sessions with squads to migrate legacy screens using a codemod-powered upgrade path. Storybook documentation with usage guidelines and live examples.',
    solution:
      'A token-driven, themable component library with primitives and patterns. CI checks for a11y, snapshot tests, and visual regression scripts.',
    impact:
      'Time-to-first-PR for new features dropped by 32%. Accessibility violations reduced by 70% across pages.',
    feedback:
      '“Shipping UI is finally joyful again. The docs and examples are gold.” — Staff Engineer',
    tools: ['Figma', 'React', 'TypeScript', 'Storybook', 'Jest', 'Chromatic']
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Case Studies</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A closer look at process, decisions, and measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {studies.map((s) => (
          <article key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p><span className="font-semibold text-white">Problem:</span> {s.problem}</p>
              <p><span className="font-semibold text-white">Process:</span> {s.process}</p>
              <p><span className="font-semibold text-white">Solution:</span> {s.solution}</p>
              <p className="flex items-start gap-2 text-emerald-300"><BarChart3 className="mt-0.5 h-4 w-4 flex-none" /> {s.impact}</p>
              <p className="flex items-start gap-2 italic text-white/80"><Users className="mt-0.5 h-4 w-4 flex-none" /> {s.feedback}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {s.tools.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

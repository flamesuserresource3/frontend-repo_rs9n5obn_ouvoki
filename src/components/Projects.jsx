import React from 'react';
import { ExternalLink, Github, Rocket, Layout, Smartphone, Palette } from 'lucide-react';

const projects = [
  {
    title: 'Design System & Component Library',
    description:
      'A scalable design system with 50+ accessible components, tokens, and theming to accelerate product development across squads.',
    role: 'Lead UI Engineer & Designer',
    challenges:
      'Balancing accessibility with custom branding across multiple products. Built a token-driven theming strategy and automated visual regression testing.',
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind', 'Storybook', 'Jest'],
    visuals: ['/images/ds-1.png', '/images/ds-2.png'],
    demo: 'https://example.com/design-system',
    repo: 'https://github.com/yourname/design-system'
  },
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'Data-rich dashboard with real-time charts, custom filters, and role-based access for a B2B SaaS platform.',
    role: 'Frontend Engineer',
    challenges:
      'Rendering large datasets without jank. Implemented windowing, memoized selectors, and streaming updates over websockets.',
    tools: ['React', 'Vite', 'Recharts', 'Zustand', 'Tailwind', 'Cypress'],
    visuals: ['/images/saas-1.png', '/images/saas-2.png'],
    demo: 'https://example.com/saas-analytics',
    repo: 'https://github.com/yourname/saas-analytics'
  },
  {
    title: 'E-commerce Checkout UX Revamp',
    description:
      'Converted a 6-step checkout into a single, progressive form with address autocomplete and dynamic validation.',
    role: 'Product Designer',
    challenges:
      'Reducing drop-off while maintaining compliance. Prototyped flows and ran A/B tests to validate friction points.',
    tools: ['Figma', 'React Hook Form', 'Yup', 'Tailwind', 'Framer Motion'],
    visuals: ['/images/checkout-1.png', '/images/checkout-2.png'],
    demo: 'https://example.com/checkout',
    repo: 'https://github.com/yourname/checkout-revamp'
  },
  {
    title: 'Mobile-first Banking App',
    description:
      'Responsive web app with card management, budgeting, and dark mode. Emphasis on motion and micro-interactions.',
    role: 'UI/UX Designer',
    challenges:
      'Creating a delightful yet trustworthy look and feel. Built a motion system and iconography set to unify flows.',
    tools: ['Figma', 'React', 'Framer Motion', 'Tailwind'],
    visuals: ['/images/bank-1.png', '/images/bank-2.png'],
    demo: 'https://example.com/banking',
    repo: 'https://github.com/yourname/banking-app'
  },
  {
    title: 'Content Platform Design Sprint',
    description:
      'Rapid MVP for a creator platform: onboarding, editor, and subscription paywall shipped in 4 weeks.',
    role: 'Full-stack Frontend',
    challenges:
      'Going from concept to MVP quickly. Built wireframes, user flows, and production-ready UI in parallel.',
    tools: ['Figma', 'React', 'Vite', 'Tailwind', 'Radix UI'],
    visuals: ['/images/content-1.png', '/images/content-2.png'],
    demo: 'https://example.com/content-platform',
    repo: 'https://github.com/yourname/content-platform'
  }
];

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur transition hover:border-emerald-400/30 hover:bg-slate-900/80">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <div className="flex items-center gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20 hover:bg-emerald-500/20"
          >
            <Rocket className="h-3.5 w-3.5" /> Live
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 hover:bg-white/10"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        </div>
      </div>
      <p className="mb-3 text-sm text-white/80">{project.description}</p>
      <p className="mb-3 text-xs text-white/60"><span className="font-medium text-white/80">Role:</span> {project.role}</p>
      <p className="mb-3 text-xs text-white/60"><span className="font-medium text-white/80">Challenges:</span> {project.challenges}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {project.visuals.map((src, idx) => (
          <div key={idx} className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-slate-800">
            {/* Replace with actual screenshots */}
            <div className="flex h-full w-full items-center justify-center text-xs text-white/50">
              Screenshot {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A snapshot of recent work across design systems, product design, and modern React applications.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <Layout className="h-3.5 w-3.5" /> UI
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <Smartphone className="h-3.5 w-3.5" /> Responsive
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <Palette className="h-3.5 w-3.5" /> UX
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

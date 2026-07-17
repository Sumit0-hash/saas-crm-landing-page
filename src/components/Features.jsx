import { motion } from 'framer-motion';
import {
  Users,
  GitBranch,
  Sparkles,
  MailCheck,
  UsersRound,
  BarChart3,
} from 'lucide-react';
import Card from './Card';

const FEATURES = [
  {
    icon: Users,
    title: 'Lead Management',
    description:
      'Capture, score, and nurture leads with automated workflows. Never let a hot prospect slip through the cracks again.',
  },
  {
    icon: GitBranch,
    title: 'Sales Pipeline',
    description:
      'Visualize every deal stage with drag-and-drop pipelines. Forecast revenue and spot bottlenecks before they cost you.',
  },
  {
    icon: Sparkles,
    title: 'AI Insights',
    description:
      'Let AI surface your best next actions — deal predictions, churn risk, and smart recommendations tailored to your team.',
  },
  {
    icon: MailCheck,
    title: 'Marketing Automation',
    description:
      'Build multi-step email and SMS journeys. Trigger campaigns based on behavior and watch conversions climb on autopilot.',
  },
  {
    icon: UsersRound,
    title: 'Team Collaboration',
    description:
      'Shared inboxes, internal notes, and real-time mentions keep everyone aligned. Close deals as one unified team.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Customizable reports and live dashboards give you the metrics that matter — from pipeline velocity to LTV.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Features</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-slate-900 text-balance sm:text-4xl dark:text-white">
            Everything you need to{' '}
            <span className="gradient-text">close faster</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A complete toolkit for modern revenue teams — from first touch to
            renewal, all in one place.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <motion.div key={f.title} variants={item}>
              <Card hover className="group h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/10 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white dark:text-brand-400">
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-600 text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {f.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
                <p className="mt-3 text-xs font-medium text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-brand-400">
                  Learn more →
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

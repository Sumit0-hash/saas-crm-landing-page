import { motion } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  CheckCircle2,
  Clock,
  Circle,
} from 'lucide-react';
import Button from './Button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { label: 'Revenue', value: '₹4.2L', delta: '+12.5%', icon: DollarSign, tone: 'text-emerald-500' },
  { label: 'New Leads', value: '248', delta: '+8.1%', icon: Users, tone: 'text-brand-500' },
  { label: 'Win Rate', value: '34%', delta: '+4.2%', icon: Target, tone: 'text-accent-500' },
];

const bars = [40, 65, 50, 80, 60, 95, 72];

const pipeline = [
  { stage: 'Qualified', count: 12, color: 'bg-brand-500' },
  { stage: 'Proposal', count: 8, color: 'bg-accent-500' },
  { stage: 'Negotiation', count: 5, color: 'bg-emerald-500' },
];

const activities = [
  { text: 'Acme Corp moved to Proposal', time: '2m ago', icon: CheckCircle2, tone: 'text-emerald-500' },
  { text: 'New lead from website form', time: '14m ago', icon: Circle, tone: 'text-brand-500' },
  { text: 'Follow-up call scheduled', time: '1h ago', icon: Clock, tone: 'text-amber-500' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/20" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="max-w-xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="section-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Trusted by 4,000+ growing teams
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-4xl font-700 leading-[1.1] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl dark:text-white"
          >
            Grow Your Business with{' '}
            <span className="gradient-text">Smarter CRM</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            HelloCRM brings lead management, sales pipelines, and AI-powered
            insights into one beautiful workspace — so your team can close
            deals faster and delight every customer.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#contact" variant="gradient" size="lg" rightIcon={ArrowRight}>
              Start Free Trial
            </Button>
            <Button href="#contact" variant="secondary" size="lg" leftIcon={PlayCircle}>
              Book a Demo
            </Button>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              Cancel anytime
            </div>
          </motion.dl>
        </div>

        {/* Right: dashboard illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Floating glow */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-accent-500/10 to-transparent blur-2xl" />

          {/* Dashboard frame */}
          <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="rounded-md bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-500 dark:bg-white/5 dark:text-slate-400">
                app.hellocrm.io/dashboard
              </div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
            </div>

            {/* Stat cards */}
            <div className="mt-2 grid grid-cols-3 gap-2.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {s.label}
                    </span>
                    <s.icon className={`h-3.5 w-3.5 ${s.tone}`} aria-hidden="true" />
                  </div>
                  <div className="mt-1.5 flex items-end justify-between">
                    <span className="font-display text-lg font-700 text-slate-900 dark:text-white">
                      {s.value}
                    </span>
                    <span className={`text-[10px] font-semibold ${s.tone}`}>{s.delta}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart + Pipeline */}
            <div className="mt-2.5 grid grid-cols-5 gap-2.5">
              {/* Bar chart */}
              <div className="col-span-3 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Revenue Overview
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-500">
                    <TrendingUp className="h-3 w-3" /> Trending up
                  </span>
                </div>
                <div className="mt-4 flex h-24 items-end justify-between gap-1.5">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.7 + i * 0.07, duration: 0.6, ease: 'easeOut' }}
                      className="w-full rounded-t-md bg-gradient-to-t from-brand-500 to-accent-400"
                      style={{ minHeight: 4 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Pipeline */}
              <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-slate-900">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Sales Pipeline
                </span>
                <div className="mt-3 space-y-3">
                  {pipeline.map((p, i) => (
                    <motion.div
                      key={p.stage}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                        <span>{p.stage}</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {p.count}
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100 dark:bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(p.count / 12) * 100}%` }}
                          transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }}
                          className={`h-1.5 rounded-full ${p.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="mt-2.5 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-slate-900">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Recent Activity
              </span>
              <ul className="mt-2.5 space-y-2.5">
                {activities.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <a.icon className={`h-4 w-4 shrink-0 ${a.tone}`} aria-hidden="true" />
                    <span className="flex-1 text-[11px] text-slate-600 dark:text-slate-300">
                      {a.text}
                    </span>
                    <span className="text-[10px] text-slate-400">{a.time}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -left-4 top-1/3 hidden animate-float rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-xl sm:block dark:border-white/10 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Goal achieved</p>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">+24% this month</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

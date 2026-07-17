import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Button from './Button';
import { cn } from '../utils/cn';

const PLANS = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    description: 'For small teams getting started with CRM.',
    features: [
      'Up to 1,000 contacts',
      '2 sales pipelines',
      'Email & in-app support',
      'Basic analytics',
      'Mobile app access',
    ],
    cta: 'Start Free Trial',
    variant: 'secondary',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹2,499',
    period: '/month',
    description: 'For growing teams that need automation & AI.',
    features: [
      'Up to 25,000 contacts',
      'Unlimited pipelines',
      'AI insights & predictions',
      'Marketing automation',
      'Custom dashboards',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    variant: 'gradient',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited contacts',
      'SSO & advanced security',
      'Dedicated success manager',
      'Custom integrations & API',
      'SLA & 24/7 support',
      'Onboarding & training',
    ],
    cta: 'Contact Sales',
    variant: 'secondary',
    popular: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-slate-900 text-balance sm:text-4xl dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Start free for 14 days. No credit card required. Upgrade, downgrade,
            or cancel anytime.
          </p>

          {/* Billing toggle */}
          <div
            role="group"
            aria-label="Billing period"
            className="mt-7 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm dark:border-white/10 dark:bg-white/5"
          >
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                'rounded-full px-4 py-1.5 font-medium transition-colors',
                !annual
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                'rounded-full px-4 py-1.5 font-medium transition-colors',
                annual
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              )}
            >
              Annual
              <span className="ml-1.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={cn(
                'relative flex flex-col rounded-2xl border p-7 transition-all duration-300',
                plan.popular
                  ? 'border-transparent bg-white shadow-2xl shadow-brand-600/10 ring-2 ring-brand-500 lg:-translate-y-3 dark:bg-slate-900'
                  : 'border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" /> Most Popular
                </span>
              )}

              <h3 className="font-display text-lg font-600 text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                {plan.description}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-800 tracking-tight text-slate-900 dark:text-white">
                  {plan.price}
                  {plan.price !== 'Custom' && (
                    <span className="text-base font-500 text-slate-500 dark:text-slate-400">
                      {plan.period}
                    </span>
                  )}
                </span>
              </div>
              {plan.price !== 'Custom' && annual && (
                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                  Billed annually
                </p>
              )}

              <Button
                href="#contact"
                variant={plan.variant}
                size="lg"
                fullWidth
                className="mt-6"
                rightIcon={ArrowRight}
              >
                {plan.cta}
              </Button>

              <ul className="mt-7 space-y-3.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

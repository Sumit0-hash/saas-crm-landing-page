import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '../utils/cn';

const FAQS = [
  {
    q: 'How long is the free trial, and do I need a credit card?',
    a: 'The HelloCRM free trial lasts 14 days with full access to Professional features. No credit card is required to start — you only enter billing details when you decide to upgrade.',
  },
  {
    q: 'Can I migrate my data from another CRM?',
    a: 'Yes. We provide a CSV importer and guided migration for contacts, companies, and deals. Enterprise customers get white-glove migration handled by our onboarding team at no extra cost.',
  },
  {
    q: 'Is my data secure with HelloCRM?',
    a: 'Absolutely. We use AES-256 encryption at rest, TLS in transit, and are SOC 2 Type II compliant. Enterprise plans add SSO, audit logs, and granular role-based access controls.',
  },
  {
    q: 'Do you offer integrations with tools like Slack and Gmail?',
    a: 'Yes — HelloCRM connects with 80+ tools including Slack, Gmail, Outlook, Zapier, Mailchimp, and QuickBooks. A REST API and webhooks are available on all paid plans.',
  },
  {
    q: 'What does the AI Insights feature actually do?',
    a: 'AI Insights analyzes your pipeline to predict deal win probability, flag at-risk accounts, and recommend the next best action for each rep — all grounded in your own historical data.',
  },
  {
    q: 'Can I change plans or cancel anytime?',
    a: 'Yes. You can upgrade, downgrade, or cancel from the billing settings at any time. Changes take effect at the next billing cycle, and we never charge cancellation fees.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-slate-900 text-balance sm:text-4xl dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-brand-200 bg-white shadow-md dark:border-brand-500/30 dark:bg-slate-900'
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20'
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors',
                        isOpen
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                      )}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

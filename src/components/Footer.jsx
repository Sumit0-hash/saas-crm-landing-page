import { Zap, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
];

const SOCIAL = [
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Github, label: 'GitHub', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5" aria-label="HelloCRM home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-lg shadow-brand-600/30">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-700 tracking-tight text-slate-900 dark:text-white">
                Hello<span className="gradient-text">CRM</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              The smarter CRM for growing teams. Manage leads, automate sales,
              and unlock AI insights — all in one beautiful workspace.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-brand-500/30 dark:hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-white/10">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} HelloCRM, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
            <a href="#" className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

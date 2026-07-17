import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
} from 'lucide-react';
import Button from './Button';
import { submitContactForm } from '../services/api';

const COMPANIES = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+',
];

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number (at least 10 digits)')
    .regex(/^[0-9+\-\s()]+$/, 'Phone can only contain digits, spaces, +, - and ()'),
  country: z.string().min(2, 'Country is required'),
  industry: z.string().min(2, 'Industry is required'),
  companySize: z.string().nonempty('Please select a company size'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

const Field = ({ label, error, children, htmlFor, required = true }) => (
  <div>
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      {required && <span className="ml-0.5 text-brand-500">*</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const payload = {
        fullName: data.fullName,
        companyName: data.company,
        email: data.email,
        phone: data.phone,
        country: data.country,
        industry: data.industry,
        companySize: data.companySize,
        message: data.message,
      };
      
      await submitContactForm(payload);
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact Sales</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-slate-900 text-balance sm:text-4xl dark:text-white">
            Let's talk about your team
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Tell us a bit about your business and our team will craft a plan
            that fits perfectly.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="card-surface overflow-hidden p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.span>
                  <h3 className="mt-5 font-display text-xl font-700 text-slate-900 dark:text-white">
                    Message sent successfully
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
                    Thanks for reaching out! Our sales team will contact you
                    within one business day.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    className="mt-6"
                    leftIcon={RotateCcw}
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className="input-base"
                        aria-invalid={!!errors.fullName}
                        {...register('fullName')}
                      />
                    </Field>
                    <Field label="Company Name" htmlFor="company" error={errors.company?.message}>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Corp"
                        className="input-base"
                        aria-invalid={!!errors.company}
                        {...register('company')}
                      />
                    </Field>
                    <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@acme.com"
                        className="input-base"
                        aria-invalid={!!errors.email}
                        {...register('email')}
                      />
                    </Field>
                    <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="input-base"
                        aria-invalid={!!errors.phone}
                        {...register('phone')}
                      />
                    </Field>
                    <Field label="Country" htmlFor="country" error={errors.country?.message}>
                      <input
                        id="country"
                        type="text"
                        autoComplete="country-name"
                        placeholder="India"
                        className="input-base"
                        aria-invalid={!!errors.country}
                        {...register('country')}
                      />
                    </Field>
                    <Field label="Industry" htmlFor="industry" error={errors.industry?.message}>
                      <input
                        id="industry"
                        type="text"
                        placeholder="SaaS, Retail, Finance…"
                        className="input-base"
                        aria-invalid={!!errors.industry}
                        {...register('industry')}
                      />
                    </Field>
                  </div>

                  <Field label="Company Size" htmlFor="companySize" error={errors.companySize?.message}>
                    <select
                      id="companySize"
                      className="input-base appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                      }}
                      aria-invalid={!!errors.companySize}
                      defaultValue=""
                      {...register('companySize')}
                    >
                      <option value="" disabled>
                        Select company size…
                      </option>
                      {COMPANIES.map((c) => (
                        <option key={c} value={c}>
                          {c} employees
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" htmlFor="message" error={errors.message?.message}>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your team and what you're looking for… (min 20 characters)"
                      className="input-base resize-y"
                      aria-invalid={!!errors.message}
                      {...register('message')}
                    />
                  </Field>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400"
                    >
                      <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                      Something went wrong. Please try again in a moment.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading'}
                    leftIcon={status === 'loading' ? undefined : Send}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                    By submitting, you agree to our Privacy Policy. We'll never
                    share your information.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

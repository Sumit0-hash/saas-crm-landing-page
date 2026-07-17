import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from './Card';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    designation: 'VP of Sales',
    company: 'Acme Corp',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1',
    review:
      'HelloCRM transformed our sales process. We closed 32% more deals in the first quarter alone. The AI insights are genuinely useful, not just a gimmick.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    designation: 'Head of Growth',
    company: 'Nimbus Tech',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1',
    review:
      'The pipeline view is the best I have used. My team finally has clarity on every deal stage, and the automation saves us hours every single week.',
    rating: 5,
  },
  {
    name: 'Ananya Iyer',
    designation: 'Founder & CEO',
    company: 'Bloom Retail',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1',
    review:
      'We moved off three different tools to HelloCRM and never looked back. It is fast, beautiful, and our team actually enjoys using it every day.',
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-slate-900 text-balance sm:text-4xl dark:text-white">
            Loved by revenue teams everywhere
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From startups to enterprises, teams rely on HelloCRM to hit their
            numbers and delight customers.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item}>
              <Card hover className="relative h-full p-7">
                <Quote
                  className="absolute right-6 top-6 h-9 w-9 text-slate-100 dark:text-white/5"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  “{t.review}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm dark:ring-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.designation} · {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

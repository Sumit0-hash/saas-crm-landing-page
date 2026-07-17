import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

/**
 * Surface card with optional glass effect and hover lift.
 */
const Card = forwardRef(function Card(
  { children, className, glass = false, hover = false, as = 'div', ...props },
  ref
) {
  const base = cn(
    'rounded-2xl border shadow-sm',
    glass
      ? 'glass'
      : 'border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900',
    hover &&
      'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/30',
    className
  );

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag ref={ref} className={base} {...props}>
      {children}
    </MotionTag>
  );
});

export default Card;

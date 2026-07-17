import { forwardRef } from 'react';
import { cn } from '../utils/cn';

const VARIANTS = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-600/30',
  gradient:
    'bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40 hover:brightness-110',
  secondary:
    'bg-white text-slate-800 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10',
  ghost:
    'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10',
  outline:
    'border border-brand-200 text-brand-700 bg-brand-50/50 hover:bg-brand-50 dark:border-brand-500/30 dark:text-brand-300 dark:bg-brand-500/10 dark:hover:bg-brand-500/20',
};

const SIZES = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-3.5 text-base',
};

/**
 * Accessible, polymorphic button.
 * Renders <a> when `href` is provided, otherwise <button>.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    type = 'button',
    fullWidth = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    ...props
  },
  ref
) {
  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {LeftIcon && (
        <LeftIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
      )}
      {children}
      {RightIcon && (
        <RightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {content}
    </button>
  );
});

export default Button;

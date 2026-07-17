// Tiny className combiner — avoids pulling in clsx/tailwind-merge as deps.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

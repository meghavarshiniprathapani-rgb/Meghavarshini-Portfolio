import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'radio' | 'neutral' | 'outline' | 'frequency';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className,
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 font-mono rounded-full font-medium transition-colors';

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variants = {
    amber: 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20',
    radio: 'bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/30',
    neutral: 'bg-slate-100 text-slate-950 border border-slate-300',
    outline: 'border border-slate-600/60 text-slate-400 dark:text-slate-300',
    frequency: 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold tracking-wider',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizes[size], variants[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

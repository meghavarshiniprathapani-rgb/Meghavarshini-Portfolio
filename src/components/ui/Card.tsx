import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  frequencyBadge?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  frequencyBadge,
  glowOnHover = true,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={onClick}
      onKeyDown={onClick ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      } : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={twMerge(
        clsx(
          'relative rounded-xl p-6 transition-all duration-300 glass-panel overflow-hidden',
          hoverable && 'glass-panel-hover',
          glowOnHover && 'hover:-translate-y-1',
          onClick && 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950',
          className
        )
      )}
    >
      {/* Radio Frequency Header Bar Indicator */}
      {frequencyBadge && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-500/10 via-amber-500/50 to-amber-500/10 opacity-70" />
      )}
      
      {frequencyBadge && (
        <div className="flex justify-end mb-2">
          <span className="text-[10px] font-mono tracking-widest text-amber-500/80 dark:text-amber-400/80 uppercase">
            {frequencyBadge}
          </span>
        </div>
      )}

      {children}
    </motion.div>
  );
};

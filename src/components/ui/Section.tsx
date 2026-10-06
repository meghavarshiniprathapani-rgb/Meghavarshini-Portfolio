import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  channelCode?: string; // e.g. "CH-01" or "01 // ABOUT"
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  channelCode,
  children,
  className,
  containerClassName,
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        clsx('relative py-20 md:py-28 overflow-hidden scroll-mt-20', className)
      )}
    >
      <div className={twMerge(clsx('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName))}>
        {/* Animated Heading Header */}
        <div className="mb-12 md:mb-16">
          {channelCode && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-mono text-xs text-amber-500 dark:text-amber-400 font-semibold tracking-widest uppercase">
                {channelCode}
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
              {title}
              <span className="text-amber-500">.</span>
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-0.5 w-24 bg-gradient-to-r from-amber-500 via-amber-400/50 to-transparent origin-left"
          />
        </div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

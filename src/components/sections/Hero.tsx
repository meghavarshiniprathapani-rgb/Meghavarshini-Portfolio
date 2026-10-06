import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { profileData } from '../../data/content';

export const Hero: React.FC = () => {
  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Radio Wave Radial Background Glow & Waveforms */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-slate-950/0 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Waveform Grid Lines Motif in Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg className="w-full h-48 text-amber-500 stroke-current fill-none" viewBox="0 0 1200 120">
          <path
            d="M0,60 Q150,110 300,60 T600,60 T900,60 T1200,60"
            strokeWidth="1.5"
            className="animate-pulse"
          />
          <path
            d="M0,60 Q150,10 300,60 T600,60 T900,60 T1200,60"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.1]"
          >
            <span className="text-slate-900 dark:text-slate-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="mt-5 text-xl sm:text-3xl font-bold font-heading text-slate-800 dark:text-slate-200 leading-snug"
          >
            Full-stack developer building real-time, production-ready web apps
          </motion.h2>

          {/* Sub-line */}
          <motion.div
            variants={itemVariants}
            className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-700/60 shadow-sm"
          >
            <span className="text-amber-500 font-semibold">B.Tech CSE '27</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-800 dark:text-slate-200">Koneru Lakshmaiah University</span>
            <span className="text-slate-500">·</span>
            <span className="text-amber-500 font-medium">Java, Spring Boot, Node.js, React</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Projects
            </Button>

            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub: github.com/meghavarshiniprathapani-rgb"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn: linkedin.com/in/satya-meghavarshini"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              aria-label="Email Me"
              title="Email: meghavarshiniprathapani@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

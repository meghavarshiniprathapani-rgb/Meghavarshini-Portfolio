import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { profileData } from '../../data/content';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const COPYRIGHT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <footer className="relative bg-white text-slate-700 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      {/* Background Radio Frequency Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand & Radio Motif */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-sm flex items-center justify-center shadow-sm">
                SM
              </div>
              <span className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">
                {profileData.name}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all hover:-translate-y-0.5 shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all hover:-translate-y-0.5 shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all hover:-translate-y-0.5 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all hover:-translate-y-0.5 ml-2 cursor-pointer font-bold"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {COPYRIGHT_YEAR} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS • B.Tech CSE '27
          </p>
        </div>
      </div>
    </footer>
  );
};

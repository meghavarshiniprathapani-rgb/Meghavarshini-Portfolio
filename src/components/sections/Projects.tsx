import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, FolderGit2, X } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/SocialIcons';
import { projectsData } from '../../data/content';
import type { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Production-minded full-stack applications built for real users."
      channelCode="04 // CHANNELS PROJECTS"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className={project.featured ? 'lg:col-span-2' : ''}
          >
            <Card
              onClick={() => setSelectedProject(project)}
              className={`h-full p-0 group cursor-pointer ${project.featured && project.image ? 'lg:grid lg:grid-cols-2 lg:items-stretch' : ''}`}
            >
              {project.image && (
                <div className={`overflow-hidden bg-slate-900 ${project.id === 'kl-radio' || project.id === 'news-aggregator' || project.id === 'medisite' ? 'lg:order-2 lg:min-h-full' : project.featured ? 'lg:min-h-full' : ''}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} interface placeholder`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${project.featured ? `h-64 lg:h-full object-contain bg-slate-100 ${project.id === 'news-aggregator' ? 'p-6' : 'p-2'}` : 'h-56 object-cover'}`}
                  />
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-amber-600 dark:text-amber-400 font-medium leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                  <Badge variant="amber" size="sm">FEATURED</Badge>
                </div>

                <ul className="space-y-2.5 my-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 mt-auto border-t border-slate-200 dark:border-slate-800">
                  <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider">Stack:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6" onClick={(event) => event.stopPropagation()}>
                  {project.liveUrl && (
                    <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />} iconPosition="right">
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel"
            >
              <div className="relative">
                {selectedProject.image && (
                  <img src={selectedProject.image} alt="" className={`w-full h-52 md:h-64 ${selectedProject.featured ? `object-contain bg-slate-100 ${selectedProject.id === 'news-aggregator' ? 'p-6' : 'p-2'}` : 'object-cover'}`} decoding="async" />
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  autoFocus
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-100 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <Badge variant="amber" size="sm">CASE STUDY</Badge>
                <h3 id="project-dialog-title" className="mt-3 text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-slate-100">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <ul className="space-y-3 mt-6 text-sm text-slate-700 dark:text-slate-200">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider">Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => <Badge key={tech} variant="neutral" size="sm">{tech}</Badge>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

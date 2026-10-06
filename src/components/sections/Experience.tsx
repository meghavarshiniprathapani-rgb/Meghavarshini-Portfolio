import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Radio, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/content';

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Technical roles and software development experience."
      channelCode="03 // LOGS EXPERIENCE"
    >
      <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:left-2 md:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-amber-500/40 before:to-transparent">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[39px] top-4 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 flex items-center justify-center">
              {exp.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
            </div>

            <Card className="p-6 md:p-8" frequencyBadge={exp.isCurrent ? 'CURRENT TRANSMISSION' : undefined}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <Badge variant="radio" icon={<Radio className="w-3 h-3 animate-pulse" />}>
                        ACTIVE
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-base font-semibold text-amber-500 dark:text-amber-400">
                    {exp.organization}
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Description bullets */}
              <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-300 font-sans">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {exp.technologies.map((tech, tIdx) => (
                  <Badge key={tIdx} variant="neutral" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

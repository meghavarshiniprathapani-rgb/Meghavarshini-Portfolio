import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Cloud, Cpu } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/content';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Languages": <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    "Backend": <Server className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    "Frontend": <Layout className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    "Databases": <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    "DevOps/Cloud": <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    "Core": <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  };

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Categorized software engineering stack, frameworks, cloud services, and core CS fundamentals."
      channelCode="02 // SPECTRUM SKILLS"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card
              className="h-full p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              frequencyBadge={`BAND-${idx + 1}`}
            >
              <div>
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                    {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-amber-500" />}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Tags Grid with subtle hover animation */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 dark:hover:bg-amber-500/15 transition-all duration-200 hover:-translate-y-0.5 cursor-default shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 group-hover:bg-amber-500 group-hover:scale-125 transition-all" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

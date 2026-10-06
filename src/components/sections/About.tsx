import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Radio, CheckCircle2, Award, Users, RadioTower, Calendar } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { aboutData, profileData } from '../../data/content';

export const About: React.FC = () => {
  const statIcons = [
    <Award key="award" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <Calendar key="calendar" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <Users key="users" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <RadioTower key="radio-tower" className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  ];

  return (
    <Section
      id="about"
      title={aboutData.title}
      subtitle={aboutData.subtitle}
      channelCode="01 // TRANSMISSION ABOUT"
    >
      <div className="space-y-8">
        {/* Stat Row Component (4 columns) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutData.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="p-5 flex flex-col justify-between border-t-4 border-t-amber-500 h-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    {statIcons[idx % statIcons.length]}
                  </div>
                  <Badge variant="amber" size="sm" className="text-[10px]">
                    VERIFIED
                  </Badge>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mt-1">
                    {item.label}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Bio Card & Technical Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Summary Card */}
          <div className="lg:col-span-8 space-y-6">
            <Card frequencyBadge="FM 104.2 MHZ" className="p-6 sm:p-8">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                    {profileData.degree}
                  </h3>
                  <p className="text-sm font-mono text-amber-600 dark:text-amber-400 font-medium">
                    Graduating {profileData.graduationYear} • {profileData.institution}
                  </p>
                </div>
              </div>

              {/* Tightened Summary Paragraph */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-base">
                <p>{aboutData.summary}</p>
              </div>

              {/* Core Technical Capabilities */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2 font-bold">
                  <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Key Expertise & Workflow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aboutData.coreFocus.map((focus, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Broadcast Motif & Station Info */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-amber-500/10 via-transparent to-slate-100 dark:to-slate-900 border border-amber-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 shrink-0">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-slate-100">
                    KL Radio Host & Coordinator
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Coordinated 15+ live broadcasts for KL Radio, managing real-time audio feeds for 100+ concurrent listeners. Combined communication leadership with technical audio distribution.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ShieldCheck } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { certificationsData } from '../../data/content';

export const Certifications: React.FC = () => {
  const certifications = certificationsData.filter((item) => item.category === 'Certification');
  const achievements = certificationsData.filter((item) => item.category === 'Achievement');

  return (
    <Section
      id="certifications"
      title="Certifications & Achievements"
      subtitle="Credentials, technical leadership, and hands-on community work."
      channelCode="05 // FREQUENCY CREDENTIALS"
    >
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.08 }}>
                <Card className="h-full p-5" hoverable>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>
                    <Badge variant="amber" size="sm">CERTIFIED</Badge>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 leading-snug">{cert.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> Credential earned
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((achievement, idx) => (
              <motion.div key={achievement.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.1 }}>
                <Card className="h-full p-6" frequencyBadge={`ACHIEVEMENT // ${idx + 1}`}>
                  <div className="flex gap-4">
                    <div className="p-2.5 h-fit rounded-xl bg-amber-500/10 border border-amber-500/20"><Trophy className="w-5 h-5 text-amber-500" /></div>
                    <div>
                      <Badge variant="amber" size="sm">ACHIEVEMENT</Badge>
                      <h4 className="mt-3 font-heading text-lg font-bold text-slate-900 dark:text-slate-100">{achievement.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{achievement.issuer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

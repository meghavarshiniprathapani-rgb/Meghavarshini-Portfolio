import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { contactData } from '../../data/content';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      const mailSubject = formState.subject || `Portfolio message from ${formState.name}`;
      const mailBody = [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        '',
        formState.message,
      ].join('\n');
      window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      return;
    }

    setIsSending(true);
    setError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!response.ok) throw new Error('Form submission failed');
      setSubmittedName(formState.name);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
    } catch {
      setError('Unable to send your message right now. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Tune In & Connect"
      subtitle="Open for internships, projects, technical discussions, and collaborations."
      channelCode="06 // BROADCAST CONTACT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 md:p-8" frequencyBadge="DIRECT SIGNAL">
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 mb-2">
              Transmission Station
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
              {contactData.broadcastNote}
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-300 hover:border-amber-500/40 transition-all group"
              >
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Email</span>
                  <span className="text-sm font-medium">{contactData.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-300 hover:border-amber-500/40 transition-all group"
              >
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone</span>
                  <span className="text-sm font-medium">{contactData.phone}</span>
                </div>
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-300 hover:border-amber-500/40 transition-all group"
              >
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">LinkedIn</span>
                  <span className="text-sm font-medium">{contactData.linkedin}</span>
                </div>
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-300 hover:border-amber-500/40 transition-all group"
              >
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">GitHub</span>
                  <span className="text-sm font-medium">{contactData.github}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-300">
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Location</span>
                  <span className="text-sm font-medium">{contactData.location}</span>
                </div>
              </div>
            </div>

          </Card>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800/80">
              <MessageSquare className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                Send a Message
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                  Signal Transmitted Successfully!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Thank you for reaching out, {submittedName || 'friend'}. I'll tune in and respond shortly.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g., Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="e.g., alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="e.g., Internship Inquiry / Technical Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  variant="primary"
                  size="lg"
                  className="w-full mt-2"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {isSending ? 'Transmitting…' : 'Transmit Message'}
                </Button>
                {error && <p className="text-sm text-red-500" role="alert">{error}</p>}
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
};

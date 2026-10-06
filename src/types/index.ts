export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  degree: string;
  institution: string;
  graduationYear: number;
  location: string;
  bio: string[];
  broadcastFrequency: string;
  statusBadge: string;
  statusDetails: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  summary: string;
  highlights: { label: string; value: string; description: string }[];
  coreFocus: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; isPrimary?: boolean }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  category: 'Certification' | 'Achievement' | 'Honor';
}

export interface ContactDetails {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  broadcastNote: string;
}

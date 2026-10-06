import type { Profile, AboutSection, SkillCategory, Experience, Project, Certification, ContactDetails } from '../types';
import klRadioPreview from '../assets/projects/kl-radio-placeholder.svg';
import govConnectPreview from '../assets/projects/gov-connect-placeholder.svg';

export const profileData: Profile = {
  name: "Satya Meghavarshini Prathapani",
  shortName: "Satya M. Prathapani",
  role: "Full-Stack Developer",
  tagline: "Full-stack developer building real-time, production-ready web apps",
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Koneru Lakshmaiah University",
  graduationYear: 2027,
  location: "India",
  bio: [
    "I am a Computer Science undergraduate at Koneru Lakshmaiah University (B.Tech CSE '27) passionate about full-stack web engineering, real-time application design, and modern software architectures.",
    "Specializing in Java, Spring Boot, Node.js, and React to craft high-performance, resilient web solutions.",
    "Broadcasting clean code and seeking full-stack engineering internships and technical collaborations."
  ],
  broadcastFrequency: "FM 104.2 MHz",
  statusBadge: "LIVE ON AIR",
  statusDetails: "Available for Full-Stack Internships & Projects",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/meghavarshiniprathapani-rgb",
  linkedinUrl: "https://linkedin.com/in/satya-meghavarshini",
  email: "meghavarshiniprathapani@gmail.com"
};

export const aboutData: AboutSection = {
  title: "About Me",
  subtitle: "CS undergraduate (B.Tech '27) focused on full-stack engineering.",
  summary: "CS undergraduate graduating in 2027 with hands-on experience building and deploying full-stack applications with Java, Spring Boot, Node.js, React, REST APIs, PostgreSQL, and MySQL. Strong in DSA, OOP, and DBMS, with practical experience using Docker, Git, AWS, and CI/CD.",
  highlights: [
    { label: "CGPA", value: "8.85", description: "Academic Excellence" },
    { label: "Graduation", value: "2027", description: "B.Tech CSE" },
    { label: "KL Radio", value: "100+", description: "Concurrent Listeners" },
    { label: "Live Shows", value: "15+", description: "Coordinated" }
  ],
  coreFocus: [
    "Full-Stack Web Engineering (Java, Spring Boot, React)",
    "Database Management & Schema Optimization (PostgreSQL, MySQL)",
    "Containerization & Cloud Deployment (Docker, AWS, CI/CD)",
    "Core Computer Science (DSA, OOP, System Fundamentals)"
  ]
};

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "SQL" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Schema Design" }
    ]
  },
  {
    category: "DevOps/Cloud",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "AWS" },
      { name: "Render" },
      { name: "Vercel" }
    ]
  },
  {
    category: "Core",
    skills: [
      { name: "DSA" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Agile / Scrum" },
      { name: "Testing & Debugging" }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Technical Member",
    organization: "KL Radio",
    period: "Aug 2025 – Present",
    description: [
      "Supported the development, deployment, and maintenance of a real-time broadcasting platform serving 100+ concurrent listeners with ~2–3 seconds of audio latency.",
      "Diagnosed and troubleshot audio issues during live shows to keep delivery reliable.",
      "Trained junior interns in audio editing and broadcasting workflows."
    ],
    technologies: ["Real-Time Broadcasting", "Audio Troubleshooting", "Audio Editing", "Deployment", "Mentoring"],
    isCurrent: true
  },
  {
    id: "exp-2",
    role: "Software Developer Intern",
    organization: "AICTE EduSkills",
    period: "Apr 2025 – Jun 2025",
    description: [
      "Built Node.js backend services and REST APIs for a full-stack application.",
      "Tested and debugged APIs through systematic troubleshooting and endpoint validation.",
      "Integrated application components and validated API functionality."
    ],
    technologies: ["Node.js", "REST APIs", "Backend Services", "API Testing", "Debugging"],
    isCurrent: false
  }
];

export const projectsData: Project[] = [
  {
    id: "kl-radio",
    title: "KL Radio Real-Time Broadcasting Platform",
    tagline: "A production platform that keeps campus radio live, interactive, and in sync.",
    description: "KL Radio is a production real-time broadcasting platform for live programming, on-demand content, and listener interaction. Its React experience is paired with Python-based WebRTC audio transfer and PostgreSQL-backed REST services.",
    highlights: [
      "Streams real-time audio with Python-based WebRTC transfer for live broadcasts.",
      "Supports live shows, scripts, podcasts, student announcements, and real-time song suggestions through REST APIs and PostgreSQL-backed services.",
      "Uses authentication and role-based access control, and is deployed in production."
    ],
    technologies: ["React", "Python", "WebRTC", "PostgreSQL", "REST APIs", "RBAC"],
    image: klRadioPreview,
    githubUrl: "https://github.com/meghavarshiniprathapani-rgb/klradio-main",
    liveUrl: "https://www.klradio.in/",
    featured: true
  },
  {
    id: "gov-connect",
    title: "Gov-Connect",
    tagline: "One central interface for citizens to discover and use government services.",
    description: "Gov-Connect is a TypeScript full-stack government services platform that brings service discovery and citizen interactions into one clear, responsive experience.",
    highlights: [
      "Built a centralized citizen-facing interface for government services.",
      "Created a responsive, reusable UI architecture with client-side routing and API integration.",
      "Structured application data for service discovery and user interactions; deployed on Vercel."
    ],
    technologies: ["TypeScript", "React", "Vercel", "Git"],
    image: govConnectPreview,
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Certification"
  },
  {
    id: "cert-2",
    title: "Microsoft AZ-900 Azure Fundamentals",
    issuer: "Microsoft",
    category: "Certification"
  },
  {
    id: "cert-3",
    title: "Cambridge Linguaskills",
    issuer: "Cambridge English",
    category: "Certification"
  },
  {
    id: "cert-4",
    title: "Scrum Fundamentals",
    issuer: "SCRUMstudy",
    category: "Certification"
  },
  {
    id: "achievement-1",
    title: "Google Agentathon Participant",
    issuer: "Built AI agent applications during the Google Agentathon.",
    category: "Achievement"
  },
  {
    id: "achievement-2",
    title: "Radio Technical Leadership",
    issuer: "Senior Technical Member at KL Radio and Core Member of Radio Fiesta; coordinated technical operations across 15+ live shows.",
    category: "Achievement"
  }
];

export const contactData: ContactDetails = {
  email: "meghavarshiniprathapani@gmail.com",
  phone: "+91 9392524940",
  github: "https://github.com/meghavarshiniprathapani-rgb",
  linkedin: "https://linkedin.com/in/satya-meghavarshini",
  location: "India",
  availability: "Open for Full-Stack Development Internships (B.Tech CSE '27)",
  broadcastNote: "Have a project, internship opportunity, or idea to discuss? I’d be glad to hear from you."
};

export const PROFILE = {
  name: 'Satya Meghavarshini Prathapani',
  firstName: 'Satya',
  role: 'Computer Science Undergraduate',
  email: 'meghavarshiniprathapani@gmail.com',
  phone: '+91 9392524940',
  phoneHref: '+919392524940',
  github: 'https://github.com/meghavarshiniprathapani-rgb',
  linkedin: 'https://www.linkedin.com/in/prathapani-satya-meghavarshini/',
  resume: '/resume.pdf',
  summary: 'Computer Science undergraduate graduating in 2027 with hands-on experience in Frontend development, REST APIs, SQL databases, containerization, Kubernetes deployments, and CI/CD workflows. Experienced in developing and testing backend services using Java and Spring Boot, integrating application components, troubleshooting technical issues, and deploying applications using Docker and Kubernetes. Strong foundation in Data Structures, Algorithms, OOP, DBMS, Operating Systems, problem solving, and software engineering practices.',
} as const;

export const NAV = [
  ['about', 'About'], ['skills', 'Skills'], ['work', 'Work'], ['certifications', 'Certifications'], ['experience', 'Experience'], ['achievements', 'Achievements'], ['contact', 'Contact'],
] as const;

export const SKILL_GROUPS = [
  ['Languages', ['Java', 'Python', 'C', 'SQL']],
  ['Core', ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Problem Solving']],
  ['Backend', ['Spring Boot', 'REST APIs', 'Node.js', 'Express.js', 'FastAPI']],
  ['Frontend', ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS']],
  ['Databases', ['PostgreSQL', 'MySQL']],
  ['DevOps / Cloud', ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'Git']],
  ['Engineering', ['API Integration', 'Testing', 'Debugging', 'Troubleshooting', 'Requirements Analysis', 'Agile']],
] as const;

export const PROJECTS = [
  {
    id: 'radio',
    index: '01',
    title: 'KL Radio',
    kicker: 'Real-time broadcasting platform',
    live: 'https://klradio.in',
    github: 'https://github.com/meghavarshiniprathapani-rgb',
    image: 'https://ik.imagekit.io/z5fowzj2wr/Screenshot%202026-10-06%20185334.png',
    description: 'Engineered an event-driven real-time communication system using Node.js and Express.js, supporting concurrent connections and developed a Python-WebRTC audio transfer engine achieving approximately 2–3 seconds of streaming latency.',
    features: [
      'Streams real-time audio with Python-based WebRTC transfer for live campus broadcasts.',
      'Developed REST APIs and PostgreSQL-backed services for live shows, podcasts, announcements, and song suggestions.',
      'Implemented role-based access control and access validation in production supporting 30+ concurrent listeners.',
    ],
    tech: ['Node.js', 'Express.js', 'Python', 'WebRTC', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'gov-connect',
    index: '02',
    title: 'Gov-Connect',
    kicker: 'Citizen government services platform',
    live: 'https://gov-connect-bbbh.vercel.app/',
    github: 'https://github.com/meghavarshiniprathapani-rgb',
    image: 'https://ik.imagekit.io/z5fowzj2wr/gov-connect.jpeg',
    description: 'Gov-Connect is a TypeScript full-stack government services platform bringing service discovery and citizen interactions into one clear, responsive experience.',
    features: [
      'Built a centralized citizen-facing interface for government service discovery.',
      'Created a responsive, reusable UI architecture with client-side routing and API integration.',
      'Structured application data for service discovery and citizen interactions; deployed on Vercel.',
    ],
    tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    id: 'news',
    index: '03',
    title: 'News Aggregator',
    kicker: 'Full-stack news platform',
    live: 'https://news-aggregartor-qccb.vercel.app/',
    github: 'https://github.com/meghavarshiniprathapani-rgb/news-Aggregartor',
    image: 'https://ik.imagekit.io/z5fowzj2wr/news%20aggregator.jpeg?updatedAt=1791309011873',
    description: 'Developed a full-stack news aggregation platform with a Java Spring Boot backend, REST APIs, authentication, and frontend integration for managing and consuming news content.',
    features: [
      'Containerized backend and frontend services using Docker and Docker Compose.',
      'Created Kubernetes deployment manifests and configured Ingress-based routing.',
      'Implemented Spring Security, database-backed user management, and layered Spring architecture.',
      'Configured Git and Jenkins-based CI/CD workflows.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    id: 'medisite',
    index: '04',
    title: 'MediSite',
    kicker: 'Healthcare management platform',
    live: 'https://medi-site-3011.vercel.app/',
    github: 'https://github.com/meghavarshiniprathapani-rgb',
    image: 'https://ik.imagekit.io/z5fowzj2wr/image.png',
    description: 'A responsive healthcare platform for disease information search, doctor discovery, appointment requests, and patient profile management.',
    features: [
      'Built disease search and filtering with dynamic detail pages covering symptoms, causes, and treatments.',
      'Created doctor discovery and appointment-request interfaces with specialty, ratings, and availability.',
      'Implemented reusable responsive UI components, simulated authentication, and toast-notification feedback.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs'],
  },
  {
    id: 'pulseboard-ai',
    index: '05',
    title: 'PulseBoard AI',
    kicker: 'AI-powered business analytics workspace',
    github: 'https://github.com/meghavarshiniprathapani-rgb',
    image: '/projects/pulseboard-ai.jpg',
    description: 'An AI-powered business analytics workspace that processes sales datasets to surface KPI-driven insights across revenue, customers, products, and regions.',
    features: [
      'Built a React, FastAPI, PostgreSQL, and Pandas workflow for analyzing sales datasets and generating business KPIs.',
      'Implemented CSV validation, data cleaning, database persistence, and REST APIs for analytics processing.',
      'Created an AI Data Copilot that turns natural-language questions into SQL queries, charts, and business summaries.',
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Pandas', 'REST APIs', 'AI Data Copilot'],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    url: 'https://ik.imagekit.io/z5fowzj2wr/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf',
  },
  {
    title: 'AZ-900 Microsoft Azure Fundamentals',
    url: 'https://ik.imagekit.io/z5fowzj2wr/Azure-AZ900.pdf',
  },
  {
    title: 'Cambridge Linguaskills',
    url: 'https://ik.imagekit.io/z5fowzj2wr/Linguaskill.pdf',
  },
  {
    title: 'Salesforce AI Associate',
    url: 'https://ik.imagekit.io/z5fowzj2wr/ai%20salesforce.jpg',
  },
  {
    title: 'Scrum Fundamentals',
    url: '/certificates/scrum-fundamentals.pdf',
  },
] as const;

export const EXPERIENCE = [
  { date: 'Sep 2023 – Jun 2027 (Expected)', title: 'Bachelor of Technology in Computer Science Engineering', place: 'Koneru Lakshmaiah University · CGPA: 8.85', detail: 'Computer Science Engineering.' },
  { date: 'Apr 2025 – Jun 2025', title: 'Software Developer Intern', place: 'AICTE EduSkills', detail: 'Developed backend services and REST APIs using Java and Spring-based technologies, tested and debugged services, and implemented maintainable solutions.' },
  { date: 'Aug 2025 – Present', title: 'Technical Member', place: 'KL Radio', detail: 'Supported development, deployment, and maintenance of a real-time broadcasting platform; investigated live-broadcast issues and collaborated on technical improvements.' },
] as const;

export const ACHIEVEMENTS = [
  { value: '15+', label: 'Live shows', text: 'Senior Technical Member at KL Radio and Core Member of Radio Fiesta, coordinating technical operations across 15+ live shows.' },
  { value: '30+', label: 'Concurrent listeners', text: 'Architected and launched the KL Radio live broadcasting platform, supporting 30+ concurrent listeners.' },
  { value: '2–3s', label: 'Audio latency', text: 'KL Radio live broadcasting platform achieved approximately 2–3 seconds of audio latency.' },
  { value: 'AI', label: 'Google Agentathon', text: 'Participated in Google Agentathon, gaining hands-on experience building AI agent applications and solving technical problems.' },
] as const;

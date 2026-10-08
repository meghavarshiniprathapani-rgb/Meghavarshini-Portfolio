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
  summary: 'Computer Science undergraduate graduating in 2027 with hands-on experience in backend development, REST APIs, SQL databases, containerization, Kubernetes deployments, and CI/CD workflows. Experienced in developing and testing backend services using Java and Spring Boot, integrating application components, troubleshooting technical issues, and deploying applications using Docker and Kubernetes. Strong foundation in Data Structures, Algorithms, OOP, DBMS, Operating Systems, problem solving, and software engineering practices.',
} as const;

export const NAV = [
  ['about', 'About'], ['skills', 'Skills'], ['work', 'Work'], ['experience', 'Experience'], ['achievements', 'Achievements'], ['contact', 'Contact'],
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
    id: 'news', index: '01', title: 'News Aggregator', kicker: 'Full-stack news platform', github: 'https://github.com/meghavarshiniprathapani-rgb/news-Aggregartor',
    description: 'Developed a full-stack news aggregation platform with a Java Spring Boot backend, REST APIs, authentication, and frontend integration for managing and consuming news content.',
    features: ['Containerized backend and frontend services using Docker and Docker Compose.', 'Created Kubernetes deployment manifests and configured Ingress-based routing.', 'Implemented Spring Security, database-backed user management, and layered Spring architecture.', 'Configured Git and Jenkins-based CI/CD workflows.'],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    id: 'radio', index: '02', title: 'KL Radio', kicker: 'Real-time broadcasting platform', live: 'https://klradio.in',
    description: 'Engineered an event-driven real-time communication system using Node.js and Express.js, supporting concurrent connections and developed a Python-WebRTC audio transfer engine achieving approximately 2–3 seconds of streaming latency.',
    features: ['Developed REST APIs and PostgreSQL-backed services for live shows, scripts, podcasts, and announcements.', 'Built real-time song suggestion workflows.', 'Implemented role-based access control and access validation.', 'Worked with broadcasting stakeholders on operational workflows and reliability.'],
    tech: ['Node.js', 'Express.js', 'Python', 'WebRTC', 'PostgreSQL', 'REST APIs'],
  },
] as const;

export const CERTIFICATIONS = ['AWS Certified Cloud Practitioner', 'AZ-900 Microsoft Azure Fundamentals', 'Cambridge Linguaskills'] as const;

export const EXPERIENCE = [
  { date: 'Sep 2023 – Jun 2027 (Expected)', title: 'Bachelor of Technology in Computer Science Engineering', place: 'Koneru Lakshmaiah University · CGPA: 8.85', detail: 'Computer Science Engineering.' },
  { date: 'Apr 2025 – Jun 2025', title: 'Software Developer Intern', place: 'AICTE EduSkills', detail: 'Developed backend services and REST APIs using Java and Spring-based technologies, tested and debugged services, and implemented maintainable solutions.' },
  { date: 'Aug 2025 – Present', title: 'Technical Member', place: 'KL Radio', detail: 'Supported development, deployment, and maintenance of a real-time broadcasting platform; investigated live-broadcast issues and collaborated on technical improvements.' },
] as const;

export const ACHIEVEMENTS = [
  { value: '15+', label: 'Live shows', text: 'Senior Technical Member at KL Radio and Core Member of Radio Fiesta, coordinating technical operations across 15+ live shows.' },
  { value: '100+', label: 'Concurrent listeners', text: 'Architected and launched the KL Radio live broadcasting platform, supporting 100+ concurrent listeners.' },
  { value: '2–3s', label: 'Audio latency', text: 'KL Radio live broadcasting platform achieved approximately 2–3 seconds of audio latency.' },
  { value: 'AI', label: 'Google Agentathon', text: 'Participated in Google Agentathon, gaining hands-on experience building AI agent applications and solving technical problems.' },
] as const;

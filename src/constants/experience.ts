import avasoftLogo from '../assets/Avasoft-Logo.svg';
import focusEdumaticsLogo from '../assets/Focus-Edumatics-Logo.png';
import zebLogo from '../assets/ZEB-Logo.svg';

export interface ExperienceEntry {
  readonly role: string;
  readonly company: string;
  readonly dates: string;
  readonly duration: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly logo: string;
  readonly logoTheme: 'light' | 'dark';
}

export const experienceHeading = {
  eyebrow: 'EXPERIENCE',
  title: 'A career built one useful thing at a time.',
  description:
    'A timeline of the teams, responsibilities, and engineering work that brought me here.',
} as const;

export const experience: readonly ExperienceEntry[] = [
  {
    role: 'Analyst',
    company: 'zeb',
    dates: 'May 2026 – Aug 2026',
    duration: '4 months',
    location: 'Chennai, India · Hybrid',
    summary: 'AI agent experiences, workflow automation, and enterprise business applications.',
    highlights: [
      'Built React and TypeScript interfaces for AI-assisted chat, configurable workflows, and dynamic forms.',
      'Designed human-in-the-loop experiences for reviewing AI actions, providing input, and interrupting workflows.',
      'Connected chatbot and ticket-management flows with backend APIs and Salesforce services.',
      'Worked across requirements, interaction design, reusable components, change requests, and stakeholder feedback.',
    ],
    technologies: ['React', 'TypeScript', 'AI / LLM', 'Salesforce', 'AWS', 'PostgreSQL'],
    logo: zebLogo,
    logoTheme: 'dark',
  },
  {
    role: 'Software Engineer',
    company: 'AVASOFT',
    dates: 'Mar 2025 – Apr 2026',
    duration: '1 year 2 months',
    location: 'Chennai, India · Hybrid',
    summary:
      'Full-stack product development across governance, real-time communication, and payments.',
    highlights: [
      'Developed frontend applications with React, TypeScript, JavaScript, HTML, and CSS, integrating reusable components with APIs.',
      'Built backend services with Go, Node.js / TypeScript, and Java across multiple product needs.',
      'Contributed to security and governance features, application workflows, database design, and Azure environments.',
      'Worked on live video and chat features, WebSocket communication, Stripe payments and webhooks, and Docker-based workflows.',
      'Participated in the full development cycle, from requirements and system design through integration, release, and support.',
    ],
    technologies: ['Go', 'Node.js', 'Java', 'React', 'Azure', 'WebSockets', 'Stripe', 'Docker'],
    logo: avasoftLogo,
    logoTheme: 'light',
  },
  {
    role: 'Trainee Engineer',
    company: 'AVASOFT',
    dates: 'Sep 2024 – Mar 2025',
    duration: '7 months',
    location: 'Chennai, India',
    summary: 'Full-stack engineering foundations with hands-on application and database work.',
    highlights: [
      'Built practical knowledge across Go, Node.js, React, TypeScript, PostgreSQL, SQL Server, Docker, and cloud technologies.',
      'Applied relational database concepts including schema design, data modeling, queries, and application integration.',
    ],
    technologies: ['Go', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'SQL Server'],
    logo: avasoftLogo,
    logoTheme: 'light',
  },
  {
    role: 'Mentor – Math',
    company: 'Focus Edumatics Pvt Ltd',
    dates: 'Apr 2021 – Aug 2024',
    duration: '3 years 5 months',
    location: 'Coimbatore, India · Remote',
    summary: 'Mathematics instruction and team mentoring for K–12 students in the United States.',
    highlights: [
      'Taught mathematics and supported student engagement, instructional quality, and learning outcomes.',
      'Coached teammates on subject standards, team performance, and KPI goals; supported onboarding and training.',
      'Stepped into team-lead responsibilities, coordinating operations and communication across the team.',
    ],
    technologies: ['Teaching', 'Mentoring', 'Team Leadership', 'Coaching'],
    logo: focusEdumaticsLogo,
    logoTheme: 'light',
  },
];

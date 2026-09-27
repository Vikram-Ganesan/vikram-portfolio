export const projectsHeading = {
  eyebrow: 'SELECTED WORK',
  title: 'Problems worth solving.',
  description:
    "A few areas where I've worked across the stack, translating real product needs into useful software.",
} as const;

export const portfolioProjects = [
  {
    title: 'AI agent workflows',
    description:
      'Conversational interfaces and configurable business workflows, with clear points for people to review and guide AI actions.',
    technologies: ['React', 'TypeScript', 'AI / LLM', 'Salesforce'],
  },
  {
    title: 'Security & governance',
    description:
      'Application features shaped around secure access, governance workflows, backend integrations, and cloud services.',
    technologies: ['Go', 'Java', 'Azure', 'PostgreSQL'],
  },
  {
    title: 'Real-time communication',
    description:
      'Interactive gaming experiences combining live video, chat, and event-driven application behavior.',
    technologies: ['WebSockets', 'Live video', 'Node.js'],
  },
  {
    title: 'Payment integrations',
    description:
      'Payment flows and webhook handling that connect secure transactions with application and backend workflows.',
    technologies: ['Stripe', 'REST APIs', 'Webhooks'],
  },
];

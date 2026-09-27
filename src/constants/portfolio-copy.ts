export const THEME_STORAGE_KEY = 'portfolio-theme';

export const portfolioContent = {
  profile: {
    name: 'Vikram G',
    role: 'Full-stack software engineer',
    roleLabel: 'SOFTWARE ENGINEER',
    location: 'Chennai, India',
    availability: 'Open to opportunities',
    mobility: 'Chennai · Open to Dubai / UAE',
    email: 'mailto:gvikram989@gmail.com',
    homeLabel: 'Vikram G, home',
    contactLabel: "Let's talk",
  },
  navigation: [
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#about' },
  ],
  navigationLabels: {
    open: 'Open navigation menu',
    close: 'Close navigation menu',
  },
  themeToggle: {
    lightLabel: 'Switch to light theme',
    darkLabel: 'Switch to dark theme',
  },
  hero: {
    titleLead: 'I build software that makes',
    titleAccent: 'complex things',
    titleEnd: 'feel simple.',
    description:
      "I'm Vikram, a full-stack engineer working across product interfaces, backend systems, and AI-powered workflows, from the first requirement to deployment.",
    primaryAction: 'Explore my work',
    secondaryAction: 'Get in touch',
    focus: {
      ariaLabel: 'Engineering focus',
      label: 'A little about my work',
      index: '01 / 04',
      statementLead: 'Thoughtful interfaces.',
      statementAccent: 'Dependable',
      statementEnd: 'systems.',
      description:
        'I enjoy connecting the pieces: React and TypeScript on the frontend, Go and Node.js on the backend, with cloud services and real-time systems in between.',
      tags: ['Product-minded', 'Full-stack', 'Always learning'],
      currentLabel: 'CURRENTLY EXPLORING',
      currentTopic: 'AI workflows',
    },
  },
  contact: {
    eyebrow: 'HAVE A GOOD PROBLEM?',
    title: "Let's make something useful.",
    description: "I'm open to software engineering opportunities and thoughtful conversations.",
    action: 'Say hello',
  },
  footerNote: 'Built with care.',
  socialLinks: [
    { icon: 'email', label: 'Email Vikram', href: 'mailto:gvikram989@gmail.com', external: false },
    {
      icon: 'github',
      label: 'Vikram on GitHub',
      href: 'https://github.com/Vikram-Ganesan',
      external: true,
    },
    {
      icon: 'linkedin',
      label: 'Vikram on LinkedIn',
      href: 'https://www.linkedin.com/in/vikramganesan/',
      external: true,
    },
  ],
} as const;

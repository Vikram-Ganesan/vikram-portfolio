export const contactSection = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's work together.",
  description:
    'For business enquiries, job opportunities, collaborations, or any other project, drop me a note.',
  nameLabel: 'Name',
  emailLabel: 'Email',
  subjectLabel: 'Subject',
  messageLabel: 'Message',
  action: 'Send message',
  namePlaceholder: 'Tessa Young',
  emailPlaceholder: 'tessayoung@company.com',
  subjectPlaceholder: 'Business enquiry or opportunity',
  messagePlaceholder:
    'Share a business enquiry, job opportunity, collaboration, or project idea...',
  validation: {
    nameRequired: 'Name is required.',
    emailRequired: 'Email is required.',
    emailInvalid: 'Enter a valid email address.',
    messageRequired: 'Message is required.',
    summary: 'Please correct the highlighted fields.',
    sending: 'Sending your message...',
    sent: 'Your message has been sent. Thank you for reaching out.',
    sendFailed: 'Your message could not be sent. Please try again or email me directly.',
    notConfigured: 'The contact form is not configured yet. Please email me directly.',
  },
} as const;

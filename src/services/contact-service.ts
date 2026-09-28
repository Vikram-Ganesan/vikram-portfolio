import { sendContactEmail } from '../api-client/email-client';
import { config } from '../config/app-config';
import type { ContactInquiry } from '../types/contact-inquiry-types';

export class ContactEmailNotConfiguredError extends Error {
  constructor() {
    super('Contact email is not configured.');
    this.name = 'ContactEmailNotConfiguredError';
  }
}

export async function submitContactInquiry(inquiry: ContactInquiry): Promise<void> {
  if (!config.emailjs.isConfigured) {
    throw new ContactEmailNotConfiguredError();
  }

  await sendContactEmail(config.emailjs, inquiry);
}

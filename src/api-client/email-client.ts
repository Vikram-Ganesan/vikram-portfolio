import emailjs from '@emailjs/browser';
import type { EmailJsConfig } from '../config/app-config';
import type { ContactInquiry } from '../types/contact-inquiry-types';

export async function sendContactEmail(
  emailConfig: EmailJsConfig,
  inquiry: ContactInquiry,
): Promise<void> {
  const title = inquiry.subject || `Portfolio inquiry from ${inquiry.name}`;
  const templateParams = {
    name: inquiry.name,
    email: inquiry.email,
    title,
    message: inquiry.message,
    from_name: inquiry.name,
    reply_to: inquiry.email,
    subject: title,
  };

  await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, {
    publicKey: emailConfig.publicKey,
  });
}

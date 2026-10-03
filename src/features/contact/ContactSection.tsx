import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { SOCIAL_LINKS } from '../../constants/social-links-constants';
import { Button } from '../../components/reusable/base/button';
import { NetworkCanvas } from '../../components/reusable/features/canvas';
import { contactSection } from '../../constants/sections/contact-section';
import type { ContactInquiry } from '../../types/contact-inquiry-types';
import {
  ContactEmailNotConfiguredError,
  submitContactInquiry,
} from '../../services/contact-service';

const socialIcons = {
  email: EmailOutlinedIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

interface ContactFieldErrors {
  readonly name?: string;
  readonly email?: string;
  readonly message?: string;
}

export function ContactSection() {
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [feedback, setFeedback] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const nextErrors: ContactFieldErrors = {
      ...(!name ? { name: contactSection.validation.nameRequired } : {}),
      ...(!email
        ? { email: contactSection.validation.emailRequired }
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? { email: contactSection.validation.emailInvalid }
          : {}),
      ...(!message ? { message: contactSection.validation.messageRequired } : {}),
    };

    setErrors(nextErrors);

    const firstInvalidField = (['name', 'email', 'message'] as const).find(
      (field) => nextErrors[field],
    );

    if (firstInvalidField) {
      setFeedback(contactSection.validation.summary);
      form
        .querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstInvalidField}"]`)
        ?.focus();
      return;
    }

    const inquiry: ContactInquiry = { name, email, subject, message };
    setIsSending(true);
    setFeedback(contactSection.validation.sending);

    try {
      await submitContactInquiry(inquiry);
      form.reset();
      setErrors({});
      setFeedback(contactSection.validation.sent);
    } catch (error) {
      setFeedback(
        error instanceof ContactEmailNotConfiguredError
          ? contactSection.validation.notConfigured
          : contactSection.validation.sendFailed,
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <NetworkCanvas />
      <div className="page-width section-space relative z-10">
        <div className="grid gap-10 overflow-hidden rounded-lg border border-border-default bg-gradient-to-br from-surface-primary via-surface-primary to-surface-secondary p-6 shadow-xl sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-12">
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-[0.12em] text-accent">
              {contactSection.eyebrow}
            </p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight text-content-primary sm:text-5xl">
              {contactSection.title}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-content-secondary sm:text-base">
              {contactSection.description}
            </p>
            <ul className="mt-7 space-y-3">
              {SOCIAL_LINKS.map((link) => {
                const SocialIcon = socialIcons[link.id];

                return (
                  <li key={link.id}>
                    <a
                      className="group flex min-h-11 items-center gap-3 text-sm text-content-secondary transition-colors hover:text-content-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      aria-label={link.label}
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-control bg-surface-secondary text-content-secondary transition-colors group-hover:text-content-primary">
                        <SocialIcon fontSize="small" aria-hidden="true" />
                      </span>
                      <span className="break-all">{link.displayText}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <form className="grid content-start gap-4" noValidate onSubmit={handleSubmit}>
            <div className="grid items-start gap-4 sm:grid-cols-2">
              <label className="grid content-start gap-2 text-xs font-medium text-content-secondary">
                <span className="flex items-center gap-1">
                  {contactSection.nameLabel} <span className="text-accent">*</span>
                </span>
                <input
                  className={`min-h-12 w-full rounded-control border bg-surface-primary px-4 text-sm text-content-primary placeholder:text-content-primary/70 focus:outline-none focus:ring-2 focus:ring-brand-600/25 ${errors.name ? 'border-danger-700 focus:border-danger-700' : 'border-border-strong focus:border-brand-600'}`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={contactSection.namePlaceholder}
                  maxLength={100}
                  disabled={isSending}
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  onChange={() => {
                    setErrors((current) => ({ ...current, name: undefined }));
                    setFeedback('');
                  }}
                />
                {errors.name && (
                  <span className="text-xs text-danger-700" id="contact-name-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="grid content-start gap-2 text-xs font-medium text-content-secondary">
                <span className="flex items-center gap-1">
                  {contactSection.emailLabel} <span className="text-accent">*</span>
                </span>
                <input
                  className={`min-h-12 w-full rounded-control border bg-surface-primary px-4 text-sm text-content-primary placeholder:text-content-primary/70 focus:outline-none focus:ring-2 focus:ring-brand-600/25 ${errors.email ? 'border-danger-700 focus:border-danger-700' : 'border-border-strong focus:border-brand-600'}`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={contactSection.emailPlaceholder}
                  maxLength={254}
                  disabled={isSending}
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  onChange={() => {
                    setErrors((current) => ({ ...current, email: undefined }));
                    setFeedback('');
                  }}
                />
                {errors.email && (
                  <span className="text-xs text-danger-700" id="contact-email-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </label>
            </div>

            <label className="grid content-start gap-2 text-xs font-medium text-content-secondary">
              {contactSection.subjectLabel}
              <input
                className="min-h-12 w-full rounded-control border border-border-strong bg-surface-primary px-4 text-sm text-content-primary placeholder:text-content-primary/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/25"
                name="subject"
                type="text"
                placeholder={contactSection.subjectPlaceholder}
                maxLength={160}
                disabled={isSending}
              />
            </label>

            <label className="grid content-start gap-2 text-xs font-medium text-content-secondary">
              <span className="flex items-center gap-1">
                {contactSection.messageLabel} <span className="text-accent">*</span>
              </span>
              <textarea
                className={`min-h-28 w-full resize-y rounded-control border bg-surface-primary px-4 py-3 text-sm text-content-primary placeholder:text-content-primary/70 focus:outline-none focus:ring-2 focus:ring-brand-600/25 ${errors.message ? 'border-danger-700 focus:border-danger-700' : 'border-border-strong focus:border-brand-600'}`}
                name="message"
                placeholder={contactSection.messagePlaceholder}
                maxLength={5000}
                disabled={isSending}
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                onChange={() => {
                  setErrors((current) => ({ ...current, message: undefined }));
                  setFeedback('');
                }}
              />
              {errors.message && (
                <span className="text-xs text-danger-700" id="contact-message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </label>

            <Button
              className="mt-1 w-full justify-center"
              type="submit"
              variant="primary"
              loading={isSending}
              disabled={isSending}
              rightIcon={<ArrowForwardIcon fontSize="small" aria-hidden="true" />}
            >
              {contactSection.action}
            </Button>
            <p className="min-h-5 text-xs text-content-secondary" role="status" aria-live="polite">
              {feedback}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

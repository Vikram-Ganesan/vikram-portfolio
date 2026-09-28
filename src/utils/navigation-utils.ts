import type { MouseEvent } from 'react';

export function scrollToSection(event: MouseEvent<HTMLAnchorElement>): void {
  const { currentTarget, button, metaKey, ctrlKey, shiftKey, altKey } = event;
  const href = currentTarget.getAttribute('href');

  if (!href?.startsWith('#') || button !== 0 || metaKey || ctrlKey || shiftKey || altKey) {
    return;
  }

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth', block: 'start' });
}

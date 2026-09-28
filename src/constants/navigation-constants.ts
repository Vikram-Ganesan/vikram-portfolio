import type { NavigationItem } from '../types/navigation-types';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },

  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const NAVBAR_LINKS = {
  home: NAVIGATION_ITEMS[0].href,
  contact: NAVIGATION_ITEMS[NAVIGATION_ITEMS.length - 1].href,
} as const;

export const NAVBAR_COPY = {
  contactAction: 'Hire Me',
  openMenu: 'Open navigation menu',
  closeMenu: 'Close navigation menu',
} as const;

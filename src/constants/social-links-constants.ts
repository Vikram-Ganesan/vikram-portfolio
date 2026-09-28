import { PROFILE_CONFIG } from './profile-constants';

export const SOCIAL_LINKS = [
  {
    id: 'email',
    label: `Email ${PROFILE_CONFIG.fullName}`,
    displayText: PROFILE_CONFIG.email,
    href: `mailto:${PROFILE_CONFIG.email}`,
    external: false,
  },
  {
    id: 'github',
    label: `${PROFILE_CONFIG.fullName} on GitHub`,
    displayText: PROFILE_CONFIG.githubUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    href: PROFILE_CONFIG.githubUrl,
    external: true,
  },
  {
    id: 'linkedin',
    label: `${PROFILE_CONFIG.fullName} on LinkedIn`,
    displayText: PROFILE_CONFIG.linkedInUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    href: PROFILE_CONFIG.linkedInUrl,
    external: true,
  },
] as const;

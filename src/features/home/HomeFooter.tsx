import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PROFILE_CONFIG } from '../../constants/profile-constants';
import { SOCIAL_LINKS } from '../../constants/social-links-constants';
import { footerNote } from '../../constants/sections/footer-section';
import { DateFormat, formatDate } from '../../utils/time-stamp';

const socialIcons = {
  email: EmailOutlinedIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function HomeFooter() {
  return (
    <footer className="page-width flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted">
        © {formatDate(DateFormat.YYYY, null)} {PROFILE_CONFIG.fullName}. {footerNote}
      </p>
      <div className="flex items-center gap-2">
        {SOCIAL_LINKS.map((link) => {
          const SocialIcon = socialIcons[link.id];

          return (
            <a
              className="social-link"
              href={link.href}
              key={link.id}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              aria-label={link.label}
            >
              <SocialIcon fontSize="small" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

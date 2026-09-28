import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from 'react';
import {
  NAVBAR_COPY,
  NAVBAR_LINKS,
  NAVIGATION_ITEMS,
} from '../../../constants/navigation-constants';
import { PROFILE_CONFIG } from '../../../constants/profile-constants';
import { THEME_TOGGLE_LABELS } from '../../../constants/theme-constants';
import { MOBILE_NAVIGATION_ID } from '../../../constants/component-constants';
import { useTheme } from '../../../hooks/use-theme';
import { cn } from '../../../lib/cn';
import { scrollToSection } from '../../../utils/navigation-utils';
import { Avatar } from '../../reusable/base/avatar';
import { ButtonLink } from '../../reusable/base/button';
import type { NavBarProps } from './nav-bar-types';

export function NavBar({ className }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(NAVIGATION_ITEMS[0].id);
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === 'dark' ? LightModeOutlinedIcon : DarkModeOutlinedIcon;
  const themeToggleLabel = theme === 'dark' ? THEME_TOGGLE_LABELS.light : THEME_TOGGLE_LABELS.dark;

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (section): section is HTMLElement => section !== null,
    );
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border-default bg-surface-primary/95 backdrop-blur',
        className,
      )}
    >
      <div className="page-width flex min-h-20 items-center justify-between gap-4">
        <a
          className="flex min-w-0 items-center gap-3 rounded-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
          href={NAVBAR_LINKS.home}
          aria-label={`${PROFILE_CONFIG.fullName} home`}
          onClick={scrollToSection}
        >
          <Avatar
            fullName={PROFILE_CONFIG.fullName}
            ariaLabel={`${PROFILE_CONFIG.fullName} initials`}
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-semibold text-content-primary sm:text-base">
              {PROFILE_CONFIG.fullName}
            </span>
            <span className="truncate text-xs text-content-secondary sm:text-sm">
              {PROFILE_CONFIG.role}
            </span>
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-5 xl:gap-7">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className={cn(
                    'rounded-control px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 motion-reduce:transition-none',
                    activeSection === item.id
                      ? 'text-brand-600'
                      : 'text-content-secondary hover:text-content-primary',
                  )}
                  href={item.href}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  onClick={scrollToSection}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden lg:block">
            <ButtonLink
              className="hire-shimmer motion-reduce:animate-none"
              href={NAVBAR_LINKS.contact}
              size="small"
            >
              {NAVBAR_COPY.contactAction}
            </ButtonLink>
          </div>
          <button
            className="inline-grid size-11 place-items-center rounded-control border border-border-default text-content-primary transition-colors hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
            type="button"
            aria-label={themeToggleLabel}
            title={themeToggleLabel}
            onClick={toggleTheme}
          >
            <ThemeIcon fontSize="small" aria-hidden="true" />
          </button>
          <button
            className="inline-grid size-11 place-items-center rounded-control border border-border-default text-content-primary transition-colors hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none lg:hidden"
            type="button"
            aria-label={isMenuOpen ? NAVBAR_COPY.closeMenu : NAVBAR_COPY.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_NAVIGATION_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <CloseRoundedIcon aria-hidden="true" />
            ) : (
              <MenuRoundedIcon aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-border-default bg-surface-primary py-3 lg:hidden"
          id={MOBILE_NAVIGATION_ID}
          aria-label="Mobile navigation"
        >
          <ul className="page-width flex flex-col gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className={cn(
                    'flex min-h-11 items-center rounded-control px-3 text-sm font-medium transition-colors hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 motion-reduce:transition-none',
                    activeSection === item.id
                      ? 'bg-surface-secondary text-brand-600'
                      : 'text-content-secondary hover:text-content-primary',
                  )}
                  href={item.href}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  onClick={(event) => {
                    scrollToSection(event);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                className="hire-shimmer w-full motion-reduce:animate-none"
                href={NAVBAR_LINKS.contact}
                onClick={() => setIsMenuOpen(false)}
              >
                {NAVBAR_COPY.contactAction}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

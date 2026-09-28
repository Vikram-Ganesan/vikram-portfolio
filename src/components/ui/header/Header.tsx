import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import profilePhoto from '../assets/Vikram-G.png';
import { NAVBAR_COPY, NAVBAR_LINKS, NAVIGATION_ITEMS } from '../../../config/navigation-config';
import { PROFILE_CONFIG } from '../../../config/profile-config';
import { THEME_TOGGLE_LABELS } from '../../../config/theme-config';
import { MOBILE_NAVIGATION_ID } from '../../../constants/component-constants';
import { useTheme } from '../../../hooks/use-theme';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === 'dark' ? LightModeOutlinedIcon : DarkModeOutlinedIcon;

  return (
    <header className="header-shell sticky top-0 z-20 border-b border-line bg-[var(--canvas)]/90 backdrop-blur-md">
      <div className="page-width flex min-h-[72px] items-center justify-between gap-6">
        <a
          className="flex items-center gap-3"
          href={NAVBAR_LINKS.home}
          aria-label={`${PROFILE_CONFIG.fullName} home`}
        >
          <img className="brand-photo" src={profilePhoto} alt="" aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold">{PROFILE_CONFIG.fullName}</span>
            <span className="mono mt-1 text-[10px] text-muted">
              {PROFILE_CONFIG.role.toUpperCase()}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="header-contact hidden sm:inline-flex" href={NAVBAR_LINKS.contact}>
            {NAVBAR_COPY.contactAction} <span aria-hidden="true">↗</span>
          </a>
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? THEME_TOGGLE_LABELS.light : THEME_TOGGLE_LABELS.dark}
            title={theme === 'dark' ? THEME_TOGGLE_LABELS.light : THEME_TOGGLE_LABELS.dark}
          >
            <ThemeIcon fontSize="small" aria-hidden="true" />
          </button>
          <button
            className="icon-button mobile-menu-button lg:hidden"
            type="button"
            aria-label={isMenuOpen ? NAVBAR_COPY.closeMenu : NAVBAR_COPY.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_NAVIGATION_ID}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <CloseRoundedIcon fontSize="small" aria-hidden="true" />
            ) : (
              <MenuRoundedIcon fontSize="small" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id={MOBILE_NAVIGATION_ID}
          className="page-width flex flex-col gap-1 border-t border-line py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <a
              className="mobile-nav-link"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

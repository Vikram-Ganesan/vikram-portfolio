import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { portfolioContent } from '../constants/portfolio-copy';
import { useTheme } from '../hooks/use-theme';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === 'dark' ? LightModeOutlinedIcon : DarkModeOutlinedIcon;

  return (
    <header className="header-shell sticky top-0 z-20 border-b border-line bg-[var(--canvas)]/90 backdrop-blur-md">
      <div className="page-width flex min-h-[72px] items-center justify-between gap-6">
        <a
          className="flex items-center gap-3"
          href="#home"
          aria-label={portfolioContent.profile.homeLabel}
        >
          <span className="brand-mark font-display">VG</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold">
              {portfolioContent.profile.name}
            </span>
            <span className="mono mt-1 text-[10px] text-muted">
              {portfolioContent.profile.roleLabel}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {portfolioContent.navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="header-contact hidden sm:inline-flex" href="#contact">
            {portfolioContent.profile.contactLabel} <span aria-hidden="true">↗</span>
          </a>
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? portfolioContent.themeToggle.lightLabel
                : portfolioContent.themeToggle.darkLabel
            }
            title={
              theme === 'dark'
                ? portfolioContent.themeToggle.lightLabel
                : portfolioContent.themeToggle.darkLabel
            }
          >
            <ThemeIcon fontSize="small" aria-hidden="true" />
          </button>
          <button
            className="icon-button md:hidden"
            type="button"
            aria-label={
              isMenuOpen
                ? portfolioContent.navigationLabels.close
                : portfolioContent.navigationLabels.open
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
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
          id="mobile-navigation"
          className="page-width flex flex-col gap-1 border-t border-line py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {portfolioContent.navigation.map((item) => (
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

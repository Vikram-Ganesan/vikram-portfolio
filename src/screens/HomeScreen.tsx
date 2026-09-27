import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '../components/Button';
import { ExperienceSection } from '../components/ExperienceSection';
import { Header } from '../components/Header';
import { SectionHeading } from '../components/SectionHeading';
import { aboutSection } from '../constants/about-section';
import {
  expertiseHeading,
  skillGroups,
  technologies,
  technologyLabel,
} from '../constants/language-and-skills';
import { portfolioContent } from '../constants/portfolio-copy';
import { portfolioProjects, projectsHeading } from '../constants/projects';

const socialIcons = {
  email: EmailOutlinedIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function HomeScreen() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <section
          id="home"
          className="hero-section page-width grid items-center gap-14 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:pb-32"
        >
          <div className="hero-copy">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="status-dot" aria-hidden="true" />
              {portfolioContent.profile.role} <span className="eyebrow-divider">/</span>{' '}
              {portfolioContent.profile.location}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {portfolioContent.hero.titleLead}{' '}
              <span className="text-accent">{portfolioContent.hero.titleAccent}</span>{' '}
              {portfolioContent.hero.titleEnd}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {portfolioContent.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href="#work"
                variant="primary"
                rightIcon={<ArrowDownwardIcon fontSize="small" />}
              >
                {portfolioContent.hero.primaryAction}
              </Button>
              <Button href="#contact" variant="secondary">
                {portfolioContent.hero.secondaryAction}
              </Button>
            </div>
            <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="availability-dot" /> {portfolioContent.profile.availability}
              </span>
              <span>{portfolioContent.profile.mobility}</span>
            </div>
          </div>

          <aside className="hero-note" aria-label={portfolioContent.hero.focus.ariaLabel}>
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="eyebrow">{portfolioContent.hero.focus.label}</span>
              <span className="mono text-xs text-muted">{portfolioContent.hero.focus.index}</span>
            </div>
            <p className="mt-7 font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
              {portfolioContent.hero.focus.statementLead}{' '}
              <span className="text-accent">{portfolioContent.hero.focus.statementAccent}</span>{' '}
              {portfolioContent.hero.focus.statementEnd}
            </p>
            <p className="mt-5 leading-7 text-muted">{portfolioContent.hero.focus.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {portfolioContent.hero.focus.tags.map((label) => (
                <span className="small-tag" key={label}>
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-line pt-4">
              <span className="mono text-xs text-muted">
                {portfolioContent.hero.focus.currentLabel}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium">
                {portfolioContent.hero.focus.currentTopic}{' '}
                <ArrowOutwardIcon className="text-accent" fontSize="small" aria-hidden="true" />
              </span>
            </div>
          </aside>
        </section>

        <section className="tech-strip border-y border-line" aria-label={technologyLabel}>
          <div className="page-width flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:gap-8">
            <span className="eyebrow shrink-0">{technologyLabel}</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-display text-sm font-medium text-muted sm:gap-x-7">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <ExperienceSection />

        <section id="work" className="page-width section-space">
          <SectionHeading content={projectsHeading} />
          <div className="project-grid mt-12 grid gap-4 md:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <article className="project-item" key={project.title}>
                <div className="flex items-start justify-between gap-4">
                  <span className="mono text-xs text-muted">0{index + 1}</span>
                  <ArrowOutwardIcon
                    className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                    fontSize="small"
                  />
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span className="small-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="expertise-band">
          <div className="page-width section-space">
            <SectionHeading content={expertiseHeading} />
            <div className="skill-grid mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{group.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="page-width section-space grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"
        >
          <div>
            <p className="eyebrow">{aboutSection.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {aboutSection.title}
            </h2>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
            {aboutSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-band">
          <div className="page-width flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{portfolioContent.contact.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {portfolioContent.contact.title}
              </h2>
              <p className="mt-4 text-muted">{portfolioContent.contact.description}</p>
            </div>
            <Button
              href={portfolioContent.profile.email}
              variant="primary"
              rightIcon={<ArrowOutwardIcon fontSize="small" />}
            >
              {portfolioContent.contact.action}
            </Button>
          </div>
        </section>
      </main>

      <footer className="page-width flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {portfolioContent.profile.name}.{' '}
          {portfolioContent.footerNote}
        </p>
        <div className="flex items-center gap-2">
          {portfolioContent.socialLinks.map((link) => {
            const SocialIcon = socialIcons[link.icon];

            return (
              <a
                className="social-link"
                href={link.href}
                key={link.icon}
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
    </div>
  );
}

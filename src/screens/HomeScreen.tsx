import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileCutout from '../assets/Vikram-BG-Removed.png';
import profilePhoto from '../assets/Vikram-G.png';
import { SOCIAL_LINKS } from '../config/social-links-config';
import { PROFILE_CONFIG } from '../config/profile-config';
import { ButtonLink } from '../components/reusable/base/button';
import { TechOrbit } from '../components/reusable/features/technology-orbit';
import { ExperienceSection } from '../components/ExperienceSection';
import { NavBar } from '../components/layout/nav-bar';
import { ContactSection } from '../features/contact/ContactSection';
import { TechnologyMarquee } from '../features/skills';
import { TopographyCanvas } from '../components/reusables/features/canvas/TopographyCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { aboutSection } from '../constants/about-section';
import { footerNote } from '../constants/footer-section';
import { heroSection } from '../constants/hero-section';
import { expertiseHeading, skillGroups } from '../constants/language-and-skills';
import { portfolioProjects, projectsHeading } from '../constants/projects';
import { DateFormat, formatDate } from '../utils/time-stamp';

const socialIcons = {
  email: EmailOutlinedIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function HomeScreen() {
  return (
    <div className="site-shell">
      <NavBar />

      <main>
        <section
          id="home"
          className="relative isolate border-b border-line"
          aria-label={heroSection.ariaLabel}
        >
          <TopographyCanvas />
          <div className="page-width grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="relative z-10 order-1 max-w-2xl">
              {/* <p className="eyebrow mb-3 uppercase tracking-[0.12em]">{PROFILE_CONFIG.role}</p> */}
              <h1 className="text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                Hi, I&apos;m{' '}
                <span className="mt-2 block bg-gradient-to-r from-sky-400 via-cyan-200 to-rose-400 bg-clip-text text-transparent">
                  {PROFILE_CONFIG.fullName}
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium text-accent sm:text-xl">
                {heroSection.roleLine}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {heroSection.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href="#projects"
                  variant="primary"
                  rightIcon={<ArrowDownwardIcon fontSize="small" />}
                >
                  {heroSection.primaryAction}
                </ButtonLink>
                <ButtonLink
                  href="#experience"
                  variant="secondary"
                  leftIcon={<ArrowOutwardIcon fontSize="small" />}
                >
                  {heroSection.secondaryAction}
                </ButtonLink>
                <ButtonLink href="#contact" variant="outline">
                  {heroSection.tertiaryAction}
                </ButtonLink>
              </div>
            </div>
            <div className="relative order-2 w-full">
              <TechOrbit
                portraitSrc={profileCutout}
                portraitAlt={`Portrait of ${PROFILE_CONFIG.fullName}`}
              />
            </div>
          </div>
        </section>

        <TechnologyMarquee />
        <section id="about" className="border-y border-line bg-surface-primary/25">
          <div className="page-width section-space grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-sky-500/20 to-rose-500/20 blur-xl"
                aria-hidden="true"
              />
              <img
                className="relative aspect-[4/3] w-full rounded-xl border border-white/10 object-cover object-top shadow-2xl sm:aspect-square"
                src={profilePhoto}
                alt={`Portrait of ${PROFILE_CONFIG.fullName}`}
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow">{aboutSection.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {aboutSection.title}
              </h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-muted">
                {aboutSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />

        <section id="projects" className="page-width section-space">
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
                    <span
                      className="inline-flex min-h-7 items-center rounded-full border border-line bg-surface/50 px-2.5 py-1 text-xs text-muted"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-line bg-surface-primary/25">
          <div className="page-width section-space">
            <SectionHeading content={expertiseHeading} />
            <div className="skill-grid mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div className="border-t border-line pt-4" key={group.title}>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{group.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <NetworkCanvas /> */}

        <ContactSection />
      </main>

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
    </div>
  );
}

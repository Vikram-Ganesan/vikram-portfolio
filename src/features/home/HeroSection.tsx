import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import profileCutout from '../../assets/images/profile/Vikram-BG-Removed.png';
import { PROFILE_CONFIG } from '../../constants/profile-constants';
import { heroSection } from '../../constants/sections/hero-section';
import { ButtonLink } from '../../components/reusable/base/button';
import { TopographyCanvas } from '../../components/reusable/features/canvas';
import { TechOrbit } from '../../components/reusable/features/technology-orbit';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate border-b border-line"
      aria-label={`Introduction to ${PROFILE_CONFIG.fullName}`}
    >
      <TopographyCanvas />
      <div className="page-width grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="relative z-10 order-1 max-w-2xl">
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
  );
}

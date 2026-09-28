import profilePhoto from '../../assets/images/profile/Vikram-G.png';
import { PROFILE_CONFIG } from '../../constants/profile-constants';
import { aboutSection } from '../../constants/sections/about-section';

export function AboutSection() {
  return (
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
  );
}

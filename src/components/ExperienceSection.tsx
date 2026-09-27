import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { experience, experienceHeading } from '../constants/experience';
import { SectionHeading } from './SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="page-width section-space">
      <SectionHeading content={experienceHeading} />

      <div className="timeline mt-12">
        {experience.map((entry) => (
          <article className="timeline-entry" key={`${entry.company}-${entry.role}`}>
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="experience-heading">
                <div className={`experience-logo-slot experience-logo-slot--${entry.logoTheme}`}>
                  <img className="experience-logo" src={entry.logo} alt={`${entry.company} logo`} />
                </div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <p className="eyebrow">{entry.company}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{entry.location}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="mono text-xs text-muted">{entry.dates}</p>
                    <p className="mt-1 text-xs text-muted">{entry.duration}</p>
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{entry.summary}</p>
              <ul className="mt-4 max-w-3xl space-y-2.5">
                {entry.highlights.map((highlight) => (
                  <li className="flex gap-3 text-sm leading-6 text-muted" key={highlight}>
                    <ArrowOutwardIcon
                      className="mt-1 shrink-0 text-[var(--accent)]"
                      fontSize="small"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.technologies.map((technology) => (
                  <span className="small-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

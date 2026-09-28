import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { experience, experienceHeading } from '../constants/experience';
import { SectionHeading } from './SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="page-width section-space">
      <SectionHeading content={experienceHeading} />

      <div className="mt-12 max-w-5xl border-l border-line pl-6 sm:pl-8">
        {experience.map((entry) => (
          <article className="relative pb-12 last:pb-0" key={`${entry.company}-${entry.role}`}>
            <span
              className="absolute -left-[1.94rem] top-1 size-3 rounded-full border-2 border-canvas bg-accent shadow-[0_0_0_1px_var(--accent)] sm:-left-[2.44rem]"
              aria-hidden="true"
            />
            <div className="max-w-4xl">
              <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-5">
                <div
                  className={`grid size-16 place-items-center overflow-hidden rounded-lg border border-dashed border-line bg-surface/70 p-2 sm:size-20 ${entry.logoTheme === 'dark' ? 'bg-slate-950' : ''}`}
                >
                  <img
                    className="max-h-full max-w-full object-contain"
                    src={entry.logo}
                    alt={`${entry.company} logo`}
                  />
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
                    <TaskAltIcon
                      className="mt-1 shrink-0 text-accent"
                      fontSize="small"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.technologies.map((technology) => (
                  <span
                    className="inline-flex min-h-7 items-center rounded-full border border-line bg-surface/50 px-2.5 py-1 text-xs text-muted"
                    key={technology}
                  >
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

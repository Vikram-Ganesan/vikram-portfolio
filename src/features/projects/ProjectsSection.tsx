import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { projectsHeading, portfolioProjects } from '../../constants/sections/projects';
import { SectionHeading } from '../../components/reusable/features/section-heading';

export function ProjectsSection() {
  return (
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
  );
}

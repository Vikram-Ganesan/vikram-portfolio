import { expertiseHeading, skillGroups } from '../../constants/sections/language-and-skills';
import { SectionHeading } from '../../components/reusable/features/section-heading';

export function SkillsSection() {
  return (
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
  );
}

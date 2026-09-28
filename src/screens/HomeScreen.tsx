import { AboutSection } from '../features/about/AboutSection';
import { ContactSection } from '../features/contact/ContactSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { HomeFooter } from '../features/home/HomeFooter';
import { HeroSection } from '../features/home/HeroSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { TechnologyMarquee } from '../features/skills';
import { NavBar } from '../components/layout/nav-bar';

export function HomeScreen() {
  return (
    <div className="site-shell">
      <NavBar />

      <main>
        <HeroSection />
        <TechnologyMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  );
}

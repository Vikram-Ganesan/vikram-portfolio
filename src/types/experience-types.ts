export interface ExperienceEntry {
  readonly role: string;
  readonly company: string;
  readonly dates: string;
  readonly duration: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly logo: string;
  readonly logoTheme: 'light' | 'dark';
}

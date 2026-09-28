export interface SectionHeadingContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

interface SectionHeadingProps {
  readonly content: SectionHeadingContent;
}

export function SectionHeading({ content }: SectionHeadingProps) {
  const { eyebrow, title, description } = content;
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>
    </div>
  );
}

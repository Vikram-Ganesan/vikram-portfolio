import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import {
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiLivekit,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaAws, FaCss3, FaHtml5, FaJava, FaMicrosoft, FaSalesforce } from 'react-icons/fa6';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { technologyLabel, technologies } from '../../constants/language-and-skills';
import { cn } from '../../lib/cn';

interface TechnologyMark {
  readonly icon: ReactNode;
  readonly colorClass: string;
}

type Technology = (typeof technologies)[number];

const technologyMarks: Record<Technology, TechnologyMark> = {
  Go: { icon: <SiGo />, colorClass: 'text-tech-go' },
  'Node.js': { icon: <SiNodedotjs />, colorClass: 'text-tech-node' },
  React: { icon: <SiReact />, colorClass: 'text-tech-react' },
  TypeScript: { icon: <SiTypescript />, colorClass: 'text-tech-typescript' },
  Salesforce: { icon: <FaSalesforce />, colorClass: 'text-brand-600' },
  'Stripe (Payment)': { icon: <SiStripe />, colorClass: 'text-brand-600' },
  'REST API': { icon: <SiPostman />, colorClass: 'text-accent' },
  WebSocket: { icon: <SiSocketdotio />, colorClass: 'text-content-primary' },
  Webhooks: { icon: <WebhookRoundedIcon />, colorClass: 'text-accent' },
  Git: { icon: <SiGit />, colorClass: 'text-danger-700' },
  GitHub: { icon: <SiGithub />, colorClass: 'text-content-primary' },
  GitLab: { icon: <SiGitlab />, colorClass: 'text-brand-700' },
  DevOps: { icon: <SiGithubactions />, colorClass: 'text-brand-600' },
  'Tailwind CSS': { icon: <SiTailwindcss />, colorClass: 'text-tech-docker' },
  Bootstrap: { icon: <SiBootstrap />, colorClass: 'text-brand-700' },
  HTML: { icon: <FaHtml5 />, colorClass: 'text-danger-700' },
  CSS: { icon: <FaCss3 />, colorClass: 'text-brand-600' },
  LiveKit: { icon: <SiLivekit />, colorClass: 'text-accent' },
  'AWS Cognito': { icon: <FaAws />, colorClass: 'text-tech-aws' },
  Docker: { icon: <SiDocker />, colorClass: 'text-tech-docker' },
  'LLM UI': { icon: <PsychologyRoundedIcon />, colorClass: 'text-accent' },
  Azure: { icon: <CloudQueueRoundedIcon />, colorClass: 'text-brand-600' },
  'Microsoft API': { icon: <FaMicrosoft />, colorClass: 'text-brand-600' },
  'SQL Server (SSMS)': { icon: <StorageRoundedIcon />, colorClass: 'text-brand-600' },
  PostgreSQL: { icon: <SiPostgresql />, colorClass: 'text-tech-postgresql' },
  MySQL: { icon: <SiMysql />, colorClass: 'text-brand-600' },
  SSE: { icon: <SyncAltRoundedIcon />, colorClass: 'text-accent' },
  Java: { icon: <FaJava />, colorClass: 'text-tech-java' },
};

function TechnologyItems({ duplicate = false }: { readonly duplicate?: boolean }) {
  return technologies.map((technology) => {
    const mark = technologyMarks[technology];

    return (
      <li
        className={cn('shrink-0', duplicate && 'motion-reduce:hidden')}
        key={`${duplicate ? 'duplicate-' : ''}${technology}`}
        aria-hidden={duplicate || undefined}
      >
        <span className="inline-flex min-h-12 items-center gap-3 rounded-control border border-border-default bg-surface-primary/70 px-4 py-2.5">
          <span
            className={`grid size-5 shrink-0 place-items-center text-lg ${mark.colorClass}`}
            aria-hidden="true"
          >
            {mark.icon}
          </span>
          <span className="whitespace-nowrap text-sm font-medium text-content-secondary">
            {technology}
          </span>
        </span>
      </li>
    );
  });
}

export function TechnologyMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="border-y border-line bg-surface-primary/25" aria-label={technologyLabel}>
      <div className="page-width flex items-center gap-4 py-5 sm:gap-6">
        <p className="eyebrow shrink-0 whitespace-nowrap">{technologyLabel}</p>
        <div
          className="technology-marquee-mask min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <ul
            className={cn(
              'flex w-max animate-technology-marquee items-center gap-3 pr-3 motion-reduce:animate-none',
              isPaused && '[animation-play-state:paused]',
            )}
          >
            <TechnologyItems />
            <TechnologyItems duplicate />
          </ul>
        </div>
      </div>
    </section>
  );
}

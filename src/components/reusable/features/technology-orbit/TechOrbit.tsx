import { SiDocker, SiGo, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si';
import { useState } from 'react';
import { FaAws, FaJava } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { cn } from '../../../../lib/cn';
import { Tooltip } from '../../base/tooltip';
import type { TooltipPlacement } from '../../base/tooltip';

interface OrbitTechnology {
  readonly name: string;
  readonly Icon: IconType;
  readonly colorClass: string;
  readonly positionClass: string;
  readonly tooltipPlacement: TooltipPlacement;
}

interface TechOrbitProps {
  readonly portraitSrc: string;
  readonly portraitAlt: string;
}

const orbitTechnologies: readonly OrbitTechnology[] = [
  {
    name: 'Go',
    Icon: SiGo,
    colorClass: 'text-tech-go',
    positionClass: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
    tooltipPlacement: 'bottom',
  },
  {
    name: 'Java',
    Icon: FaJava,
    colorClass: 'text-tech-java',
    positionClass: 'right-[8%] top-[13%] translate-x-1/2 -translate-y-1/2',
    tooltipPlacement: 'right',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    colorClass: 'text-tech-typescript',
    positionClass: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    tooltipPlacement: 'right',
  },
  {
    name: 'React',
    Icon: SiReact,
    colorClass: 'text-tech-react',
    positionClass: 'bottom-[13%] right-[8%] translate-x-1/2 translate-y-1/2',
    tooltipPlacement: 'right',
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    colorClass: 'text-tech-node',
    positionClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    tooltipPlacement: 'top',
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    colorClass: 'text-tech-postgresql',
    positionClass: 'bottom-[13%] left-[8%] -translate-x-1/2 translate-y-1/2',
    tooltipPlacement: 'left',
  },
  {
    name: 'AWS',
    Icon: FaAws,
    colorClass: 'text-tech-aws',
    positionClass: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
    tooltipPlacement: 'left',
  },
  {
    name: 'Docker',
    Icon: SiDocker,
    colorClass: 'text-tech-docker',
    positionClass: 'left-[8%] top-[13%] -translate-x-1/2 -translate-y-1/2',
    tooltipPlacement: 'left',
  },
];

export function TechOrbit({ portraitSrc, portraitAlt }: TechOrbitProps) {
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <div
        className="absolute inset-[12%] rounded-full bg-gradient-to-br from-sky-500/25 via-blue-500/15 to-rose-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full border border-sky-300/20"
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute inset-[8%] animate-tech-orbit motion-reduce:animate-none',
          activeTechnology && '[animation-play-state:paused]',
        )}
      >
        {orbitTechnologies.map(({ name, Icon, colorClass, positionClass, tooltipPlacement }) => {
          const tooltipId = `technology-tooltip-${name.toLowerCase().replaceAll('.', '-')}`;
          const isActive = activeTechnology === name;

          return (
            <span
              key={name}
              className={cn(
                'absolute z-20 grid size-12 cursor-help place-items-center rounded-full border border-sky-200/15 bg-surface-primary/90 shadow-lg backdrop-blur transition duration-200 hover:scale-110 hover:border-sky-200/50 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 motion-reduce:animate-none',
                positionClass,
                activeTechnology === name
                  ? 'z-30 scale-110 border-sky-200/50 [animation-play-state:paused]'
                  : 'animate-tech-counter-orbit',
              )}
              role="img"
              aria-label={name}
              aria-describedby={isActive ? tooltipId : undefined}
              tabIndex={0}
              onPointerEnter={() => setActiveTechnology(name)}
              onPointerLeave={() => setActiveTechnology(null)}
              onFocus={() => setActiveTechnology(name)}
              onBlur={() => setActiveTechnology(null)}
            >
              <Icon className={`text-xl ${colorClass}`} aria-hidden="true" />
              <Tooltip
                id={tooltipId}
                content={name}
                isOpen={isActive}
                placement={tooltipPlacement}
                variant="outline"
              />
            </span>
          );
        })}
      </div>
      <div className="absolute inset-[18%] z-10 overflow-hidden rounded-full bg-gradient-to-b from-sky-900/30 to-surface-primary/50">
        <img
          className="size-full object-contain object-bottom drop-shadow-2xl"
          src={portraitSrc}
          alt={portraitAlt}
        />
      </div>
    </div>
  );
}

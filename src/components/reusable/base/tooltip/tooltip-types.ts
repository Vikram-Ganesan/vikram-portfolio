import type { ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipVariant = 'outline' | 'solid';

export interface TooltipProps {
  readonly id: string;
  readonly content: ReactNode;
  readonly isOpen: boolean;
  readonly placement?: TooltipPlacement;
  readonly variant?: TooltipVariant;
  readonly arrow?: boolean;
  readonly className?: string;
}

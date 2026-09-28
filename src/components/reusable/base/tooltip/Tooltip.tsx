import { cn } from '../../../../lib/cn';
import type { TooltipPlacement, TooltipProps, TooltipVariant } from './tooltip-types';

const placementClasses: Record<TooltipPlacement, string> = {
  top: 'absolute bottom-full left-1/2 mb-3 -translate-x-1/2',
  right: 'absolute left-full top-1/2 ml-3 -translate-y-1/2',
  bottom: 'absolute left-1/2 top-full mt-3 -translate-x-1/2',
  left: 'absolute right-full top-1/2 mr-3 -translate-y-1/2',
};

const arrowPlacementClasses: Record<TooltipPlacement, string> = {
  top: 'left-1/2 -bottom-1 size-2 -translate-x-1/2 rotate-45 border-b border-r',
  right: '-left-1 top-1/2 size-2 -translate-y-1/2 rotate-45 border-b border-l',
  bottom: 'left-1/2 -top-1 size-2 -translate-x-1/2 rotate-45 border-l border-t',
  left: '-right-1 top-1/2 size-2 -translate-y-1/2 rotate-45 border-r border-t',
};

const variantClasses: Record<TooltipVariant, string> = {
  outline: 'border border-accent bg-surface-primary text-content-primary',
  solid: 'border border-accent bg-accent text-surface-primary',
};

const arrowVariantClasses: Record<TooltipVariant, string> = {
  outline: 'border-accent bg-surface-primary',
  solid: 'border-accent bg-accent',
};

export function Tooltip({
  id,
  content,
  isOpen,
  placement = 'top',
  variant = 'outline',
  arrow = true,
  className,
}: TooltipProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <span
      className={cn(
        'z-50 inline-flex items-center whitespace-nowrap rounded-control px-2 py-1 text-xs font-medium shadow-lg',
        placementClasses[placement],
        variantClasses[variant],
        className,
      )}
      id={id}
      role="tooltip"
    >
      {content}
      {arrow && (
        <span
          className={cn(
            'pointer-events-none absolute',
            arrowPlacementClasses[placement],
            arrowVariantClasses[variant],
          )}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

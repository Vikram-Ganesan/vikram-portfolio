import { DEFAULT_AVATAR_SIZE } from '../../../../constants/component-constants';
import { cn } from '../../../../lib/cn';
import { getInitials } from '../../../../utils/string-utils';
import type { AvatarProps, AvatarSize } from './avatar-types';

const sizeClasses: Record<AvatarSize, string> = {
  small: 'size-8 text-xs',
  medium: 'size-11 text-sm',
  large: 'size-16 text-lg',
};

export function Avatar({
  fullName,
  size = DEFAULT_AVATAR_SIZE,
  className,
  ariaLabel,
}: AvatarProps) {
  const initials = getInitials(fullName);
  const accessibleName = fullName.trim() || 'Profile';

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full border border-border-default bg-surface-secondary font-semibold text-content-primary',
        sizeClasses[size],
        className,
      )}
      role="img"
      aria-label={ariaLabel ?? `${accessibleName} avatar`}
    >
      {initials || '?'}
    </span>
  );
}

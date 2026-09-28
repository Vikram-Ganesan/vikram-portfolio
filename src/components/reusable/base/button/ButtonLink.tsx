import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from '../../../../constants/component-constants';
import { cn } from '../../../../lib/cn';
import { scrollToSection } from '../../../../utils/navigation-utils';
import type { ButtonLinkProps } from './button-types';
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from './button-styles';

export function ButtonLink({
  href,
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...anchorProps
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) scrollToSection(event);
      }}
      {...anchorProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
}

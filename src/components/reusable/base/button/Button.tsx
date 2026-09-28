import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from '../../../../constants/component-constants';
import { cn } from '../../../../lib/cn';
import type { ButtonProps } from './button-types';
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from './button-styles';

export function Button({
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  type = 'button',
  disabled,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonBaseClasses,
        'disabled:cursor-not-allowed disabled:opacity-55',
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonProps}
    >
      {loading ? (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </button>
  );
}

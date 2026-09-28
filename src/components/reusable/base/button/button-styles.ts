import type { ButtonSize, ButtonVariant } from './button-types';

export const buttonBaseClasses =
  'inline-flex items-center justify-center gap-2 rounded-control font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none';

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'border border-transparent bg-brand-700 text-content-inverse hover:bg-brand-800',
  secondary:
    'border border-border-strong bg-surface-primary text-content-primary hover:bg-surface-secondary',
  tertiary: 'border border-transparent bg-brand-50 text-brand-600 hover:bg-brand-100',
  outline: 'border border-brand-700 bg-transparent text-brand-600 hover:bg-brand-50',
  ghost: 'border border-transparent bg-transparent text-content-primary hover:bg-surface-secondary',
  danger: 'border border-transparent bg-danger-700 text-content-inverse hover:bg-danger-800',
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  small: 'min-h-10 px-3 text-sm',
  medium: 'min-h-11 px-4 text-sm',
  large: 'min-h-12 px-5 text-base',
};

import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly href: string;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--ink)] text-[var(--canvas)] hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-white',
  secondary:
    'border border-line bg-surface text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]',
  outline: 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-soft)]',
  ghost: 'text-[var(--ink)] hover:bg-[var(--accent-soft)]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3.5 py-2 text-xs',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-sm',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...anchorProps
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] ${variants[variant]} ${sizes[size]} ${className}`}
      href={href}
      {...anchorProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
}

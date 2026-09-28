export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  readonly fullName: string;
  readonly size?: AvatarSize;
  readonly className?: string;
  readonly ariaLabel?: string;
}

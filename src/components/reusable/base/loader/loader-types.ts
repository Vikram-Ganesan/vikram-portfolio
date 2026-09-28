export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps {
  readonly size?: LoaderSize;
  readonly label?: string;
  readonly fullScreen?: boolean;
}

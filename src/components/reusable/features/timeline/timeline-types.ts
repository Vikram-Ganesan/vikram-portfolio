export type TimelineOrientation = 'horizontal' | 'vertical';

export interface TimelineItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly period?: string;
}

export interface TimelineProps {
  readonly items: readonly TimelineItem[];
  readonly orientation?: TimelineOrientation;
}

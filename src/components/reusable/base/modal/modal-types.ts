import type { ReactNode } from 'react';

export interface ModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title?: string;
  readonly children: ReactNode;
}

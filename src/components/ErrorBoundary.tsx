import { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  readonly fallbackTitle: string;
  readonly fallbackMessage: string;
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <main className="page-width grid min-h-screen content-center py-16" role="alert">
          <h1 className="font-display text-3xl font-semibold text-ink">
            {this.props.fallbackTitle}
          </h1>
          <p className="mt-3 max-w-xl leading-7 text-muted">{this.props.fallbackMessage}</p>
        </main>
      );
    }

    return this.props.children;
  }
}

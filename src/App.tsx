import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomeScreen } from './screens/HomeScreen';

export const App: React.FC = () => {
  return (
    <ErrorBoundary
      fallbackTitle="Application Error"
      fallbackMessage="An unexpected error occurred in the portfolio. Please refresh the page."
    >
      <HomeScreen />
      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
};

import { useEffect, useRef } from 'react';

interface PointerPosition {
  readonly x: number;
  readonly y: number;
}

const CONTOUR_COUNT = 18;

export function TopographyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let isPageHidden = document.visibilityState === 'hidden';
    let pointer: PointerPosition | null = null;
    let contourColor = '';
    let accentColor = '';

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = reducedMotionQuery.matches;

    const updatePalette = () => {
      const styles = getComputedStyle(document.documentElement);
      contourColor = styles.getPropertyValue('--contour-line').trim();
      accentColor = styles.getPropertyValue('--contour-accent').trim();
    };

    const drawContours = (time = 0) => {
      context.clearRect(0, 0, width, height);

      const compactLayout = width < 640;
      const fieldStart = width * (compactLayout ? 0.78 : 0.67);
      const fieldWidth = width * (compactLayout ? 0.38 : 0.48);
      const amplitude = height * (compactLayout ? 0.095 : 0.12);
      const pointerOffset = pointer
        ? Math.max(
            -height * 0.04,
            Math.min(height * 0.04, (pointer.y / height - 0.5) * height * 0.08),
          )
        : 0;

      for (let index = 0; index < CONTOUR_COUNT; index += 1) {
        const progress = index / (CONTOUR_COUNT - 1);
        const spread = progress - 0.5;
        const baseY = height * (-0.18 + progress * 1.36);
        const drift = prefersReducedMotion ? 0 : Math.sin(time * 0.00012 + index * 0.34) * 5;
        const startX = fieldStart + Math.abs(spread) * width * 0.04;
        const startY = baseY + drift + pointerOffset * Math.max(0, 1 - Math.abs(spread) * 1.7);
        const wave = spread * amplitude;

        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(
          startX + fieldWidth * 0.32,
          startY - amplitude + wave,
          startX + fieldWidth * 0.06,
          startY + amplitude + wave,
          startX + fieldWidth * 0.34,
          startY + amplitude * 1.4,
        );
        context.bezierCurveTo(
          startX + fieldWidth * 0.68,
          startY + amplitude * 1.9,
          startX + fieldWidth * 0.42,
          startY + amplitude * 2.6,
          startX + fieldWidth,
          startY + amplitude * 2.15,
        );
        context.strokeStyle = index === 4 || index === 13 ? accentColor : contourColor;
        context.globalAlpha = index === 4 || index === 13 ? 0.78 : 0.66;
        context.lineWidth = index === 4 || index === 13 ? 1.15 : 0.7;
        context.stroke();
      }

      context.globalAlpha = 1;
    };

    const animate = (time: number) => {
      drawContours(time);
      if (!prefersReducedMotion && !isPageHidden) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      updatePalette();
      window.cancelAnimationFrame(animationFrame);
      if (isPageHidden) return;
      if (prefersReducedMotion) drawContours();
      else animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };

    const handlePointerLeave = () => {
      pointer = null;
    };

    const handleVisibilityChange = () => {
      isPageHidden = document.visibilityState === 'hidden';
      window.cancelAnimationFrame(animationFrame);
      if (isPageHidden) return;
      if (prefersReducedMotion) drawContours();
      else animationFrame = window.requestAnimationFrame(animate);
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      window.cancelAnimationFrame(animationFrame);
      if (isPageHidden) return;
      if (prefersReducedMotion) drawContours();
      else animationFrame = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    const themeObserver = new MutationObserver(() => {
      updatePalette();
      if (prefersReducedMotion) drawContours();
    });

    resizeObserver.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', handlePointerLeave);
    reducedMotionQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      reducedMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 size-full"
      aria-hidden="true"
    />
  );
}

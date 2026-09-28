import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  colorIndex: number;
}

const CONNECTION_DISTANCE = 150;
const COLOR_VARIABLES = ['--network-cyan', '--network-violet', '--network-green'];

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let isPageHidden = document.visibilityState === 'hidden';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particles: Particle[] = [];
    let lineColor = '';
    let nodeColors: string[] = [];

    const updatePalette = () => {
      const styles = getComputedStyle(document.documentElement);
      lineColor = styles.getPropertyValue('--network-line').trim();
      nodeColors = COLOR_VARIABLES.map((variable) => styles.getPropertyValue(variable).trim());
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!prefersReducedMotion) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;
        }
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        if (!particle) continue;

        for (let neighborIndex = index + 1; neighborIndex < particles.length; neighborIndex += 1) {
          const neighbor = particles[neighborIndex];
          if (!neighbor) continue;

          const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y);
          if (distance >= CONNECTION_DISTANCE) continue;

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.strokeStyle = lineColor;
          context.globalAlpha = 1 - distance / CONNECTION_DISTANCE;
          context.lineWidth = 0.8;
          context.stroke();
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = nodeColors[particle.colorIndex] ?? nodeColors[0] ?? '#27b8d5';
        context.globalAlpha = 0.78;
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const animate = () => {
      drawFrame();
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

      const particleCount = Math.min(90, Math.max(24, Math.round((width * height) / 19000)));
      particles.length = 0;

      for (let index = 0; index < particleCount; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          velocityX: (Math.random() - 0.5) * 0.24,
          velocityY: (Math.random() - 0.5) * 0.24,
          radius: Math.random() * 1.4 + 1,
          colorIndex: index % COLOR_VARIABLES.length,
        });
      }

      updatePalette();
      window.cancelAnimationFrame(animationFrame);
      if (!isPageHidden) animate();
    };

    const handleVisibilityChange = () => {
      isPageHidden = document.visibilityState === 'hidden';
      window.cancelAnimationFrame(animationFrame);
      if (!isPageHidden) animate();
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    const themeObserver = new MutationObserver(() => {
      updatePalette();
      if (prefersReducedMotion) drawFrame();
    });

    resizeObserver.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 block size-full opacity-75"
      aria-hidden="true"
    />
  );
}

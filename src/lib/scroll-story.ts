export function getParallaxOffset(progress: number, amplitude: number): number {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return (clampedProgress - 0.5) * amplitude;
}

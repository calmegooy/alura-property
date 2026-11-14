export function getScrollProgress(
  scrollY: number,
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
): number {
  const range = sectionHeight - viewportHeight;
  if (range <= 0) return 0;
  return Math.min(1, Math.max(0, (scrollY - sectionTop) / range));
}

export function getFrameIndex(progress: number, count: number): number {
  if (count <= 1) return 0;
  return Math.round(Math.min(1, Math.max(0, progress)) * (count - 1));
}

export function calculateCover(
  sourceWidth: number,
  sourceHeight: number,
  canvasWidth: number,
  canvasHeight: number,
) {
  const scale = Math.max(canvasWidth / sourceWidth, canvasHeight / sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;
  return { width, height, x: (canvasWidth - width) / 2, y: (canvasHeight - height) / 2 };
}

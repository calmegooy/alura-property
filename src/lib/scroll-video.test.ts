import { describe, expect, it } from 'vitest';
import { calculateCover, getFrameIndex, getScrollProgress } from './scroll-video';

describe('scroll-video mapping', () => {
  it('clamps progress before and after the pinned section', () => {
    expect(getScrollProgress(0, 100, 1000, 500)).toBe(0);
    expect(getScrollProgress(600, 100, 1000, 500)).toBe(1);
  });

  it('maps progress to the nearest frame and clamps its bounds', () => {
    expect(getFrameIndex(-1, 61)).toBe(0);
    expect(getFrameIndex(0.5, 61)).toBe(30);
    expect(getFrameIndex(2, 61)).toBe(60);
  });

  it('covers a wider canvas without stretching the source aspect ratio', () => {
    expect(calculateCover(1000, 500, 500, 500)).toEqual({
      width: 1000,
      height: 500,
      x: -250,
      y: 0,
    });
  });
});

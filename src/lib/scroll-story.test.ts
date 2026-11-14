import { describe, expect, it } from 'vitest';
import { getParallaxOffset } from './scroll-story';

describe('getParallaxOffset', () => {
  it('keeps the parallax image centered halfway through the section', () => {
    expect(getParallaxOffset(0.5, 24)).toBe(0);
  });

  it('clamps progress and limits the image travel to the chosen range', () => {
    expect(getParallaxOffset(-1, 24)).toBe(-12);
    expect(getParallaxOffset(2, 24)).toBe(12);
  });
});

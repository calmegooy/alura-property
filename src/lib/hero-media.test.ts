import { describe, expect, it } from 'vitest';
import { getHeroFrameVariant } from './hero-media';

describe('getHeroFrameVariant', () => {
  it('uses the mobile frame set at phone-sized viewport widths', () => {
    expect(getHeroFrameVariant(383)).toBe('mobile');
  });

  it('uses the desktop frame set above the mobile breakpoint', () => {
    expect(getHeroFrameVariant(1024)).toBe('desktop');
  });
});

export type HeroFrameVariant = 'desktop' | 'mobile';

export function getHeroFrameVariant(viewportWidth: number): HeroFrameVariant {
  return viewportWidth <= 768 ? 'mobile' : 'desktop';
}

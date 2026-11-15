import { describe, expect, it } from 'vitest';
import { toSafeExternalUrl } from './url';

describe('toSafeExternalUrl', () => {
  it('accepts valid https and http URLs', () => {
    expect(toSafeExternalUrl('https://maps.google.com/?q=-7.79,110.36')).toBe(
      'https://maps.google.com/?q=-7.79,110.36',
    );
    expect(toSafeExternalUrl('  http://localhost:4321/katalog  ')).toBe(
      'http://localhost:4321/katalog',
    );
  });

  it('rejects dangerous schemes and invalid or empty inputs', () => {
    expect(toSafeExternalUrl('')).toBeNull();
    expect(toSafeExternalUrl(null)).toBeNull();
    expect(toSafeExternalUrl('javascript:alert(1)')).toBeNull();
    expect(toSafeExternalUrl('data:text/html,<script>alert(1)</script>')).toBeNull();
    expect(toSafeExternalUrl('not-a-valid-url')).toBeNull();
  });
});

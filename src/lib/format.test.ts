import { describe, expect, it } from 'vitest';
import { formatRupiah } from './format';

describe('formatRupiah', () => {
  it('formats whole rupiah amounts with Indonesian grouping and a normal space', () => {
    expect(formatRupiah(250_000_000)).toBe('Rp 250.000.000');
  });

  it('formats zero without decimal digits', () => {
    expect(formatRupiah(0)).toBe('Rp 0');
  });
});

import type { Land } from '../data/lands';

export function formatRupiah(value: number): string {
  const formatted = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(value);
  return `Rp ${formatted}`;
}

export function formatLocation(
  lokasi: Land['lokasi'],
  mode: 'short' | 'full' = 'short',
): string {
  const clean = (part: string) =>
    part && !part.toLowerCase().includes('perlu konfirmasi') ? part : '';

  const parts =
    mode === 'short'
      ? [clean(lokasi.kecamatan), clean(lokasi.kota)]
      : [clean(lokasi.desa), clean(lokasi.kecamatan), clean(lokasi.kota)];

  const filtered = parts.filter(Boolean);
  return filtered.length > 0 ? filtered.join(', ') : 'Lokasi perlu konfirmasi';
}

export function formatArea(luasM2?: number): string {
  if (typeof luasM2 !== 'number' || Number.isNaN(luasM2)) {
    return 'Luas perlu konfirmasi';
  }
  return `${luasM2.toLocaleString('id-ID')} m²`;
}

export interface PriceSummary {
  primary: string;
  secondary?: string;
}

export function formatLandPrice(land: Land): PriceSummary {
  const isRent = land.transaksi === 'sewa';
  const periodSuffix = isRent ? `/${land.periode_sewa ?? 'tahun'}` : '';
  const negoSuffix = land.harga_nego ? ' (nego)' : '';

  if (typeof land.harga_total === 'number') {
    const primary = `${formatRupiah(land.harga_total)}${periodSuffix}${negoSuffix}`;
    const secondary =
      typeof land.harga_per_m2 === 'number'
        ? `${formatRupiah(land.harga_per_m2)}/m²${periodSuffix}`
        : undefined;
    return { primary, secondary };
  }

  if (typeof land.harga_per_m2 === 'number') {
    return {
      primary: `${formatRupiah(land.harga_per_m2)}/m²${periodSuffix}${negoSuffix}`,
      secondary: isRent ? 'Tarif sewa per m²' : 'Harga total perlu konfirmasi',
    };
  }

  return { primary: 'Harga perlu konfirmasi' };
}

import type { Land, LandCategory } from '../data/lands';

export interface LandFilters {
  kategori?: LandCategory | 'semua';
  query?: string;
}

export type LandSort = 'terbaru' | 'harga-rendah' | 'harga-tinggi' | 'luas';

export function filterLands(
  input: Land[],
  filters: LandFilters = {},
): Land[] {
  const query = filters.query?.trim().toLocaleLowerCase('id-ID');
  return input.filter((land) => {
    const categoryMatches =
      !filters.kategori ||
      filters.kategori === 'semua' ||
      land.kategori === filters.kategori;
    const haystack =
      `${land.nama} ${land.lokasi.desa} ${land.lokasi.kecamatan} ${land.lokasi.kota}`.toLocaleLowerCase('id-ID');
    return categoryMatches && (!query || haystack.includes(query));
  });
}

export function sortLands(input: Land[], sort: LandSort): Land[] {
  const lands = [...input];
  switch (sort) {
    case 'harga-rendah':
      return lands.sort((a, b) => a.harga_total - b.harga_total);
    case 'harga-tinggi':
      return lands.sort((a, b) => b.harga_total - a.harga_total);
    case 'luas':
      return lands.sort((a, b) => b.luas_m2 - a.luas_m2);
    case 'terbaru':
    default:
      return lands.sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
}

import type { Land, LandCategory, LandTransaction } from '../data/lands';

export interface LandFilters {
  kategori?: LandCategory | 'semua';
  transaksi?: LandTransaction | 'semua';
  luas?: '' | 'small' | 'large';
  query?: string;
}

export type LandSort = 'terbaru' | 'harga-rendah' | 'harga-tinggi' | 'luas';

function getComparablePrice(land: Land, fallback: number): number {
  return land.harga_total ?? land.harga_per_m2 ?? fallback;
}

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
    const transactionMatches =
      !filters.transaksi ||
      filters.transaksi === 'semua' ||
      (land.transaksi ?? 'jual') === filters.transaksi;
    const areaMatches =
      !filters.luas ||
      (typeof land.luas_m2 === 'number' &&
        (filters.luas === 'small' ? land.luas_m2 < 500 : land.luas_m2 >= 500));
    const haystack =
      `${land.nama} ${land.lokasi.desa} ${land.lokasi.kecamatan} ${land.lokasi.kota}`.toLocaleLowerCase('id-ID');
    return (
      categoryMatches &&
      transactionMatches &&
      areaMatches &&
      (!query || haystack.includes(query))
    );
  });
}

export function sortLands(input: Land[], sort: LandSort): Land[] {
  const lands = [...input];
  switch (sort) {
    case 'harga-rendah':
      return lands.sort(
        (a, b) =>
          getComparablePrice(a, Number.POSITIVE_INFINITY) -
          getComparablePrice(b, Number.POSITIVE_INFINITY),
      );
    case 'harga-tinggi':
      return lands.sort(
        (a, b) => getComparablePrice(b, 0) - getComparablePrice(a, 0),
      );
    case 'luas':
      return lands.sort((a, b) => (b.luas_m2 ?? 0) - (a.luas_m2 ?? 0));
    case 'terbaru':
    default:
      return lands.sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
}

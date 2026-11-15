import { describe, expect, it } from 'vitest';
import type { Land } from '../data/lands';
import { filterLands, sortLands } from './catalog';

const lands: Land[] = [
  {
    id: 'a',
    slug: 'kebun-baru',
    nama: 'Kebun Contoh',
    kategori: 'kebun',
    lokasi: { desa: 'Sukamaju', kecamatan: 'Cisarua', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 800,
    harga_total: 320_000_000,
    harga_per_m2: 400_000,
    legalitas: 'SHM',
    status: 'tersedia',
    unggulan: true,
    deskripsi: 'Contoh kebun.',
    fasilitas_sekitar: [],
    foto: [],
    foto_utama: '',
    created_at: '2026-11-10',
    contoh: true,
  },
  {
    id: 'b',
    slug: 'sawah-lama',
    nama: 'Sawah Contoh',
    kategori: 'sawah',
    lokasi: { desa: 'Mekarsari', kecamatan: 'Cisarua', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 1200,
    harga_total: 480_000_000,
    harga_per_m2: 400_000,
    legalitas: 'AJB',
    status: 'terjual',
    unggulan: false,
    deskripsi: 'Contoh sawah.',
    fasilitas_sekitar: [],
    foto: [],
    foto_utama: '',
    created_at: '2026-10-01',
    contoh: true,
  },
];

describe('catalog helpers', () => {
  it('filters by category and case-insensitive location query', () => {
    expect(filterLands(lands, { kategori: 'kebun', query: 'BOGOR' }).map((land) => land.slug))
      .toEqual(['kebun-baru']);
  });

  it('returns an empty array when no listing matches', () => {
    expect(filterLands(lands, { query: 'tidak ada' })).toEqual([]);
  });

  it('sorts newest first and does not mutate the input array', () => {
    const sorted = sortLands(lands, 'terbaru');
    expect(sorted.map((land) => land.slug)).toEqual(['kebun-baru', 'sawah-lama']);
    expect(lands.map((land) => land.slug)).toEqual(['kebun-baru', 'sawah-lama']);
  });

  it('filters by transaction type and falls back to harga_per_m2 when sorting price', () => {
    const mixed: Land[] = [
      { ...lands[0], transaksi: 'jual', harga_total: undefined, harga_per_m2: 3_750_000 },
      { ...lands[1], transaksi: 'sewa', harga_total: 125_000_000 },
    ];
    expect(filterLands(mixed, { transaksi: 'sewa' }).map((l) => l.slug)).toEqual([
      'sawah-lama',
    ]);
    expect(sortLands(mixed, 'harga-rendah').map((l) => l.slug)).toEqual([
      'kebun-baru',
      'sawah-lama',
    ]);
  });
});

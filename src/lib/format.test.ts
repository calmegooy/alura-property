import { describe, expect, it } from 'vitest';
import type { Land } from '../data/lands';
import {
  formatArea,
  formatLandPrice,
  formatLocation,
  formatRupiah,
} from './format';

const baseLand: Land = {
  id: 'test-1',
  slug: 'test-1',
  nama: 'Properti Uji',
  kategori: 'tanah',
  transaksi: 'jual',
  lokasi: {
    desa: 'Perlu konfirmasi',
    kecamatan: 'Umbulharjo',
    kota: 'Kota Yogyakarta',
  },
  maps_url: '',
  legalitas: 'SHM Pekarangan',
  status: 'tersedia',
  unggulan: false,
  deskripsi: 'Uji.',
  fasilitas_sekitar: [],
  foto: [],
  foto_utama: '',
  created_at: '2026-11-14',
};

describe('formatRupiah', () => {
  it('formats whole rupiah amounts with Indonesian grouping and a normal space', () => {
    expect(formatRupiah(250_000_000)).toBe('Rp 250.000.000');
  });

  it('formats zero without decimal digits', () => {
    expect(formatRupiah(0)).toBe('Rp 0');
  });
});

describe('property formatting helpers', () => {
  it('omits unconfirmed segments in full location formatting', () => {
    expect(formatLocation(baseLand.lokasi, 'full')).toBe(
      'Umbulharjo, Kota Yogyakarta',
    );
  });

  it('formats missing area as perlu konfirmasi', () => {
    expect(formatArea(undefined)).toBe('Luas perlu konfirmasi');
    expect(formatArea(1775)).toBe('1.775 m²');
  });

  it('formats per-m2 sale prices and annual rental prices cleanly', () => {
    expect(
      formatLandPrice({ ...baseLand, harga_per_m2: 3_750_000 }),
    ).toEqual({
      primary: 'Rp 3.750.000/m²',
      secondary: 'Harga total perlu konfirmasi',
    });

    expect(
      formatLandPrice({
        ...baseLand,
        transaksi: 'sewa',
        periode_sewa: 'tahun',
        harga_total: 125_000_000,
      }),
    ).toEqual({
      primary: 'Rp 125.000.000/tahun',
      secondary: undefined,
    });
  });
});

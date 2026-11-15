import { describe, expect, it } from 'vitest';
import type { Land } from '../data/lands';
import { buildWhatsAppLink } from './whatsapp';

const land: Land = {
  id: '1',
  slug: 'kavling-sukamaju',
  nama: 'Kavling Sukamaju',
  kategori: 'kavling-perumahan',
  lokasi: { desa: 'Sukamaju', kecamatan: 'Cisarua', kota: 'Bogor' },
  maps_url: '',
  luas_m2: 500,
  harga_total: 250_000_000,
  harga_per_m2: 500_000,
  legalitas: 'SHM',
  status: 'tersedia',
  unggulan: true,
  deskripsi: 'Contoh tanah.',
  fasilitas_sekitar: [],
  foto: [],
  foto_utama: '',
  created_at: '2026-11-14',
  contoh: true,
};

describe('buildWhatsAppLink', () => {
  it('encodes the selected listing and canonical URL in the WhatsApp message', () => {
    const link = buildWhatsAppLink(land, {
      whatsappNumber: '6281234567890',
      siteUrl: 'https://alura.example',
    });

    expect(link).toContain('https://wa.me/6281234567890?text=');
    expect(new URL(link!).searchParams.get('text')).toBe(
      'Halo, saya tertarik dengan tanah *Kavling Sukamaju* di Sukamaju, Cisarua, Bogor (luas 500 m², harga Rp 250.000.000). Apakah masih tersedia? Link: https://alura.example/katalog/kavling-sukamaju',
    );
  });

  it('does not create a broken URL when the number is still the placeholder', () => {
    expect(buildWhatsAppLink(land, { whatsappNumber: '62xxxxxxxxxx' })).toBeNull();
  });

  it('builds a clean WhatsApp message for rental and per-m2 listings', () => {
    const rentalLink = buildWhatsAppLink(
      {
        ...land,
        slug: 'sewa-ruko',
        nama: 'Ruko 3 Lantai',
        transaksi: 'sewa',
        periode_sewa: 'tahun',
        luas_m2: undefined,
        harga_total: 125_000_000,
        harga_per_m2: undefined,
        lokasi: { desa: 'Perlu konfirmasi', kecamatan: 'Ringroad Utara', kota: 'Perlu konfirmasi' },
      },
      { whatsappNumber: '6281234567890', siteUrl: 'https://alura.example' },
    );
    expect(new URL(rentalLink!).searchParams.get('text')).toContain(
      'properti sewa *Ruko 3 Lantai* di Ringroad Utara (penawaran Rp 125.000.000/tahun)',
    );
  });

  it('uses the configured default Alura Property WhatsApp number without leaking placeholder URL', () => {
    const link = buildWhatsAppLink();
    expect(link).toContain('https://wa.me/628122586867?text=');
    expect(new URL(link!).searchParams.get('text')).not.toContain('example.com');
  });

  it('ignores malformed or non-http siteUrl values instead of throwing', () => {
    const link = buildWhatsAppLink(land, {
      whatsappNumber: '628122586867',
      siteUrl: 'javascript:alert(1)',
    });
    expect(link).toContain('https://wa.me/628122586867?text=');
    expect(new URL(link!).searchParams.get('text')).not.toContain('javascript:');
  });
});

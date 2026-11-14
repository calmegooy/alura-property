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
});

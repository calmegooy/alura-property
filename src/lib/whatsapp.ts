import type { Land } from '../data/lands';
import { SITE_URL, WHATSAPP_NUMBER } from '../config/site';
import { formatRupiah } from './format';

interface WhatsAppOptions {
  whatsappNumber?: string;
  siteUrl?: string;
}

export function buildWhatsAppLink(
  land?: Land,
  options: WhatsAppOptions = {},
): string | null {
  const number = (options.whatsappNumber ?? WHATSAPP_NUMBER).replace(/\D/g, '');
  if (!number || number.includes('x') || number.length < 10) return null;

  const siteUrl = options.siteUrl ?? SITE_URL;
  const path = land ? `/katalog/${land.slug}` : '/';
  const message = land
    ? `Halo, saya tertarik dengan tanah *${land.nama}* di ${land.lokasi.desa}, ${land.lokasi.kecamatan}, ${land.lokasi.kota} (luas ${land.luas_m2} m², harga ${formatRupiah(land.harga_total)}). Apakah masih tersedia? Link: ${new URL(path, siteUrl).toString()}`
    : `Halo, saya ingin bertanya tentang pilihan tanah. Link: ${new URL('/', siteUrl).toString()}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(land?.pesan_wa_custom || message)}`;
}

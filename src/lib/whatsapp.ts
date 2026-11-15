import type { Land } from '../data/lands';
import { SITE_URL, WHATSAPP_NUMBER } from '../config/site';
import { formatLandPrice, formatLocation, formatRupiah } from './format';
import { toSafeExternalUrl } from './url';

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

  const siteUrl = toSafeExternalUrl(options.siteUrl ?? SITE_URL);
  const path = land ? `/katalog/${land.slug}` : '/';
  const linkSuffix =
    siteUrl && !siteUrl.includes('example.com')
      ? ` Link: ${new URL(path, siteUrl).toString()}`
      : '';

  let message: string;
  if (!land) {
    message = `Halo, saya ingin bertanya tentang pilihan properti di Alura Property.${linkSuffix}`;
  } else if (
    (land.transaksi ?? 'jual') === 'jual' &&
    typeof land.luas_m2 === 'number' &&
    typeof land.harga_total === 'number' &&
    !land.harga_nego &&
    !land.lokasi.desa.toLowerCase().includes('perlu konfirmasi') &&
    !land.lokasi.kota.toLowerCase().includes('perlu konfirmasi')
  ) {
    message = `Halo, saya tertarik dengan tanah *${land.nama}* di ${land.lokasi.desa}, ${land.lokasi.kecamatan}, ${land.lokasi.kota} (luas ${land.luas_m2} m², harga ${formatRupiah(land.harga_total)}). Apakah masih tersedia?${linkSuffix}`;
  } else {
    const location = formatLocation(land.lokasi, 'full');
    const priceSummary = formatLandPrice(land).primary;
    const areaPart =
      typeof land.luas_m2 === 'number'
        ? `luas ${land.luas_m2.toLocaleString('id-ID')} m², `
        : '';
    const actionWord =
      land.transaksi === 'sewa' ? 'properti sewa' : 'properti';
    message = `Halo, saya tertarik dengan ${actionWord} *${land.nama}* di ${location} (${areaPart}penawaran ${priceSummary}). Apakah masih tersedia?${linkSuffix}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(land?.pesan_wa_custom || message)}`;
}

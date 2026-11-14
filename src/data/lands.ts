import mainPhoto from '../../Asset/Gambar/contoh-kavling-perumahan-01.webp';
import gardenPhoto from '../../Asset/Gambar/contoh-kebun-01.webp';
import ricePhoto from '../../Asset/Gambar/contoh-sawah-01.webp';
import commercialPhoto from '../../Asset/Gambar/contoh-komersial-01.webp';
import landscapePhoto from '../../Asset/Gambar/contoh-kavling-lanskap-01.webp';
import detailPhoto from '../../Asset/Gambar/contoh-detail-tanah-01.webp';

export type LandCategory =
  | 'kavling-perumahan'
  | 'kebun'
  | 'sawah'
  | 'komersial';
export type LandStatus = 'tersedia' | 'dipesan' | 'terjual';
export type LandLegalStatus = 'SHM' | 'HGB' | 'AJB';

export interface Land {
  id: string;
  slug: string;
  nama: string;
  kategori: LandCategory;
  lokasi: { desa: string; kecamatan: string; kota: string };
  maps_url: string;
  luas_m2: number;
  harga_total: number;
  harga_per_m2: number;
  legalitas: LandLegalStatus;
  status: LandStatus;
  unggulan: boolean;
  deskripsi: string;
  fasilitas_sekitar: string[];
  foto: string[];
  foto_utama: string;
  created_at: string;
  contoh: true;
  foto_url?: string;
  pesan_wa_custom?: string;
}

const samplePhotos = [
  mainPhoto.src,
  landscapePhoto.src,
  detailPhoto.src,
  gardenPhoto.src,
  ricePhoto.src,
];

const sampleLands: Land[] = [
  {
    id: 'contoh-001',
    slug: 'kavling-sukamaju',
    nama: 'Kavling Sukamaju',
    kategori: 'kavling-perumahan',
    lokasi: { desa: 'Sukamaju', kecamatan: 'Cisarua', kota: 'Bogor' },
    maps_url: 'https://maps.google.com/?q=land+sample',
    luas_m2: 500,
    harga_total: 250_000_000,
    harga_per_m2: 500_000,
    legalitas: 'SHM',
    status: 'tersedia',
    unggulan: true,
    deskripsi: 'Contoh data untuk pratinjau. Detail lokasi dan dokumen perlu diverifikasi.',
    fasilitas_sekitar: ['Jalan lingkungan', 'Permukiman sekitar'],
    foto: samplePhotos,
    foto_utama: mainPhoto.src,
    created_at: '2026-11-14',
    contoh: true,
  },
  {
    id: 'contoh-002',
    slug: 'kebun-mekarsari',
    nama: 'Kebun Mekarsari',
    kategori: 'kebun',
    lokasi: { desa: 'Mekarsari', kecamatan: 'Cisarua', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 1200,
    harga_total: 360_000_000,
    harga_per_m2: 300_000,
    legalitas: 'SHM',
    status: 'tersedia',
    unggulan: true,
    deskripsi: 'Contoh kebun dengan suasana hijau. Data lokasi dan fasilitas hanya untuk uji tampilan.',
    fasilitas_sekitar: ['Akses jalan desa'],
    foto: [gardenPhoto.src, detailPhoto.src, landscapePhoto.src, mainPhoto.src],
    foto_utama: gardenPhoto.src,
    created_at: '2026-11-12',
    contoh: true,
  },
  {
    id: 'contoh-003',
    slug: 'sawah-cibening',
    nama: 'Sawah Cibening',
    kategori: 'sawah',
    lokasi: { desa: 'Cibening', kecamatan: 'Sukamaju', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 1800,
    harga_total: 540_000_000,
    harga_per_m2: 300_000,
    legalitas: 'AJB',
    status: 'dipesan',
    unggulan: false,
    deskripsi: 'Contoh data sawah untuk uji status dipesan. Bukan penawaran tanah sungguhan.',
    fasilitas_sekitar: ['Saluran irigasi'],
    foto: [ricePhoto.src, landscapePhoto.src, detailPhoto.src],
    foto_utama: ricePhoto.src,
    created_at: '2026-11-08',
    contoh: true,
  },
  {
    id: 'contoh-004',
    slug: 'tanah-jalan-raya',
    nama: 'Tanah Jalan Raya',
    kategori: 'komersial',
    lokasi: { desa: 'Cibening', kecamatan: 'Cisarua', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 700,
    harga_total: 700_000_000,
    harga_per_m2: 1_000_000,
    legalitas: 'HGB',
    status: 'tersedia',
    unggulan: true,
    deskripsi: 'Contoh kavling kategori komersial. Akses dan peruntukan wajib dikonfirmasi.',
    fasilitas_sekitar: ['Jalan lokal'],
    foto: [commercialPhoto.src, mainPhoto.src, detailPhoto.src],
    foto_utama: commercialPhoto.src,
    created_at: '2026-11-06',
    contoh: true,
  },
  {
    id: 'contoh-005',
    slug: 'kavling-pasirangin',
    nama: 'Kavling Pasirangin',
    kategori: 'kavling-perumahan',
    lokasi: { desa: 'Pasirangin', kecamatan: 'Sukamaju', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 450,
    harga_total: 202_500_000,
    harga_per_m2: 450_000,
    legalitas: 'SHM',
    status: 'tersedia',
    unggulan: true,
    deskripsi: 'Contoh kavling untuk menguji variasi harga dan luas.',
    fasilitas_sekitar: ['Permukiman sekitar'],
    foto: [landscapePhoto.src, mainPhoto.src, detailPhoto.src],
    foto_utama: landscapePhoto.src,
    created_at: '2026-11-02',
    contoh: true,
  },
  {
    id: 'contoh-006',
    slug: 'kebun-cipaku',
    nama: 'Kebun Cipaku',
    kategori: 'kebun',
    lokasi: { desa: 'Cipaku', kecamatan: 'Sukamaju', kota: 'Bogor' },
    maps_url: '',
    luas_m2: 950,
    harga_total: 285_000_000,
    harga_per_m2: 300_000,
    legalitas: 'SHM',
    status: 'terjual',
    unggulan: false,
    deskripsi: 'Contoh data terjual untuk menguji tampilan status.',
    fasilitas_sekitar: [],
    foto: [gardenPhoto.src, detailPhoto.src],
    foto_utama: gardenPhoto.src,
    created_at: '2026-10-28',
    contoh: true,
  },
];

export const lands = sampleLands;

import giwanganFront from '../assets/listings/tanah-usaha-giwangan/01-tampak-depan.webp';
import palaganFront from '../assets/listings/tanah-palagan/01-tampak-depan.webp';
import jakalFront from '../assets/listings/tanah-jakal-km15/01-tampak-depan.webp';
import baciroFront from '../assets/listings/rumah-baciro-gondokusuman/01-tampak-depan.webp';
import pajanganRoad from '../assets/listings/sewa-lahan-pajangan-bantul/01-akses-jalan.webp';
import rukoFront from '../assets/listings/sewa-ruko-ringroad-utara/01-tampak-depan.webp';
import rukoRoad from '../assets/listings/sewa-ruko-ringroad-utara/02-akses-ringroad.webp';
import rukoFloor1Front from '../assets/listings/sewa-ruko-ringroad-utara/03-interior-lantai-1-depan.webp';
import rukoFloor1Back from '../assets/listings/sewa-ruko-ringroad-utara/04-interior-lantai-1-belakang.webp';
import rukoUpperFloor from '../assets/listings/sewa-ruko-ringroad-utara/05-interior-lantai-atas.webp';

export type LandCategory =
  | 'tanah'
  | 'rumah'
  | 'komersial'
  | 'kost'
  | 'kavling-perumahan'
  | 'kebun'
  | 'sawah';
export type LandTransaction = 'jual' | 'sewa';
export type LandStatus = 'tersedia' | 'dipesan' | 'terjual';
export type LandLegalStatus =
  | 'SHM'
  | 'SHM Pekarangan'
  | 'SHM/PBG'
  | 'HGB'
  | 'AJB'
  | 'Perlu konfirmasi';

export interface LandSpecItem {
  label: string;
  value: string;
}

export interface Land {
  id: string;
  slug: string;
  nama: string;
  kategori: LandCategory;
  transaksi?: LandTransaction;
  periode_sewa?: 'tahun' | 'bulan';
  lokasi: { desa: string; kecamatan: string; kota: string };
  maps_url: string;
  luas_m2?: number;
  luas_bangunan_m2?: number;
  lebar_depan_m?: number;
  harga_total?: number;
  harga_per_m2?: number;
  harga_nego?: boolean;
  legalitas: LandLegalStatus;
  status: LandStatus;
  unggulan: boolean;
  ringkasan_kartu?: string;
  deskripsi: string;
  fasilitas_sekitar: string[];
  spesifikasi_detail?: LandSpecItem[];
  foto: string[];
  foto_utama: string;
  foto_utama_portrait?: boolean;
  created_at: string;
  contoh?: boolean;
  foto_url?: string;
  pesan_wa_custom?: string;
}

const verifiedListings: Land[] = [
  {
    id: 'alura-001',
    slug: 'tanah-usaha-giwangan-umbulharjo',
    nama: 'Tanah & Tempat Usaha Giwangan',
    kategori: 'tanah',
    transaksi: 'jual',
    lokasi: {
      desa: 'Giwangan',
      kecamatan: 'Umbulharjo',
      kota: 'Kota Yogyakarta',
    },
    maps_url: '',
    luas_m2: 1775,
    lebar_depan_m: 14,
    harga_per_m2: 3_750_000,
    legalitas: 'SHM Pekarangan',
    status: 'tersedia',
    unggulan: true,
    deskripsi:
      'Tanah pekarangan dan tempat usaha strategis di Giwangan, Umbulharjo, Kota Yogyakarta dengan akses mobil masuk lancar. Bidang seluas 1.775 m² (lebar depan 14 m) ini dilengkapi bonus bangunan, gazebo, dan kebun anggur sesuai keterangan pemilik.',
    fasilitas_sekitar: [
      'Kampus UAD Pusat',
      'STIKES Suryaglobal',
      'Terminal Giwangan',
      'Pasar Giwangan',
      'Markas Brimob',
    ],
    spesifikasi_detail: [
      { label: 'Luas tanah', value: '1.775 m²' },
      { label: 'Lebar depan', value: '14 m' },
      { label: 'Legalitas', value: 'SHM Pekarangan' },
      { label: 'Akses jalan', value: 'Mobil masuk lancar' },
      { label: 'Bonus aset', value: 'Bangunan, gazebo & kebun anggur' },
    ],
    foto: [giwanganFront.src],
    foto_utama: giwanganFront.src,
    foto_utama_portrait: giwanganFront.height > giwanganFront.width,
    created_at: '2026-11-14',
    contoh: false,
  },
  {
    id: 'alura-002',
    slug: 'tanah-kosong-jl-palagan',
    nama: 'Tanah Kosong Jl. Palagan',
    kategori: 'tanah',
    transaksi: 'jual',
    lokasi: {
      desa: 'Perlu konfirmasi',
      kecamatan: 'Jl. Palagan',
      kota: 'Perlu konfirmasi',
    },
    maps_url: '',
    luas_m2: 244,
    lebar_depan_m: 9,
    harga_per_m2: 15_000_000,
    harga_nego: true,
    legalitas: 'Perlu konfirmasi',
    status: 'tersedia',
    unggulan: true,
    ringkasan_kartu: '244 m² · Lebar depan 9 m',
    deskripsi:
      'Tanah kosong di tepi Jl. Palagan dengan luas 244 m² dan lebar depan 9 m. Berada di tepi jalan aspal utama dan harga penawaran masih dapat dinegosiasikan.',
    fasilitas_sekitar: ['Akses langsung jalan aspal Jl. Palagan'],
    spesifikasi_detail: [
      { label: 'Luas tanah', value: '244 m²' },
      { label: 'Lebar depan', value: '9 m' },
    ],
    foto: [palaganFront.src],
    foto_utama: palaganFront.src,
    foto_utama_portrait: palaganFront.height > palaganFront.width,
    created_at: '2026-11-14',
    contoh: false,
  },
  {
    id: 'alura-003',
    slug: 'tanah-pekarangan-utara-uii-jakal-km15',
    nama: 'Tanah Pekarangan Utara UII Jakal Km 15',
    kategori: 'tanah',
    transaksi: 'jual',
    lokasi: {
      desa: 'Perlu konfirmasi',
      kecamatan: 'Jl. Kaliurang Km 15',
      kota: 'Perlu konfirmasi',
    },
    maps_url: '',
    luas_m2: 2619,
    harga_per_m2: 5_500_000,
    harga_nego: true,
    legalitas: 'SHM Pekarangan',
    status: 'tersedia',
    unggulan: true,
    deskripsi:
      'Tanah pekarangan berstatus SHM seluas 2.619 m² di utara kampus UII, Jl. Kaliurang Km 15, tepat di samping selatan Hotel Lido. Harga penawaran masih dapat dinegosiasikan.',
    fasilitas_sekitar: ['Kampus UII Jl. Kaliurang', 'Samping selatan Hotel Lido'],
    spesifikasi_detail: [
      { label: 'Luas tanah', value: '2.619 m²' },
      // Materi penjual menulis "35 m2"; ditandai perlu konfirmasi sampai satuan meter dipastikan
      { label: 'Legalitas', value: 'SHM Pekarangan' },
    ],
    foto: [jakalFront.src],
    foto_utama: jakalFront.src,
    foto_utama_portrait: jakalFront.height > jakalFront.width,
    created_at: '2026-11-14',
    contoh: false,
  },
  {
    id: 'alura-004',
    slug: 'rumah-baciro-gondokusuman',
    nama: 'Rumah Kawasan Baciro, Gondokusuman',
    kategori: 'rumah',
    transaksi: 'jual',
    lokasi: {
      // Materi WhatsApp menulis "kelurahan Gondokusuman banciro"
      desa: 'Baciro',
      kecamatan: 'Gondokusuman',
      kota: 'Kota Yogyakarta',
    },
    maps_url: '',
    luas_m2: 480,
    harga_total: 8_000_000_000,
    harga_nego: true,
    legalitas: 'Perlu konfirmasi',
    status: 'tersedia',
    unggulan: true,
    deskripsi:
      'Rumah tinggal berpagar dengan halaman di kawasan Baciro, Gondokusuman, Kota Yogyakarta. Berdiri di atas lahan seluas 480 m² di tepi jalan aspal lingkungan perkotaan.',
    fasilitas_sekitar: ['Akses jalan aspal lingkungan perkotaan'],
    spesifikasi_detail: [{ label: 'Luas tanah', value: '480 m²' }],
    foto: [baciroFront.src],
    foto_utama: baciroFront.src,
    foto_utama_portrait: baciroFront.height > baciroFront.width,
    created_at: '2026-11-14',
    contoh: false,
  },
  {
    id: 'alura-005',
    slug: 'sewa-lahan-pabrik-gudang-pajangan-bantul',
    nama: 'Lahan Sewa Pabrik & Gudang Pajangan',
    kategori: 'komersial',
    transaksi: 'sewa',
    periode_sewa: 'tahun',
    lokasi: {
      desa: 'Perlu konfirmasi',
      kecamatan: 'Pajangan',
      kota: 'Bantul',
    },
    maps_url: '',
    luas_m2: 9800,
    lebar_depan_m: 70,
    harga_per_m2: 10_000,
    legalitas: 'SHM',
    status: 'tersedia',
    unggulan: false,
    deskripsi:
      'Lahan disewakan seluas 9.800 m² di area Pajangan, Bantul untuk kebutuhan pabrik, gudang, maupun perkantoran. Memiliki lebar depan 70 m, legalitas SHM, dan akses langsung jalan utama.',
    fasilitas_sekitar: ['Akses langsung jalan utama area Pajangan'],
    spesifikasi_detail: [
      { label: 'Luas tanah', value: '9.800 m²' },
      { label: 'Lebar depan', value: '70 m' },
      { label: 'Peruntukan', value: 'Pabrik, gudang, perkantoran' },
      { label: 'Legalitas', value: 'SHM' },
    ],
    foto: [pajanganRoad.src],
    foto_utama: pajanganRoad.src,
    foto_utama_portrait: pajanganRoad.height > pajanganRoad.width,
    created_at: '2026-11-14',
    contoh: false,
  },
  {
    id: 'alura-006',
    slug: 'sewa-ruko-3-lantai-ringroad-utara',
    nama: 'Ruko 3 Lantai Ringroad Utara',
    kategori: 'komersial',
    transaksi: 'sewa',
    periode_sewa: 'tahun',
    lokasi: {
      desa: 'Perlu konfirmasi',
      kecamatan: 'Ringroad Utara',
      kota: 'Perlu konfirmasi',
    },
    maps_url: '',
    harga_total: 125_000_000,
    legalitas: 'Perlu konfirmasi',
    status: 'tersedia',
    unggulan: false,
    ringkasan_kartu: 'Bangunan 3 lantai · Akses Ringroad',
    deskripsi:
      'Ruko 3 lantai siap pakai di tepi jalur Ringroad Utara dengan area parkir depan dan akses langsung jalan arteri, cocok untuk kantor maupun usaha komersial.',
    fasilitas_sekitar: ['Akses langsung jalur Ringroad Utara'],
    spesifikasi_detail: [
      { label: 'Bangunan', value: '3 lantai dengan pintu folding gate' },
    ],
    foto: [
      rukoFront.src,
      rukoRoad.src,
      rukoFloor1Front.src,
      rukoFloor1Back.src,
      rukoUpperFloor.src,
    ],
    foto_utama: rukoFront.src,
    foto_utama_portrait: rukoFront.height > rukoFront.width,
    created_at: '2026-11-14',
    contoh: false,
  },
];

export const lands: Land[] = verifiedListings;

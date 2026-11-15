import suparmanFront from '../assets/listings/_draft-tanah-suparman/01-tampak-depan.webp';
import suparmanSide from '../assets/listings/_draft-tanah-suparman/02-tampak-samping.webp';
import suparmanStreet from '../assets/listings/_draft-tanah-suparman/03-akses-jalan.webp';
import wonocaturJoglo from '../assets/listings/_draft-rumah-joglo-wonocatur/01-teras-joglo.webp';
import rumahB10Front from '../assets/listings/_draft-rumah-b10/01-tampak-depan.webp';

export interface DraftProperty {
  id: string;
  nama: string;
  kategori: 'tanah' | 'rumah' | 'kost';
  transaksi: 'jual' | 'sewa';
  lokasiRingkas: string;
  ringkasanMateri: string;
  fotoTersedia: string[];
  perluDilengkapi: string[];
}

/**
 * Daftar properti yang belum dipublikasikan ke katalog publik (`lands.ts`)
 * karena informasi penting (harga atau foto asli) masih perlu konfirmasi.
 */
export const draftProperties: DraftProperty[] = [
  {
    id: 'draft-001',
    nama: 'Tanah Kosong Hak Milik Jl. Suparman',
    kategori: 'tanah',
    transaksi: 'jual',
    lokasiRingkas: 'Jl. Suparman, dekat TK Negeri 7 Yogyakarta',
    ringkasanMateri:
      'Tanah kosong hak milik (SHM) seluas 176 m² di Jl. Suparman, dekat TK Negeri 7 Yogyakarta.',
    fotoTersedia: [suparmanFront.src, suparmanSide.src, suparmanStreet.src],
    perluDilengkapi: [
      'Harga penawaran (total dan/atau per m²)',
      'Lebar depan',
      'Kelurahan/kecamatan pasti & status ketersediaan',
    ],
  },
  {
    id: 'draft-002',
    nama: 'Rumah & Paviliun Joglo Jl. Wonocatur',
    kategori: 'rumah',
    transaksi: 'jual',
    lokasiRingkas:
      'Jl. Wonocatur, Gg. Merpati No. 65, Gedong Kuning, Banguntapan (50 m dari lampu merah Gedong Kuning)',
    ringkasanMateri:
      'LT 995 m², LB 400 m², 6 KT ber-AC dengan KM dalam water heater (4 di paviliun), 1 KT non-AC, 1 KT & 1 KM pembantu, dapur bersih/kotor, ruang keluarga, ruang makan, gudang bersih, gazebo, musholla, kolam ikan, teras joglo, garasi 2 mobil, halaman parkir 10 mobil. Dekat Pamela 3, Indomaret, ATM, kantor pos, Gembira Loka, Kotagede.',
    fotoTersedia: [wonocaturJoglo.src],
    perluDilengkapi: [
      'Harga jual',
      'Legalitas (SHM/PBG)',
      'Status ketersediaan (dijual/disewakan & kondisi terkini)',
    ],
  },
  {
    id: 'draft-003',
    nama: 'Rumah 2 Lantai Nomor B 10 (tanpa teks keterangan)',
    kategori: 'rumah',
    transaksi: 'jual',
    lokasiRingkas: 'Perlu konfirmasi',
    ringkasanMateri:
      'Baru tersedia 1 foto eksterior rumah 2 lantai putih (nomor B 10). Belum ada teks deskripsi di percakapan WhatsApp.',
    fotoTersedia: [rumahB10Front.src],
    perluDilengkapi: [
      'Seluruh keterangan: lokasi, luas tanah, luas bangunan, jumlah kamar, harga, legalitas, dan status',
    ],
  },
  {
    id: 'draft-004',
    nama: 'Kost Eksklusif 2 Unit (20 Kamar) Maguwoharjo',
    kategori: 'kost',
    transaksi: 'jual',
    lokasiRingkas:
      'Maguwoharjo, Depok, Sleman (koridor Jl. Laksda Adisutjipto / Jl. Solo)',
    ringkasanMateri:
      '2 unit @10 kamar (total 20 kamar), kondisi full penghuni, harga Rp 5.000.000.000 nego. Tarif sewa 1,5 jt/bln (sendiri) atau 2 jt/bln (berdua). Per unit: LT 150 m, LB 450 m, 10 KT, 10 KM, listrik 1300 VA/kamar, garasi 8 mobil + motor, sumur bor, rooftop, AC, TV 32", water heater, mini kitchen, WiFi. Dekat Stasiun Maguwo, Bandara Adisucipto, UIN, Plaza Ambarrukmo, UPN, Atma Jaya, UII Ekonomi, UNY, UGM, RS JIH.',
    fotoTersedia: [],
    perluDilengkapi: [
      'Foto asli properti',
      'Legalitas sertifikat & PBG/IMB',
      'Kepastian skema jual (2 unit sekaligus atau bisa per unit) & konfirmasi LT/LB total',
    ],
  },
  {
    id: 'draft-005',
    nama: 'Kost Eksklusif Baru 20 Kamar Dekat Kampus UMY',
    kategori: 'kost',
    transaksi: 'jual',
    lokasiRingkas: 'Sekitar Kampus UMY (kelurahan/kecamatan perlu konfirmasi)',
    ringkasanMateri:
      'Kost baru siap beroperasi 20 + 1 KT, 20 + 1 KM (kamar 3x4 m), full furnished, legalitas SHM/PBG, LT 300 m², LB 350 m², harga Rp 4,6 M nego. Tarif sewa 1,6–1,8 jt/bln. Fasilitas: listrik token per kamar, ruang tamu/dapur/makan/belajar/jemuran + rooftop, fitness area, carport luas, sumur pompa, akses aspal simpangan mobil.',
    fotoTersedia: [],
    perluDilengkapi: [
      'Foto asli properti',
      'Kelurahan & kecamatan resmi',
      'Status ketersediaan terkini',
    ],
  },
];

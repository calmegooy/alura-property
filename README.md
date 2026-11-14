# Alura Property

Website katalog tanah statis berbasis Astro, TypeScript, dan Tailwind CSS v4.

## Menjalankan di Windows

```powershell
npm install
npm run dev
```

Pemeriksaan dan build:

```powershell
npm run check
npm test
npm run build
```

## Konfigurasi

- Ubah nama, tagline, deskripsi, nomor WhatsApp, dan alamat situs di `src/config/site.ts` (atau env `PUBLIC_WHATSAPP_NUMBER` / `PUBLIC_SITE_URL`).
- Aset sumber logo, gambar, dan video disimpan di folder `Alura Propery - Asset Logo` dan `Asset/`. Salinan yang dipakai situs berada di `public/brand`.
- Contoh tanah ada di `src/data/lands.ts`; seluruhnya data fiktif untuk pratinjau.
- Token desain editorial dan katalog digabung di `src/styles/theme.css`; token katalog yang bertabrakan memakai awalan `cat-`. Aksen aksi memakai alias `--color-accent*`.

## Frame hero

Ekstrak video Google Flow di PowerShell:

```powershell
node scripts/extract-frames.mjs "Asset/Video/hero-desktop.mp4" "Asset/Video/hero-mobile.mp4"
```

Frame WebP dan manifest dibuat di `public/frames/`. Pastikan ffmpeg dan ffprobe tersedia di PATH.

Admin/CMS belum termasuk tahap situs publik ini.

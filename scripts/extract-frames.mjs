import { spawnSync } from 'node:child_process';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const desktopInput = process.argv[2];
const mobileInput = process.argv[3] || desktopInput;
if (!desktopInput) {
  console.error('Usage: node scripts/extract-frames.mjs <desktop-video> [mobile-video]');
  process.exit(1);
}

const ffmpeg = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' });
if (ffmpeg.error || ffmpeg.status !== 0) {
  console.error('ffmpeg tidak ditemukan. Windows: winget install Gyan.FFmpeg, lalu buka ulang terminal.');
  process.exit(1);
}

const outputRoot = path.join(root, 'public', 'frames');
const outputDirs = ['desktop', 'mobile'];
await mkdir(outputRoot, { recursive: true });
for (const folder of outputDirs) await mkdir(path.join(outputRoot, folder), { recursive: true });

const jobs = [
  ['desktop', desktopInput, 'fps=12,scale=1280:-2', 75],
  ['mobile', mobileInput, 'fps=12,scale=720:-2', 72],
];
for (const [set, video, filter, quality] of jobs) {
  const output = path.join(outputRoot, set, 'frame_%04d.webp');
  const result = spawnSync('ffmpeg', ['-y', '-i', video, '-vf', filter, '-an', '-c:v', 'libwebp', '-quality', String(quality), output], { stdio: 'inherit' });
  if (result.status !== 0) throw new Error(`ffmpeg gagal membuat frame ${set}`);
}

const manifest = {};
for (const set of outputDirs) {
  const directory = path.join(outputRoot, set);
  const files = (await readdir(directory)).filter((name) => /^frame_\d{4}\.webp$/.test(name)).sort();
  if (!files.length) throw new Error(`Tidak ada frame di ${directory}`);
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'json', path.join(directory, files[0])], { encoding: 'utf8' });
  const dimensions = JSON.parse(probe.stdout).streams?.[0];
  manifest[set] = { count: files.length, width: dimensions.width, height: dimensions.height, pattern: 'frame_%04d.webp' };
}
const posterInput = path.join(outputRoot, 'desktop', 'frame_0001.webp');
const poster = path.join(outputRoot, 'poster.webp');
await writeFile(poster, await readFile(posterInput));
const mobilePosterInput = path.join(outputRoot, 'mobile', 'frame_0001.webp');
await writeFile(path.join(outputRoot, 'poster-mobile.webp'), await readFile(mobilePosterInput));
manifest.poster = 'poster.webp';
manifest.mobilePoster = 'poster-mobile.webp';
await writeFile(path.join(outputRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Frame selesai dibuat: desktop=${manifest.desktop.count}, mobile=${manifest.mobile.count}`);

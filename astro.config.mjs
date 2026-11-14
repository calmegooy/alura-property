import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

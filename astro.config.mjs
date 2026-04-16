import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

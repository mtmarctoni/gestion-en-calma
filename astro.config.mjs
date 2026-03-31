import { fileURLToPath } from 'node:url';

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://gestion-en-calma.vercel.app';
const sanityProjectId =
  process.env.PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_STUDIO_PROJECT_ID ?? 'ppsg7ml5';
const sanityDataset =
  process.env.PUBLIC_SANITY_DATASET ?? process.env.SANITY_STUDIO_DATASET ?? 'production';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@studio': fileURLToPath(new URL('./studio', import.meta.url)),
      },
    },
  },

  integrations: [
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: false,
      studioBasePath: '/studio',
      studioRouterHistory: 'hash',
    }),
    react(),
    sitemap(),
  ],
  adapter: vercel(),
});

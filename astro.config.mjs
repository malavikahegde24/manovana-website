import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Pure static output — Netlify serves /dist directly (see netlify.toml). No adapter is
// needed for a static build; Netlify Forms are detected from the static HTML at deploy.
export default defineConfig({
  site: 'https://manovana.netlify.app',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    ssr: {
      // three / R3F ship ESM that must not be externalized during SSG
      noExternal: ['three', '@react-three/fiber', '@react-three/drei'],
    },
  },
});

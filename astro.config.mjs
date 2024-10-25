import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from './src/site_config';
import fs from 'fs';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: '',
  integrations: [tailwind(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        external: ['shiki/themes/hc_light.json'],
      },
    },
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
  },
});

function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}

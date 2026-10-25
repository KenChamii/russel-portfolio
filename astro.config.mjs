import { defineConfig } from 'astro/config';

// Fully static output. Replace `site` with the production URL once it is known.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  server: {
    port: 8090,
    host:'0.0.0.0',
    open: true
  },
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
  ],
});

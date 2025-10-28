import { defineConfig } from 'vite';

export default defineConfig({
  base: '/P001-CRUD-POKEMON/',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
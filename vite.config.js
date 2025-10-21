import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/P001-CRUD-POKEMON/', // 👈 reemplaza con el nombre exacto de tu repo
  build: {
    outDir: 'dist',
  },
});
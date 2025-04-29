import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 ADD THIS LINE to fix blank page / 404
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 3000,
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend', // 👈 Point to your frontend directory
  plugins: [react()],
  base: './', // Good for relative asset paths in production
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 3000,
  },
});

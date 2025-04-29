export default defineConfig({
  root: 'frontend',  // Points to your frontend directory
  plugins: [react()],
  base: './',  // Ensures the correct path resolution in production
  build: {
    outDir: 'dist',  // Build output directory
  },
  server: {
    host: true,
    port: 3000,
  },
});

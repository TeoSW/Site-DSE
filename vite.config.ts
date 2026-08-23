import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
// __dirname nu există în module ESM, deci căile se rezolvă din import.meta.url
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Site-DSE/', // Important for GitHub Pages
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)), // Add this for easier imports
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    assetsDir: 'assets', // This will put assets in build/assets
    // Copy assets that are not imported
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
  },
  // Ensure assets are served correctly in dev
  publicDir: 'public',
});
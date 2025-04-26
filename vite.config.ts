// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['omex-frontend.onrender.com'], // <- Added this line
    proxy: {
      '/api': {
        target: 'https://omex-final.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      ignored: ['**/src/assets/Vikram.png'],
    },
  },
  build: {
    sourcemap: false,
  },
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/BeyondChats_Assignment/', // 👈 Set this to your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

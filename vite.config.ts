import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel sert le site à la racine
  base: '/',
  build: {
    outDir: 'dist',
  },
})
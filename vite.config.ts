import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT pour GitHub Pages (projet publié sous /Asma-Portfolio/)
 /*  base: '/Asma-Portfolio/', */
     base: '/',
  // Optionnel: Vite sort déjà dans "dist" par défaut
  build: {
    outDir: 'dist',
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', 
    port: 3000,      
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/uxUTP/',   // 👈 NOMBRE EXACTO DEL REPO
  plugins: [react()],
})

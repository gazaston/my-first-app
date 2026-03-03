import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://gazaston.github.io/my-first-app/',
  plugins: [react()],
})

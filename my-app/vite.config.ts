/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/my-app',
  server: {
    allowedHosts: true,
    host: true,
    port: 8081,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

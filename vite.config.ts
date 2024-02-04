import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Card-list/",
  resolve: {
    alias: {
      src: '/src',
    },
  },
})

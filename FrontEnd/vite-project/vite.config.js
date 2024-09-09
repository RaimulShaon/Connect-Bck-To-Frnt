import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'http://localhost:3000', //production er somoy oi URL dite hobe..
    }
  },
  plugins: [react()],
})

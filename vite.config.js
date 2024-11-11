import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  base: '/Assignment/',  // Adjust this path to your GitHub repo name
  plugins: [react()]
}

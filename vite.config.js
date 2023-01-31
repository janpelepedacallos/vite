import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.PORT)
  },
  define: {
    'process.env.PORT': process.env.PORT,
    'process.env.USER': `"${process.env.USER}"`,
    'process.env.PASSWORD': `"${process.env.PASSWORD}"`
  },
  plugins: [react()],
})

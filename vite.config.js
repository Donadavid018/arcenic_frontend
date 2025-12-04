import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const repoName = '/Arcnetic/';
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})

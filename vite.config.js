/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const repoName = '/Arcnetic/';
// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
  plugins: [react()],
})*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// --- EXISTING CONFIG ---
// NOTE: Make sure 'Arcnetic' is your repository name, not just your username.
const repoName = '/Arcnetic/'; 

// --- NEW CONFIG VARIABLE ---
// Replace 'https://your-ngrok-url.ngrok-free.app' with your actual ngrok URL 
// (or the wildcard domain if you have a paid plan).
const ngrokUrl = 'https://your-ngrok-url.ngrok-free.app'; 
// -------------------------

// https://vitejs.dev/config/
export default defineConfig({
  // 1. PRODUCTION DEPLOYMENT CONFIG (Existing)
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
  
  plugins: [react()],
  
  // 2. DEVELOPMENT SERVER CONFIG (NEW)
  server: {
    // ESSENTIAL: Allows the server to listen on all interfaces (0.0.0.0)
    // so the external ngrok proxy can connect.
    host: '0.0.0.0', 

    // NON-STANDARD FIX: Included to resolve the specific "allowedHosts" 
    // error message you were receiving.
    allowedHosts: [ngrokUrl] 
  }
})

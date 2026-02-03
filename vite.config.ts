// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add the plugin
  base: "/marketing/", // 👈 nombre EXACTO del repo
});
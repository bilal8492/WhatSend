import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import {VitePWA} from 'vite-plugin-pwa'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/whatsend/',
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: "WhatSend",
        short_name: "WhatSend",
        icons: [
          {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png'
          },
          {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
          },
          {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
          },
          {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
          }
      ],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff"
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})

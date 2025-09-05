import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      UnoCSS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 6262,
    // proxy: {
    //   // 开发代理
    //   '/api': {
    //     target: 'http://localhost:5001/',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  }
})

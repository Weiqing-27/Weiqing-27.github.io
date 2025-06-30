import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path' // 引入 path 模块

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        additionalData: `@use "@/assets/css/variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 添加 @ 指向 src 目录
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
})
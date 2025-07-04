import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path' // 引入 path 模块

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName(fileName) {
          const match = DRIVE_LETTER_REGEX.exec(fileName);
          const driveLetter = match ? match[0] : "";
          return (
            driveLetter +
            fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      },
    },
  },
    base: './Weiqing-27.github.io/', // 设置部署的基础路径
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
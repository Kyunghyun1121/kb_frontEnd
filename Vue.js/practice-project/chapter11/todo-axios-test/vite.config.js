import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        // 프록시할 경로 패턴
        target: 'http://localhost:3000', // 실제 API 서버 주소
        changeOrigin: true, // 호스트 헤더 변경 여부
        rewrite: (path) => path.replace(/^\/api/, ''), // URL 경로 재작성 규칙
      },
    },
  },
});

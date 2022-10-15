/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // use vite server to proxy request to graphql endpoint
    server: {
      proxy: {
        '/graphql': {
          target: env.VITE_APP_API_ENDPOINT,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/graphql/, ''),
        },
      },
    },
  };
});

/* eslint-disable import/no-extraneous-dependencies */
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'upstyle',
      project: 'javascript-react',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/styles.css',
          dest: '',
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
  },
});

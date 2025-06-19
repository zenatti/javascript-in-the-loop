import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/examples/**'],
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    globals: true,
    watch: false,
  },
});
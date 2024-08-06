import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ include: ['./**/*.ts', './vite.config.ts'] })],
  build: {
    outDir: ".dist",
    minify: false,
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'vitePlugins',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['shelljs', 'lodash-es']
    }
  }
})

import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm', 'cjs'],
  sourcemap: false,
  dts: true,
  treeshake: true,
  clean: true,
  outDir: 'dist',
})

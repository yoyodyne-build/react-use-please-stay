import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'module',
    sourcemap: true,
    strict: false,
  },
  plugins: [typescript()],
  external: ['react'],
};

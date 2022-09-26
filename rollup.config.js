import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import { eslint } from 'rollup-plugin-eslint'
export default {
  input: './src/main.ts',
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    json(),
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js']
    })
  ],
  // 指出应将哪些模块视为外部模块
  external: ['lodash-es'],
  output: [
    {
      format: 'cjs',
      file: 'lib/nw-utils.cjs.js',
      sourcemap: true
    },
    {
      format: 'es',
      file: 'lib/nw-utils.esm.js',
      sourcemap: true
    }
  ]
}

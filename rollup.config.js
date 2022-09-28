import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import { eslint } from 'rollup-plugin-eslint'
import dts from "rollup-plugin-dts";
const config = [
  {
    input: './src/index.ts',
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
        exclude: ['node_modules/**', 'dist/**', '*.js']
      })
    ],
    // 指出应将哪些模块视为外部模块
    external: ['lodash-es'],
    output: [
      {
        format: 'cjs',
        file: 'dist/nw-tools.cjs.js',
        sourcemap: true
      },
      {
        format: 'es',
        file: 'dist/nw-tools.esm.js',
        sourcemap: true
      }
    ]
  },
  {
    input: './src/index.ts',
    output: [{ file: "dist/nw-tools.d.ts", format: "es" }],
    plugins: [dts()],
  }
]
export default config

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended', // ts 推荐规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'no-useless-escape': ['off'],
    'prettier/prettier': ['off']
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}

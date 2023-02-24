module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'custom-lists'],
  rules: {
    'custom-lists/custom-lists': [
      'error',
      {
        npmWhiteList: ['ant-design', '.less', 'react'],
        npmRegWhiteList: ['vue\\d'],
        domainWhiteList: ['jianshu'],
        domainRegWhiteList: ['baidu\\.\\w+'],
      },
    ],
  },
};

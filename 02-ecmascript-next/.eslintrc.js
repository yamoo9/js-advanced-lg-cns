module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // requireConfigFile: false,
    // babelOptions: {
    //   plugins: ['@babel/plugin-syntax-import-assertions'],
    // },
  },
  rules: {
    'no-unused-vars': 'warn',
    'jest/no-commented-out-tests': 'off',
  },
};

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "jest/no-disabled-tests": "warn",
     "jest/no-focused-tests": "error",
     "jest/no-identical-title": "error",
     "jest/prefer-to-have-length": "warn",
     "jest/valid-expect": "error"
   },
   plugins: ['jest']
};

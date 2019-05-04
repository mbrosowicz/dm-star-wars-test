module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    jest: true,
  },
  globals: {
    FB: true,
    global: true,
    module: true,
    process: true,
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: true,
        semi: true,
      },
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/order-in-components': 'error',
  },
};

module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'import/no-anonymous-default-export': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'semi': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0,
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'no-unused-vars': [
      'warn',
      {
        'ignoreRestSiblings': true,
      },
    ],
    'no-extra-boolean-cast': 'off',
  },
};

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
    'project': ['./tsconfig.json']
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'unused-imports'
  ],
  'rules': {
    'indent': ['error', 2, { 'ignoredNodes': ['TemplateLiteral *'] }],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        "selector": "variable",
        "types": ["boolean", "number", "string", "array"],
        "modifiers": ["const", "exported"],
        "format": ["UPPER_CASE"]
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        "selector": "interface",
        "format": ["PascalCase"]
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};

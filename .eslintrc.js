module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,

    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '/no-useless-escape': 'off',
    'import/newline-after-import': 'off',
    indent: ['error', 2],
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-interface': 'off',
    'arrow-body-style': 'off',
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '@types'],
      },
      typescript: {}, // 프로젝트 Root의 tsconfig.json을 찾는다.
    },
  },
};

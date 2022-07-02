const path = require('path');

const project = path.join(__dirname, './tsconfig.json');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    // React
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/function-component-definition': 'off',
    'react/no-unused-class-component-methods': 'off',

    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Import
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Prettier
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        printWidth: 120,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],

    // Common
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^draft', '^acc', '^attributes'],
        ignorePropertyModificationsFor: ['draft', 'acc', '^attributes'],
      },
    ],
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'no-shadow': 'off',
    'no-debugger': 'warn',
    'no-return-await': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'default-param-last': 'off',
    'func-names': ['off', 'as-needed'],
    'no-nested-ternary': 'off',

    // Typescripts
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Jsx
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: { project },
    },
  },
};

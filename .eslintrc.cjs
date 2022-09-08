module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['off'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ]
  }
}

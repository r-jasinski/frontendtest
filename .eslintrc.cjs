module.exports = {
  env: {
    'cypress/globals': true,
  },
  plugins: ['vue', 'prettier-vue', 'cypress'],
  globals: {
    describe: 'readonly',
    it: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier-vue/recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}

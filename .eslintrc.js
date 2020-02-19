module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:vue/essential'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-self-closing': ['warn', {
      html: {normal: 'never', 'void': 'always'}
    }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-unused-vars': ['error', {
      varsIgnorePattern: 'err',
      argsIgnorePattern: 'err'
    }],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/space-infix-ops': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'vue/valid-v-slot': 'error',
    'vue/match-component-file-name': ['warn', {
      extensions: ['vue'],
      shouldMatchCase: true
    }]
  },

  parserOptions: {
    parser: 'babel-eslint',
  }
};

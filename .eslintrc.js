module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'quote-props': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
  }
};

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "react/jsx-uses-vars": 2,
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
  }
};

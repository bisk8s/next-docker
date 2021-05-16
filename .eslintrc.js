// .eslintrc.js
module.exports = {
    // Specifies the ESLint parser
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "standard",
      "prettier"
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      es2020: true,
      jest: true
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "prettier"
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      // Allows for the use of imports
      sourceType: "module",
    },
    rules: {
      // Disable prop-types as we use TypeScript for type checking
      "prettier/prettier": "error",
      "space-before-function-paren": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      // needed for NextJS's jsx without react import
      "react/react-in-jsx-scope": "off",
      // needed to avoid react no-use-before-define bug
      'no-use-before-define': [0],
      '@typescript-eslint/no-use-before-define': [1],
    },
    globals: {
      React: true,
      JSX: true,
      // google: true,
      // mount: true,
      // mountWithRouter: true,
      // shallow: true,
      // shallowWithRouter: true,
      // context: true,
      // expect: true,
      // jsdom: true,
     },
  };

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "rules": {
    "class-methods-use-this": 0,
    "semi": [
      2,
      "never"
    ],
    "comma-dangle": 0,
    "no-use-before-define": [
      2,
      {
        "variables": false
      }
    ],
    "no-unneeded-ternary": 0,
    "global-require": 0,
    "react/jsx-indent": [
      2,
      2
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-space-before-closing": 2,
    "no-underscore-dangle": 0,
    "max-len": 0,
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "amd": true
      }
    ],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-extraneous-dependencies": [
      0,
      {
        "devDependencies": false
      }
    ],
  }
};

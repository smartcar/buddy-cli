'use strict';

module.exports = {
  extends: [
    '@smartcar/eslint-config',
    '@smartcar/eslint-config/mocha',
    '@smartcar/eslint-config/lodash',
  ],
  rules: {
    camelcase: 'off',
  },
  overrides: [
    {
      files: ['test/**/_responses/**'],
      rules: {
        'max-len': 'off',
      },
    }
  ]
};

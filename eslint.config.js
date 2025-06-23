import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...flypeng(),
  {
    ignores: [
      'changelog-option.js',
      'tailwind.config.js',
      'postcss.config.mjs',
      'stylelint.config.js',
      'eslint.config.js',
      'commitlint.config.js',
    ],
  },
];

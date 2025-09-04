// @ts-check
import prettierPlugin from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.vue', '**/*.js'],
		rules: {
			'arrow-parens': 'off',
			'no-extra-semi': 'error',
			'no-lonely-if': 'error',
			'no-unused-vars': 'off',
			'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
			'prefer-arrow-callback': 'error',
			'prefer-destructuring': ['error', { array: true, object: true }],
			'prefer-object-has-own': 'error',
			'prefer-promise-reject-errors': 'off',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'sort-imports': ['error', { allowSeparatedGroups: true }],
			'sort-vars': 'error',
			'spaced-comment': ['error', 'always', { block: { balanced: true } }],
			eqeqeq: ['error', 'smart'],
			quotes: ['warn', 'single', { avoidEscape: true }],

			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'off',

			'vue/multi-word-component-names': 'off',
			'vue/html-self-closing': 'off',
		},
	}
);

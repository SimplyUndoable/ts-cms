module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	env: {
		browser: true,
		node: true,
		serviceworker: true,
		es6: true,
		es2017: true,
		es2020: true,
	},
	globals: {
		object: 'readonly',
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: true
	},
	files: ['**/*.ts?(x)'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'comma-spacing': ['error', {'before': false, 'after': true}],
		'arrow-spacing': ['error', {'before': true, 'after': true}],
		'key-spacing': ['error', {'afterColon': true, 'mode': 'strict'}],
		'eol-last': ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'object-curly-spacing': ['error', 'always', {'arraysInObjects': false, 'objectsInObjects': false}],
		'array-bracket-spacing': ['error', 'never', {
			'objectsInArrays': false,
			'singleValue': false,
			'arraysInArrays': false
		}],
		'computed-property-spacing': ['error', 'never', {'enforceForClassMembers': true}],
		'space-infix-ops': 'error',
		'semi-spacing': 'error',
		'no-undef': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/interface-name-prefix': 'off'
	}
}

/** @type {import('prettier').Options} */
export default {
	useTabs: true,
	printWidth: 150,
	singleQuote: true,
	trailingComma: 'all',
	quoteProps: 'consistent',
	overrides: [
		{
			files: '*.svg',
			options: {
				parser: 'html',
			},
		},
	],
};

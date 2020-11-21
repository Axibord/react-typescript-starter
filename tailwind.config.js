module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: {
		enabled: false, // turn it to false in developement to have all tailwind classes
		content: [
			'./src/*.js',
			'./src/*.jsx',
			'./src/**/*.jsx',
			'./src/**/*.js',
			'./src/*.ts',
			'./src/*.tsx',
			'./src/**/*.tsx',
			'./src/**/*.ts'
		]
	},
	theme: {
		extend: {}
	},
	variants: {},
	plugins: []
}

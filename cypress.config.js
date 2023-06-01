const { defineConfig } = require('cypress');
const {
	addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
	// org name cypress-visual-testing
	projectId: 'ckinux',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			addMatchImageSnapshotPlugin(on, config);
		},
		specPattern: 'cypress/e2e/**/*.js',
	},
	env: {
		APPURL: 'https://demo.nopcommerce.com',
	},
});

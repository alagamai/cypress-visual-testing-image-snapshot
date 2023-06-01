# Cypress Visual testing using cypress image snapshot  
    This package takes baseline snapshot in local server and compares snapshot with baseline version of snapshot and fails test on visual change detection

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# how to use cypress image snapshot pakcage in your test
1. install cypress - sudo npm install cypress
2. install package - sudo npm install cypress-image-snapshot 
3. then add the following in cypress.config.js

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
4.   add the below code in command.js

	import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

	addMatchImageSnapshotCommand();


# Screenshots
![cypress-cloud-runner-report](https://github.com/alagamai/cypress-api-automation-framework/blob/main/cypress/images/cypress-cloud-runner-report.png "cypress-cloud-runner-report")


## Use

1. Checkout the project from git - git clone https://github.com/alagamai/cypress-api-automation-framework.git
2. Navigate to the project root directory -cypress-api-automation-framework
3. Install dependencies with `npm install` 
4. See scripts in `package.json` and run the tests. The main ones are
* `npm run cy:update-snapshot` - to run test and baseline the image
* 'npm run cy:ignore-visual-test' - to set failOnSnapshotDiff=false
* `npm run cy:test` - runs cypress test in headless mode and failOnSnapshotDiff=true
    


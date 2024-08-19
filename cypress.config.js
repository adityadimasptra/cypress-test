const { defineConfig } = require('cypress');
const MochawesomeReporter = require('cypress-mochawesome-reporter/plugin');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.paper.id/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      MochawesomeReporter(on);
    },
    viewportHeight: 1920,
    viewportWidth: 1080,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: true
    }
  },
});

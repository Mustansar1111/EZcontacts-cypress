const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wxb63r',
  watchForFileChanges: false,
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
  retries: { runMode: 1 },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'EZContact Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: "Report-[datetime]-report",
    timestamp: "longDate"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.ezcontacts.com',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 30000
  },
});
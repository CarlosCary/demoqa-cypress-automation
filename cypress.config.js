module.exports = {
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
    baseUrl: "https://demoqa.com",
    video: false,
    fixturesFolder: 'cypress/fixtures',
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
};

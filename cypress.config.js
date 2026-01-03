module.exports = {
  e2e: {

    baseUrl: "https://demoqa.com",
    video: false,
    fixturesFolder: 'cypress/fixtures',
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

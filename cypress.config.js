const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://in.bookmyshow.com/explore/home/bengaluru",
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      // implement node event listeners here
    },
  },
});

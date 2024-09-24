const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://in.bookmyshow.com/explore/home/bengaluru",
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
      // implement node event listeners here
    },
  },
});

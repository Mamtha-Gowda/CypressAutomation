const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://in.bookmyshow.com/explore/home/bengaluru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

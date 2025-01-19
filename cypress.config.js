const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    testIsolation: false,
    baseUrl: "https://www.disneystore.com/",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      // implement node event listeners here
    },
    experientalSessionAndOrigin:true,

  },
  "includeShadowDom":true
});

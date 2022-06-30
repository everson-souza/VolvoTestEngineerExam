const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

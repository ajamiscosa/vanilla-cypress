const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q2ybs6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false
  },
});

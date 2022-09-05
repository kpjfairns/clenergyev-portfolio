import { defineConfig } from 'cypress'

const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

// to allow json to be produced


export default defineConfig({
  setupNodeEvents(on, config) {
    // bind to the event we care about
    async () => {
      return await addCucumberPreprocessorPlugin(on, config)
    }
    
    on(
      'file:preprocessor',
      createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      })
    )
  },
  e2e: {
    specPattern: ["**/*.cy.ts", "**/*.feature"]
  }
})
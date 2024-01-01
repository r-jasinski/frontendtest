import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    supportFile: false,
    specPattern: 'tests/e2e/*.cy.ts'
  },
  video: false,
  screenshotsFolder: false
})

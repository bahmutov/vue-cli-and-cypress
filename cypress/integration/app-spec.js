const mountVue = require('cypress-vue-unit-test')
import App from '../../src/App.vue'

describe('App', () => {
  const options = { vue: 'https://unpkg.com/vue', base: '/' }
  beforeEach(mountVue(App, options))

  it('welcomes you', () => {
    cy.contains('Welcome to Your Vue.js App')
  })

  it('loads logo', () => {
    cy.wait(100)
    cy.log('Logo image naturalWidth')
    cy
      .get('img')
      .then($img => {
        // images that failed to load
        // will have width undefined or 0
        return $img[0].naturalWidth
      })
      .should('be.gt', 0)
  })

  it('loads logo using its', () => {
    cy.log('Logo image naturalWidth')
    // by using `its` we let Cypress retry
    // the assertion, thus no `cy.wait` is needed
    cy
      .get('img')
      // we get jquery element, thus the "true" element
      // is at index 0
      .its('0.naturalWidth')
      .should('be.gt', 0)
  })
})

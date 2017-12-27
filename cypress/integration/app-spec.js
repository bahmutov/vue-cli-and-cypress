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
        return $img[0].naturalWidth
      })
      .should('be.gt', 0)
  })

  it('loads logo using its', () => {
    cy.log('Logo image naturalWidth')
    cy
      .get('img')
      .its('0.naturalWidth')
      .should('be.gt', 0)
  })
})

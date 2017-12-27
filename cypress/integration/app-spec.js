const mountVue = require('cypress-vue-unit-test')
import App from '../../src/App.vue'

describe('App', () => {
  beforeEach(mountVue(App))

  it('welcomes you', () => {
    cy.contains('Welcome to Your Vue.js App')
  })
})

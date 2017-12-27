const mountVue = require('cypress-vue-unit-test')
import App from '../../src/App.vue'

describe('App', () => {
  const options = { vue: 'https://unpkg.com/vue', base: '/' }
  beforeEach(mountVue(App, options))

  it('welcomes you', () => {
    cy.contains('Welcome to Your Vue.js App')
  })
})

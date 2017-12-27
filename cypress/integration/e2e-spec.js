describe('E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('welcomes you', () => {
    cy.contains('Welcome to Your Vue.js App')
  })

  it('has essential links', () => {
    cy.contains('Essential Links')
  })
})

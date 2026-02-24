/// <reference types="cypress" />

// IMPORTANT!: This test requires the following file: "CYPRESS-UDEMY/cypress/e2e/fixtures/User.json"
describe('TC_002_SignUp', () => {
  it('Should Login And Log Out From The Application', () => {
    cy.visit('https://www.demoblaze.com/')
    
    cy.fixture('User.json').as('userData')
    cy.get('@userData').then((user) => {
      cy.get('#signin2').click()
      cy.get('#signInModal').should('be.visible')
      cy.wait(300)
      cy.get('#sign-username').type(user.username)
      cy.get('#sign-username').should('have.value', user.username)
      cy.get('#sign-password').type(user.password)
      cy.get('#sign-password').should('have.value', user.password)
      cy.get('#signInModal').contains('button', 'Sign up').should('be.visible').and('be.enabled').click()

      cy.get('#logout2').click()
    })
    
  })
})
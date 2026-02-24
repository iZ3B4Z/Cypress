/// <reference types="cypress" />

// IMPORTANT!: This test requires the following file: "CYPRESS-UDEMY/cypress/e2e/fixtures/User.json"
describe('TC_003_Login', () => {
  it('Should Login And Log Out From The Application', () => {
    cy.visit('https://www.demoblaze.com/')
  
    cy.fixture('User.json').as('userData')
    cy.get('@userData').then((user) => {
      cy.get('#login2').click()
      cy.get('#logInModal').should('be.visible')
      cy.wait(300)
      cy.get('#loginusername').type(user.username)
      cy.get('#loginusername').should('have.value', user.username)
      cy.get('#loginpassword').type(user.password)
      cy.get('#loginpassword').should('have.value', user.password)
      cy.get('#logInModal').contains('button', 'Log in').should('be.visible').and('be.enabled').click()

      cy.get('#footc').scrollIntoView().should('be.visible')
      cy.wait(300)
      cy.get('#logout2').scrollIntoView().should('be.visible')
      cy.get('#logout2').click()
    })

  })
})
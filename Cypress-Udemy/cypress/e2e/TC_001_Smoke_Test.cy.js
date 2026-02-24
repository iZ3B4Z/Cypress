/// <reference types="cypress" />

describe('TC_001_Smoke_Test', () => {
  it('Should Load Home Page', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.navbar-brand').should('be.visible')
    cy.get('.nav-item').eq(0).within(() => {  
      cy.get('.nav-link').should('be.visible')
    })
    cy.get('#cat').should('be.visible')
    cy.get('#footc').scrollIntoView().should('be.visible')
  })
})
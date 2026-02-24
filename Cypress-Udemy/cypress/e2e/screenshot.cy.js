/// <reference types="cypress" />

describe('Cypress Screenshots', () => {
  it('Full Page Screenshot', () => {
    cy.visit('https://example.com')
    // The parameter 'overwrite' help us to delete the previous screenshot and then
    // it can saves the new one to the screenshots directory
    cy.screenshot({overwrite: true})
  })

  it('Single Screenshot Element', () => {
    cy.visit('https://example.com')
    cy.get('h1').screenshot({overwrite: true})

    // This validates the length of the provided html element
    cy.get('h1').should('have.length', 1)
  })
})
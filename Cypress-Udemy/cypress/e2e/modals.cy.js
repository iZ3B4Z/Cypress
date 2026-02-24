/// <reference types="cypress" />

describe('Cypress Modals', () => {
  it('Open and Assert Modal', () => {
    // Step 1: Open The Modal
    cy.visit('https://practice-automation.com/modals/')
    cy.contains('button', 'Simple Modal').click()

    // Step 2: Assert The Modal Information (Visible)
    cy.get('.pum-overlay.pum-active:visible')
      .should('be.visible')
      .within(() => {
        cy.contains('p', 'simple modal').should('be.visible')

        // Step 3: Close The Modal
        cy.get('[aria-label="Close"]').click({multiple: true})
      })

    // Step 4: Assert The Modal Information (Not Visible)
    cy.get('.pum-overlay.pum-active:visible').should('not.exist')
  })
})
/// <reference types="cypress" />

describe('Cypress Clearing Inputs', () => {
    it('Type And Clear', () => {
        cy.visit('https://practice-automation.com/form-fields/')
        cy.get('#name-input').type('Peter Lopez')
        cy.wait(2000)
        cy.get('#name-input').clear().type('New text')
    })
})
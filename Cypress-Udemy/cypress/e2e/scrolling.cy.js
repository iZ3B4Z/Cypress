/// <reference types="cypress" />

describe('Cypress Scrolling', () => {
    it('Scroll Into Footer View', () => {
        cy.visit('https://practice-automation.com/')
        cy.get('#footer').scrollIntoView().should('be.visible')
        
    })
})
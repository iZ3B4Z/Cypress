/// <reference types="cypress" />

describe('Cypress Fixtures', () => {
    it('Use Fixtures As Data Provider', () => {

        // Step 1: Open The Modal
        cy.visit('https://practice-automation.com/modals/')
        cy.get('#formModal').click()

        // Step 2: Substract The Data From "fixtures/example.json" And Use It In The Modal
        cy.fixture('example.json').as('userData')
        cy.get('@userData').then((user) => {
            cy.get('#g1051-name').type(user.name)
            cy.get('#g1051-email').type(user.email)
            cy.get('#contact-form-comment-g1051-message').type(user.body)
            cy.contains('Submit').click()
        })
    })
})
/// <reference types="cypress" />

describe('Cypress Data Tables', () => {
    it('Validate Items Inside Data Table', () => {
        cy.visit('https://practice-automation.com/tables/')
        cy.get('.wp-block-table').within(() => {
            
            // Here we have the iteration for each row
            cy.get('tbody tr').eq(0).within(() => {
                cy.get('td').eq(0).should('contain', 'Item')
                cy.get('td').eq(1).should('contain', 'Price')
            })

            cy.get('tbody tr').eq(1).within(() => {
                cy.get('td').eq(0).should('contain', 'Oranges')
                cy.get('td').eq(1).should('contain', '$3.99')
            })

            cy.get('tbody tr').eq(2).within(() => {
                cy.get('td').eq(0).should('contain', 'Laptop')
                cy.get('td').eq(1).should('contain', '$1200.00')
            })

            cy.get('tbody tr').eq(3).within(() => {
                cy.get('td').eq(0).should('contain', 'Marbles')
                cy.get('td').eq(1).should('contain', '$1.25')
            })
            
        })
    })    
})
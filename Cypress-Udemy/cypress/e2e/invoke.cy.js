/// <reference types="cypress" />

describe('Cypress Invoking Functions', () => {
    it('Invoke Calculation Of Numbers', () => {
        const fn = (a, b, c) => {
            return a + b + c
        }

        cy.wrap({sum: fn}).invoke('sum', 2, 5, 10).should('be.greaterThan', 10).and('be.lessThan', 20)
    })

    it('Invoke Subtraction Function', () => {
        const fn = (a, b, c, d) => {
            return a - b - c - d
        }

        cy.wrap({sub: fn}).invoke('sub', 50, 5, 10, 15).should('be.lte', 20)
    })

    
}) 
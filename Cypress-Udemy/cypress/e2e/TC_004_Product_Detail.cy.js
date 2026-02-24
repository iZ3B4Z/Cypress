/// <reference types="cypress" />

describe('TC_004_Product_Detail', () => {
  it('Should Verify The Product Details Displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    cy.get('.hrefch').contains('Nexus 6').scrollIntoView()
    cy.get('.hrefch').contains('Nexus 6').should('be.visible').click()
    cy.get('h3.price-container').should('contain', "$650")
    cy.get('.btn-success').contains('Add to cart').should('be.visible').click()

    cy.on('window:alert', (text) => {
        expect(text).to.eq('Product added')
      })
  })
})
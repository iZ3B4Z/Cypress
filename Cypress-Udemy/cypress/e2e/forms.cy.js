/// <reference types="cypress" />

describe('Cypress Forms, Buttons & Checkboxes', () => {
  it('Submit And Assert Form', () => {
    // Variables
    const name = 'Peter'
    const drink = 'Water'
    const color = 'Red'
    const email = 'testing@sonorasoft.com'
    const message = 'Hello World!'
    const selection = 'Yes'

    // Step 1: Load The Form
    cy.visit('https://practice-automation.com/form-fields/')

    //    ORIGINAL WAY TO GET AN ID WITH CYPRESS
    // *********************************************
    //cy.get('#feedbackForm').should('be.visible')
    // *********************************************

    //        PERSONALIZED WAY TO GET AN ID
    // *********************************************
    cy.getById('feedbackForm').should('be.visible')
    // *********************************************

    // Step 2: Fill The Form
    cy.get('#name-input').type(name)
    cy.contains(drink).click()
    cy.contains(color).click()
    cy.get('#automation').select(selection)
    cy.get('#email').type(email)
    cy.get('#message').type(message)
    cy.contains('Submit').click()

    // Step 3: Assert Form Details
    cy.on('window:alert', (text) => {
        expect(text).to.eq('Message received!')
      })
  })
})
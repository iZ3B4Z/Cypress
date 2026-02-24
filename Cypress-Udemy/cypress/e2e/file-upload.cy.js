/// <reference types="cypress" />

describe('Cypress Files Upload', () => {
    it('Should Upload JSON Example File', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('C:\\Users\\sesotelo\\Documents\\Cypress-Udemy\\cypress\\fixtures\\example.json')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('be.visible')
        cy.get('h3').should('contain', 'File Uploaded!')
    })   
})
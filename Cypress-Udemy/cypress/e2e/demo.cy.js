/// <reference types="cypress" />

// This "ExamplePage" import is mainly to show how to create personalized functions and then how to invoke them
import ExamplePage from "./pages/ExamplePage"

describe('Cypress E2E Tests', () => {
  beforeEach(() => {
    //cy.visit('https://example.com/')

    // Here we declared the ne variable from "ExamplePage"
    const examplePage = new ExamplePage()

    // Here we invoked it
    examplePage.openExamplePage()
  })

  afterEach(() => {
    cy.log('Running after each of my test')
  })

  it('Assert URL', () => {
    //cy.visit('https://example.com/')
    //cy.url().should('contain', 'example.com')
    const examplePage = new ExamplePage()
    examplePage.assertURL()

  })

  it('Asser Title', () => {
    //cy.visit('https://example.com/')
    cy.title().should('contain', 'Example Domain')
  })

  // FIXME: This is an example of a BUG and how it must be documentated
  it.skip('Assert Element', () => {
    //cy.visit('https://example.com/')
    cy.get('h1').should('be.visible')
    cy.wait(500)
    cy.get('p').should('be.visible')
    cy.get('p').should('contain', 'This domain')
  })

  it('Reload and Logs', () => {
    //cy.visit('https://example.com/')
    cy.log('Before reload')
    cy.reload()
    cy.log('After reload')
  })
})
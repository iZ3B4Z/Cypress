class ExamplePage {
    openExamplePage() {
        cy.visit('/')
    }

    assertURL() {
        cy.url().should('contain', 'example.com')
    }
}

export default ExamplePage
/// <reference types="cypress" />

describe('Cypress Files', () => {

  // This creates a JSON File into a new directory named 'test-data'
  it('Read/Write Into a JSON File', () => {
    cy.writeFile('test-data/data.json', {name: 'Peter', email: 'testing@sonorasoft.com', age: 24})

    cy.readFile('test-data/data.json').then((data) => {
      expect(data.name).to.eq('Peter')
      expect(data.email).to.eq('testing@sonorasoft.com')
    })
  })

  it('Write Into Plain Text File', () => {
    cy.writeFile('test-data/plain.txt', 'Hello World!', 'ascii')
  })
})
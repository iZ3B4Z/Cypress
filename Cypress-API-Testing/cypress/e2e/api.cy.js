/// <reference types="cypress" />

describe('Cypress API Tests', () => {

  it('Cypress REST API Testing', () => {
    cy.request('/users/2').then((response) => {
      cy.log(JSON.stringify(response.body.email))
      cy.log(JSON.stringify(response.headers))
    })
  })

	it('Validates Headers', () => {
		cy.request('/users/2').as('user');
		cy.get('@user')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
	});

  it('API Status Codes', () => {
		cy.request('/users/2').as('existingUser');
    cy.get('@existingUser')
      .its('status')
      .should('eq', 200)

    cy.request({url:'/users/non-exist', failOnStatusCode: false}).as('nonExistingUser')
		cy.get('@nonExistingUser').its('status').should('eq', 404)
	});

  // POST AND DELETE REQUESTS TO CREATE AND DELETE A USER
  it('Create And Delete Users With Javascript', () => {
      cy.request('POST', '/users', {
      name: "Sebastian",
      email: "sebastian@example.com",
      age: "21"
    })
    .then((response) => {
      expect(response.status).to.eq(201)
      return response.body.data.id
    })
    .then((userId) => {
      cy.request('DELETE', `/users/${userId}`).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })

  // GET REQUEST TO SHOW THE USER DATA
  it('API Tests - GET Request', () => {
    cy.request({ url: '/users/2', method: 'GET'}).as('user')
    cy.get('@user').then((res) => {
      cy.log(JSON.stringify(res.body))
      expect(res.body.data.id).eq(2)
      expect(res.body.data.email).eq('jane@example.com')
      expect(res.body.data.name).not.to.contain('SomeFunnyName')

      // Here we expect the same as the line 51 but here we are using a variable
      const userID = res.body.data.id
      expect(userID).to.eq(2)
    })
  })

  // POST REQUEST TO LOGIN
  it('API Tests - POST Request', () => {
    cy.request({
      url: '/auth/login',
      method: 'POST',
      body: {
        email: 'testuser@cypress.com',
        password: 'cypress123'
      }
    }).as('loginRequest')

    cy.get('@loginRequest').its('status').should('equal', 200)
  })

  // POST REQUEST TO DISPLAY A LOGIN ERROR
  it('API Tests - POST Request - Error', () => {
    cy.request({
      url: '/auth/login',
      method: 'POST',
      failOnStatusCode: false,
      body: {
        email: 'testuser@cypress.com'
      }
    }).as('loginRequest')
    
    cy.get('@loginRequest').its('status').should('eq', 400)
  })


});


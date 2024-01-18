/// <reference types="cypress" />

describe('PlayerTag', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have correct player image and name', () => {
    cy.get('.player span').contains('Guest2939666985')
    cy.get('.player img')
      .should('have.attr', 'src')
      .should('eq', 'images/black_400.png')
  })

  it('should have correct css inactive class and time', () => {
    cy.get('.clock.inactive').contains('5:00')
  })

  it('should have correct css active class and time', () => {
    cy.get('.clock').contains('4:58')
  })
})

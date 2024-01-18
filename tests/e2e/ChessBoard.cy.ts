/// <reference types="cypress" />

describe('ChessBoard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have correct squares', () => {
    cy.get('.board span').should('have.length', 64)
    cy.get('span[data-rank]').should('have.length', 8)
    cy.get('span[data-file]').should('have.length', 8)
  })
})

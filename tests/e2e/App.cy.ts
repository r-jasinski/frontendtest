/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should click file a / rank 1 and show a1 at move list', () => {
    cy.get('[data-file="a"][data-rank="1"]').click()
    cy.get('.move-list ol li span').should('have.text', 'a1')
  })

  it('should click file a / rank 1, receive focus and show f6 at move list', () => {
    cy.get('.board span').eq(21).click().should('have.focus')
    cy.get('.move-list ol li span').should('have.text', 'f6')
  })

  it('should highlight last move', () => {
    cy.get('.board span').eq(21).click()
    cy.get('.board span').eq(1).click()
    cy.get('.board span').eq(13).click()
    cy.get('.move-list ol li span')
      .eq(0)
      .as('lastMove')
      .should('have.css', 'content')
      .and('include', '')
    cy.get('@lastMove')
      .should('have.css', 'border-bottom')
      .and('include', 'rgba(255, 255, 255, 0.7)')
  })
})

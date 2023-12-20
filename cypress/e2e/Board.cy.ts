/// <reference types="cypress" />

describe('Board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have correct html', () => {
    cy.get('.board').should(
      'have.html',
      `<span data-v-93a62ddb="" data-rank="8" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="7" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="6" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="5" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="4" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="3" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="2" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-file="a" data-rank="1" tabindex="1"></span><span data-v-93a62ddb="" data-file="b" tabindex="1"></span><span data-v-93a62ddb="" data-file="c" tabindex="1"></span><span data-v-93a62ddb="" data-file="d" tabindex="1"></span><span data-v-93a62ddb="" data-file="e" tabindex="1"></span><span data-v-93a62ddb="" data-file="f" tabindex="1"></span><span data-v-93a62ddb="" data-file="g" tabindex="1"></span><span data-v-93a62ddb="" data-file="h" tabindex="1"></span><gearssvg data-v-93a62ddb=""></gearssvg>`
    )
  })

  it('should have correct squares', () => {
    cy.get('.board span').should('have.length', 64)
    cy.get('span[data-rank]').should('have.length', 8)
    cy.get('span[data-file]').should('have.length', 8)
  })
})

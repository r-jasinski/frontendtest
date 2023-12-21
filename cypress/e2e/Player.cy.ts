/// <reference types="cypress" />

describe('Player', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have correct html', () => {
    cy.get('.player').should(
      'have.html',
      `<div data-v-aefab004="" class="tagline"><img data-v-aefab004="" src="images/black_400.png" alt="Player image"><div data-v-aefab004="" class="user-tagline"><span data-v-aefab004="">Guest2939666985</span><img data-v-aefab004="" src="images/flag.png " alt="Player flag"><ul data-v-aefab004=""><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li></ul></div></div><div data-v-aefab004="" class="clock inactive"><svg data-v-aefab004="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g fill="currentColor" clip-path="url(#a)"><path d="M11 5.48a.93.93 0 0 0-.71-.3h-.58a.94.94 0 0 0-.71.3 1 1 0 0 0-.3.71v4.58a1 1 0 0 0 .3.71.94.94 0 0 0 .71.29h.59a.92.92 0 0 0 .7-.29 1 1 0 0 0 .27-.71V6.19a1 1 0 0 0-.27-.71"></path><path d="M13.9 19.22a9.9 9.9 0 0 0 3.18-2.14 10.23 10.23 0 0 0 2.14-3.18c.525-1.233.79-2.56.78-3.9a9.86 9.86 0 0 0-.78-3.9A10 10 0 0 0 13.9.78 9.81 9.81 0 0 0 10 0a9.81 9.81 0 0 0-3.9.78A10 10 0 0 0 .78 6.1 9.86 9.86 0 0 0 0 10a9.76 9.76 0 0 0 .78 3.89 10.23 10.23 0 0 0 2.14 3.18 9.9 9.9 0 0 0 3.18 2.14A9.81 9.81 0 0 0 10 20a9.812 9.812 0 0 0 3.9-.78M7 17.07a7.65 7.65 0 0 1-2.42-1.65A7.81 7.81 0 0 1 2.94 13a7.46 7.46 0 0 1-.6-3 7.51 7.51 0 0 1 .6-3 7.74 7.74 0 0 1 1.65-2.43A8 8 0 0 1 7 2.94a7.46 7.46 0 0 1 3-.6 7.46 7.46 0 0 1 3 .6 8 8 0 0 1 2.41 1.64A7.74 7.74 0 0 1 17.06 7a7.51 7.51 0 0 1 .6 3 7.45 7.45 0 0 1-.6 3 7.74 7.74 0 0 1-1.65 2.43A7.651 7.651 0 0 1 13 17.07a7.46 7.46 0 0 1-3 .6 7.46 7.46 0 0 1-3-.6"></path></g><defs><clipPath id="a"><path fill="#fff" d="M20 0v20H0V0z"></path></clipPath></defs></svg><span data-v-aefab004="">5:00</span></div>`
    )
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


describe('empty spec', () => {
    it('load my app', () => {
      cy.visit('http://localhost:3000/')
    })
  })

describe('text check', () => {
    before(()=>{
        cy.visit("/")
    })
    it('h1 text', () => {
      cy.get('[data-testid="h1-home"]').contains('Home')
    })
    it('h1 color', () => {
        cy.get('[data-testid="h1-home"]').should('have.css', 'color', 'rgb(255, 0, 0)')
      })
      it('h1 class', () => {
        cy.get('[data-testid="h1-home"]').should('have.class', 'h1-home')
      })
  })

  describe('button check', () => {
    it('button text', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-testid="my-button"]').contains('CLICK')
    })
    it('button color', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="my-button"]').should('have.css', 'color', 'rgb(0, 0, 0)')
      })
    it('button bg-color', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="my-button"]').should('have.css', 'background-color', 'rgb(128, 128, 128)')
      })
    it('button class', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="my-button"]').should('have.class', 'my-button')
      })
  })
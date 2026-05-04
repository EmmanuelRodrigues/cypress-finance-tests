context('Validação de campos', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/')
  })
 
  it('Não deve cadastrar sem descrição', () => {
    cy.get('#transaction .button').click()
    cy.get('[name=amount]').type(100)
    cy.get('[type=date]').type('2024-07-09')
    cy.contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 0)
  })

  it('Não deve aceitar valor zero', () => {
    cy.get('#transaction .button').click()
    cy.get('#description').type('Teste')
    cy.get('[name=amount]').type(0)
    cy.get('[type=date]').type('2024-07-09')
    cy.contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 0)
  })

  it('Não deve aceitar valor inválido', () => {
    cy.get('#transaction .button').click()
    cy.get('#description').type('Teste')
    cy.get('[name=amount]').type('abc')
    cy.get('[type=date]').type('2024-07-09')
    cy.contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 0)
  })
})
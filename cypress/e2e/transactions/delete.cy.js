context('Remover transações', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/')
  })

  it('Deve remover uma transação', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')

    cy.get('td.description') 
    //Usar cy.get para restringir a busca de tipos de elemento antes do contains
    cy.contains('Salário')
      .parent() //encontra o elemento "pai"
      .find('img[onclick*=remove]')
      .click()

    cy.get('#data-table tbody tr').should('have.length', 0)
  })

  it('Deve remover apenas uma entre várias', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')
    cy.createTransaction('Compras', -200, '2024-07-10')

    cy.get('td.description')
    cy.contains('Salário')
      .parent()
      .find('img[onclick*=remove]')
      .click()
    //Poderia utilizar: onclick="Transaction.remove(0)", sendo o 0 referente apenas à primeira transação. 

    cy.get('#data-table tbody tr').should('have.length', 1)
  })
})
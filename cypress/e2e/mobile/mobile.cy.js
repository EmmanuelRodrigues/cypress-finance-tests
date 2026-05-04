//opções para rodar em mobile:
//cy.viewport
//arquivos de config
//configs por linha de comando: npx cypress open --config viewportWidth=411,viewportHeight=823

context('Teste mobile', () => {

  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('https://dev-finance.netlify.app/')
  })

  it('Deve funcionar em tela mobile', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')

    cy.get('#data-table tbody tr').should('have.length', 1)
  })
})
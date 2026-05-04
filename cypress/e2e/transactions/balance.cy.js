import { format } from '../support/utils'

context('Validação de saldo', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/')
  })

    //1) capturar as linhas com as transações 
    //2) capturar o texto das colunas
    //3) formatar os valores das linhas 
    //4) somar os valores de entradas e saídas
    //5) capturar o texto do total
    //6) comparar o somatório dos valores com o total


  it('Deve calcular saldo corretamente', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')
    cy.createTransaction('Compras', -400, '2024-07-10')

    let incomes = 0
    let expenses = 0

    cy.get('#data-table tbody tr')
      .each(($el) => {
        cy.wrap($el)
          .find('td.income, td.expense')
          .invoke('text')
          .then(text => {
            if(text.includes('-')) {
              expenses += format(text)
            } else {
              incomes += format(text)
            }
          })
      })

    cy.get('#totalDisplay')
      .invoke('text')
      .then(text => {
        const total = format(text)
        expect(total).to.eq(incomes + expenses)
      })
  })
})
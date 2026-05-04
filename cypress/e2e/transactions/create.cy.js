/// <reference types="cypress"/>

import { format } from '../support/utils'  

//Para executar em modo headless: npx cypress run --config viewportWidth=411,viewportHeight=823
//Gera automaticamente um vídeo da execução dos testes -> Importante para documentação posteerior

context('Dev Finances Agilizei', () => {

  //Pode-se utilizar HOOKs, comandos que se repetem antes dos testes:
  //before: antes de tudo
  //beforeEach: antes de cada teste
  //after: depois de todos 
  //afterEach: depois de cada teste
  
  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/', {
      onBeforeLoad: (win) => {
        prepareLocalStorage(win)
      }          
    })
  });

  it('Cadastrar entradas', () => {
  //Utilizar custom commands para deixar o código mais limpo e objetivo. 
    it('Deve cadastrar uma entrada', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')

    cy.get('#data-table tbody tr').should('have.length', 1)
  });    //espera-se que o tr contido em tbody de data-table tenha tamanho de 1 item.

  it('Cadastrar saída', () => {        
    cy.createTransaction('Compras', -500, '2024-07-09')

    cy.get('#data-table tbody tr').should('have.length', 1)
  })

  it('Cadastrar múltiplas transações', () => {
    cy.createTransaction('Salário', 1000, '2024-07-09')
    cy.createTransaction('Mercado', -200, '2024-07-10')
    cy.get('#data-table tbody tr').should('have.length', 2)
  })
})

})
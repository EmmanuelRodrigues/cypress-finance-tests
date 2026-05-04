Cypress.Commands.add('createTransaction', (description, amount, date) => {
  cy.get('#transaction .button').click()
  cy.get('#description').type(description)
  cy.get('[name=amount]').type(amount)
  cy.get('[type=date]').type(date)
  cy.contains('Salvar').click()
})


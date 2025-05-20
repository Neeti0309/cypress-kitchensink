describe('My First Test', () => {
  it('visit the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })

  it('find the action type', () =>{
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })

   it('click on Type link and navigate to new url', () =>{
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()


    //Assertion-------------
    //should be navigate to new url
    //new url incluse '/commands/actions'
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('mike@gmail.com'),
    //more assertion on after click on TYPE
    cy.get('.action-email').should('have.value', 'mike@gmail.com')
  })

})
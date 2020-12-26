
import 'cypress-file-upload';


Cypress.Commands.add("SignIn", () => { 

    cy.visit(baseUrl + '/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('farukakyol3480@gmail.com')
        cy.get('input[type = "password"]').type('admin123')
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')



})
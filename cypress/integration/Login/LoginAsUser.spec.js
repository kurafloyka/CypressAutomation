Given('I navigate to the website', () => { 

    cy.visit('https://react-redux.realworld.io/#/login')
    cy.title().should('eq', 'Conduit')


})


When('I click on User Login Button', () => { 


    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('farukakyol3480@gmail.com')
        cy.get('input[type = "password"]').type('admin123')
        cy.root().submit()   // submits the form yielded from 'within'
    })

    
})


And('Validate the page title', () => { 

    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')

})




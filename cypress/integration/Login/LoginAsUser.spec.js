Given('I navigate to the website', () => { 

    cy.visit('https://react-redux.realworld.io/#/login')
    cy.title().should('eq', 'Conduit')


})


When('I click on User Login Button', (datatable) => { 


    datatable.hashes().forEach(element =>{


        //cy.get('form').within(($form) => {
            // cy.get() will only search for elements within form, not within the entire document
            cy.get('input[type = "email"]').type(element.username)
            cy.get('input[type = "password"]').type(element.password)
            cy.get('button[type="Submit"]').contains('Sign in').should('be.visible').click()
       // })

    });


    

    
})


And('Validate the page title', () => { 

    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')

})




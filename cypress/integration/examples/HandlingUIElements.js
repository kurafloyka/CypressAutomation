describe('UI Elements', () => {
    it('Verify Inputbox & Radio Buttons', () => {


        cy.visit('http://kurafloyka.com/')
        cy.title().should('include', 'Android Egitimi')
        cy.get('input[name="username"]').should('be.visible').type("farukakyol")

        //radio button

        cy.get('input[value="female"]').should('be.visible').should('not.be.checked').click()

        //checkbox
        cy.get('#boat').check().should('be.checked').and('have.value','Boat')
        cy.get('#bike').check().should('be.checked').and('have.value','Bike')

        cy.get('#bike').uncheck().should('not.be.checked').and('have.value','Bike')
        

        cy.get('input[type="checkbox"]').check(['Bike','Car'])
        cy.get('input[type="checkbox"]').uncheck(['Bike','Car'])


        //dropdownlist with select
        cy.get('#cars').select('Opel').should('have.value','opel') //value degerine bakiyor


        //dropdownlist with span


    })

   


   
})
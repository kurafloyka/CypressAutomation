describe('My Test Suite', () => {
    it('Verify Title Of Page', () => {


        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')

    })

    it('Not Verify Title Of Page', () => {


        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo stores')

    })
})
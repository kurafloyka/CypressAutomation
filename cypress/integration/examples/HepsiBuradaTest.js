describe('Locating Elements', () => {
    it('Verify types of locators', () => {


        //Opens URL
        cy.visit('https://demo.nopcommerce.com/')

        //SearchBox 
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        //Click On Search Button
        cy.get('[value="Search"]').click()

        //Sepete ekle butonuna tiklanir
        cy.get('.button-2[value="Add to cart"]').click()

        //Urun miktari guncellenir
        cy.get('[name="addtocart_4.EnteredQuantity"]').clear().type('2')
        
        //Yeni urun miktari sepete eklenir
        cy.get('.button-1[data-productid="4"]').click()
        cy.wait(5000)
        //Sepete gidilir
        cy.get('#topcartlink > a > span.cart-label').click()
        cy.wait(3000)
        //2 adet urun eklendigi gorulur
        cy.get('.product-unit-price').contains('$1,800.00')
        
    })


})
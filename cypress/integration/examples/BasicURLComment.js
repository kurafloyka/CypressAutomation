/// <reference types="cypress"/> 
// yukaridaki komut . yazdiktan sonra metodlari autocomplete olarak cagirmaktadir, Bunu global olarakta jsconfig.js icinde tanimlamak mumkundur.

describe('Basic URL Commands', () => {
    it('Checkout basic url commands', () => {

        //go to URL
        cy.visit('https://react-redux.realworld.io/#/login')
        //Sayfa title kontrol ediliyor....
        cy.title().should('eq', 'Conduit')

        //Username ve password giriliyor ve Sign in butonuna tiklaniyor
        cy.get('input[placeholder="Email"]').type('farukakyol3480@gmail.com')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="Submit"]').contains('Sign in').should('be.visible').click()

        // sayfa url protocol https olmali kontrolu
        cy.location('protocol').should('eq', 'https:')


        // bir element beklenen texti icerdiginin kontrolu
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
        cy.contains('Your Feed').should('be.visible')

        //Gidilen url de #/ var mi kontrol edilir.
        cy.hash().should('include', '#/') 
        cy.location('hash').should('include','#/')
        //cy.get('input[placeholder="Article Title"]').type('Test')
        cy.url().should('include', '#/')

        //cy.get('.nav-link').contains('Home Page').click()

        //sayfada ileri geri ve sayfayi yeniden yuklemek icin kullanilir
        cy.reload()
        //cy.go('back')
        //cy.go('forward')
        //cy.go(-1)



    })

})
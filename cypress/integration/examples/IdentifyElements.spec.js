describe('Create and mark-unmark as favorite', function () {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
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
    //formu bulur ve altindaki input olanlari doldurur.



    it('Create a post', function () {
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    //for icinde input first last eq ile kontrol edilmesidir.

    it('Mark-unmark as favorite', function () {
        cy.get('ul.navbar-nav').children().contains('QAMs').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})
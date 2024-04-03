describe('Practicing test cases',function(){
    it('Navigating to the website',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
})
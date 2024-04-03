

describe('Add Elements to the cart',function(){
    it('Find an element from the cart',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(cy.get('.search-keyword').type("ca"))
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el,index,$list)=>{
            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('cashews')){
                cy.wrap($el).find('button').click()
            }
        })
    })
})

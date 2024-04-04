describe('Login Test',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Successful Login',function(){
        cy.visit("https://customer-staging.epallet.com/")
        cy.get('[href="/?epallet_login=true&source_path=/"] > .ant-btn').click()
        cy.get('#Email').type(this.data.EpalletEmail)
        cy.get('#Password').type(this.data.EpalletPassword)
        cy.get(':nth-child(6) > .ant-btn').click()
        cy.get('.font-bolder-xl').should('be.visible').contains('Welcome back, Qa').should('exist');

        
    })
})
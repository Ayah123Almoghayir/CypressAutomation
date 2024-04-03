describe('commands',function(){
    it('command method',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(2) > .nav-link').click()
       cy.selectproduct('Blackberry')
    })
})

import HomePage from "../PageObject/HomePage"

describe('Testing',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('My Test Case',function(){
       // cypress.Config('defaultCommandTimeout',8000)
        const homepage=new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        cy.get(':nth-child(2) > .form-control').type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
        cy.get('#exampleCheck1').check().should('be.checked')
        cy.get('#inlineRadio1').check().should('be.checked')
        cy.get(':nth-child(8) > .form-control').type('2001-11-11')
        homepage.getShopButton().click()
        if (this.data.ProductName && Array.isArray(this.data.ProductName)) {
            this.data.ProductName.forEach(function(element) {
                cy.selectproduct(element);
            });
        } else {
            console.error("this.data.ProductName is empty or not an array");
        }
        
        
    })
})
describe('Web Elements',function(){
    it('Tables',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            const text=$el.text()
            if(text.includes('Python')){
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                const pricetext=price.text()
                expect(pricetext).to.equal('25')
            })
        }
        })
    })
})
describe('Alerts',function(){
    it('Window Alert',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , share this practice page and your knowledge')
        })
    })
})
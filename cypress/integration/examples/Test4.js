describe('CheckBox',function(){
    it('Check and Uncheck Checkboxes',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        cy.get('select').select('option2').should('have.value','option2')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
        if($el.text()==="India"){
          cy.wrap($el).click()
        }
    })
     cy.get('#displayed-text').should('be.visible')
     cy.get('#hide-textbox').click()
     cy.get('#displayed-text').should('not.be.visible')
     cy.get('#show-textbox').click()
     cy.get('#displayed-text').should('be.visible')

     cy.get('[value="radio2"]').check().should('be.checked')

    })
})
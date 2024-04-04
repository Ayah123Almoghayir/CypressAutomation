describe('My Account Page', function() {
    it('My Account Test', function() {
        cy.login();
        cy.get('.styles_accountIcon__DAxWm > .styles_default__0ETG9 > svg').click();
        cy.wait(8000)
        cy.get(':nth-child(1) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').should('have.value', 'QaITGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').should('have.value', 'qa.itg6.2021@gmail.com')  
        cy.get(':nth-child(3) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').should('have.value', 'Qa') 
        cy.get(':nth-child(4) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').should('have.value', 'Tesy')
        
    });
});

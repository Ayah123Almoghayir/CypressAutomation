// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectproduct', (productname) => { 
    cy.get('.card-title > a').each(($el,index,$list)=>{
        if($el.text().includes(productname)){
            cy.get('button.btn').eq(index).click()
        }
    })
 })
 Cypress.Commands.add('login', () => { 
    cy.visit("https://customer-staging.epallet.com/")
    cy.get('[href="/?epallet_login=true&source_path=/"] > .ant-btn').click()
    cy.get('#Email').type('qa.itg6.2021@gmail.com')
    cy.get('#Password').type('9Aug1997@@')
    cy.get(':nth-child(6) > .ant-btn').click()
        }
    )
 
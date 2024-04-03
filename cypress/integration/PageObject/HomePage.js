class HomePage{
getEditBox(){
    return cy.get(':nth-child(1) > .form-control')
}
getGender(){
   return cy.get('select')
}
getShopButton(){
    return cy.get(':nth-child(2) > .nav-link')
}
}
export default HomePage;
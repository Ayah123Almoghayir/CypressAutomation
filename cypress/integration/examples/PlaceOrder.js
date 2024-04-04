describe('Place Order Process', function() {
    it('Place Order Test', function() {
        cy.login()
        cy.get('[href="/product-list/Non-Food/Disposable%20Serviceware"] > :nth-child(1) > .style_CategoryImage__Na97H > div').click()
        cy.wait(10000)
        cy.get('#root-page > div > div.container.mb-20.mt-10 > div > div:nth-child(2) > div > div.style_actionsContainer___WgQB > div > button.ant-btn.css-ui3b7p.ant-btn-primary.style_btnStyle__uADiZ.style_btn__hiiVj.style_btn-primary__i1aqS').click({force:true})
        cy.get('#root-page > div > div.container.mb-20.mt-10 > div > div:nth-child(1) > div > div.style_actionsContainer___WgQB > div > button.ant-btn.css-ui3b7p.ant-btn-primary.style_btnStyle__uADiZ.style_btn__hiiVj.style_btn-primary__i1aqS').click({force:true})
        cy.get('#root-page > div > div.container.mb-20.mt-10 > div > div:nth-child(3) > div > div.style_actionsContainer___WgQB > div > button.ant-btn.css-ui3b7p.ant-btn-primary.style_btnStyle__uADiZ.style_btn__hiiVj.style_btn-primary__i1aqS').click({force:true})
        cy.get('#root-page > div > div.container.mb-20.mt-10 > div > div:nth-child(4) > div > div.style_actionsContainer___WgQB > div > button.ant-btn.css-ui3b7p.ant-btn-primary.style_btnStyle__uADiZ.style_btn__hiiVj.style_btn-primary__i1aqS').click({force:true})
        cy.get('#root-page > div > div.container.mb-20.mt-10 > div > div:nth-child(4) > div > div.style_actionsContainer___WgQB > div > button.ant-btn.css-ui3b7p.ant-btn-primary.style_btnStyle__uADiZ.style_btn__hiiVj.style_btn-primary__i1aqS').click({force:true})
        cy.get('#__next > header > div.styles_navbarWrapper__g5UD9.bg-grey > div > div.styles_secondContainer__uXZ1K.false > div.styles_itemsWrapper__EolXq > div > button').click()
        cy.get('.undefined > span').click()
        cy.wait(6000)
        cy.get(':nth-child(4) > .ant-row-center > .styles_itemDetails__lnnVJ > .styles_itemInfo__fkbK_ > .styles_card__iconsWrapper__Qd3g_ > :nth-child(2) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > :nth-child(3)').click()
        cy.get(':nth-child(6) > .ant-row-center > .styles_itemDetails__lnnVJ > .styles_itemInfo__fkbK_ > .styles_card__iconsWrapper__Qd3g_ > :nth-child(2) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > :nth-child(3)').click()
        cy.get('.styles_checkoutBtnWrapper__9Wu_m > .ant-btn').click()
        cy.get(':nth-child(4) > .styles_itemBox__wHGWM > .ant-input').type('I need the products quickly.')
        cy.get(':nth-child(6) > .styles_itemBox__wHGWM > .ant-btn').click()
        cy.wait(5000)
        cy.get('[type="checkbox"]').check() 
        cy.get('.ant-drawer-footer > .ant-btn').click()
        cy.get('.styles_actionsWrapper__wKnPG > .style_btn-primary__i1aqS').click()
        cy.wait(5000)
        cy.get('.styles_thanksMessage__tXD1D')
        .should('be.visible')
         .then(() => {
         cy.log('Order placed successfully.');
  });

    })
})
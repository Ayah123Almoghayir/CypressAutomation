describe('PDP Page', function() {
    it('PDP Test', function() {
        cy.login();
        cy.get('[href="/product-list/Food/Eggs%20&%20Dairy"] > :nth-child(1) > .style_CardTitle__OtHIH').click()
        cy.wait(10000)
        cy.get(':nth-child(2) > .style_productCard__q3E9r > .style_cardInfoWithImg__w6O3_ > .style_cardInfo__6t7FN > .style_title__ukELF > a').click()
        cy.wait(10000)
        cy.get('.styles_productDetailsUpperSection___Egqc > .ant-col-xs-24').should('be.visible')
        cy.get('[data-rmiz-content="found"] > img').should('be.visible')
        cy.get('.styles_headerButtons__EM27z').should('be.visible')
        cy.get('.styles_pricesDetails__VdZJ4').should('be.visible')
        cy.get('.styles_productDetailsBottomSection__2qmdA > :nth-child(1)').should('be.visible')
        cy.get('.styles_productInformation__oUZvw > .styles_fontItalic__yDTBm').should('be.visible')
        cy.get('.me-8 > .ant-btn').should('be.visible')
        cy.get('.styles_productDetailsBottomSection__2qmdA > .ant-row > :nth-child(2) > .ant-btn').should('be.visible')
        cy.get('.styles_quantityContainer__nHxsM > .ant-col-24').should('be.visible')
        cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > :nth-child(1) > .ant-btn').should('be.visible')
        cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > :nth-child(3) > .ant-btn').should('be.visible')
        cy.get('.styles_rightAlign___t4GT > .ant-btn').should('be.visible')
        cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').should('be.visible')
        cy.get('.styles_totalContainer__RHVkZ > .ant-col-10 > .ant-typography').then(($el) => {
            cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
              .invoke('val')
              .then(StrQty => {
                const Qty = Number(StrQty);
                cy.log(Qty)
                const PriceperPallet = Qty*1850.58;
                expect($el.text()).to.include( Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(PriceperPallet));
              });
          }); 
          cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > :nth-child(3)').click()
          cy.wait(5000)
          cy.get('.styles_totalContainer__RHVkZ > .ant-col-10 > .ant-typography').then(($el) => {
            cy.get('.styles_quantityContainer__nHxsM > .ant-col-8 > :nth-child(1) > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input')
              .invoke('val')
              .then(StrQty => {
                const Qty = Number(StrQty);
                cy.log(Qty)
                const PriceperPallet = Qty*1850.58;
                expect($el.text()).to.include( Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(PriceperPallet));
              });
          });   
    })
    })
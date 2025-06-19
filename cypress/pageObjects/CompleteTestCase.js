export class CompleteTestCase {
    ReaderCompleteCheckoutProcces() {
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            //apply coupon code
            cy.get('#frame_size').should('exist')//.select(1)
            cy.get(':nth-child(2) > .col-md-3').should('contain.text', 'Color ')
            cy.get('#new-color').should('exist').select(1)
            cy.get(':nth-child(3) > .col-md-3').should('contain.text', 'Power ')
            cy.get('#frame_power').should('exist').select(1)
            cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text', 'Add to Cart').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            cy.get('#itemTotal').then((element) => {
                const ele = element.text()
                var elem = ele.split("$")
                const price1 = elem[1].trim() //get the price
                cy.log(price1)
                // cy.get(':nth-child(2) > .col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
                // cy.get('.cart-btn').click()
                // cy.get('#addProtectionBtn').click()
                // cy.get(':nth-child(7) > .product-body > :nth-child(1) > .col-sm-9 > .row > .col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1)=>{
                //     const ele1 = element1.text()
                //     var elem1 = ele1.split("$") 
                //     const price1 = elem1[1].trim() //get the price
                //     cy.log(price1)  
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
                cy.wait(2000)
            })
        })
    }
    EyeCareCompleteCheckoutProcess() {
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            //apply coupon code
            cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text', 'Add to Cart').click()
            cy.get('.cart-product').should('exist')
            cy.get('tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo

            })
        })
    }
}
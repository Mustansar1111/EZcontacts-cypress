export class CheckoutPage {
    validateBlankCart() {
        cy.get('.cart > a').should('have.attr', 'href', '/checkout/cart').click()
        cy.get('.items.title-2').should('contain.text', 'CART EMPTY')
        cy.get('.clearfix > [href="/contact-lenses"]').should('have.attr', 'href', '/contact-lenses')
        cy.get('.clearfix > [href="/eyeglasses"]').should('have.attr', 'href', '/eyeglasses')
        cy.get('.clearfix > [href="/sunglasses"]').should('have.attr', 'href', '/sunglasses')
    }
    goToSunglassesCatalog() {
        cy.get('[data-toggle="dropdown"][href="/sunglasses"]').should('have.attr', 'href', '/sunglasses').click({ force: true }) //menu
        cy.url().should('include', '/product-categories:sunglasses')
        cy.waitForLoader()
        cy.get('#prd-1 > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click({ force: true }) //first product
    }
    addAProductToCartWithoutProtection() {
        cy.get('.col-md-12 > .btn-cart > .btn').should('have.text', 'Add to Cart').click({ force: true })
        // cy.get(':nth-child(2) > .col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
        // cy.get('#removeProtectionBtn').should('contain.text',"I don't want protection").click({force:true})
        cy.get('.section-title').should('contain.text', 'Shopping Cart') //shopping cart heading
        cy.get('.cart-product-head.clearfix').should('exist') //product details
        cy.get('#qty').should('exist') // product quantity
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('exist') //product price
        cy.get('.jsRemoveCartProduct').should('exist') //remove item button
    }
    validateAllContentOnCartPage() {
        cy.get('.header-right > .active-link').should('contain.text', 'Continue Shopping') //continue shopping link
        cy.get('.header-right > .btn').should('contain.text', 'Checkout Now') //checkout 1st button
        cy.get('.btn.pull-right').should('contain.text', 'Checkout Now') //checkout 2nd button
        cy.get('.list-inline > :nth-child(1) > a').should('contain.text', 'Edit') //Edit
        cy.get('#applyCoupnDiv').click() //Redeem button
        cy.get('.cart-subtotal > .pull-left').should('exist')
        cy.get('#qty').select('2')
        cy.get('.total').should('contain.text', 'Item(s) Subtotal')
        // cy.get('.cart-btn').should('contain.text','Add Accident Protection') //Add Accident Protection
    }
    validateAddAccidentProtectionFunctionalty() {
        // cy.get('.cart-btn').should('contain.text','Add Accident Protection').click() //Add Accident Protection
        // cy.get('.col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.') //validate popup heading
        // cy.get('#addProtectionBtn').should('contain.text','Protect my purchase').click() //click on Protect my purchase button
        // cy.get('.content > .container > :nth-child(1)').should('contain.text','Extend Protection plan added successfully.') //validate sucess message 
        cy.get('.jsRemoveCartProduct').eq(0).click() // click on RemoveCartProduct
        cy.get('.success').should('contain.text', 'Item successfully removed from your cart!') //validate sucess message
    }
    validateEditButtonFunctionaltyOnCartPage() {
        cy.get('.list-inline > :nth-child(1) > a').should('contain.text', 'Edit').click() //validate edit button functionalty
        cy.get('.cart-alerts > .message').should('contain.text', "\n                        \n                        You’re currently editing an item in your cart.\n                        View Cart".trim())
    }
    clickOnRemoveItemButton() {
        cy.get('.jsRemoveCartProduct').eq(0).click({ force: true }) //remove item button
        cy.get('.success').should('contain.text', 'Item successfully removed from your cart!')
        cy.get('.items').should('contain.text', 'CART EMPTY')
    }
    validateInValidRedeemPromoCodeFunctionalty() {
        cy.get('#applyCoupnDiv').should('contain.text', 'Redeem Promo Code').click()
        cy.get('#btn-promo').click()
        cy.get('.apply-promo-code-elem-div > .error').should('contain.text', 'Please enter Promo code!') //Validate success message
        cy.get('#promo-code-input').type('123444')
        cy.get('#btn-promo').click()
        cy.get('.apply-promo-code-elem-div > .error').should('contain.text', 'Invalid Voucher/Promo Code') //Validate success message
    }
    validateValidRedeemPromoCodeFunctionalty() {
        cy.get('#applyCoupnDiv').should('contain.text', 'Redeem Promo Code').click()
        cy.get('#promo-code-input').type('EXTRA5')
        cy.get('#btn-promo').click()
        cy.get('.promo-success-div').should('contain.text', 'Voucher/Promo Code was successfully applied to all applicable products in your cart.')
    }
    gotoCheckoutNowButton() {
        cy.get('.header-right > .btn').eq(0).should('contain.text', 'Checkout Now').click()
        cy.get('.section-title').should('contain.text', 'Sign in') //validate heading
        cy.get('#UserEmail').type('testqatester80@gmail.com') //email 
        cy.get('#checkout-sign-in-submit-btn').click()
    }
    validateAllContentOnShippingAddress() {
        cy.get('.section-title').should('contain.text', 'Shipping Address') //page heading
        cy.get(':nth-child(1) > label > strong').should('contain.text', 'United States Address')
        cy.get('.has-pretty-child > :nth-child(2) > label').should('contain.text', 'International Address')
        cy.get('[for="AccountShippingAddressFirstName"]').should('contain.text', 'First Name')
        cy.get('[for="AccountShippingAddressLastName"]').should('contain.text', 'Last Name')
        cy.get('.button').should('contain.text', '+ Add Company Name')
        cy.get('[for="AccountShippingAddressAddressLine1"]').should('contain.text', 'Address line 1')
        cy.get('[for="AccountShippingAddressAddressLine2"]').should('contain.text', 'Address line 2')
        cy.get('[for="AccountShippingAddressAddressCity"]').should('contain.text', 'City')
        cy.get('#us-address-state-select > label').should('contain.text', 'State')
        cy.get('#address-postal-zip-input').should('contain.text', 'Zip Code')
        cy.get('[for="AccountShippingAddressAddressShipPhonePrimary"]').should('contain.text', 'Phone Number')
        cy.get(':nth-child(2) > .pad-l-20 > label').should('contain.text', 'Country')
        cy.get('#shipping-page-back-button').should('contain.text', 'Back')
        cy.get('#add-shipping-address').should('have.value', 'Continue')
    }
    validateQuantityField(quantity) {

        cy.get('#qty').select(quantity).wait(2000).invoke('val').then((value) => {
            var qty = value //get the quantity

            cy.get('tbody > :nth-child(2) > :nth-child(2)').then((element) => {
                const price = element.text()
                var pc = price.split("$")
                const priceValue = pc[1].trim() //get the price
                cy.log(priceValue)
                var res = qty * priceValue // get the result = qty*price
                var result = res.toFixed(2);

                cy.log(result)

                cy.get('#itemTotal').then((element) => {
                    const total1 = element.text()
                    var totl = total1.split("$")
                    var subTotal = totl[1].trim() //Get the subtotal
                    cy.log(subTotal)

                    expect(Number(subTotal)).to.be.equal(Number(result)) //Validate the total and sum are equal
                })

            })
        })

    }
    validateRedeemCodeFunctionality() {
        cy.get('.nomargin').should('contain.text', 'Charges') //Charges heading
        cy.get('.col-sm-8').should('exist') //Product name
        cy.get('#checkout-total-cost').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const totalValue = elem[1].trim() //get the price
            cy.log(totalValue)
            //apply coupon code
            cy.get('#applyCoupnDiv').should('contain.text', 'Redeem Promo Code').click() //Redeem button
            cy.get('#promo-code-input').should('have.attr', 'placeholder', 'Code').type('EXTRA5') //Add promo code
            cy.get('#btn-promo').click() //Apply click
            cy.get('.promo-success-div').should('exist') //Success toast

            cy.get('#checkout-total-cost').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const changedtotalValue = elem1[1].trim() //get the price
                cy.log(changedtotalValue)
                expect(Number(changedtotalValue)).be.lessThan(Number(totalValue)) //Validate that total is updated after applying promo
            })

        })

    }

    validateBackButtonOnShippingAddressPage() {
        cy.get('#shipping-page-back-button').click() //click on back button
        cy.url().should('include', '/checkout/sign-in') // Validate URL       
    }
    addShippingAddress() {
        cy.get('.section-title').should('contain.text', 'Shipping Address') //page heading
        cy.get('#AccountShippingAddressFirstName').type('John')
        cy.get('#AccountShippingAddressLastName').type('Doe')
        cy.get('#AccountShippingAddressAddressLine1').type('Downy Street')
        cy.get('#AccountShippingAddressAddressCity').type('New York')
        cy.get('#AccountShippingAddressUsAddressRegion').select('New York')
        cy.get('#AccountShippingAddressAddressPostalZip').type('10006')
        cy.get('#AccountShippingAddressAddressShipPhonePrimary').type('+155566688889')
        cy.get('#add-shipping-address').should('have.value', 'Continue').click({ force: true })
    }
    validateAllContentOnShippingAndPaymentPage() {
        cy.get('.section-title').should('contain.text', 'Shipping AND PAYMENT')
        cy.get('.p2 > .pull-right').should('have.attr', 'href', '/checkout/shipping')
        cy.get(':nth-child(1) > .acc-edit > a').should('have.attr', 'href', '/checkout/cart')
        cy.get('#applyCoupnDiv').should('contain.text', 'Redeem Promo Code').click()
        cy.get('#promo-code-input').type('EXTRA5')
        cy.get('#btn-promo').click()
        cy.get('.payment-info-section-container > .p2').should('contain.text', 'Payment Information')
        cy.get(':nth-child(1) > .has-pretty-child > .clearfix').should('exist')
        cy.get(':nth-child(2) > .rd-inline > .clearfix').should('exist')
        cy.get('li > a').should('contain.text', 'Edit Address')
        cy.get('#payment-page-back-button').should('contain.text', 'Back')
        cy.get('#add-billing-address').should('contain.text', 'Place Order')
    }
    validateShippingOptionsSection() {
        cy.get('.p2.hidden-xs.acc-edit')
            .invoke('text')
            .should('match', /Shipping Options\s+Edit Ship Address/)
        cy.get('#selectShipId').select(0).should('contain.text', '5-7 Business Days')
        cy.get('#selectShipId').select(1).should('contain.text', '3-5 Business Days').wait(2000)
        // cy.get('#selectShipId').select(2).should('contain.text','2 Business Days').wait(1000)
        // cy.get('#selectShipId').select(3).should('contain.text','1 Business Day')
        cy.get('.p2 > .pull-right').click()
        cy.url().should('include', '/checkout/shipping')
    }
    validatePaymentInformationSection() {
        cy.get('.payment-info-section-container > .p2').should('contain.text', 'Payment Information')
        cy.get(':nth-child(1) > .has-pretty-child > .clearfix').should('exist')
        cy.get(':nth-child(2) > .rd-inline > .clearfix').should('exist')
        cy.get('#AppProductCardNumber').should('exist')
        cy.get('#AppProductExpiryMonth').should('exist')
        cy.get('#AppProductExpiryYear').should('exist')
        cy.get('#AppProductCvc').should('exist')
    }
    validateSelectBillingAddressSection() {
        cy.get('.form-spacer > label').should('contain.text', 'Select Billing Address')
        cy.get('.select-single > .active').should('exist')
        cy.get('li > a').should('contain.text', 'Edit Address').click()
        cy.url().should('include', '/checkout/billing/edit-address')
    }
    addAProductToCartWithProtection() {
        cy.get('.col-md-12 > .btn-cart > .btn').should('have.text', 'Add to Cart').click({ force: true })
        cy.wait(3000)
        // cy.get('.cart-btn').click()
        // cy.get(':nth-child(2) > .col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
        // cy.get('#addProtectionBtn').should('contain.text','Protect my purchase').click({force:true})
        // cy.get('.section-title').should('have.text','Shopping Cart') //shopping cart heading
        // cy.get(':nth-child(8) > .cart-product-head').should('contain.text','Extend Protection Plan with Accident Coverage')
    }
    goToCheckoutAsAGuest() {
        cy.get('[data-value="1"]').should('contain.text', 'Checkout As Guest').click({ force: true })
        cy.url().should('include', '/checkout/sign-in')
        cy.get('#UserEmail').type('mysms33@gmail.com')
        cy.get('#checkout-sign-in-submit-btn').click({ force: true })
    }
    addPaymentInfo() {
        cy.get('#AppProductCardNumber').type('4242424242424242')
        cy.get('#AppProductExpiryMonth').select('02')
        cy.get('#AppProductExpiryYear').select('26')
        cy.get('#AppProductCvc').type('568')
        // cy.get('#add-billing-address').click({force:true})
        // cy.get('#jsShowErrorModalText').should('contain.text','Merchant does not accept this card, try a different card.')
    }
    validateReviewsSection() {
        cy.get(':nth-child(1) > .mask-wrap').should('exist')
        cy.get(':nth-child(2) > .mask-wrap').should('exist')
        cy.get(':nth-child(3) > .mask-wrap').should('exist')
    }
    goToBackButtonOnPaymentPage() {
        cy.get('#payment-page-back-button').should('contain.text', 'Back').click()
        cy.url().should('include', '/checkout/shipping')
        cy.get('#add-shipping-address').click()
    }


}
export class SunglassesProductDetail {

    goToAddReview() {
        cy.get('#reviews').should('contain.text', 'RATINGS & REVIEWS')
        cy.get('.tt-c-reviews-summary__write-review-wrap > .tt-o-button').click()
        cy.wait(3000)
        cy.get('.tt-c-review-form-header__heading').should('contain.text', 'Please share your experience')
        cy.get('#tt-review-form-rating').should('exist')
        cy.get('.tt-c-review-form__overall-rating > .tt-c-rating > :nth-child(4)').click()
        cy.get('#tt-review-form-text').type('Very Good Experience')
        cy.get('#tt-review-form-title').type('Sunglasses')
        cy.get('.tt-c-review-form__actions > .tt-o-button').eq(0).click()
        cy.wait(2000)
        cy.get('.tt-o-text-field').eq(0).type('john')
        cy.get('.tt-o-text-field').eq(1).type('doe')
        cy.get('.tt-o-text-field').eq(2).type('testqatester81@gmail.com')
        // cy.get('.tt-c-auth__email-form > .tt-o-button').click()
        // cy.get('.tt-o-header__heading').should('contain.text', 'Thanks! One last step')
    }
    goToQuestionAnswersSection() {
        cy.get('#questions').should('contain.text', 'QUESTIONS & ANSWERS')
        cy.get('.tt-o-search-field__input').type('details about lenses?')
        cy.get('.tt-c-instant-answers__submit-wrap > .tt-o-button').click()
        cy.get('.tt-c-instant-answers__action-buttons > .tt-o-button--primary').click()
        // cy.get('.tt-c-auth__body > .tt-o-button--link').click()
        // cy.get('.tt-o-popover.tt-o-popover--success').should('contain.text', 'Thanks! Your question has been submitted. Please check back here for answers.')
    }
    goToFirstProductDetailPage() {
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
        cy.wait(2000)
    }
    addAProductToWishList() {
        cy.get('.add-to-wishlist-btn').click()
        cy.get('.product-name.margin-top-5').eq(0).invoke('text').then((text) => {
            cy.log(text)
            cy.get('.top-login > [href="/account/main"]').click() //MyAccount link
            cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(7) > a').should('have.attr', 'href', '/account/wishlist').click() //Whishlist section
            cy.get('.mini-order').should('exist')
            cy.get('[class="item-order-right"]').eq(0).should(($element) => {
                const actualText = $element.text().toLowerCase();
                const expectedText = text.toLowerCase().trim();
                expect(actualText).to.include(expectedText + '\n');
            });
            cy.log(text + ' item added to the wishlist!')
        })
    }
    removeProductFromWishlist() {
        cy.get('.remove-product').should('contain.text', 'Remove').click() //Remove link
        cy.get('#modal_remove_button').click().wait(2000) //confirm on popup
        cy.log('Item removed from the wishlist!')
    }
    validateAllContentOnProductDetailPage() {
        cy.get('.product-right > :nth-child(1) > .label').should('exist')
        cy.get('.tt-c-teaser').should('exist')
        cy.get('.add-to-wishlist-btn').should('exist')
        cy.get('.price-block > .curr-price').should('exist') //price
        cy.get('#frame_size').should('exist').select(1)
        cy.get(':nth-child(2) > .col-md-3').should('contain.text', 'Color ')
        cy.get('#new-color').should('exist').select(1)
        cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text', 'Add to Cart')
        cy.get('.mobile-text-color').should('exist') //EZ points section
        cy.get('.ez-points-reward-icon').click()
        cy.get('.ez-points-footer').should('exist')
        cy.get('.close-css').click()
        cy.get('#shipAvailability > strong').should('contain.text', 'AVAILABILITY')
        cy.get('.product-description > .nav > .active').should('contain.text', 'Details') //product details 
        cy.get('#details-desc').should('exist')
        cy.get('.caps > a').should('contain.text', 'Need Help?')
        cy.get('.mar-top-0 > a').should('contain.text', 'Contact Us Here')
    }
    selectLensDetails(lenseMaterial, antiReflectiveCoating) {
        //4.Lense Material
        cy.get('[data-price-content*="' + lenseMaterial + '"]').should('exist').click({ force: true })
        //Lense Materials Add Ons
        cy.get(':nth-child(1) > .row > .col-sm-8 > .ezMarkLabel').should('contain.text', 'Digitally Surfaced Lenses ').click()
        cy.get('.lens-ultraviolet-protection > .row > .col-sm-8 > .ezMarkLabel').should('contain.text', 'Ultraviolet Protection ').click()
        cy.get('.edge-polish > .ezMarkLabel').should('contain.text', 'Edge Polish ').click()
        cy.get('#step5-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        //Anti Reflective Coating 
        cy.get('[data-price-content*="' + antiReflectiveCoating + '"]').should('exist').click()
        cy.wait(1000)
        cy.get('#step6-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        cy.wait(1000)
    }
    removeAProductFromCart() {
        cy.get('.jsRemoveCartProduct').eq(0).click()
    }
    addProductToCartWithProtection() {
        cy.get('.total-amount > .col-sm-4').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('.product-summary-add-cart-btn > .btn-cart > .btn').should('contain.text', 'Add to Cart').click({ force: true })
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            cy.get('#itemTotal').then((element) => {
                const ele = element.text()
                var elem = ele.split("$")
                const price1 = elem[1].trim() //get the price
                cy.log(price1)
                cy.wrap(price1).should('eq', price)
                // cy.get('.cart-btn').should('contain.text','Add Accident Protection').click()
                // cy.get('.col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
                // cy.get('#addProtectionBtn').should('contain.text', "Protect my purchase").click()
                // cy.get('.content > .container > :nth-child(1)').should('contain.text','Extend Protection plan added successfully.')
                // cy.get(':nth-child(8) > .product-body > :nth-child(1) > .col-sm-9 > .row > .col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                //     const ele1 = element1.text()
                //     var elem1 = ele1.split("$")
                //     const price1 = elem1[1].trim() //get the price
                //     cy.log(price1)
                //     cy.get('#itemTotal').then((element1) => {
                //         const ele1 = element1.text()
                //         var elem1 = ele1.split("$")
                //         const price2 = elem1[1].trim() //get the price
                //         cy.log(price2)
                //         const sum = (parseFloat(price) + parseFloat(price1)).toFixed(2);
                //         cy.log(sum)
                //         cy.wrap(sum).should('eq', price2);
                //     })
            })
        })
    }
    addLensColorClear() {
        cy.get('#cleared-lens').should('contain.text', 'Clear').click()
        cy.wait(1000)
        cy.get('#sunglass-continue-btn').click()
        cy.get('#complete-btn').should('contain.text', 'Complete').click() //Complete button
    }
    addLensColorTinted(lensColor) {
        cy.get('#colored-lens').click()
        cy.get('label[class="ezMarkLabel"]').contains(lensColor).should('contain.text', lensColor).click()
        cy.wait(1000)
        cy.get('#complete-btn').should('contain.text', 'Complete').click()
    }
    addLensColor1(lensColor1, lensOption) {
        cy.get('div[class="lens-color"]').contains(lensColor1).should('contain.text', lensColor1).click()
        cy.wait(1000)
        cy.get('div[class="col-sm-3"]').contains(lensOption).should('contain.text', lensOption).click()
        cy.wait(1000)
        cy.get('#complete-btn').should('contain.text', 'Complete').click() //Complete button
    }
    selectLensType(lensType) {
        cy.get('div[class="col-sm-6"]').contains(lensType).should('contain.text', lensType).click()
    }
    selectLensTypeBifocal(lensType1) {
        cy.get('.jsToolProgBifoc').should('contain.text', 'Progressive / Bifocal ').click()
        cy.get('#AccountPrescriptionRightSph').select('+1.00') //Sphere Right eye OD
        cy.get('#AccountPrescriptionRightAdd').select(1)
        cy.get('#AccountPrescriptionLeftSph').select('+1.00') //Sphere Left Eye OD
        cy.get('#AccountPrescriptionLeftAdd').select(1)
        cy.get('#AccountPrescriptionPd1').select(1) //PD Pupil Distance
        cy.get('#step3-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        cy.wait(1000)
        cy.get('div[class="col-sm-10"]').contains(lensType1).should('contain.text', lensType1).click()
        cy.get('#step4-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        cy.wait(2000)
    }
    selectLensTypeDetail() {
        cy.get('#AccountPrescriptionRightSph').select('+1.00') //Sphere Right eye OD
        cy.get('#AccountPrescriptionLeftSph').select('+1.00') //Sphere Left Eye OD
        cy.get('#AccountPrescriptionPd1').select(1) //PD Pupil Distance
        cy.get('#step3-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
    }
    selectBlueLightLensDetail(lens) {
        cy.get('div[class="col-md-10 col-sm-9"]').contains(lens).should('contain.text', lens).click()
    }
    applyWebBrandFilter() {
        cy.get("label[for='brand_uFilter_Tommy Hilfiger']").click()
        cy.get(':nth-child(3) > .selected-facet-delete').should('contain.text', 'Tommy Hilfiger')

    }
    addProductToCartWithoutProtection() {
        cy.get('.total-amount > .col-sm-4').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('.product-summary-add-cart-btn > .btn-cart > .btn').should('contain.text', 'Add to Cart').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            // cy.get('.cart-btn').should('contain.text','Add Accident Protection').click()
            // cy.get('.col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
            // cy.get('#removeProtectionBtn').should('contain.text',"I don't want protection").click()
            cy.get('#itemTotal').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    addProductToCartWithoutProtection1() {
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text', 'Add to Cart').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            // cy.get('.cart-btn').should('contain.text','Add Accident Protection').click()
            // cy.get('.col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
            // cy.get('#removeProtectionBtn').should('contain.text',"I don't want protection").click()  
            cy.get('#itemTotal').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    addProductToCartWithProtection1() {
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text', 'Add to Cart').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            cy.get('#itemTotal').then((element) => {
                const ele = element.text()
                var elem = ele.split("$")
                const price1 = elem[1].trim() //get the price
                cy.log(price1)
                cy.wrap(price1).should('eq', price)
                // cy.get('.cart-btn').should('contain.text','Add Accident Protection').click()
                // cy.get('.col-md-12 > h2').should('contain.text','Protect your eyewear from accidental damage.')
                // cy.get('#addProtectionBtn').should('contain.text', "Protect my purchase").click()
                // cy.get('.content > .container > :nth-child(1)').should('contain.text','Extend Protection plan added successfully.')
                // cy.get(':nth-child(8) > .product-body > :nth-child(1) > .col-sm-9 > .row > .col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                //     const ele1 = element1.text()
                //     var elem1 = ele1.split("$")
                //     const price1 = elem1[1].trim() //get the price
                //     cy.log(price1)
                //     cy.get('#itemTotal').then((element1) => {
                //         const ele1 = element1.text()
                //         var elem1 = ele1.split("$")
                //         const price2 = elem1[1].trim() //get the price
                //         cy.log(price2)
                //         const sum = (parseFloat(price) + parseFloat(price1)).toFixed(2);
                //         cy.log(sum)
                //         cy.wrap(sum).should('eq', price2);
                //     })
            })
        })
    }
    addCustomLens() {
        cy.wait(3000)
        cy.get(':nth-child(5) > .col-md-12 > .add_custom').click() //Add custom lense
    }
    selectLensDetails1(lenseMaterial) {
        //4.Lense Material
        cy.get('[data-price-content*="' + lenseMaterial + '"]').should('exist').click({ force: true })
        //Lense Materials Add Ons
        cy.get(':nth-child(1) > .row > .col-sm-8 > .ezMarkLabel').should('contain.text', 'Digitally Surfaced Lenses ').click()
        cy.get('.lens-ultraviolet-protection > .row > .col-sm-8 > .ezMarkLabel').should('contain.text', 'Ultraviolet Protection ').click()
        cy.get('.edge-polish > .ezMarkLabel').should('contain.text', 'Edge Polish ').click()
        cy.get('#step5-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        //Anti Reflective Coating 
        cy.get('.coating > :nth-child(3) > .row > .col-md-10 > .ezMarkLabel').should('exist').click()
        cy.wait(1000)
        cy.get('#step6-content > .step-btns > .pull-right').should('contain.text', 'Next Step').click() //Next
        cy.wait(1000)
    }
}
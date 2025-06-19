export class ContactLensesProductDetail {
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
        cy.wait(3000)
        cy.get('.tt-o-text-field').eq(0).type('john')
        cy.get('.tt-o-text-field').eq(1).type('doe')
        cy.get('.tt-o-text-field').eq(2).type('testqatester81@gmail.com')
        // cy.get('.tt-c-auth__email-form > .tt-o-button').click()
        // cy.get('.tt-o-header__heading').should('contain.text','Thanks! One last step')
    }
    goToQuestionAnswersSection() {
        cy.get('#questions').should('contain.text', 'QUESTIONS & ANSWERS')
        cy.get('.tt-o-search-field__input').type('details about lenses?')
        cy.get('.tt-c-instant-answers__submit-wrap > .tt-o-button').click()
        cy.get('.tt-c-instant-answers__action-buttons > .tt-o-button--primary').click()
        // cy.get('.tt-c-auth__body > .tt-o-button--link').click()
        // cy.get('.tt-o-popover.tt-o-popover--success').should('contain.text','Thanks! Your question has been submitted. Please check back here for answers.')
    }
    goToFirstProductDetailPage() {
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
    }
    addAProductToWishList() {
        cy.get('.add-to-wishlist-btn').click()
        cy.get('.top-login > [href="/account/main"]').click()
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(7) > a').should('have.attr', 'href', '/account/wishlist').click()
        cy.get('.mini-order').should('exist')
        cy.go('back')
        cy.go('back')
        cy.get('.add-to-wishlist-btn').click()
    }
    validateAllContentOnProductDetailPage() {
        cy.get('.tt-c-teaser').should('exist')
        cy.get('.price-block > .curr-price').should('exist') //price
        cy.get('.pull-right > #addtocart').should('contain.text', 'Add to cart')
        cy.get('.price-box > .row > .col-md-12 > div > :nth-child(3)').should('exist') //EZ points section
        cy.get('.ez-points-reward-icon').click()
        cy.get('.ez-points-footer').should('exist')
        cy.get('.close-css').click()
        cy.get('.pull-right > div > .small').should('contain.text', 'Available')
        cy.get('.product-description > .nav > .active').should('contain.text', 'Details') //product details 
        cy.get('.heading-title-2').should('contain.text', 'Enter Prescription')
        cy.get("label[for='AppProductRightEye'] strong").should('contain.text', 'Right Eye (OD)')
        cy.get("label[for='AppProductLeftEye'] strong").should('contain.text', 'Left Eye (OS)')
        cy.get('#details-desc').should('exist')
        cy.get('.caps > a').should('contain.text', 'Need Help?')
        cy.get('.mar-top-0 > a').should('contain.text', 'Contact Us Here')
        cy.get(':nth-child(3) > .no-margin-top').should('exist')
    }
    addtocartwithSameprescription() {

        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('input[name="same_prescription"]').click({ force: true })//click on same prescription of both lenses
            cy.get('#AppProductRightPower').select('+1.00')
            cy.get('select[name="data[AppProduct][right_bc]"]').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightCyl').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightAxis').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightColor').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.get('Dropdown is not exist ')
                }
            })
            cy.get('#same-prescription-how-many').select('1')
            cy.get('.pull-right > #addtocart').should('contain.text', 'Add to cart').click().wait(2000)
            cy.get('.confirmIsPlusPower').should('contain.text', 'Yes, it’s Correct').click()
            cy.get("div[class='message success success-msg']").should('contain', 'Item successfully added to your cart')
            cy.get('.col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    addAProductToCartAndValidate() {
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('#AppProductRightPower').select('+1.00')
            cy.get('select[name="data[AppProduct][right_bc]"]').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightCyl').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightAxis').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductRightColor').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.get('Dropdown is not exist ')
                }
            })
            cy.get('#AppProductRightHowMany').select('1')
            cy.get('#AppProductLeftPower').select('+1.00')
            cy.get('select[name="data[AppProduct][left_bc]"]').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductLeftCyl').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductLeftAxis').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown is not exist')
                }
            })
            cy.get('#AppProductLeftColor').if().should('exist').then((element) => {
                if (element.length > 0) {
                    cy.get(element).select(1)
                }
                else {
                    cy.log('Dropdown doest not exist')
                }
            })
            cy.get('#AppProductLeftHowMany').select('1')
            cy.get('.pull-right > #addtocart').should('contain.text', 'Add to cart').click().wait(2000)
            cy.get('.confirmIsPlusPower').should('contain.text', 'Yes, it’s Correct').click()
            cy.get("div[class='message success success-msg']").should('contain', 'Item successfully added to your cart')
            cy.get('.col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    removeAProductFromCart() {
        cy.get('.jsRemoveCartProduct').click()
    }
    addProductToCartWithRightEyeOD() {
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('#AppProductRightPower').select('+1.00')
            cy.get('#AppProductRightHowMany').select('1')
            cy.get('.left-eye-h5 > .form-spacer > .clearfix > .checked').click()
            cy.get('#addToCartCustom').should('contain.text', 'Add to cart').click()
            cy.get('.confirmIsPlusPower').should('contain.text', 'Yes, it’s Correct').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            cy.get('.col-md-3 > .cart-table > tbody > :nth-child(2) > :nth-child(2)').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    addProductToCartWithLeftEyeOD() {
        cy.get('.price-block > .curr-price').then((element) => {
            const ele = element.text()
            var elem = ele.split("$")
            const price = elem[1].trim() //get the price
            cy.log(price)
            cy.get('.right-eye-check-class > .form-spacer > .clearfix > .checked').click()
            cy.get('#AppProductLeftPower').select('+1.00')
            cy.get('#AppProductLeftHowMany').select('1')
            cy.get('#addToCartCustom').should('contain.text', 'Add to cart').click()
            cy.get('.confirmIsPlusPower').should('contain.text', 'Yes, it’s Correct').click()
            cy.get('.content > .container > :nth-child(1)').should('contain.text', 'Item successfully added to your cart.')
            cy.get('.col-md-3 > .cart-table > tbody > :nth-child(3) > :nth-child(2)').then((element1) => {
                const ele1 = element1.text()
                var elem1 = ele1.split("$")
                const price1 = elem1[1].trim() //get the price
                cy.log(price1)
                expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            })
        })
    }
    addProductToCartWithoutSelect() {
        cy.get('.right-eye-check-class > .form-spacer > .clearfix > .checked').click()
        cy.get('.left-eye-h5 > .form-spacer > .clearfix > .checked').click()
        cy.get('#addToCartCustom').should('contain.text', 'Add to cart').click()
        cy.get('.prescription-error').should('exist')
    }
}
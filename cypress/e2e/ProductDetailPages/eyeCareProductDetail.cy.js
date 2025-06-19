/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeCareProductDetail } from "../../pageObjects/EyeCareProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"

const homepage = new Homepage
const eyeCareProductDetail = new EyeCareProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_019 - EyeCareProductDetail', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/eye-care')
        homepage.closeDiscountPOpup()
    })

    it('TC_ECPD_001 - Verify the content on the EyeCare Product detail page shown correctly', function () {
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.validateAllContentOnProductDetailPage()
    })

    it('TC_ECPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page', function () {
        cy.get('.top-login > [href="/account/sign-in"]').click()
        accountPage.signin('testqatester81@gmail.com', '123456')
        menuOptions.goToEyecareCatalog()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.goToAddReview()
    })

    it('TC_ECPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on the product detail page', function () {
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.goToQuestionAnswersSection()
    })

    it('TC_ECPD_004 - Verify that the user can add any EyeCare product to the Wishlist', function () {
        cy.get('.top-login > [href="/account/sign-in"]').click()
        accountPage.signin('testqatester81@gmail.com', '123456')
        menuOptions.goToEyecareCatalog()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.addAProductToWishList()
        eyeCareProductDetail.removeProductFromWishlist()
    })

    it('TC_ECPD_005 - Validate "Add to Cart" functionality on the EyeCare product page ', function () {
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.addAProductToCartAndValidate()
    })
})
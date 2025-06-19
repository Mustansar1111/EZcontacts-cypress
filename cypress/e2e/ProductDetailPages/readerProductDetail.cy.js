/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { ReaderProductDetail } from "../../pageObjects/ReaderProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"

const homepage = new Homepage
const readerProductDetail = new ReaderProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_018 - ReaderProductDetail', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
    })

    it('TC_RDPD_001 - Verify the content on the Readers Product detail page shown correctly', function () {
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.validateAllContentOnProductDetailPage()
    })

    it('TC_RDPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page', function () {
        cy.get('.top-login > [href="/account/sign-in"]').click()
        accountPage.signin('testqatester81@gmail.com', '123456')
        menuOptions.goToReadersCatalog()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToAddReview()
    })

    it('TC_RDPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on the product detail page', function () {
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToQuestionAnswersSection()
    })

    it('TC_RDPD_004 - Verify that the user can add any Readers product to the Wishlist', function () {
        cy.get('.top-login > [href="/account/sign-in"]').click()
        accountPage.signin('testqatester81@gmail.com', '123456')
        menuOptions.goToReadersCatalog()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToWishList()
        readerProductDetail.removeProductFromWishlist()
    })

    it('TC_RDPD_005 - Validate "Add to Cart" functionality on the Readers product page including "Accident Protection"', function () {
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithProtectionAndValidate()
    })

    it('TC_RDPD_006 - Validate "Add to Cart" functionality on the Readers product page Excluding "Accident Protection" ', function () {
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithoutProtectionAndValidate()
    })
})

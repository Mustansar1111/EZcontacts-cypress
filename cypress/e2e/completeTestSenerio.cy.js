///<reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { CheckoutPage } from "../pageObjects/CheckoutPage"
import { ContactLensesProductDetail } from "../pageObjects/ContactLensesProductDetail"
import { EyeglassesProductDetail } from "../pageObjects/EyeglassesProductDetail"
import { CompleteTestCase } from "../pageObjects/CompleteTestCase"

const homepage = new Homepage
const checkoutPage = new CheckoutPage
const eyeglassesProductDetail = new EyeglassesProductDetail
const contactLensesProductDetail = new ContactLensesProductDetail
const completeTestCase = new CompleteTestCase

describe('Complete Test senerios ', function () {

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
    })

    it('TC_CTS_001 - Validate the complete process of Buying a Sunglasses product', () => {
        cy.visit('/sunglasses')
        homepage.closeDiscountPOpup()
        cy.selectRandomProduct()
        checkoutPage.addAProductToCartWithProtection()
        checkoutPage.gotoCheckoutNowButton()
        checkoutPage.addShippingAddress()
        checkoutPage.addPaymentInfo()
    })

    it('TC_CTS_002 - Validate the complete process of Buying an Eyeglasses product', function () {
        cy.visit('/eyeglasses')
        homepage.closeDiscountPOpup()
        eyeglassesProductDetail.goToFirstProductDetailPage()
        eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
        eyeglassesProductDetail.selectLensTypeDetail()
        eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
        eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™")
        eyeglassesProductDetail.addProductToCartwithProtection()
        checkoutPage.gotoCheckoutNowButton()
        checkoutPage.addShippingAddress()
        checkoutPage.addPaymentInfo()
    })

    it('TC_CTS_003 - Validate the complete process of Buying a Contact Lens product', function () {
        cy.visit('/contact-lenses')
        homepage.closeDiscountPOpup()
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
        contactLensesProductDetail.addAProductToCartAndValidate()
        checkoutPage.gotoCheckoutNowButton()
        checkoutPage.addShippingAddress()
        checkoutPage.addPaymentInfo()
    })

    it('TC_CTS_004 - Validate the complete process of Buying a Reader product', function () {
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
        completeTestCase.ReaderCompleteCheckoutProcces()
        checkoutPage.gotoCheckoutNowButton()
        checkoutPage.addShippingAddress()
        checkoutPage.addPaymentInfo()
    })

    it('TC_CTS_005 - Validate the complete process of Buying an Eye-Care product', function () {
        cy.visit('/eye-care')
        homepage.closeDiscountPOpup()
        completeTestCase.EyeCareCompleteCheckoutProcess()
        checkoutPage.gotoCheckoutNowButton()
        checkoutPage.addShippingAddress()
        checkoutPage.addPaymentInfo()
    })
})

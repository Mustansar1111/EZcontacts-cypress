/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { CustomerCarePages } from "../pageObjects/CustomerCarePages"

const homepage = new Homepage
const customerCarePages = new CustomerCarePages

describe('TS_021 - CustomerCare', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/')
        homepage.closeDiscountPOpup()
    })

    it('TC_CC_001 - Validate all the content on the About EZ Contacts page', function () {
        customerCarePages.validatecontentonAboutEZContacts()
    })

    it('TC_CC_002 - Validate all the content on the EZ Contacts FAQS page', function () {
        customerCarePages.validateContentOnFAQSPage()
    })

    it('TC_CC_003 - Validate all the content on the Shipping & Handling page', function () {
        customerCarePages.validateContentOnShippingAndHandlingPage()
    })

    it('TC_CC_004 - Validate all the content on the Returns & Exchanges page', function () {
        customerCarePages.validateContentOnReturnsAndExchangesPage()
    })

    it('TC_CC_005 - Validate all the content on the Price Match Guarantee page', function () {
        customerCarePages.validateContentOnPriceMatchGuaranteePage()
    })
})
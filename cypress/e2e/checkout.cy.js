/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { CheckoutPage } from "../pageObjects/CheckoutPage"


const homepage = new Homepage
const checkout = new CheckoutPage

describe('TS_004 - CheckoutPage', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/')
        homepage.closeDiscountPOpup()
    })

    it('TC_CK_001 - Validate a blank shopping cart page', function () {
        checkout.validateBlankCart() //Validate Blank Cart
    })

    it('TC_CK_002 - Validate a shopping cart page after adding some product(s)', function () {
        checkout.goToSunglassesCatalog()//add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection()// add a product to cart without protection
        checkout.validateAllContentOnCartPage() //validate the shipping cart
    })

    it('TC_CK_003 - Validate the "Shopping Cart" page containing products without "Accident Protection"', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateAddAccidentProtectionFunctionalty() //AddAccidentProtectionFunctionalty
    })

    it('TC_CK_004 - Validate the "Edit" button from the Cart page', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateEditButtonFunctionaltyOnCartPage() //validate edit button functionalty
    })

    it('TC_CK_005 - Validate the "Remove Item" button', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.clickOnRemoveItemButton() //click on remove item button
    })

    it('TC_CK_006 - Validate the Quanity with a dropdown and the price', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateQuantityField('5')
    })

    it('TC_CK_007 - Validate the Empty or Invalid code in "Redeem Promo Code" ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateInValidRedeemPromoCodeFunctionalty() // validate Invalid Redeem Promo Code Functionalty
    })

    it('TC_CK_008 - Validate the valid code in Redeem Promo Code ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateValidRedeemPromoCodeFunctionalty() // validate valid Redeem Promo Code Functionalty
    })

    it('TC_CK_009 - Validate a Shipping address page after checkout cart ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton()
        checkout.validateAllContentOnShippingAddress()
    })

    it('TC_CK_010 - Validate the "Shipping Address" options. ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton()
        checkout.validateAllContentOnShippingAddress()
    })

    it('TC_CK_011 - Validate the "Back" button on shipping address page ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.validateBackButtonOnShippingAddressPage() //validate Back Button On Shipping Address Page 
    })

    it('TC_CK_012 - Validate the Payment page after the shipping address ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content 
        checkout.validateAllContentOnShippingAndPaymentPage() //validate All Content On Shipping And Payment Page
    })

    it('TC_CK_013 - Validate the "Shipping Options" section in the "Payment" page ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateShippingOptionsSection() // validate Shipping Options Section
    })

    it('TC_CK_014 - Validate the "Charges" section in the Payment page ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateRedeemCodeFunctionality() //apply coupon and validate
    })

    it('TC_CK_015 - Validate the "Payment Information" section ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validatePaymentInformationSection() //Validate Payment Information
    })

    it('TC_CK_016 - Validate the "Select Billing Address" box ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateSelectBillingAddressSection() //validate Select Billing Address Section
    })

    it('TC_CK_017 - Validate the "Add New Billing Address" button. ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateReviewsSection() //validate Reviews Section
    })

    it('TC_CK_018 - Validate the "Add New Billing Address" button. ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.goToBackButtonOnPaymentPage() // go To Back Button On Payment Page
        checkout.addPaymentInfo()
    })

    it('TC_CK_019 - Verify that when the user deletes the product from the cart the protection should also get deleted. ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithProtection() //add A Product To Cart With Protection
        checkout.clickOnRemoveItemButton()
    })

    it('TC_CK_020 - Verify that the user checkout without login ', function () {
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection()
        checkout.goToCheckoutAsAGuest()
        checkout.addShippingAddress()
        checkout.addPaymentInfo()
    })
})
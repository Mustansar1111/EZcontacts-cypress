/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { ReuseableCode } from "../support/ReuseableCode"

const homepage = new Homepage
const reuseableCode = new ReuseableCode

describe('TS_002 - HomePage', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/')
        homepage.closeDiscountPOpup()
    })

    it('TC_HP_001 - Validate the "Sunglasses" drop-down category', function () {
        homepage.hoverOnSunglassesMenu() //Hover on Sunglasses Menu
        homepage.validateMensSunglassesMenuOptions() //Validate Men's menu options
        homepage.validateWomensSunglassesMenuOptions() //Validate Women's menu options
        homepage.validateChildrenSunglassesMenuOptions() //Validate Children's menu options
        homepage.validateFrameShapeOnSunglasses() //Validate Frame shapes on sunglasses
    })

    it('TC_HP_002 - Validate the "Eyeglasses" drop-down category', function () {
        homepage.hoverOnEyeglassesMenu() //Hover on Eyeglasses Menu
        homepage.verifyFrameShapesOnEyeglasses() //Verify Frameshapes on eyeglasses
        homepage.validateMensEyeglassesMenuOptions() //Validate Men's eyeglasses menu options
        homepage.validateWomensEyeglassesMenuOptions() //Validate Women eyeglasses menu options
        homepage.validateChildrenEyeglassesMenuOptions() //Validate Children eyeglasses menu options
    })

    it('TC_HP_003 - Validate the "Contact Lenses" drop-down category', function () {
        homepage.hoverOnContactLenseMenu() //Hover on Contact Lenses Menu
        homepage.verifyPopularBrandsOnContectLense() //Verify Popular Brands on Contact Lense
    })

    it('TC_HP_004 - Validate that the "Reader" tab from the navbar is functional', function () {
        homepage.gotoReaderPage() //Validate and go to reader page
    })

    it('TC_HP_005 - Validate the "Eye Care" drop-down category', function () {
        homepage.hoverOnEyeCareMenu() //Hover on Eyecare Menu
        homepage.validateEyecareMenu() //validate Eyecare Categories
    })

    /*
    it('TC_HP_006 - Validate that the "Clearance" Menu from the navbar is functional', function () {
        homepage.gotoClearancePage() //Validate and goto clearance page
    })
     it ('TC_HP_007 - Validate that the "SALES" tab from the navbar is functional', function(){
 
         cy.visit('/')
         homepage.closeDiscountPOpup() //close discount popup
         homepage.validatePromotionBanner() //validate Promotion banner
         homepage.validateFreeShippingInfo() //validate Free shipping info
         homepage.validateLowestPriceGuaranteeInfo() //validate lowest Price Guarantee info
         homepage.validateWelcomeMessage() //Validate Welcome Message
         homepage.validateTollFreeNumberInfo() //Validate tollfree number
         homepage.validateLoginLink() //Validate Login link
         homepage.validateRorderLink() //validate Reorder link
         homepage.validateCreateAccountLink() //validate Create Account link 
         homepage.validateCartIcon() //validate the cart icon
         homepage.validateCompanyLogo() //validate company logo
     })
     */
    it('TC_HP_008 - Verify search bar functionality', function () {
        homepage.verifyTheSearchSuggestionDropdown('Rayban ') //Enter keyword and validate suggestion dropdown
    })

    it('TC_HP_009 - Verify the hero section is shown correctly and its functionality', function () {
        homepage.verifyTheHeroSection() //Verify the main slider
    })

    it('TC_HP_010 - Verify the "Deal section" products are functioning', function () {
        homepage.verifyDealSectionProducts() //Verify the deal section products
    })

    it('TC_HP_011 - Validate the "Hows Your Vision?" option', function () {
        homepage.goToVisionSectionPage() //
    })

    xit('TC_HP_012 - Validate the Product category sections shown under "Hows Your Vision" option', function () {
        homepage.validateSunglassesSection() //Validate Sunglasses section
        homepage.validateWomensFrameSection() //Validate Womens Frame section
        homepage.validateMenFrameSection() //Validate Mens Frame section
        homepage.validateOnlineVisionSection() //Validate OnlineVisionTest section
        homepage.validateContactLenseSection() //Validate contact lense section
    })

    it('TC_HP_013 - Verify that brand logo icons are shown and redirect the user to specific product page', function () {
        homepage.validateBrandLogoIcons() //Validate brand logo icons
    })

    it('TC_HP_014 - Validate the Email subscription option at the top of footer', function () {
        const email = reuseableCode.generateRandomString(6) + '@yopmail.com'
        homepage.activeEmailSubscription(email)
    })

    it('TC_HP_015 - Validate the ACCOUNT links in the footer section', function () {
        homepage.validateAccountSectionLinksInFooter() //Validate Account section links
    })

    it('TC_HP_016 - Validate the CATEGORIES links in the footer section', function () {
        homepage.validateCategoriesSectionLinksInFooter() //Validate Categories
    })

    it('TC_HP_017 - Validate the "CUSTOMER CARE" links in footer section', function () {
        homepage.validateCustomerCareSectionLinksInFooter() //Validate Customer Care section
    })

    it('TC_HP_018 - Validate the "HOW TOS" links in footer section', function () {
        homepage.validateHowsToSectionLinksInFooter() //How To's section 
    })

    it('TC_HP_019 - Validate the "RESOURCES" links in the footer section', function () {
        homepage.validateResourcesLinksInFooterSection() //Resources links 
    })

    it('TC_HP_020 - Validate the "CONTACT US" icon in the footer section', function () {
        homepage.validateContactUsSectonInFooter() //Contact US Section
    })

    it('TC_HP_021 - Validate the "Privacy Policy" & "Terms of Service" links in the footer section', function () {
        homepage.validatePrivacyPolicy_TermsOfServiceLinks() //Validate PrivacyPolicy & TermsOfServiceLinks
    })

    it('TC_HP_022 - Validate the "Social icons" links in footer section', function () {
        homepage.validateSocialIconsInFooter() //Validate Social Icons
    })

    it('TC_HP_023 - Validate the copyright claim info in footer section', function () {
        homepage.validateCopyRight() //Validate copyright info
    })
})
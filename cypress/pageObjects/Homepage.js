export class Homepage {
    closeDiscountPOpup() {
        cy.wait(2000)
        //cy.get('#ltkpopup-close-button > .ltkpopup-close').should('exist').click() //Close popup cross icon
        cy.reload()
    }
    hoverOnSunglassesMenu() {
        cy.get('.dropdown a[href="/sunglasses"]').should('have.text', 'SUNGLASSES').trigger('mouseover').trigger('mouseenter')
    }
    validateMensSunglassesMenuOptions() {
        cy.get('[href="/mens-sunglasses"] h3[class="title"]').should('have.text', 'Men’s') //Sunglasses Men's
        cy.get('li [href="/mens-sunglasses"]').contains("All Men's").should('have.text', "All Men's") //All Men's
    }
    validateWomensSunglassesMenuOptions() {
        cy.get('[href="/womens-sunglasses"] h3[class="title"]').should('have.text', "Women's") //Sunglasses Women's
        cy.get('li [href="/womens-sunglasses"]').contains("All Women's").should('have.text', "All Women's") //All Women's
    }
    validateChildrenSunglassesMenuOptions() {
        cy.get('[href="/childrens-sunglasses"] h3[class="title"]').should('have.text', "Children's") //Sunglasses Children’s
        cy.get('li [href="/childrens-sunglasses"]').contains("Children's").should('have.text', "Children's") //All Children's

    }
    validateFrameShapeOnSunglasses() {
        cy.get('h3.title.mar-top-0').eq(0).should('have.text', 'Frame Shapes')
        cy.contains('h3.title', 'Featured Brands').should('have.text', 'Featured Brands')
    }
    hoverOnEyeglassesMenu() {
        cy.get('.dropdown a[href="/eyeglasses"]').should('have.text', 'EYEGLASSES').trigger('mouseover')
    }
    verifyFrameShapesOnEyeglasses() {
        cy.get('h3.title.mar-top-0').eq(1).should('have.text', 'Frame Shapes')
        cy.contains('h3.title', 'Featured Brands').should('have.text', 'Featured Brands')
    }
    validateMensEyeglassesMenuOptions() {
        cy.get('[href="/mens-eyeglasses"] h3[class="title"]').should('have.text', 'Men’s') //Men's
        cy.get('li [href="/mens-eyeglasses"]').contains("All Men's").should('have.text', "All Men's") //All Men's
    }
    validateWomensEyeglassesMenuOptions() {
        cy.get('[href="/womens-eyeglasses"] h3[class="title"]').should('have.text', "Women's") //Women's
        cy.get('li [href="/womens-eyeglasses"]').contains("All Women's").should('have.text', "All Women's") //All Women's
    }
    validateChildrenEyeglassesMenuOptions() {
        cy.get('[href="/childrens-eyeglasses"] h3[class="title"]').should('have.text', "Children's") //Children's
        cy.get('li [href="/childrens-eyeglasses"]').contains("Children's").should('have.text', "Children's") //All Children's
    }

    hoverOnContactLenseMenu() {
        cy.get('.dropdown a[href="/contact-lenses"]').should('have.text', 'CONTACT LENSES').trigger('mouseover') //CONTACT LENSES
        cy.contains('h3.title', 'Featured Brands').should('have.text', 'Featured Brands')

    }
    verifyPopularBrandsOnContectLense() {
        cy.get('.open h3').eq(1).should('have.text', 'Popular Brands') //Popular Brands heading
        cy.get('.open .col-sm-8').should('exist') //Popular Brands 
    }
    gotoReaderPage() {
        cy.get('.dropdown a[href="/readers"]').should('have.attr', 'href', '/readers').click() //Go to READER Menu link

        cy.get('h2.section-title').should('have.text', 'Readers') //Validate Readers heading 
    }
    hoverOnEyeCareMenu() {
        cy.get('.dropdown a[href="https://www.ezcontacts.com/eye-care"]').should('have.text', 'Eye Care').trigger('mouseover')
    }
    validateEyecareMenu() {
        cy.get('.open h3').should('contain', 'Categories')
        //cy.get('.open .col-sm-8').should('exist') //Validate eyecare category list exists
    }
    gotoClearancePage() {
        cy.get('.dropdown a[href="/eyewear/clearance:yes"]').should('have.text', 'Clearance')
            .should('have.attr', 'href', '/eyewear/clearance:yes').click() //validate and GO to Clearance page
        cy.get('a[unbxdparam_facetname="v_clearance_uFilter"]').should('have.text', 'Clearance×') //Validate Clearance Filter applied on the page
    }
    validatePromotionBanner() {
        cy.get('.col-sm-12 > strong').should('exist').click() //
        cy.wait(1000)
        cy.get('#special-top-message-modal > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]').click() //close popup
    }
    validateFreeShippingInfo() {
        cy.get('.header-top-promo > .container > .row > .col-sm-8 > :nth-child(2)').should('contain.text', 'FREE SHIPPING').click()//FREE SHIPPING
        cy.wait(1000)
        cy.get('#free-shipping-modal > .modal-dialog > .modal-content > .modal-header > #myModalLabel')
            .should('contain.text', 'Free Shipping Offer Details') //Validate popup heading
        cy.get('#free-shipping-modal > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]').click()
    }
    validateLowestPriceGuaranteeInfo() {
        cy.get('[data-target="#lowest-price-guarantee-modal"]').should('contain.text', 'Lowest Price').click() //
        cy.get('#lowest-price-guarantee-modal > .modal-dialog > .modal-content > .modal-header > #myModalLabel')
            .should('contain.text', 'Price Match') //Validate heading
        cy.get('#lowest-price-guarantee-modal > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]').click() //Close the popup
    }
    validateWelcomeMessage() {
        cy.get('.col-sm-4 > .pull-right').should('contain.text', 'Welcome to EzContacts.com!')
    }
    validateTollFreeNumberInfo() {
        cy.get('.cls-header-top-fix > .container > .row > .col-sm-4').should('contain.text', 'Toll Free')
    }
    validateLoginLink() {
        cy.get('.top-login > [href="/account/sign-in"]').should('have.attr', 'href', '/account/sign-in')
    }
    validateRorderLink() {
        cy.get('.top-login > [href="/account/order-history"]').should('have.attr', 'href', '/account/order-history')
    }
    validateCreateAccountLink() {
        cy.get('[href="/account/create-account"]').should('have.attr', 'href', '/account/create-account')
    }
    validateCartIcon() {
        cy.get('.cart > a').should('have.attr', 'href', '/checkout/cart')
    }
    validateCompanyLogo() {
        cy.get('.cls-header-logo-img-fix').should('exist')
    }
    verifyTheSearchSuggestionDropdown(keyword) {
        cy.get('#search_query').type(keyword) //Search a keyword
        cy.get('.top-search > .unbxd-autosuggest-results > .unbxd-as-wrapper').should('exist') //Verify the suggession dropdown
        cy.get('.unbxd-as-keysuggestion').each((suggestion, index, $list) => {
            cy.wrap(suggestion).trigger('mouseover');
            cy.wait(1000)
        }); //Validate the suggesion list
    }
    verifyTheHeroSection() {
        cy.get('[class="swiper-slide swiper-slide-active swiper-slide-next"]').should('be.visible') //main image should be visible
    }
    verifyDealSectionProducts() {
        cy.get('[class="section-head"] [class="title"]').contains('Recommended Products').should('exist') //Verify the DEAL section heading
        cy.get('[id="product-slider"] [class="product-box"]').should('exist') //verify that products are shown
        cy.get('[id="product-slider"] [class="product-box"]').eq(0).click() //Go to first deal product page
        cy.wait(5000)
    }
    goToVisionSectionPage() {
        cy.get('[href="https://www.ezcontacts.com/online-vision-test/"]').should('exist').click() //validate and click HOWS YOUR Vision?
        cy.wait(2000)
        cy.url().should('include', '/online-vision-test/'); //Validate the URL
    }
    validateSunglassesSection() {
        cy.get('[amplitude-id="Sunglasses"] h2').should('have.text', 'Sunglasses') //Validate Sunglasses section heading
        cy.get('.innergrid [href="/sunglasses"]:first-child').should('have.attr', 'href', '/sunglasses') //Validate shop now
    }
    validateWomensFrameSection() {
        cy.get('a[amplitude-id="WomenSunglasses"]').should('have.attr', 'href', '/womens-eyeglasses') //Validate Women’s Frames
    }
    validateMenFrameSection() {
        cy.get('a[amplitude-id="MenSunglasses"]').should('have.attr', 'href', '/mens-eyeglasses')
    }
    validateOnlineVisionSection() {
        cy.get('a[amplitude-id="Opternative"]').should('have.attr', 'href', '/online-vision-test')
    }
    validateContactLenseSection() {
        cy.get('a[amplitude-id="Contacts"]').should('have.attr', 'href', '/contact-lenses')
    }
    validateBrandLogoIcons() {
        cy.get('[href="/sunglasses/brand:persol"]').eq(1).should('have.attr', 'href', '/sunglasses/brand:persol') //Validate persol
        cy.get('[href="/eyeglasses/brand:versace"]').should('have.attr', 'href', '/eyeglasses/brand:versace') //Validate versace
        cy.get('[href="/eyeglasses/brand:gucci"]').should('have.attr', 'href', '/eyeglasses/brand:gucci') //Validate gucci
        cy.get('[href="/sunglasses/brand:coach"]').should('have.attr', 'href', '/sunglasses/brand:coach') //Validate coach
        cy.get('[href="/sunglasses/brand:ray-ban"]').should('have.attr', 'href', '/sunglasses/brand:ray-ban') //Validate ray-ban
        //cy.get('.col a[href="/sunglasses/brand:prada"]').should('have.attr','href','/sunglasses/brand:prada') //Validate marc-by-marc-jacobs
    }
    activeEmailSubscription(email) {
        cy.get('#deal-signup-email').should('have.attr', 'placeholder', 'Email').type(email) //add email for subscription
        cy.get("button[class='button']").should('exist').click() //click on arrow
        cy.get('#email-signup-message').should('have.text', 'You have been successfully subscribed.') //Validate success message
    }
    validateAccountSectionLinksInFooter() {
        cy.get(':nth-child(1) > .mobile-accordion').should('have.text', 'ACCOUNT') //ACCOUNT Heading
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(1) > a').should('have.attr', 'href', '/account/sign-in') //Signin
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(2) > a').should('have.attr', 'href', '/account/sign-in') //Create your account
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(3) > a').should('have.attr', 'href', '/order-finder')  //Track my order
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(4) > a').should('have.attr', 'href', '/account/order-history')  //Order History
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(5) > a').should('have.attr', 'href', '/account/order-history')  //Reorder
    }
    validateCategoriesSectionLinksInFooter() {
        cy.get(':nth-child(2) > .mobile-accordion').should('have.text', 'CATEGORIES') //Validate CATEGORIES heading
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a').should('have.attr', 'href', '/eyeglasses')  //Eyeglasses
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > a').should('have.attr', 'href', '/sunglasses')  //Sunglasses
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(3) > a').should('have.attr', 'href', '/sunglasses/cat:is-rxable')  //Prescription Glasses
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(4) > a').should('have.attr', 'href', '/eyewear/brands')  //EyeWear Brands
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(5) > a').should('have.attr', 'href', '/contact-lenses/view-all')  //Contact Brands
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(6) > a').should('have.attr', 'href', '/sunglasses/clearance:yes')  //Clearance Sunglasses
        cy.get('.list-unstyled > :nth-child(7) > a').should('have.attr', 'href', '/eyeglasses/clearance:yes')  //Clearance eyeglasses
    }
    validateCustomerCareSectionLinksInFooter() {
        cy.get(':nth-child(3) > .mobile-accordion').should('have.text', 'CUSTOMER CARE') //CUSTOMER CARE heading
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(1) > a').should('have.attr', 'href', '/about-us')  //About EZ Contact
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(2) > a').should('have.attr', 'href', '/help/faq')  //EZ Contact FAQs
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > a').should('have.attr', 'href', '/help/faq/shipping-and-handling')  //Shipping & Handling
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(4) > a').should('have.attr', 'href', '/help/faq/returns-and-exchanges')  //Returns & Exchanges
        cy.get(':nth-child(3) > .list-unstyled > :nth-child(5) > a').should('have.attr', 'href', '/resources/price-match-guarantee')  //Price Match Guarantee
    }
    validateHowsToSectionLinksInFooter() {
        cy.get(':nth-child(4) > .mobile-accordion').should('have.text', 'HOW TOS') //HOW TOS heading
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(1) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/2018/12/18/how-to-choose-your-eyeglasses-selecting-frames/')  //Selecting Frames
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(2) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/2019/01/30/prescription-glasses-lenses-guide/')  //Selecting Lenses
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(3) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/2019/05/08/selecting-sunglasses-guide/')  //Selecting Sunglasses
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(4) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/2019/07/17/eyewear-care-guide/')  //Eyewear Care
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(5) > a').should('have.attr', 'href', '/resources/reading-your-prescription')  //Reading Prescription
        cy.get(':nth-child(4) > .list-unstyled > :nth-child(6) > a').should('have.attr', 'href', '/resources/measure-pupil-distance')  //Measure PD
    }
    validateResourcesLinksInFooterSection() {
        cy.get(':nth-child(5) > .mobile-accordion').should('have.text', 'RESOURCES') //Resource heading
        cy.get(':nth-child(5) > .list-unstyled > :nth-child(1) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/customer-gallery/')  //Customer Gallery
        cy.get(':nth-child(5) > .list-unstyled > :nth-child(2) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/2018/12/06/hsa-fsa-funds-buy-eyewear')  //FSA ELigable
        cy.get(':nth-child(5) > .list-unstyled > :nth-child(3) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/')  //Blog
        cy.get(':nth-child(5) > .list-unstyled > :nth-child(4) > a').should('have.attr', 'href', '/help/faq#vision-insurance')  //Vision Insurance
    }
    validateContactUsSectonInFooter() {
        cy.get('.contact-us-title').should('have.text', 'CONTACT US') //CONTACT US Heading
        cy.get('.contact-us-list > :nth-child(1) > a').should('have.attr', 'href', '/help/contact-us')  //Call
        cy.get('.contact-us-list > :nth-child(2) > a').should('have.attr', 'href', '/help/contact-us') //EMail
        cy.get('.contact-us-list > :nth-child(3) > a').should('have.attr', 'href', '/help/faq')  //FAQs
        cy.get('.contact-us-list > :nth-child(4) > a').should('have.attr', 'href', 'https://www.ezcontacts.com/blog/')  //Blog
    }
    validatePrivacyPolicy_TermsOfServiceLinks() {
        cy.get('.cstm-privacy').should('have.attr', 'href', '/company/privacy-policy') //Privacy Policy 
        cy.get('.cstm-terms').should('have.attr', 'href', '/company/terms-and-conditions') //Terms Of service
    }
    validateSocialIconsInFooter() {
        cy.get('[href="https://www.facebook.com/ezcontacts/"] > .fa').should('exist') //Facebook
        cy.get('[href="https://www.instagram.com/officialezcontacts/"] > .fa').should('exist')  //Instagram
        cy.get('[href="https://www.pinterest.com/ezcontacts/"] > .fa').should('exist')  //PInterest
    }
    validateCopyRight() {
        cy.get('.cstm-copy-right').should('contain.text', '\n\t\t\t\t\t\t\t Copyright 2025 EZContacts.com. All Rights Reserved.\t\t\t\t\t\t'.trim()) //validate copyright
    }
}

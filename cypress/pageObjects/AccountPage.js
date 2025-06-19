export class AccountPage {
    validateSigninPageContent() {
        cy.get('.section-title').should('contain.text', 'Sign in') //Validate Sign in heading
        cy.get('#UserEmail').should('exist') //email field validate
        cy.get('.b').should('contain.text', 'Are you a new or returning customer?') //validate heading
        cy.get(':nth-child(5) > :nth-child(2) > label').should('contain.text', 'Returning Customer') //Returning Customer text
        cy.get(':nth-child(5) > :nth-child(4) > label').should('contain.text', 'New Customer') //New Customer text
        cy.get('#forgot-password-link').should('contain.text', 'Forgot') //Forgot?
        cy.get('#new-password').should('exist') // password field
        cy.get('label > strong').should('contain.text', 'Remember me') //Remember me
        cy.get('#sign-in-submit-btn').should('have.attr', 'value', 'Sign in') // Sign in button
    }
    signin(email, password) {
        cy.url().should('include', '/account/sign-in') //validate URL
        cy.get('#UserEmail').type(email) //enter email
        cy.get('#new-password').type(password) //enter password
        cy.get('#sign-in-submit-btn').should('have.value', 'Sign in').click() //Click on signin
        cy.url().should('include', '/account/main') //validate the URL after login
        cy.get('.message.success.success-msg').should('contain.text', 'You have successfully logged in.') //Validate The login success
    }
    validateOrder() {
        const iframeSelector = '[src="https://ezcontacts.letslinc.com/order_locator?shop_id=fda1119f-009e-11e8-ae83-0a181f43f8ac&iframe=1&instructions=1&v=1"]';
        cy.get(iframeSelector).then($iframe => {
            const iframeSrc = $iframe.attr('src');
            // Use cy.visit() to navigate to the iframe source URL
            cy.visit(iframeSrc);
            cy.origin('https://ezcontacts.letslinc.com/', () => {
                // Now you can interact with elements inside the iframe
                cy.get('[placeholder="Order Number"]').type("45481245") //order number
                cy.get('[placeholder="Email Address"]').type("testqatester81@gmail.com") //email
                cy.get('[placeholder="Zip Code"]').type("54000") //Zip code
                cy.get('.Button.locator_button.customizable').should('have.text', 'Locate Order').click() //Locate Order button
                cy.wait(3000)
                cy.get('.error.customizable').should('contain.text', 'Order not found')
            })
        });
    }

    validateAccountSettingTab() {
        cy.get('.account-left-col > .nav > .active > a').should('contain.text', 'Account Settings') //Validate account setting option
        cy.get('.section.m-off > .account-box > .account-right-col > .account-heading > h2').should('contain.text', 'Preferences') //Preferences heading
        cy.get('.col-sm-5 > .account-info > :nth-child(1) > .acc-field').should('contain.text', 'First Name') //First Name
        cy.get('.col-sm-5 > .account-info > :nth-child(2) > .acc-field').should('contain.text', 'Last Name') //Last Name
        cy.get('.col-sm-5 > .account-info > :nth-child(3) > .acc-field').should('contain.text', 'Email Sign up') //EMail Signup
        cy.get('.col-sm-7 > .account-info > :nth-child(1) > .acc-field').should('contain.text', 'Phone')
        cy.get('.col-sm-7 > .account-info > :nth-child(2) > .acc-field').should('contain.text', 'Email')
        cy.get('.col-sm-7 > .account-info > :nth-child(3) > .acc-field').should('contain.text', 'Password')
    }

    updateAccountSettings(firstName, lastName, phone) {
        cy.get('.acc-edit > a').should('have.attr', 'href', '/account/settings/edit').click() //Click on edit detail link
        cy.url().should('include', '/account/settings/edit') //validate page URL
        cy.get('#UserNameFirst').clear().type(firstName) //first name
        cy.get('#UserNameLast').clear().type(lastName) //last name
        cy.get('#AccountContactPhoneNumber').should('have.attr', 'type', 'tel').clear().type(phone) //Phone number

        cy.get(':nth-child(5) > :nth-child(2) > .col-md-5').invoke('text').then((text) => { //extract previous email
            let email = text
            cy.get('#UserConfirmEmail').type(email) //add it to confirm email field
        })
        //validate email signup options
        cy.get(':nth-child(1) > .clearfix > label').should('contain.text', 'Email Re-Order Reminders')
        cy.get(':nth-child(2) > .clearfix > label').should('contain.text', 'Contact Lens Promotions')
        cy.get(':nth-child(3) > .clearfix > label').should('contain.text', 'Eyeglasses Promotions')
        cy.get(':nth-child(4) > .clearfix > label').should('contain.text', 'Sunglasses Promotions')

        //Validate password fields
        cy.get('#UserPassword').should('exist') //New password
        cy.get('#UserTemppassword').should('exist') //Confirm New password

        cy.get('.pull-right > .btn').should('have.attr', 'value', 'Save Changes').click() //Save changes
        cy.get('.container > .message').should('contain.text', 'Account settings successfully updated.') //confirm success message

    }

    goToAddressAndShippingSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(2) > a').should('contain.text', 'Address & Payment').click()
        cy.url().should('include', '/account/address-and-payment') //Validate URL

    }
    validateAddressAndPaymentTab() {
        cy.get(':nth-child(1) > .account-heading > h2').should('have.text', 'Shipping Address') //shipping address heading
        cy.get(':nth-child(2) > .account-heading > h2').should('contain.text', 'Billing Addresses') //Billing address heading
        cy.get('.acc-section4 > .account-heading > h2').should('contain.text', 'Payment Methods') //Billing Methods heading
        cy.get('[href="/account/address-and-payment/add-shipping-address"]').should('contain.text', 'Add Shipping Address') //Add Shipping Address
        cy.get('[href="/account/address-and-payment/add-billing-address"]').should('contain.text', 'Add Billing Address') //Add Billing address
        cy.get('[href="/account/address-and-payment/add-card-details"]').should('contain.text', 'Add Payment Method') // Add payment method

    }
    addShippingAddress() {
        cy.get('[href="/account/address-and-payment/add-shipping-address"]')
            .should('have.attr', 'href', '/account/address-and-payment/add-shipping-address').click() //+Add shipping address
        cy.get('#AccountShippingAddressFirstName').type('John')
        cy.get('#AccountShippingAddressLastName').type('Doe')
        cy.get('#AccountShippingAddressAddressLine1').type('Downy Street')
        cy.get('#AccountShippingAddressAddressCity').type('New York')
        cy.get('#AccountShippingAddressUsAddressRegion').select('New York')
        cy.get('#AccountShippingAddressAddressPostalZip').type('10006')
        cy.get('#AccountShippingAddressAddressShipPhonePrimary').type('14565846852')
        cy.get('#add-shipping-address').should('have.value', 'Save Changes').click() //Save changes 
        cy.get('.container > .message').should('contain.text', 'The account shipping address has been saved')
    }
    addPaymentMethod() {
        cy.get('[href="/account/address-and-payment/add-card-details"]').should('contain.text', 'Add Payment Method').click()
        cy.get('.account-heading > h2').should('contain.text', 'Add Card Details')
        cy.get('#AccountCardTokenCardNumber').type('4242424242424242')
        cy.get('#AccountCardTokenExpiryMonth').select('02')
        cy.get('#AccountCardTokenExpiryYear').select('26')
        cy.get('#add_credit_card_detail').should('have.text', 'Save Changes').click() //Save
        cy.get('.container > .message').should('contain.text', 'The account card detail saved successfully')// validate success msg
    }
    deletePaymentMethod() {
        cy.get('.creaditCardDeleteButton').should('contain.text', 'Delete').click()// Delete the payment method
        cy.get('#deleteCardConfirmId').click()
        cy.get('.container > .message').should('contain.text', 'Your saved credit card has been deleted')
    }
    validateOrderHistorySection() {
        cy.get('.account-left-col > .nav > :nth-child(3) > a').eq(0).should('have.attr', 'href', '/account/order-history').click() //
        cy.url().should('include', '/account/order-history') //Validate URL
        cy.get('.clearfix > [href="/contact-lenses"]').should('have.attr', 'href', '/contact-lenses') //Validate Shop For Contact-lenses link
        cy.get('.clearfix > [href="/eyeglasses"]').should('have.attr', 'href', '/eyeglasses') //Validate Shop For Eyeglasses link
        cy.get('.clearfix > [href="/sunglasses"]').should('have.attr', 'href', '/sunglasses') //Validate Shop For Sunglasses link
    }
    validateRxInformationSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(4) > a').should('contain.text', 'Rx Information').click()
        cy.url().should('include', '/account/prescriptions') //Validate URL
        cy.get('.account-heading > h2').should('contain.text', 'Prescription Information') //Validate heading
        return cy.get('.acc-edit > a').should('have.attr', 'href', '/account/prescriptions/add') // Add new prescription

    }
    validateEyeglassesPrescription() {
        cy.url().should('include', '/account/prescriptions/add') //validate URL
        cy.get(':nth-child(3) > .col-sm-12 > :nth-child(3) > a').click() //Select Eyeglasses
        cy.get('#AccountPrescriptionRxPatientName').type('John Doe') //Who is this prescription for?
        cy.get('#AccountPrescriptionRxDateofbirthAtMonth').select('Jan') //Select Month
        cy.get('#AccountPrescriptionRxDateofbirthAtDay').select('1') // Select date
        cy.get('#AccountPrescriptionRxDateofbirthAtYear').select('1998') //Select year
        cy.get('#AccountPrescriptionRightSph').select('+3.00') //Right Eye (OD) sphere
        cy.get('#AccountPrescriptionLeftSph').select('+3.00') //Left Eye (OD) sphere
        cy.get('#AccountPrescriptionPd1Value').select('50.0') //PD value
        cy.get('.lnk-red-underlined').should('contain.text', "Didn't find your doctor?")
        cy.get('#AccountPrescriptionFileName').should('exist')//Upload Prescription Scan link
        cy.get('#btn-submit').should('have.value', 'Save Changes').click() //Save changes
        cy.get('.container > .message').should('contain.text', 'Eyeglasses prescription has been saved') //Validate success msg
    }
    validateAddedPrescription() {
        cy.get('li a[href*="/account/prescriptions/edit"]').eq(0).should('exist') //Edit Prescription
        cy.get('a[onclick*="Are you sure you want to delete"]').eq(0).should('exist') //Delete Prescription
        cy.get('a[href*="/account/prescriptions/shop_with_rx"]').eq(0).should('exist') //Shop with this Prescription
        cy.get('i[class="acc-icon-2 icon-upload"]').eq(0).should('exist') //Upload Prescription scan

    }
    deleteAddedPrescription() {
        cy.get('a[onclick*="Are you sure you want to delete"]').eq(0).should('exist').click() //Delete Prescription
        cy.get('.container > .message').should('contain.text', 'The account prescription has been deleted')
    }
    validateEZPointsSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(5) > a').should('contain.text', 'EZ Points').click()
        cy.url().should('include', '/account/ezpoints') //Validate URL
        cy.get('.account-heading > h2').should('contain.text', 'Your EzPoints History') //Your EzPoints History heading

    }
    validateRecentSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(6) > a').should('contain.text', 'Recent').click() //Recent section
        cy.url().should('include', '/account/order-history') //Validate URL, here the user will be directed to Order History
    }

    goToWishilistSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(7) > a').should('contain.text', 'Wish List').click() //Click on Wishlist
        cy.url().should('include', '/account/wishlist') //validate url

    }
    addRadomProductToWishList() {
        cy.get('.dropdown a[href="/sunglasses"]').should('have.text', 'SUNGLASSES').click() //go to SUNGLASSES catalog
        cy.wait(2000)
        cy.get("button[class='ltkpopup-close']").if().click() //close popup
        const randomProduct = Math.floor(Math.random() * 24); //generate a random number 1-24
        cy.get('.glass-mask').eq(randomProduct).click() //click on a product randomly
        cy.get('.add-to-wishlist-btn').should('exist').click() //click add to wish list
        cy.wait(2000)

    }
    validateWishListSection() {
        cy.visit('/account/wishlist')
        cy.get('.wishlist-add-to-cart').should('exist') //validate add to cart icon
        cy.get('.remove-product').should('exist') //validate remove icon

    }
    removeFirstProductFromWishList() {
        cy.get('.remove-product').eq(0).click()
        cy.get('#modal_remove_button').should('exist').click() //Click remove on popup

    }
    validateOnlineVisionTestSection() {
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(8) > a')
            .should('contain.text', 'Online Vision Test').click()// Online Vision test menu
        cy.url().should('include', '/account/online-vision-test-purchases') //validate URL
        cy.get('.account-heading > h2').should('contain.text', 'Online Vision Test') //Validate heading
        cy.get('.no-info > .btn').should('contain.text', 'Take Our Online Vision Test').click() //Go to online vision test page
        cy.url().should('include', '/online-vision-test') //Validate URL

    }
}
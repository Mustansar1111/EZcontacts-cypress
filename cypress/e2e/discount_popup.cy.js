
///<reference types='Cypress'/>
import { DiscountPopup } from "../pageObjects/DiscountPopup"
import { ReuseableCode } from "../support/ReuseableCode"

const discount_popup = new DiscountPopup();
const reuseableCode = new ReuseableCode();

describe('TS_001 - discount_popup', () => {

  let data
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    //Get data from fixture file
    cy.fixture('example').then(function (fdata)   //must have to resolve the promise using then() which fixture returns
    {
      data = fdata //Creating a new global data variable using this.data and assigning the data to it
    })
  })
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  xit('TC_DP_001 - Verify that (Please Enter a Valid email address) appear on invalid email', () => {
    discount_popup.enterEmail(data.incorrectEmail);
    discount_popup.clickActivateOffer();
    discount_popup.getInvalidEmailError()
  })

  xit('TC_DP_002 - Verify that "YOURE IN!" along with the Discount code is shown on valid email', () => {
    const randomString = reuseableCode.generateRandomString(8);
    discount_popup.enterEmail(randomString + '@yopmail.com');
    discount_popup.clickActivateOffer();
    discount_popup.getCouponandSuccessMsg();
  })

  xit('TC_DP_003 - Verify that "Thanks Your are already on the list" is shown on used valid email', () => {
    discount_popup.enterEmail(data.correctEmail);
    discount_popup.clickActivateOffer();
    discount_popup.getConfirmationLabel()
  })

  xit('TC_DP_004 - Verify that after getting a discount code user can SIGNUP for mobile alerts by entering a valid phone number', () => {
    const randomString = reuseableCode.generateRandomString(8)
    discount_popup.enterEmail(randomString + '@yopmail.com');
    discount_popup.clickActivateOffer();
    // discount_popup.getCouponandSuccessMsg()
    discount_popup.enterMobileNumber(data.correctMobileNo)
    discount_popup.clickSignupforMobileAlert()
    discount_popup.confirmSubcriptionMsg();
  })

  xit('TC_DP_005 - Verify that on the discount popup "No thanks" link is shown', () => {
    discount_popup.getNoThankslink().should('contain.text', 'No, thanks')
    discount_popup.getNoThankslink().click().should('not.exist')
  })

  xit('TC_DP_006 - Verify that on the discount code "Cross" icon is shown', () => {
    discount_popup.getCrossIcon().should('be.visible')
    discount_popup.getCrossIcon().click().should('not.exist')
  })

  xit('TC_DP_007 - Verify that on the discount code "Privacy Policy" and "Terms of Use" links are available', () => {
    discount_popup.getPrivacyPolicy().should('have.attr', 'href', 'https://www.ezcontacts.com/company/privacy-policy')
    discount_popup.getTermOfUse().should('have.attr', 'href', 'https://www.ezcontacts.com/company/terms-and-conditions')
  })
})
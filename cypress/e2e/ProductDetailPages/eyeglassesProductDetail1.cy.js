/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeglassesProductDetail } from "../../pageObjects/EyeglassesProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"

const homepage = new Homepage
const eyeglassesProductDetail = new EyeglassesProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_016 - EyeglassesProductDetail1', function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/eyeglasses')
    homepage.closeDiscountPOpup()
  })

  it('TC_EPD_001 - Verify the content on the Eyeglasses Product detail page shown correctly', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.validateAllContentOnProductDetailPage()
  })

  it('TC_EPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page', function () {
    cy.get('.top-login > [href="/account/sign-in"]').click()
    accountPage.signin('testqatester81@gmail.com', '123456')
    menuOptions.goToEyeglassesCatalog()
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.goToAddReview()
  })

  it('TC_EPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on product detail page', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.goToQuestionAnswersSection()
  })

  it('TC_EPD_004 - Verify that the user can add any eyeglasses product to Wishlist', function () {
    cy.get('.top-login > [href="/account/sign-in"]').click()
    accountPage.signin('testqatester81@gmail.com', '123456')
    menuOptions.goToEyeglassesCatalog()
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.addAProductToWishList()
    eyeglassesProductDetail.removeProductFromWishlist()
  })

  it('TC_EPD_005 - Validate "Add to Cart" functionality on the eyeglasses product page without adding Accident Protection and adding a custom Lense', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    eyeglassesProductDetail.addLensColor("Clear")
    eyeglassesProductDetail.addProductToCartwithoutProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_006 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    eyeglassesProductDetail.addLensColor("Color Tinted")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_007 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Impact Resistant Polycarbonate)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    eyeglassesProductDetail.addLensColorWithGradient()
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_008 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Super Thin 1.67 Hi Index)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_009 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Ultra Thin 1.74 Hi Index)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })
  it('TC_EPD_010 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Blue Light Blocking AR (BlueShield))', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

})
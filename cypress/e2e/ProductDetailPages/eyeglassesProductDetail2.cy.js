/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeglassesProductDetail } from "../../pageObjects/EyeglassesProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"

const homepage = new Homepage
const eyeglassesProductDetail = new EyeglassesProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_016 - EyeglassesProductDetail2', function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/eyeglasses')
    homepage.closeDiscountPOpup()
  })

  it('TC_EPD_011 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Blue-Violet Light AR (Crizal Prevencia))', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_012 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Reading (Single Vision))', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_013 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Impact Resistant Polycarbonate)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_014 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Super Thin 1.67 Hi Index)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_015 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Ultra Thin 1.74 Hi Index)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    eyeglassesProductDetail.addLensColor("Clear")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_016 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Blue Light Blocking AR (BlueShield)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    eyeglassesProductDetail.addLensColor("Color Tinted")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_017 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Blue-Violet Light AR (Crizal Prevencia)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
    eyeglassesProductDetail.selectLensTypeDetail()
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    eyeglassesProductDetail.addLensColorWithGradient()
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_018 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_019 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Premium Progressive")
    eyeglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_020 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 28")
    eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Grey")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })
})
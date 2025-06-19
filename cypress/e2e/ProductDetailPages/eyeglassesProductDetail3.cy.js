/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeglassesProductDetail } from "../../pageObjects/EyeglassesProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"

const homepage = new Homepage
const eyeglassesProductDetail = new EyeglassesProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_016 - EyeglassesProductDetail3', function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/eyeglasses')
    homepage.closeDiscountPOpup()
  })

  it('TC_EPD_021 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 35")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_022 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_023 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_024 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_025 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    eyeglassesProductDetail.addLensColor("Clear")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_026 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    eyeglassesProductDetail.addLensColor("Color Tinted")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_027 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    eyeglassesProductDetail.addLensColorWithGradient()
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_028 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_029 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_030 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense(Blue Light lenses)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Blue Light lenses")
    eyeglassesProductDetail.selectBlueLightLensDetail("Blue Light Blocking AR")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })

  it('TC_EPD_031 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense(Blue Light lenses)', function () {
    eyeglassesProductDetail.goToFirstProductDetailPage()
    eyeglassesProductDetail.selectLensType("Blue Light lenses")
    eyeglassesProductDetail.selectBlueLightLensDetail("Blue-Violet Light AR")
    eyeglassesProductDetail.addProductToCartwithProtection()
    eyeglassesProductDetail.removeAProductFromCart()
  })
})
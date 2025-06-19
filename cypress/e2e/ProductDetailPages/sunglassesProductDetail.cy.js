/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { SunglassesProductDetail } from "../../pageObjects/SunglassesProductDetail"
import { AccountPage } from "../../pageObjects/AccountPage"
import { MenuOptions } from "../../pageObjects/MenuOptions"


const homepage = new Homepage
const sunglassesProductDetail = new SunglassesProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_016 - SunglassesProductDetail', function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/sunglasses')
    homepage.closeDiscountPOpup()
  })

  it('TC_SPD_001 - Verify the content on the Sunglasses Product detail page shown correctly', function () {
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.validateAllContentOnProductDetailPage()
  })

  it('TC_SPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page', function () {
    cy.get('.top-login > [href="/account/sign-in"]').click()
    accountPage.signin('testqatester81@gmail.com', '123456')
    menuOptions.goToSunglassesCatalog()
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.goToAddReview()
  })

  it('TC_SPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on product detail page', function () {
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.goToQuestionAnswersSection()
  })

  it('TC_SPD_004 - Verify that the user can add any sunglasses product to Wishlist', function () {
    cy.get('.top-login > [href="/account/sign-in"]').click()
    accountPage.signin('testqatester81@gmail.com', '123456')
    menuOptions.goToSunglassesCatalog()
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.addAProductToWishList()
    sunglassesProductDetail.removeProductFromWishlist()
  })

  it('TC_SPD_005 - Validate "Add to Cart" functionality on the sunglasses product page without adding a custom Lense and Accident Protection', function () {
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.addProductToCartWithoutProtection1()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_006 - Validate "Add to Cart" functionality on the sunglasses product page along with Accident Protection and without adding a custom Lense', function () {
    sunglassesProductDetail.goToFirstProductDetailPage()
    sunglassesProductDetail.addProductToCartWithProtection1()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_007 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    sunglassesProductDetail.addLensColorClear()
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_008 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    sunglassesProductDetail.addLensColorTinted("Solid")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_009 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_010 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_011 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_012 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Distance (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Distance (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_013 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_014 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    sunglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_015 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    sunglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_016 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    sunglassesProductDetail.addLensColorClear()
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_017 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    sunglassesProductDetail.addLensColorTinted("Solid")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_018 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Reading (Single Vision)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Reading (Single Vision)")
    sunglassesProductDetail.selectLensTypeDetail()
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    sunglassesProductDetail.addLensColorTinted("Gradient")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_019 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    sunglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_020 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Premium Progressive")
    sunglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_021 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 35")
    sunglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_022 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 35")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_023 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    sunglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_024 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    sunglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_025 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
    sunglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_026 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails1("Impact Resistant Polycarbonate")
    sunglassesProductDetail.addLensColorClear()
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_027 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
    sunglassesProductDetail.addLensColorTinted("Solid")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_028 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
    sunglassesProductDetail.addLensColorTinted("Gradient")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_029 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_030 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense Non-Corrective (Plano) Lenses', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
    sunglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
    sunglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_031 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense (Blue Light lenses)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Blue Light lenses")
    sunglassesProductDetail.selectBlueLightLensDetail("Blue Light Blocking AR")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })

  it('TC_SPD_032 - Validate "Add to Cart" functionality on the sunglasses product page after adding Accident Protection and a custom Lense (Blue Light lenses)', function () {
    sunglassesProductDetail.applyWebBrandFilter()
    cy.selectRandomProduct()
    sunglassesProductDetail.addCustomLens()
    sunglassesProductDetail.selectLensType("Blue Light lenses")
    sunglassesProductDetail.selectBlueLightLensDetail("Blue-Violet Light AR")
    sunglassesProductDetail.addProductToCartWithProtection()
    sunglassesProductDetail.removeAProductFromCart()
  })
})
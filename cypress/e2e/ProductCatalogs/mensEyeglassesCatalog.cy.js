/// <reference types = "Cypress"/>

import { MensEyeglassesCatalog } from "../../pageObjects/MensEyeglassesCatalog"
import { Homepage } from "../../pageObjects/Homepage"

const mensEyeglassesCatalog = new MensEyeglassesCatalog()
const homepage = new Homepage()

describe("TS_009 - Men Eyeglasses Products Catalog", function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("/mens-eyeglasses")
    homepage.closeDiscountPOpup()
  })

  it('TC_ME_001 - Verify that on Mens Eyeglasses page, filter option "Virtual Try-On" is available and applying correctly on product list', function () {
    mensEyeglassesCatalog.applyVirtualTryOnFilter() //Virtual TryOn filter
  })

  it('TC_ME_002 - Verify that on Mens Eyeglasses page, filter option "In Stock" is available and applying correctly on product list', function () {
    mensEyeglassesCatalog.applyInStockFilter()
  })

  it('TC_ME_003 - Verify that on Mens Eyeglasses page, filter option "Clearance" is available and applying correctly on product list', function () {

    mensEyeglassesCatalog.applyClearanceFilter()
  })

  it('TC_ME_004 - Verify that on Mens Eyeglasses page, under "Frame type" filter "Full rim" option is available and applying correctly on the product list', function () {

    mensEyeglassesCatalog.applyFullRimFilter()
  })

  it('TC_ME_005 - Verify that on Mens Eyeglasses page, under "Frame type" filter "Semi Rim & Rim less" option is available and applying correctly on the product list', function () {

    mensEyeglassesCatalog.applySemiRimFilter()
    mensEyeglassesCatalog.clickResetAllFilters()
    mensEyeglassesCatalog.applyRimlessFilter()
  })

  it('TC_ME_006 - Verify that on Mens Eyeglasses page, under "Brands" filter number of brands are shown in a list where user can search or select one or multiple brands', function () {

    mensEyeglassesCatalog.applyBrandFilters() //Two time random filters will be applied
  })

  it('TC_ME_007 - Verify that on the Mens Eyeglasses page, under the "Multifocal" filter "Progressive" option is available and the filter is applying correctly on the product list', function () {

    mensEyeglassesCatalog.applyProgressiveFilter()
  })

  it('TC_ME_008 - Verify that on the Mens Eyeglasses page, under the "Multifocal" filter "Bifocal" option is available and the filter is applying correctly on the product list', function () {

    mensEyeglassesCatalog.applyBifocalFilter()
  })

  it('TC_ME_009 - Verify that on the Mens Eyeglasses page, under the "Size" filter is available and it is applying correctly on the product list', function () {

    mensEyeglassesCatalog.applySizeFilter()
  })

  it('TC_ME_010 - On the Mens Eyeglasses page, Validate the "Frame Shape" filter', function () {

    mensEyeglassesCatalog.applyFrameShapeFilter() //Apply one filter option randomly
  })

  it('TC_ME_011 - On the Mens Eyeglasses page, Validate the "Frame Material" filter', function () {
    mensEyeglassesCatalog.applyFrameMaterialFilter() //Apply one filter option randomly
  })

  it('TC_ME_012 - Validate the "Reviews" filter functionality On the Mens Eyeglasses page', function () {
    mensEyeglassesCatalog.applyReviewFilter() //Apply one filter option randomly
  })

  it('TC_ME_013 - Validate the "Price" filter functionality On the Mens Eyeglasses page', function () {
    mensEyeglassesCatalog.applyPriceFilter() //Apply one filter option randomly
  })

  it('TC_ME_014 - Validate the "Reset All Filter" option functionality On the Mens Eyeglasses page', function () {
    mensEyeglassesCatalog.applyPriceFilter() //Apply one filter option randomly
    mensEyeglassesCatalog.clickResetAllFilters()
  })

  it('TC_ME_015 - Verify that on the Mens Eyeglasses page, "Products per page" and "Sorting option" list is shown', function () {
    //Select Product Per page
    mensEyeglassesCatalog.selectProductPerPage("48") //30, 48, 72, 96
    cy.wait(5000)
    //Select Sorting option
    mensEyeglassesCatalog.selectRandomSortingOption() //Select a random option
  })

  it("TC_ME_016 - Verify that on the Mens Eyeglasses page, the Pagination component is shown along with total products (Results) info", function () {
    mensEyeglassesCatalog.showTotalProducts() //Show Total Products related to the catagory
    mensEyeglassesCatalog.clickPagination() //Will Navigate through some of the product pages
  })

  xit("TC_ME_017 - Verify that on the Mens Eyeglasses page, At the end of the product catalog, there is a section for RECOMMENDED OR DISCOUNTED PRODUCTS", function () {
    mensEyeglassesCatalog.validateRecommendedProductSection(); //Validate Recommended product section
  })
})
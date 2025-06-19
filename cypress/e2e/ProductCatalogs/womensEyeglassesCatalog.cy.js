/// <reference types = "Cypress"/>

import { WomensEyeglassesCatalog } from "../../pageObjects/WomensEyeglassesCatalog"
import { Homepage } from "../../pageObjects/Homepage"

const womensEyeglassesCatalog = new WomensEyeglassesCatalog()
const homepage = new Homepage()

describe("TS_010 - Women Eyeglasses Products Catalog", function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("/womens-eyeglasses")
    homepage.closeDiscountPOpup()
  })

  it('TC_WE_001 - Verify that on Womens Eyeglasses page, filter option "Virtual Try-On" is available and applying correctly on product list', function () {
    womensEyeglassesCatalog.applyVirtualTryOnFilter() //Virtual TryOn filter
  })

  it('TC_WE_002 - Verify that on Womens Eyeglasses page, filter option "In Stock" is available and applying correctly on product list', function () {
    womensEyeglassesCatalog.applyInStockFilter()
  })

  it('TC_WE_003 - Verify that on Womens Eyeglasses page, filter option "Clearance" is available and applying correctly on product list', function () {
    womensEyeglassesCatalog.applyClearanceFilter()
  })

  it('TC_WE_004 - Verify that on Womens Eyeglasses page, under "Frame type" filter "Full rim" option is available and applying correctly on the product list', function () {
    womensEyeglassesCatalog.applyFullRimFilter()
  })

  it('TC_WE_005 - Verify that on Womens Eyeglasses page, under "Frame type" filter "Semi Rim & Rim less" option is available and applying correctly on the product list', function () {
    womensEyeglassesCatalog.applySemiRimFilter()
    womensEyeglassesCatalog.clickResetAllFilters()
    womensEyeglassesCatalog.applyRimlessFilter()
  })

  it('TC_WE_006 - Verify that on Womens Eyeglasses page, under "Brands" filter number of brands are shown in a list where user can search or select one or multiple brands', function () {
    womensEyeglassesCatalog.applyBrandFilters() //Two time random filters will be applied
  })

  it('TC_WE_007 - Verify that on the Womens Eyeglasses page, under the "Multifocal" filter "Progressive" option is available and the filter is applying correctly on the product list', function () {
    womensEyeglassesCatalog.applyProgressiveFilter()
  })

  it('TC_WE_008 - Verify that on the Womens Eyeglasses page, under the "Multifocal" filter "Bifocal" option is available and the filter is applying correctly on the product list', function () {
    womensEyeglassesCatalog.applyBifocalFilter()
  })

  it('TC_WE_009 - Verify that on the Womens Eyeglasses page, under the "Size" filter is available and it is applying correctly on the product list', function () {
    womensEyeglassesCatalog.applySizeFilter()
  })

  it('TC_WE_010 - On the Womens Eyeglasses page, Validate the "Frame Shape" filter', function () {
    womensEyeglassesCatalog.applyFrameShapeFilter() //Apply one filter option randomly
  })

  it('TC_WE_011 - On the Womens Eyeglasses page, Validate the "Frame Material" filter', function () {
    womensEyeglassesCatalog.applyFrameMaterialFilter() //Apply one filter option randomly
  })

  it('TC_WE_012 - Validate the "Reviews" filter functionality On the Womens Eyeglasses page', function () {
    womensEyeglassesCatalog.applyReviewFilter() //Apply one filter option randomly
  })

  it('TC_WE_013 - Validate the "Price" filter functionality On the Womens Eyeglasses page', function () {
    womensEyeglassesCatalog.applyPriceFilter() //Apply one filter option randomly
  })

  it('TC_WE_014 - Validate the "Reset All Filter" option functionality On the Womens Eyeglasses page', function () {
    womensEyeglassesCatalog.applyPriceFilter() //Apply one filter option randomly
    womensEyeglassesCatalog.clickResetAllFilters()
  })

  it('TC_WE_015 - Verify that on the Womens Eyeglasses page, "Products per page" and "Sorting option" list is shown', function () {
    //Select Product Per page
    womensEyeglassesCatalog.selectProductPerPage("48") //30, 48, 72, 96
    cy.wait(5000)
    //Select Sorting option
    womensEyeglassesCatalog.selectRandomSortingOption() //Select a random option
  })

  it("TC_WE_016 - Verify that on the Womens Eyeglasses page, the Pagination component is shown along with total products (Results) info", function () {
    womensEyeglassesCatalog.showTotalProducts() //Show Total Products related to the catagory
    womensEyeglassesCatalog.clickPagination() //Will Navigate through some of the product pages
  })

  xit("TC_WE_017 - Verify that on the Womens Eyeglasses page, At the end of the product catalog, there is a section for RECOMMENDED OR DISCOUNTED PRODUCTS", function () {
    womensEyeglassesCatalog.validateRecommendedProductSection() //Validate Recommended product section
  })
})
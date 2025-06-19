/// <reference types = "Cypress"/>

import { WomensSunglassesCatalog } from "../../pageObjects/WomensSunglassesCatalog"
import { Homepage } from "../../pageObjects/Homepage"

const womensSunglassesCatalog = new WomensSunglassesCatalog
const homepage = new Homepage

describe('TS_007 - Women Sunglasses Products', function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/womens-sunglasses')
    homepage.closeDiscountPOpup()
  })

  it('TC_WS_001 - Verify that on Womens sunglasses page, filter option "Virtual Try-On" is available and applying correctly on product list', function () {
    womensSunglassesCatalog.applyVirtualTryOnFilter() //Virtual TryOn filter
  })

  it('TC_WS_002 - Verify that on Womens sunglasses page, filter option "In Stock" is available and applying correctly on product list', function () {
    womensSunglassesCatalog.applyInStockFilter()
  })

  it('TC_WS_003 - Verify that on Womens sunglasses page, filter option "Clearance" is available and applying correctly on product list', function () {
    womensSunglassesCatalog.applyClearanceFilter()
  })

  it('TC_WS_004 - Verify that on Womens sunglasses page, under "Frame type" filter "Full rim" option is available and applying correctly on the product list', function () {
    womensSunglassesCatalog.applyFullRimFilter()
  })

  it('TC_WS_005 - Verify that on Womens sunglasses page, under "Frame type" filter "Semi Rim & Rim less" option is available and applying correctly on the product list', function () {
    womensSunglassesCatalog.applySemiRimFilter()
    womensSunglassesCatalog.clickResetAllFilters() //Reset the filters
    womensSunglassesCatalog.applyRimlessFilter()
  })

  it('TC_WS_006 - Verify that on Womens sunglasses page, under "Brands" filter number of brands are shown in a list where user can search or select one or multiple brands', function () {
    womensSunglassesCatalog.applyBrandFilters() //Two time random filters will be applied
  })

  it('TC_WS_007 - Verify that on the Womens sunglasses page, under the "Multifocal" filter "Progressive" option is available and the filter is applying correctly on the product list', function () {
    womensSunglassesCatalog.applyProgressiveFilter()
  })

  it('TC_WS_008 - Verify that on the Womens sunglasses page, under the "Multifocal" filter "Bifocal" option is available and the filter is applying correctly on the product list', function () {
    womensSunglassesCatalog.applyBifocalFilter()
  })

  it('TC_WS_009 - Verify that on the Womens sunglasses page, under the "Size" filter is available and it is applying correctly on the product list', function () {
    womensSunglassesCatalog.applySizeFilter()
  })

  it('TC_WS_010 - On the Womens sunglasses page, Validate the "Frame Shape" filter', function () {
    womensSunglassesCatalog.applyFrameShapeFilter() //Apply one filter option randomly
  })

  it('TC_WS_011 - On the Womens sunglasses page, Validate the "Frame Material" filter', function () {
    womensSunglassesCatalog.applyFrameMaterialFilter() //Apply one filter option randomly
  })

  it('TC_WS_012 - Validate the "Reviews" filter functionality On the Womens sunglasses page', function () {
    womensSunglassesCatalog.applyReviewFilter() //Apply one filter option randomly
  })

  it('TC_WS_013 - Validate the "Price" filter functionality On the Womens sunglasses page', function () {
    womensSunglassesCatalog.applyPriceFilter() //Apply one filter option randomly
  })

  it('TC_WS_014 - Validate the "Reset All Filter" option functionality On the Womens sunglasses page', function () {
    womensSunglassesCatalog.applyPriceFilter() //Apply one filter option randomly
    womensSunglassesCatalog.clickResetAllFilters()
    cy.get('.clear_all_selected_facets').should('not.exist') //Validate that filter is cleared  
  })

  it('TC_WS_015 - Verify that on the Womens sunglasses page, "Products per page" and "Sorting option" list is shown', function () {
    //Select Product Per page
    womensSunglassesCatalog.selectProductPerPage('48') //30, 48, 72, 96
    cy.wait(5000)
    //Select Sorting option
    womensSunglassesCatalog.selectRandomSortingOption() //Select a random option  
  })

  it('TC_WS_016 - Verify that on the Womens sunglasses page, the Pagination component is shown along with total products (Results) info', function () {
    womensSunglassesCatalog.showTotalProducts() //Show Total Products related to the catagory
    womensSunglassesCatalog.clickPagination() //Will Navigate through some of the product pages    
  })

  // it('TC_WS_017 - Verify that on the Womens sunglasses page, At the end of the product catalog, there is a section for RECOMMENDED OR DISCOUNTED PRODUCTS',function(){
  //   womensSunglassesCatalog.validateRecommendedProductSection() //Validate Recommended product section 
  // })
})
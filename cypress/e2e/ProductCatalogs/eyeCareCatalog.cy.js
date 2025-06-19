/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeCareCatalog } from "../../pageObjects/EyeCareCatalog"

const eyeCareCatalog = new EyeCareCatalog
const homePage = new Homepage

describe('TS_014 Eye-care Products Catalog', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/eye-care')
        homePage.closeDiscountPOpup()
    })

    it('TC_EC_001 - Verify that on EYE-CARE page, "PRE-BLACK FRIDAY DEALS!" option is available on top of header', () => {
        eyeCareCatalog.validateDiscountLink()
    })

    it('TC_EC_002 - Verify that on EYE-CARE page, "Free shipping" and "Lowest price" info is shown in the header', () => {
        eyeCareCatalog.validateFreeShippinglink()
    })

    it('TC_EC_003 - Verify that on "Eye-Care" catalog page, under the "Product Categories" filter, all options are working correctly', () => {
        eyeCareCatalog.applyProductCatagerisFilter()
    })

    it('TC_EC_004 - Verify that on the "Eye-Care" catalog page, the "Brands" filter options are working correctly.', () => {
        eyeCareCatalog.applyBrandsFilter()
    })

    it('TC_EC_005 - Verify that on the "Eye-Care" catalog page, the "Reviews" filter options are working correctly.', () => {
        eyeCareCatalog.applyReviewFilter()
    })

    it('TC_EC_006 - Verify that on the "Eye-Care" catalog page, the "Price" filter options are working correctly.', () => {
        eyeCareCatalog.applyPriceFilter()
    })

    it('TC_EC_007 - Verify that on the "Eye-Care" catalog page, "Sorting option" list is shown', () => {
        eyeCareCatalog.selectRandomSortingOption()
    })

    it('TC_EC_008 - Verify that on the "Eye-Care" catalog page, the Pagination component is shown along with total products (Results) info', () => {
        eyeCareCatalog.clickPagination()
    })

    it('TC_EC_009 - Verify that on the "Eye-Care" catalog page, "Per page Products " Filter is working properly ', () => {
        eyeCareCatalog.applyProductsperPage()
    })
})
/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { ReaderCatlog } from "../../pageObjects/ReaderCatalog"

const homepage = new Homepage
const readercatlog = new ReaderCatlog

describe('TS_013  Reader Products Catalog', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
    })

    it('TC_RD_001 - Verify that on READERS page, "OFFER LINK" option is available on top of header', () => {
        readercatlog.validateDiscountLinkk()
    })

    it('TC_RD_002 - Verify that on READERS page, "Free shipping" and "Lowest price" info is shown in the header', () => {
        readercatlog.validateFreeShippinglink()
    })

    it('TC_RD_003 - Verify that on READERS page, "READERS" heading along with the breadcrumbs is shown on the page.', () => {
        readercatlog.validateReaderTitle()
    })

    it('TC_RD_004 - Verify that on "Readers" catalog page, under the "Gender" filter, "Men Reading Glasses" and "Women Reading Glasses" options are working correctly', () => {
        readercatlog.checkGenderfunctionality()
    })

    it('TC_RD_005 - Verify that on the "Readers" catalog page, the "Price" filter options are working correctly.', () => {
        readercatlog.applyPriceFilter()
    })

    it('TC_RD_006 - Verify that on the "Readers" catalog page, the "Frame Shape" filter options are working correctly.', () => {
        readercatlog.applyFrameShapeFilter()
    })

    it('TC_RD_007 - Verify that on the "Readers" catalog page, the "Brands" filter options are working correctly.', () => {
        readercatlog.applyBrandFilter()
    })

    it('TC_RD_008 - Verify that on the "Readers" catalog page, the "Frame Type" filter options are working correctly.', () => {
        readercatlog.applyFrameTypeFilter()
    })

    it('TC_RD_009 - Verify that on the "Readers" catalog page, the "Material" filter options are working correctly.', () => {
        readercatlog.applyMaterialFilter()
    })

    it('TC_RD_010- Verify that on the "Readers" catalog page, the "Size" filter options are working correctly.', () => {
        readercatlog.applySizeFilter()
    })

    it('TC_RD_011 - Verify that on the "Readers" catalog page, the "Any Size" filter options are working correctly.', () => {
        readercatlog.applyAnySizeFilter()
    })

    it('TC_RD_012 - Verify that on the "Readers" catalog page, In filter section "Reset All Filters" option is working correctly', () => {
        readercatlog.applyResetAllFilter()
    })

    it('TC_RD_013 - Verify that on the "Readers" catalog page, "Sorting option" list is shown', () => {
        readercatlog.applyBestSellingFilter()
    })

    it('TC_RD_014 - Verify that on the "Readers" catalog page, the Pagination component is shown along with total products (Results) info', () => {
        readercatlog.clickPagination()
        readercatlog.showTotalProducts()
    })
})
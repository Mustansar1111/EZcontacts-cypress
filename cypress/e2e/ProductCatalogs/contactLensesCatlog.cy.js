/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { ContactLensesCatlog } from "../../pageObjects/ContactLensesCatlog"

const homepage = new Homepage
const contantlensesCatlog = new ContactLensesCatlog

describe('TS_012 - ContactLensesCatlog', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage()
        cy.visit('/contact-lenses')
        homepage.closeDiscountPOpup()
    })

    it('TC_CL_001 -Verify that on "Contact Lenses" page, under the "Brands" filter, number of brands is shown in a list where the user can search or select one or multiple brands', () => {
        contantlensesCatlog.applyBrandFilters()
    })

    it('TC-CL_002 -Verify that on "Contact Lenses" page, under the "Manufacturers" filter number of options is shown in a list where the user can search or select one or multiple options', () => {
        contantlensesCatlog.applyManufacturersFilter()
    })

    it('TC_CL_003 -Verify that on "Contact Lenses" page, under the "Contact Lens Schedule" filter number of options is shown in a list where the user can search or select one or multiple options', () => {
        contantlensesCatlog.applyContactLensScheduleFilter()
    })

    it('TC_CL_004 -Verify that on "Contact Lenses" page, under the "Contact Lens Types" filter number of options is shown in a list where the user can search or select one or multiple options', () => {
        contantlensesCatlog.applyContactLensTypesFilter()
    })

    it('TC_CL-005 - Verify that on "Contact Lenses" page, under the "Base Curve" filter number of options is shown in a list where the user can search or select one or multiple options', () => {
        contantlensesCatlog.applyBasecorvFilter()
    })

    it('TC_CL_006 - Verify that on "Contact Lenses" page, under the "Diameter" filter number of options is shown in a list where the user can search or select one or multiple options', () => {
        contantlensesCatlog.applyDiameterFilter()
    })

    it('TC_CL_007 - Verify that on the "Contact Lenses" page, the "Reviews" filter is available and it is applying correctly on the product list, the product list can be filter on base of reviews on the product', () => {
        contantlensesCatlog.applyReviewFilter()
    })

    it('TC_CL_008 - Verify that on the "Contact Lenses" page, After applying any filter the "Reset All Filters" option is shown on the top of the product catalogue', () => {
        contantlensesCatlog.applyContactLensScheduleFilter()//checking agian Reset All Filters option on any filter
    })

    it('TC_CL_009 - Verify that on the "Contact Lenses" page, "Products per page" and "Sorting option" list is shown', () => {
        contantlensesCatlog.applyProductsperPage();
        contantlensesCatlog.selectRandomSortingOption()
    })

    it('TC_CL_010 - Verify that on the "Contact Lenses" page, the Pagination component is shown along with total products (Results) info', () => {
        contantlensesCatlog.showTotalProducts()
        contantlensesCatlog.clickPagination()
    })
})


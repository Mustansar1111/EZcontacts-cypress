import { ReuseableCode } from "../support/ReuseableCode"
const reuseableCode = new ReuseableCode

export class WomensEyeglassesCatalog {
    applyVirtualTryOnFilter() {
        cy.get('.v_has_vtry_uFilter').should('contain.text', 'Virtual Try-On') //Virtual Try-On filter heading
        cy.get('.v_has_vtry_uFilter > h4 > .switch > .slider').click() //enable toggle
        cy.url().should('include', '/virtual-try-on:yes/') //Validate URL changes
        cy.get('.list-inline [unbxdparam_facetname="v_has_vtry_uFilter"]').should('contain.text', 'Virtual Try-On') //Validate Filter tag
    }
    applyInStockFilter() {
        cy.get('.v_quickship_uFilter > h4').should('contain.text', 'In Stock') //Validate In stock Heading 
        // cy.get('.v_quickship_uFilter > h4 > .switch > .slider').click() //Enable toggle
        cy.url().should('include', '/in-stock:true/') //Validate URL changes
        cy.get('.list-inline [unbxdparam_facetname="v_quickship_uFilter"]').should('contain.text', 'In Stock') //validate filter tag
    }
    applyClearanceFilter() {
        cy.get('.v_clearance_uFilter > h4').should('contain.text', 'Clearance') //Validate In stock Heading 
        cy.get('.v_clearance_uFilter > h4 > .switch > .slider').click() //Enable toggle
        cy.url().should('include', '/clearance:yes/') //Validate URL changes
        cy.get('.list-inline [unbxdparam_facetname="v_clearance_uFilter"]').should('contain.text', 'Clearance') //validate filter tag
    }
    applyFullRimFilter() {
        cy.get('li[unbxdparam_facetvalue="Full Rim"] > .clearfix > .label-element').should('contain.text', 'Full Rim') //Heading
        cy.get('[id="frame_type_uFilter_Full Rim"]').check() //Checkbox
        cy.url().should('include', '/frame-type:full-rim/') //validate URL
        cy.get('.selected-facet-delete').should('contain.text', 'Full Rim') //Validate tag
    }

    applySemiRimFilter() {
        cy.get('li[unbxdparam_facetvalue="Semi Rim"] > .clearfix > .label-element').should('contain.text', 'Semi Rim') //Heading
        cy.get('[id="frame_type_uFilter_Semi Rim"]').check() //Checkbox
        cy.url().should('include', '/frame-type:semi-rim/') //validate URL
        cy.get('.selected-facet-delete').should('contain.text', 'Semi Rim') //Validate tag
    }

    applyRimlessFilter() {
        cy.get('li[unbxdparam_facetvalue="Rimless"] > .clearfix > .label-element').should('contain.text', 'Rimless') //Heading
        cy.get('[id="frame_type_uFilter_Rimless"]').check() //Checkbox
        cy.url().should('include', '/frame-type:rimless/') //validate URL
        cy.get('.selected-facet-delete').should('contain.text', 'Rimless') //Validate tag
    }
    applyBrandFilters() {
        const random = reuseableCode.getRandomNumber(0, 109)
        cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(2000)
        cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
        cy.wait(2000)
    }
    applyProgressiveFilter() {
        cy.get('.nav [unbxdparam_facetvalue="Progressive"]').should('contain.text', 'Progressive') //validate progressive filter
        cy.get('input[unbxdparam_facetvalue="Progressive"]').should('exist').click() //Click Progressive filter
        cy.url().should('include', '/multifocal:progressive/') //Validate URL
    }
    applyBifocalFilter() {
        cy.get('.nav [unbxdparam_facetvalue="Bifocal"]').should('contain.text', 'Bifocal') //validate progressive filter
        cy.get('input[unbxdparam_facetvalue="Bifocal"]').should('exist').click() //Click Progressive filter
        cy.url().should('include', '/multifocal:bifocal/') //Validate URL
    }
    applySizeFilter() {
        cy.get('select[name="data[[Filter]][Lens Width]"]').should('exist').select('46') //Select Lense Width
        cy.url().should('include', '/lens-width:46/') //validate URL
        cy.wait(2000)
        cy.get('.clear_all_selected_facets').should('contain.text', 'Reset All Filters').click() //Reset All Filters
        cy.wait(3000)
        cy.get('select[name="data[[Filter]][Bridge Width]"]').should('exist').select('14') //Select Bridge Width
        cy.url().should('include', '/bridge-width:14/')//validate URL
        cy.get('.clear_all_selected_facets').should('contain.text', 'Reset All Filters').click() //Reset All Filters
        cy.wait(3000)
        cy.get('select[name="data[[Filter]][Arm Length]"]').should('exist').select('125') //Select Arm Length
        cy.url().should('include', '/arm-length:125/')//validate URL

    }
    applyFrameShapeFilter() {
        const randomNumber = reuseableCode.getRandomNumber(0, 5) //Generate a random number 0-6
        cy.get('input[unbxdparam_facetname="frame_shape_uFilter"]').eq(randomNumber).should('exist').click({ force: true })
        cy.get('.filter-tags [unbxdparam_facetname="frame_shape_uFilter"]').should('exist') //Validate Filter tag
    }
    applyFrameMaterialFilter() {
        const randomNumber = reuseableCode.getRandomNumber(0, 11) //Generate a random number 0-12
        cy.get('input[unbxdparam_facetname="frame_material_uFilter"]').eq(randomNumber).should('exist').click({ force: true })
        cy.get('.filter-tags [unbxdparam_facetname="frame_material_uFilter"]').should('exist') //Validate Filter tag
    }
    applyReviewFilter() {
        const randomNumber = reuseableCode.getRandomNumber(0, 3) //Generate a random number 0-4
        cy.get('input[unbxdparam_facetname="unbxd_rating_average_uFilter"]').eq(randomNumber).should('exist').click({ force: true })
        cy.get('.filter-tags [unbxdparam_facetname="unbxd_rating_average_uFilter"]').should('exist') //Validate Filter tag
    }
    applyPriceFilter() {
        const randomNumber = reuseableCode.getRandomNumber(0, 9) //Generate a random number 1-10
        cy.get('input[unbxdparam_facetname="v_price"]').eq(randomNumber).should('exist').click({ force: true })
        cy.get('.filter-tags [unbxdparam_facetname="v_price"]').should('exist') //Validate Filter tag
    }
    clickResetAllFilters() {
        cy.get('.clear_all_selected_facets').should('contain.text', 'Reset All Filters').click() //Reset All Filters
    }
    selectProductPerPage(count) {
        cy.get('.unbxd-pagesize-container select').should('exist').select(count) //30, 48, 72, 96
    }
    selectRandomSortingOption() {
        const randomNumber = reuseableCode.getRandomNumber(0, 5) //Generate a random number 0-6
        cy.get('.unbxd-sort-container select').should('exist').select(randomNumber)
    }
    showTotalProducts() {
        cy.get('.unbxd-pageresult').should('contain.text', 'Results') //Validate paging component
        cy.get('.unbxd_totalPages:last-child').invoke('text').then((totalResults) => {
            cy.log(totalResults);  //Print Total results shown on console
        })
    }
    clickPagination() {
        cy.get('.unbxd_page').each((page, index, $List) => {
            cy.get('.unbxd_last a').should('exist').click({ force: true }) //Click Next
            cy.wait(5000)
        })
    }
    validateRecommendedProductSection() {
        cy.get('.cls-recommended-view-div-fix').should('exist')
    }

}
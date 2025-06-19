import { ReuseableCode } from "../support/ReuseableCode"
const reuse = new ReuseableCode

export class ContactLensesCatlog {

    applyBrandFilters() {
        const random = reuse.getRandomNumber(0, 19)
        cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
        cy.wait(2000)
    }
    applyManufacturersFilter() {
        const random = reuse.getRandomNumber(0, 5)
        cy.get('[class="has-pretty-child"] input[unbxdparam_facetname="contact_lens_manufacturer_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('[class="has-pretty-child"] input[unbxdparam_facetname="contact_lens_manufacturer_uFilter"]').eq(random).click()
        cy.wait(2000)
    }
    applyContactLensScheduleFilter() {
        const random = reuse.getRandomNumber(0, 2)
        cy.get('input[unbxdparam_facetname="contact_lens_schedule_uFilter"]').eq(random).click()
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="contact_lens_schedule_uFilter"]').eq(random).click()
    }
    applyContactLensTypesFilter() {
        const random = reuse.getRandomNumber(0, 3)
        cy.get('input[unbxdparam_facetname="contact_lens_type_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="contact_lens_type_uFilter"]').eq(random).click()
        cy.wait(2000)
    }
    applyBasecorvFilter() {
        const random = reuse.getRandomNumber(0, 10)
        cy.get('input[unbxdparam_facetname="supported_bc_uFilter"]').eq(random).click()
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="supported_bc_uFilter"]').eq(random).click()

    }
    applyDiameterFilter() {
        const random = reuse.getRandomNumber(0, 6)
        cy.get('input[unbxdparam_facetname="supported_dia_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="supported_dia_uFilter"]').eq(random).click()
    }
    applyReviewFilter() {
        const random = reuse.getRandomNumber(0, 4)
        cy.get('input[unbxdparam_facetname="unbxd_rating_average_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text', 'Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="unbxd_rating_average_uFilter"]').eq(random).click()

    }
    applyProductsperPage() {
        // Define the list of numbers
        const numbers = [30, 48, 72, 96];
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * numbers.length);
        // Use the random index to select a number
        const selectedNumber = numbers[randomIndex];
        cy.get('.unbxd-pagesize-container select').should('exist')
        cy.wait(3000)
    }
    selectRandomSortingOption() {
        const randomNumber = reuse.getRandomNumber(0, 5) //Generate a random number 1-6
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
}
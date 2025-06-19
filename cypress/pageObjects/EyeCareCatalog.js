
import { ReuseableCode } from "../support/ReuseableCode"
const Reuse = new ReuseableCode

export class EyeCareCatalog {

    validateDiscountLink() {
        cy.get('div[class="col-sm-12 text-center specialMsgLink cls-header-special-msg-fix"]').click()
    }
    validateFreeShippinglink() {
        cy.get('.cls-free-shipping-icon-fix').click()
        cy.get(' h4[id="myModalLabel"]').eq(0)
            .should('contain', 'Free Shipping Offer Details')//validate the popup text
        cy.get("div[id='free-shipping-modal'] span[aria-hidden='true']").click({ force: true })//close popup 
        cy.wait(2000)
        cy.get("a[data-target='#lowest-price-guarantee-modal']").click()
        cy.wait(2000)
        cy.get('h4[id="myModalLabel"]').eq(1).should('contain', 'Price Match Guarantee')
    }
    validateEyecareTitle() {
        cy.get('.section-title').should('contain.text', 'Eye-Care')
        cy.get("ol[class='breadcrumb'] li a").should('contain', 'Home')
        cy.get("ol[class='breadcrumb'] li[class='active']").should('contain', 'Eye-Care')
    }
    applyProductCatagerisFilter() {
        const randomNo = Reuse.getRandomNumber(0, 5)
        cy.get('#FilterSunglassesForm > :nth-child(1) > h4').should('contain', 'Product Categories')
        cy.get('[class="nav nooption"] input[unbxdparam_facetname="product_type_uFilter"]').eq(randomNo).click({ force: true })
        cy.wait(3000)
        cy.get('.clear_all_selected_facets').click()//reset All filter
        cy.get('[class="nav nooption"] input[unbxdparam_facetname="product_type_uFilter"]').eq(randomNo).click({ force: true })
        cy.wait(3000)
    }
    applyBrandsFilter() {
        const randomNo = Reuse.getRandomNumber(0, 8)
        cy.get(':nth-child(2) > h4').should('contain', 'Brands')
        cy.get('[class="multiselectoption brand-selection brand-selection-desktop"] input[unbxdparam_facetname="brand_uFilter"]')
            .eq(randomNo).click()
        cy.wait(3000)
        cy.get('.clear_all_selected_facets').click()//reset All filter
        cy.get('[class="multiselectoption brand-selection brand-selection-desktop"] input[unbxdparam_facetname="brand_uFilter"]')
            .eq(randomNo).click()
    }
    applyReviewFilter() {
        const randomNo = Reuse.getRandomNumber(0, 3)
        cy.get(':nth-child(3) > h4').should('contain', 'Review')
        cy.get('[unbxdparam_facetname="unbxd_rating_average_uFilter"] input[unbxdparam_facetname="unbxd_rating_average_uFilter"]')
            .eq(randomNo).click()
        cy.wait(3000)
        cy.get('.clear_all_selected_facets').click()//reset All filter
        cy.get('[unbxdparam_facetname="unbxd_rating_average_uFilter"] input[unbxdparam_facetname="unbxd_rating_average_uFilter"]')
            .eq(randomNo).click()
    }
    applyPriceFilter() {
        const randomNo = Reuse.getRandomNumber(0, 1)
        cy.get(':nth-child(4) > h4').should('contain', 'Price')
        cy.get('[class="clearfix prettycheckbox labelright  blue present-to-visible"]')
            .eq(randomNo).click()
        cy.get('.clear_all_selected_facets').click()//reset All filter
        cy.get('[class="clearfix prettycheckbox labelright  blue present-to-visible"]')
            .eq(randomNo).click()
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
        const randomNumber = Reuse.getRandomNumber(0, 4) //Generate a random number 1-6
        cy.get('.unbxd-sort-container select').should('exist').select(randomNumber)
    }
    clickPagination() {
        cy.get('.unbxd_page').each((page, index, $List) => {
            cy.get('.unbxd_last a').should('exist').click({ force: true }) //Click Next
            cy.wait(5000)
        })
    }
}
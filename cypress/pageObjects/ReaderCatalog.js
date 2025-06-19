import { ReuseableCode } from "../support/ReuseableCode";
const Reuse = new ReuseableCode

export class ReaderCatlog {
    validateDiscountLinkk() {
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
    validateReaderTitle() {
        cy.get('.section-title').should('contain', 'Readers')
        cy.get("ol[class='breadcrumb'] li a").should('contain', 'Home')
        cy.get("ol[class='breadcrumb'] li[class='active']").should('contain', 'Reader')
    }
    checkGenderfunctionality() {
        cy.get('#FilterReadersForm > :nth-child(2)').should('contain', 'Gender')
        cy.get('input[id="FilterGenderMens"]').click({ force: true })
        cy.wait(3000)
        cy.get('.section-title').should('have.text', "Men's Readers").wait(2000)
        cy.get('label[for="FilterGenderWomens"]').click().wait(3000)
        cy.get('.section-title').should('have.text', "Women's Readers")
    }
    applyPriceFilter() {
        const Random = Reuse.getRandomNumber(0, 4)
        cy.get('#FilterReadersForm > :nth-child(6)').should('contain', 'Price')
        cy.get('input[name="data[Filter][price][]"]').eq(Random).click({ force: true })
        cy.wait(3000)
    }
    applyFrameShapeFilter() {
        const Random = Reuse.getRandomNumber(0, 6)
        cy.get('#FilterReadersForm > :nth-child(8)').should('have.text', 'Frame Shape')
        cy.get('[class="nav shapes frame-shape-filters"] input[name="data[Filter][shape][]"]').eq(Random).click({ force: true })
        cy.wait(4000)
        cy.url().should('contain', '/readers/shape')
    }
    applyBrandFilter() {
        const Random = Reuse.getRandomNumber(0, 169)
        cy.get('[class="clearfix prettycheckbox labelright  blue present-to-visible"] input').eq(Random).click({ force: true })
        cy.wait(4000)
        cy.url().should('contain', 'readers/brand:')
    }
    applyFrameTypeFilter() {
        const random = Reuse.getRandomNumber(0, 2)
        cy.get("div[class='container'] ul[class='nav frame-types-filters'] li:nth-child(1) div:nth-child(1)").click({ force: true })
    }
    applyMaterialFilter() {
        const Random = Reuse.getRandomNumber(0, 2)
        cy.get('#FilterReadersForm > :nth-child(14)').should('contain.text', 'Material')
        cy.get('input[name="data[Filter][material][]"]').eq(Random).click({ force: true })
        cy.wait(2000)
        cy.get('[class="list-inline"] a[href="/readers"]').should('exist')
    }
    applySizeFilter() {
        cy.get("label[for='FilterLensWidth']").should('exist')
        cy.get('select[name="data[Filter][lens_width]"]').select(1)
        cy.get("label[for='FilterBridgeWidth']").should('exist')
        cy.get('select[name="data[Filter][bridge_width]"]').select(1)
        cy.get("label[for='FilterArmLength']").should('exist')
        cy.get('select[name="data[Filter][arm_length]"]').select(1)
    }
    applyAnySizeFilter() {
        cy.get('#FilterReadersForm > .lens-nav-cols > :nth-child(4) > .clearfix > #refine-frame-size-btn').click()
    }
    applyResetAllFilter() {
        cy.get("#reset-all-filter-link").click()
        cy.wait(3000)
        cy.url().should('contain', '/reader')
    }
    applyBestSellingFilter() {
        const Random = Reuse.getRandomNumber(0, 2)
        cy.get('#products-sort-order-select').select(Random)
    }
    showTotalProducts() {
        cy.get('[class="col-sm-4 text-ash"]').should('contain.text', 'Results') //Validate paging component
        cy.get('[class="col-sm-4 text-ash"]').invoke('text').then((totalResults) => {
            cy.log(totalResults);  //Print Total results shown on console
        })
    }
    clickPagination() {
        cy.get('ul[class="pagination"] li').each((page, index, $List) => {
            cy.get('ul[class="pagination"] li [rel="next"]').should('exist').click({ force: true }) //Click Next
            cy.wait(5000)
        })
    }
}
export class CustomerCarePages {
    validatecontentonAboutEZContacts() {
        cy.get("a[href='/about-us']").should('contain.text', 'About EZ Contacts').click() // click on the About EZ Contacts
        cy.get('.section-title').should('contain.text', 'About Us') // main heading
        cy.get(".text-block-title-lg").eq(0).should('contain.text', 'who we are')
        cy.get('.col-custom-5 > .red-text').should('contain.text', 'contact lenses')
        cy.get('.col-custom-4 > .red-text').should('contain.text', ' eyewear')
        cy.get('.col-custom-3 > .red-text').should('contain.text', 'optical Lenses')
        cy.get('#widget2').should('exist')
        cy.get('#carousel-inline-widget-810').should('exist') // review sections
    }
    validateContentOnFAQSPage() {
        cy.get('a[href="/help/faq"]').eq(0).should('contain.text', 'All FAQ’s').click()
        cy.get('.section-title').should('contain.text', 'Frequently Asked Questions')
        cy.get('#section-0').should('contain.text', 'Popular')
        cy.get('#section-1').should('contain.text', 'eyeglasses')
        cy.get('#section-2').should('contain.text', 'vision insurance')
        cy.get('#section-3').should('contain.text', 'sunglasses')
        cy.get('#section-4').should('contain.text', 'contact lenses')
        cy.get('#section-5').should('contain.text', 'ez points')
        cy.get('.navigate > h4').should('contain.text', 'Help Links')
    }
    validateContentOnShippingAndHandlingPage() {
        cy.get('a[href="/help/faq/shipping-and-handling"]').should('contain.text', 'Shipping & Handling').click()
        cy.get('.section-title').should('contain.text', 'SHIPPING AND HANDLING (FAQS)')
        cy.get('#section-1').should('contain.text', 'USA ORDERS ')
        cy.get('#section-2').should('contain.text', 'CANADA ORDERS ')
        cy.get('#section-3').should('contain.text', 'OUTSIDE USA/CANADA ')
        cy.get('.navigate > h4').should('contain.text', 'Help Links')
    }
    validateContentOnReturnsAndExchangesPage() {
        cy.get('a[href="/help/faq/returns-and-exchanges"]').should('contain.text', 'Returns & Exchanges').click()
        cy.get('.section-title').should('contain.text', 'RETURNS & EXCHANGES (FAQS)')
        cy.get('#section-1').should('contain.text', 'Return & Exchange Policy')
        cy.get('.navigate > h4').should('contain.text', 'Help Links')
    }
    validateContentOnPriceMatchGuaranteePage() {
        cy.get('a[href="/resources/price-match-guarantee"]').should('contain.text', 'Price Match Guarantee').click()
        cy.get('.section-title').should('contain.text', 'Price Match Guarantee')
    }
}
///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

import 'cypress-iframe'

describe('TRY ON', function () {
  it('TC_001', function () {
    cy.visit('/sunglasses')
    cy.wait(2000)
    cy.reload()
    cy.get("li[id='prd-1'] div[class='glass-mask']").click()
    cy.wait(2000)
    cy.get('#tryOnMobileBtn').click({ force: true })
    cy.wait(3000)
    cy.get('#fitmixWidgetIframeContainer').each($iframe => {
      // Switch to the current iframe context
      cy.wrap($iframe).then($iframe => {
        // Perform actions within the current iframe
        const body = $iframe.contents().find('body')
        // Example action: click a button inside the iframe
        cy.wrap(body)
          .find('#vtoAdvDisclaimerBtnAgree')
          .click()
        cy.wait(3000)
        cy.wrap(body)
          .find('[class="vto-adv-detection-fail-face"]')
          .should('contain.text', ' Make sure your face is well lit ')
      })
    })
  })
})
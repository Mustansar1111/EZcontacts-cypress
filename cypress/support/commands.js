// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe'
import 'cypress-if'
import 'cypress-mochawesome-reporter/register'

Cypress.Commands.add('selectRandomProduct', () => {
  cy.get('.mask-wrap a[href*="https://www.ezcontacts.com/product/"]:nth-child(1)').should('be.visible').then(($products) => {
    const randomIndex = Math.floor(Math.random() * $products.length);
    cy.wrap($products[randomIndex]).click({ force: true })
  });
});
//Loader wait
Cypress.Commands.add('waitForLoader', () => {
  cy.get('.loader').should('not.be.visible')
});

Cypress.Commands.add('enterCrossDomainIframe', { prevSubject: 'element' }, (iframe) => {
  cy.wrap(iframe)
    .iframe()
    .find('#your-iframe-element-id')
    .iframe()
    .then((iframe) => cy.wrap(iframe));
});


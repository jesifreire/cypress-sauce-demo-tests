Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})
Cypress.Commands.add('addItemToCart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_badge').should('contain', '1')
})

Cypress.Commands.add('goToCheckout', () => {
  cy.get('.shopping_cart_link').click()
  cy.get('[data-test="checkout"]').click()
})

Cypress.Commands.add('fillCheckoutInfo', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('finishCheckout', () => {
  cy.get('[data-test="finish"]').click()
  cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  cy.get('.complete-text').should(
    'have.text',
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
  )
  cy.get('[data-test="back-to-products"]').should('have.text', 'Back Home')
  cy.get('[data-test="back-to-products"]').click()
  cy.get('.title').should('have.text', 'Products')
})
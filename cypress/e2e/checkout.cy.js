describe('Checkout da Compra', () => {    
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
       
    })

    it('Fluxo completo do checkout', () => {
        cy.addItemToCart()
        cy.goToCheckout()
        cy.fillCheckoutInfo('Silvetty', 'Silva', '123456')
        cy.finishCheckout()
    })

})
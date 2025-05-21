describe('Login - Entrar em Sauce Demo', () => {
   
    it.only('Entrar na Homepage da Sauce Demo', () => {

        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
        cy.get('.app_logo').should('be.visible')

    })
    it('Tentar fazer login com usuário inválido e senha inválida', () => {
        cy.get('#user-name').type('Standard_Users')
        cy.get('#password').type('senha_incorreta')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text','Epic sadface: Username and password do not match any user in this service')
    })

})
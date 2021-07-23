/// <reference types="cypress" />

describe('Login', () => {

    it('Login with incorrect email', () => {
        cy.visit('/');
        cy.login('Ingrid', '12345');
        cy.fixture('login').then((login) => {
            cy.get(login.message).should('contain', 'Invalid email address.');
        });
        
    });
})

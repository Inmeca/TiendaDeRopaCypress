Cypress.Commands.add('login', (email, password) => {
    cy.fixture('login').then((login) => {
        cy.get(login.login).click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.get(login.button).click();
    });
});
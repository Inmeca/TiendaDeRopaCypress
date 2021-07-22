/// <reference types="cypress" />

describe('Search elements', () => {
    it('Search for elements with multiple results', () => {
        cy.visit('/');

        //Busca un archivo dentro de la carpeta Ficture y trae todos los elementos
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', '"dress"');
        });
    });

    it('Search for elements with no results', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        });
    });
});
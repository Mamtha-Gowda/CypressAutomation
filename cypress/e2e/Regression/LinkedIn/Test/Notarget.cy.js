/// <reference types="cypress"/>

describe("New Window When no taget attribute", () => {

    it("New Window", () => {

    
        cy.visit("https://www.swiggy.com/");
        cy.intercept(
            'GET',
            '/corporate/',

        ).as('getnewpage');

        cy.get('a[href="/corporate"]').click();
        cy.wait('@getnewpage');
        cy.get('h2:contains("About Swiggy")').should('be.visible');
    })

})
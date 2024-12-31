/// <reference types="cypress"/>

describe("New Window When no taget attribute", () => {

    it("New Window", () => {

    
        cy.visit("https://www.swiggy.com/");
        cy.intercept(
            'GET',
            '/corporate/',

        ).as('getnewpage');

        cy.get('a[href="/corporate"]').click({force:true});
     //   cy.wait('@getnewpage');
        // cy.get('.elementor-heading-title.elementor-size-default:contains("ABOUT US")').should('be.visible');
        // cy.get('.elementor-heading-title.elementor-size-default:contains("ABOUT US")').focus();

        cy.log(cy.title);
        cy.screenshot();
        cy.xpath('//a[contains(text(),"Get the App")]').should('be.visible');
    })

})
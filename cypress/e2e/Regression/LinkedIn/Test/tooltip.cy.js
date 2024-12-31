describe('Verify the tooltip',()=>{

    it("Verify the tooltip",()=>{

        cy.visit("https://open.spotify.com/");
        cy.get('button[aria-label="Collapse Your Library"').trigger('mouseover');
        cy.contains('Collapse Your Library').should('be.visible');
    })


})
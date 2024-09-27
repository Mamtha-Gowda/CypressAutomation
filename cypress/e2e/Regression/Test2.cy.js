describe("Regression suite",()=>{

    it("Regression Test case 1",()=>{

        cy.visit("https://github.com/actions/upload-artifact");
        cy.get('.gNO89b').should('be.visible');
    })
})
describe("Test scrolling",()=>{

    it("Test Scroll to bottom",()=>{

        cy.visit("https://www.swiggy.com/");
        cy.scrollTo('bottom');
        cy.wait(1000);
        cy.scrollTo('top');
        cy.wait(1000);
        cy.get('[href="https://www.swiggy.com/restaurants-near-me"] > .sc-isRoRg > .sc-satoz > .sc-aXZVg').scrollIntoView();
    })
})
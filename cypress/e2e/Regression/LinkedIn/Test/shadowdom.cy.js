
/// <reference types="cypress"/>

describe("Test Shadow DOM",()=>{

    it("Test Shadow DOM",()=>{
      
        cy.visit("https://selectorshub.com/xpath-practice-page/");
        // cy.get("#userName")
        // .shadow()
        // .find("#app2")
        // .shadow()

        //through global config
        cy.scrollTo(0,50);
        cy.get("#pizza").type("This is shadow dom text");

        //limited to one command
        cy.get("#pizza",{includeShadowDom:true}).clear();

        
    })
})
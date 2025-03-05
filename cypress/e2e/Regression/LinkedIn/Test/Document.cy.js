/// <reference types="cypress"/>

describe("Validate title",()=>{

    it("validate title",()=>{


        cy.visit("https://www.swiggy.com/");
        cy.document().then(doc=>{

            let text=doc.title;
            expect(text).to.eql('Order Food & Groceries. Discover the best restaurants. Swiggy it!');
        })
    })

    it.only("validate title",()=>{


        cy.visit("https://www.swiggy.com/");
        cy.document().then(doc=>{

            let docobj=Cypress.$(doc);
            let height = docobj.height();
            let width = docobj.width();
            cy.log(`Document height is ${height}`);
            cy.log(`Document height is ${width}`);
            Cypress.$(doc.body).css('background-color','blue');
           
        })
    })
})
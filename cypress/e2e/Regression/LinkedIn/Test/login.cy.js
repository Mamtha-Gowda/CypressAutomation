/// <reference types="cypress"/>
import { Loginpage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

let userdata;
before(() => {

    cy.fixture("LinkedIn.json").then((data) => {
        userdata = data;
        cy.viewport(1280, 720);
    });

})



// after(()=>{
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         return false;
//       });



// })
describe("Verify homepage", () => {



    it("Validate homepage", () => {
        //     Cypress.on('uncaught:exception', (err, runnable) => {
        //         return false;
        //       });
        //     cy.Login_with_session();
        //  HomePage.elements.linkedin_logo().should('be.visible');
        cy.visit('/');
        Loginpage.elements.new_trending().should('be.visible').trigger('mouseover');
      //  Loginpage.elements.clothing().should('be.visible').click();
    })

    it("Validate different tab",()=>{

        cy.get(':nth-child(3) > .guest-services__container > a').invoke('attr','target','_self').click({force:true });
    })

})
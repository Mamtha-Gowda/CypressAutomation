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
describe("Support", ()=>{

    it("Support",()=>{

        cy.visit('https://www.google.com/');
        cy.get('textarea[aria-label="Search"]').type('Code quality youtube').type('{enter}');
        cy.get(':nth-child(3) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').should('be.visible').click();
    })

    it("Validate something",()=>{

    })
})
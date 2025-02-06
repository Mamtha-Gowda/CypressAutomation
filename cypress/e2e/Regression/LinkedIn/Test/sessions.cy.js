/// <reference types="cypress"/>

beforeEach("Login",()=>{

    cy.Login_with_session('pioneer','pioneer');
    cy.wait(2000);

})

describe("Different logins",()=>{

    it("validate the sessions",()=>{

        cy.visit("https://demoblaze.com/");
        cy.contains("Welcome pioneer").should('be.visible');
    })
})

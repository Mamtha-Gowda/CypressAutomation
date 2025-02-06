/// <reference types="cypress"/>

before("Login",()=>{

    cy.Login_with_session('pioneer','pioneer');

})

describe("Different logins validate",()=>{

    it("validate the sessions",()=>{

        cy.visit("https://demoblaze.com/");
        cy.get(".list-group").should('be.visible');
        cy.get('#logout2').should('be.visible');
    })
})
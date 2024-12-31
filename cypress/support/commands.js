// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//login to linkedin

import { Loginpage } from "../e2e/Regression/LinkedIn/Pages/LoginPage";
import userdata from "../fixtures/LinkedIn.json"

Cypress.Commands.add('Login_with_session', () => {

    //     cy.session('login',()=>{
 

    //     },
    //     {
    //         cacheAcrossSpecs:true
    //     }
    // )

    cy.visit('/');
    Loginpage.elements.username().type(userdata.email);
    Loginpage.elements.password().type(userdata.password);
    Loginpage.elements.signin().click();
    cy.wait(2000);
})


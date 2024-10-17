export const Loginpage = {

    elements: {

        username: () => cy.get('#username'),
        password: () => cy.get('#password'),
        signin: () => cy.get('.btn__primary--large'),
        new_trending: () => cy.get('.nav-link.dropdown-toggle:first-of-type:contains("New & Trending")'),
        clothing: () => cy.get('#new-home')

    }
}
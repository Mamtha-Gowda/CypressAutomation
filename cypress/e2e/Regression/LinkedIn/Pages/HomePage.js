export const HomePage = {

    elements: {

        linkedin_logo: () => cy.get('li-icon[aria-label="LinkedIn"]'),
        profile_icon: () => cy.get('#ember16'),
        signout: () => cy.get('#ember18'),
        guest_support:()=>cy.get(':nth-child(1) > .guest-services__container > .menu-group-left-color-override')



    }
}
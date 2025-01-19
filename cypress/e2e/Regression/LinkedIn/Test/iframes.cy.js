/// <reference types="cypress"/>

describe("Iframes handling",()=>{


    it.skip("iframes handling withput plugin",()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce');        

         cy.get('#mce_0_ifr').then(($iframe)=>{

            let iframebody=$iframe.contents().find('body')
            cy.wrap(iframebody).find('.tinymce').clear();
         })
    })

    it("using plugin",()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce');
           cy.frameLoaded('#mce_0_ifr');
           //cy.iframe().find('#tinymce').clear();
           cy.reload();
           cy.get('#mce_0_ifr').should('be.visible');
           cy.writeFile("cypress/fixtures/LinkedIn.json",
            {
            data1:"hello"
           });
    })

    it("After reload",()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce');
           cy.writeFile("cypress/fixtures/LinkedIn.json",
            {
            data1:"hello"
           });
    })
})
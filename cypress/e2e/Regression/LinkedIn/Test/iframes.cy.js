/// <reference types="cypress"/>

describe("Iframes handling",()=>{


    it("iframes handling withput plugin",()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce');        

         cy.get('#mce_0_ifr').then(($iframe)=>{

            let iframebody=$iframe.contents().find('body')
            cy.wrap(iframebody).find('.tinymce').clear();
         })
    })

    it.only("using plugin",()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce');
           cy.frameLoaded('#mce_0_ifr');
           cy.iframe().find('#tinymce').clear();
    })
})
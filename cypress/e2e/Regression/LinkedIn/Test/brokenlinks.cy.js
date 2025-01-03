/// <reference types="cypress"/>

describe("Verify the broken links",()=>{

    it("Verify broken links",()=>{
        let activelink=0;
        let brokenlink=0;


        cy.visit('https://open.spotify.com/');
        cy.wait(2000);

        cy.get('a').each(($link)=>{

            let href=$link.prop('href');

            if(href){

                cy.request({
                    url: href,
                    failOnStatusCode:false
                }).then((response)=>{

                    if(response.status>=400){
                        cy.log(`${href} is a broken link`);
                        brokenlink++
                    }

                    else{
                        cy.log(`${href} is an active link`);
                        activelink++;
                    }
                })

            }

           
        }).then(($links)=>{
            const totallinks = $links.length;
            cy.log(`Total number of links ${totallinks} `);
            cy.log(`Total number of Active links ${activelink} `);
            cy.log(`Total number of Broken links ${brokenlink} `)

        })
    })
})
/// <reference types="cypress"/>

describe("Verify the broken links",()=>{

    // it.skip("Verify broken links",()=>{
    //     let activelink=0;
    //     let brokenlink=0;


    //     cy.visit('https://open.spotify.com/');
    //     cy.wait(2000);

    //     cy.get('a').each(($link)=>{

    //         let href=$link.prop('href');

    //         if(href){

    //             cy.request({
    //                 url: href,
    //                 failOnStatusCode:false
    //             }).then((response)=>{

    //                 if(response.status>=400){
    //                     cy.log(`${href} is a broken link`);
    //                     brokenlink++
    //                 }

    //                 else{
    //                     cy.log(`${href} is an active link`);
    //                     activelink++;
    //                 }
    //             })

    //         }

           
    //     }).then(($links)=>{
    //         const totallinks = $links.length;
    //         cy.log(`Total number of links ${totallinks} `);
    //         cy.log(`Total number of Active links ${activelink} `);
    //         cy.log(`Total number of Broken links ${brokenlink} `)

    //     })
    // })

    it.only("redbus footer links",()=>{
        let activelink=0;
        let brokenlink=0;

        cy.visit("https://www.swiggy.com/");
        cy.wait(3000);
        cy.scrollTo('bottom');
        cy.get(".sc-gsFSXq.rzOTr a",{timeout:3000}).each(($links)=>{

            let href=$links.prop('href');

            if(href){

                cy.request({
                    url:href,
                    failOnStatusCode: false
                }).then((response)=>{
                    if(response.status>=400){
                        cy.log("This link does not work");
                        brokenlink++;
                        }
                        else{
                            cy.log("The link is active");
                            activelink++;
                        }
                })
            }
  
            //cy.log(href);;


            //cy.wrap(href).click({force:true});
           // cy.visit(href);
            //cy.wait(3000);
            //cy.go('back');
            // cy.origin("href",()=>{
            //     let title=cy.url;
            //     cy.log(title);
            //     cy.log("Link got opened");
            // })
            //cy.visit("https://www.swiggy.com/");
        }).then(($links)=>{


            const totallinks = $links.length;
            cy.log(`Total number of links ${totallinks} `);
            cy.log(`Total number of Active links ${activelink} `);
            cy.log(`Total number of Broken links ${brokenlink} `)
        })

        cy.window().then((win)=>{
            cy.stub(win,'close').as('close');
        });
    })
})
describe("Verify the intercept",()=>{

    it("verify intercept",()=>{

        cy.visit("https://jsonplaceholder.typicode.com/")

        cy.intercept({
            
            path: "/posts"}).as('posts')

            cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
    })

    it.only("verify intercept",()=>{

        cy.visit("https://jsonplaceholder.typicode.com/")

        cy.intercept(
            
            'GET', "/posts",{total:5}).as('posts')

            cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
            cy.wait('@posts').then(response=>{
                cy.log(JSON.stringify(response));
            })
    })

    
})
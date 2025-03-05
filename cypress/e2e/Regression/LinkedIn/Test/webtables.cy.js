describe("validate table",()=>{


    it("Validate table", ()=>{
        cy.visit("https://demo.opencart.com/admin/");
        cy.get("[type='submit']").click();
        cy.on('window:alert',(text)=>{
              expect(text).contains("Change your password");
              cy.log(text);
              return true;
        })

    })
})
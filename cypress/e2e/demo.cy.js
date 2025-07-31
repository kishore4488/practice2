const user=Cypress.env("username")
const pass=Cypress.env("password")

describe('',()=>{
   
    it('',()=>{

        cy.visit("/");

        cy.get("#user-name").type("kishore").clear().type(user);
        cy.get("#password").type(pass);

        cy.get("#login-button").click()
    })
})
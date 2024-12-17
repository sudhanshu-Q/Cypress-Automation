/// <reference types="Cypress" />
describe('Testcases',function()
{
    it('First testcase',function() 
        {
cy.visit("http://localhost:8010/home")
cy.get('#name').type("sudhanshu")
cy.get('button').click({ force: true, multiple:true
    })
})
})
/// <reference types="Cypress" />
describe('Testcases',function()
{
    it('First testcase',function() 
        {
cy.visit("https://www.youtube.com/")
cy.get('#search-input > #search').type('cypress')

    })
})
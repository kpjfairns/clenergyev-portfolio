import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { addElements } from '../../setup/addElements/elements/addElements.pom'

let page = new addElements()

Given("I am on the heroku add elements page", () => {
    return cy.visit(page.url)
})

Then("the elements list is empty", () => {
    return page.deleteButtonList.should('have.length', 0)
})

Then("I should see elements are in the list", () => {
    return page.deleteButtonList.should('have.length.greaterThan', 0)
})

Then("I should see {int} elements in the list", (number) => {
    return page.deleteButtonList.should('have.length', number)
})

When("I add {int} elements to the page", (number:string) => {
    Array.from({ length: number }, (a, i) => { // the variable 'a' isn't used, this is just a cleaner way to do initiate a loop 
        page.addElement.click()
        page.deleteButtonList.should('have.length', (i + 1).toString())
    });
    return page.deleteButtonList.should('have.length', number)
})
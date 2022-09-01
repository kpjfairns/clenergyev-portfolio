import { addElements } from './elements/addElements.pom'

describe('add/remove elements page', () => {

    let page = new addElements()
    beforeEach(() => {
        cy.visit(page.url)
    })

    it('Should start with no elements', () => {
        return page.deleteButtonList.should('have.length', 0)
    })

    it('Should gain elements with every click', () => {
        Array.from({ length: 3 },  (a, i) => { // the variable 'a' isn't used, this is just a cleaner way to do initiate a loop 
            page.addElement.click()
            page.deleteButtonList.should('have.length', (i+1).toString())
        });
        return page.deleteButtonList.should('have.length', 3) //final length
    })

    it('Should be able to remove elements with a deletion click', () => {
        Array.from({ length: 3 },  (a, i) => { // the variable 'a' isn't used, this is just a cleaner way to do initiate a loop 
            page.addElement.click()
            page.deleteButtonList.should('have.length', (i+1).toString())
        });
        page.deleteButton.click()
        return page.deleteButtonList.should('have.length', 2) //final length
    })
})
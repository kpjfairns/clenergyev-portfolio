export class addElements {

    get url() {
        return 'https://the-internet.herokuapp.com/add_remove_elements/'
    }

    get deleteButton(){
        return cy.get('#elements button:first')
    }

    get deleteButtonList(){
        return cy.get('#elements').children()
    }

    get addElement(){
        return cy.get('button[onclick="addElement()"]')
    }
}
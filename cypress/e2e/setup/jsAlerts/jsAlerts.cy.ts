import { JSAlerts } from './elements/jsAlerts.pom'

describe('The JS Alerts page', () => {

  let page = new JSAlerts()

  beforeEach(() => {
    cy.visit(page.url)
  })

  let types = ['alert', 'confirm']

  types.forEach(function (type) {
    it(`Can interact with javascript ${type} alerts`, () => {
      page.result.should('have.text', '')
      cy.get(page.alert(type)).click()
      cy.on(`window:${type}`, async (str) => {
        expect(str).to.equal(page.alertText(type))
      })
      cy.on('window:confirm', () => true)
      return page.result.should('contain.text', 'You')
    })
  })

  it(`Can type in the alert prompt`, () => {
    cy.window().then((window) => {
      cy.stub(window, 'prompt').returns('Can I can type here?')
      cy.get(page.alert('prompt')).click()
    })
    cy.on('window:confirm', () => true)
    return page.result.should('contain.text', 'Can I can type here?')
  })

})
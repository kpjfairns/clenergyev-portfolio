class JSAlertErrors extends Error {
    get typeError() {
        throw new Error(`Please select alert type from this list: 
                - alert
                - confirm
                - prompt`)
    }
}

export class JSAlerts {

    get url(){
        return 'http://the-internet.herokuapp.com/javascript_alerts'
    }

    alert(type: string) {
        switch (type) {
            case 'alert':
                return 'div li:nth-child(1) button'
                break
            case 'confirm':
                return 'div li:nth-child(2) button'
                break
            case 'prompt':
                return 'div li:nth-child(3) button'
                break

            default:
                throw new JSAlertErrors().typeError
                break

        }
    }

    alertText(type: string) {
        switch (type) {
            case 'alert':
                return 'I am a JS Alert'
                break
            case 'confirm':
                return 'I am a JS Confirm'
                break
            case 'prompt':
                return 'I am a JS prompt'
                break

            default:
                throw new JSAlertErrors().typeError
                break
        }
    }

    get result(){
        return cy.get('#result')
    }
}
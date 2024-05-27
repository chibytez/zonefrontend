export class HomePage {
    constructor() {
        this.visitUrl = cy.visit('/demos/menu/shadow-dom/index.htm')
    }

    launchURL() {
        return this.visitUrl
    }
    
    

}
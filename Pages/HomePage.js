export class HomePage {
    constructor() {
        this.visitUrl = cy.visit('/demos/menu/shadow-dom/index.htm')
        this.viewBtn = cy.get('[label = "View"]')
        this.viewValues = '.smart-menu-drop-down'
    }

    launchURL() {
        return this.visitUrl
    }

    clickViewBtn() {
        return this.viewBtn
    }

    getViewvalues() {
        return this.viewValues
    }
    


}
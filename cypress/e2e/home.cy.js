import TestConstants from "../fixtures/testData/testConstants.json"

describe('Zone test', () => {
    beforeEach('Launch url', () => {
      cy.visit('/demos/menu/shadow-dom/index.htm')
    })

    it('Verify that user can see view dropdown', () => {
         cy.get('[label = "View"]').then(dropdown => {
            const actualOption = [...dropdown.find('.smart-menu-drop-down')].map(option => option.textContent.trim());
            expect(actualOption.includes(TestConstants.server, TestConstants.team, TestConstants.server))
         })
    })
  })
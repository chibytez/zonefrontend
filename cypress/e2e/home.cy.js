import TestConstants from "../fixtures/testData/testConstants.json"
import {HomePage} from "../../Pages/HomePage"

describe('Zone test', () => {
    beforeEach('Launch url', () => {
      const homePage = new HomePage()
      homePage.launchURL()
    })

    it('Verify that user can see view dropdown', () => {
      const homePage = new HomePage()
         homePage.clickViewBtn().then(dropdown => {
            const actualOption = [...dropdown.find(homePage.getViewvalues)].map(option => option.textContent.trim());
            expect(actualOption.includes(TestConstants.server, TestConstants.team, TestConstants.server))
         })
    })
  })
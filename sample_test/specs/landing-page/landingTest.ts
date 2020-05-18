import { LandingPage } from "../../POMs/LandingPage";
import { browser } from "protractor";

let landingPage: LandingPage

describe('landing page test case: ', () => {
    it('expecting the title of the blog to be "Moataz Mahmoud"', () => {
        landingPage = new LandingPage()
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.baseURL)
        expect(landingPage.getWebsiteTitle().getText()).toContain('Ahmed Tarek')
    })
})
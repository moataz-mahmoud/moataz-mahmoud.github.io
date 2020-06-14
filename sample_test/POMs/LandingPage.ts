import  { element, by } from 'protractor'

export class LandingPage {
    private websiteTitle = element(by.css('.site-title'))

    getWebsiteTitle() {
        return this.websiteTitle
    }
}
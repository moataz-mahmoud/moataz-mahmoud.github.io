import { Config } from "protractor"

export let config: Config = {
    capabilities: {
        browserName: "chrome",
        unexpectedAlertBehaviour: 'accept',
        chromeOptions: {
            args: ["--start-maximized"]
        }
    },

    specs: ['landingTest.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    params: {
        baseURL: 'https://moataz-mahmoud.github.io'
    }
}
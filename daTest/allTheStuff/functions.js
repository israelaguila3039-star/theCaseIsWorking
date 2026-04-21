import { browser } from '@wdio/globals'
import stuff from './selectors.js'
import { username, password } from './values.js'


export default class itFunctions {

    constructor() {
        this.sT = new stuff()
    }

    async passYouShall (path = '') {
        await browser.url(`https://app.thecasework.com/${path}`);
    }

    async loggIn () {
        await this.passYouShall();
        await this.sT.inputUsername.setValue(username);
        await this.sT.inputPassword.setValue(password);
        await this.sT.btnSubmit.click();
        await browser.pause(5000);
    }

    async checkMode () {
        await this.sT.modeButton.moveTo();
        if (await this.sT.darkModeOn.isDisplayed()) {
            return false;
        } else if (await this.sT.lightModeOn.isDisplayed()) {
            return true;
        }
    }

    async lightMode () {
        let state = await this.checkMode();
        if (state === false) {
            await this.sT.modeButton.click();
        }
        await this.sT.modeButton.moveTo();
    }

    async darkMode () {
        let state = await this.checkMode();
        if (state === true) {
            await this.sT.modeButton.click();
        }
        await this.sT.modeButton.moveTo();
    }
}

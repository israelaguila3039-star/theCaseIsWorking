import { browser } from '@wdio/globals'
import stuff from './selectors.js'
import whut from './values.js'


export default class itFunctions {

    constructor() {
        this.sT = new stuff();
        this.wH = new whut();
    }

    async passYouShall (path = '') {
        await browser.url(`https://app.thecasework.com/${path}`);
    }

    async waitForAuth(timeout = 20000) {
        let lastCount = 0;
        let stableIterations = 0;

        await browser.waitUntil(async () => {
            const count = await browser.execute(() =>
                window.performance.getEntriesByType('resource').length
            );

            if (count === lastCount) {
                stableIterations++;
            } else {
                stableIterations = 0;
            }

            lastCount = count;

            return stableIterations >= 5;
        }, {
            timeout,
            interval: 300,
            timeoutMsg: 'App did not stabilize'
        });
    }

    async loggIn () {
        await this.passYouShall();
        await this.sT.inputUsername.setValue(this.wH.username);
        await this.sT.inputPassword.setValue(this.wH.password);
        await this.sT.btnSubmit.click();
        await this.waitForAuth();
    }

    async checkMode () {
        await this.sT.modeButton.moveTo();
        await this.sT.modeButton.moveTo();
        if (await this.sT.darkModeOn.isDisplayed()) {
            return 2;
        }
        if(await this.sT.lightModeOn.isDisplayed()) {
            return 1;
        }
    }

    async lightMode () {
        let state = await this.checkMode();

        if (state === 2) {
            await this.sT.modeButton.click();
        }
    }

    async darkMode () {
        let state = await this.checkMode();

        if (state === 1) {
            await this.sT.modeButton.click();
        }
    }

    async clickSidebarAndReturn (pageTitle, sideBarButtons) {
        for (let i = 0; i < this.sT.titlesList.length; i++) {
            for (let e = 0; e < this.sT.sidebarList.length; e++) {
                await this.sT.sidebarList[i].click();
                await this.sT.titlesList[i].waitForDisplayed();
                await this.sT.sidebarList[e].click();
                await this.sT.titlesList[e].waitForDisplayed();
                await this.sT.sidebarList[i].click();
            }
        }
    }

    async giveBoxValue (box, value) {
        await box.click();
        await box.setValue(value);
    }

    async clearBoxValue (box) {
        await box.click();
        await browser.keys(['Command', 'a']);
        await browser.keys('Backspace');
    }

    async getRandomValue (arr, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            result += arr[randomIndex];
        }
        return result;
    }

    async deselectCheckbox (box, checker) {
        if (await checker.isDisplayed()) {
            box.click();
            this.sT.updateButton.click();
        }
    }
}

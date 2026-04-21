import stuff from './selectors.js'
import itFunctions from './functions.js'


export default class daCode {

    constructor() {
        this.funcs = new itFunctions()
        this.sT = new stuff()
    }

    async loginTest () {
        await this.funcs.loggIn();
        await this.funcs.passYouShall("account/settings");
    }

    async darkModeCheck () {
        await this.funcs.darkMode();
    }

    async lightModeCheck () {
        await this.funcs.lightMode();
    }
}
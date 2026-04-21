import stuff from './selectors.js'
import whut from './values.js'
import itFunctions from './functions.js'


export default class daCode {

    constructor() {
        this.funcs = new itFunctions
        this.sT = new stuff
        // this.wH = new whut
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
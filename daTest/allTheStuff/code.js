import stuff from './selectors.js'
import itFunctions from './functions.js'
import whut from './values.js'


export default class daCode {

    constructor() {
        this.funcs = new itFunctions();
        this.sT = new stuff();
        this.wH = new whut();
    }

    async loginTest () {
        await this.funcs.loggIn();
        await this.funcs.passYouShall("account/settings");
    }

    async darkModeCheck () {
        await this.funcs.darkMode();
        await this.sT.modeButton.moveTo();
    }

    async lightModeCheck () {
        await this.funcs.lightMode();
        await this.sT.modeButton.moveTo();
    }

    async sideBarMenuTest () {
        await this.funcs.clickSidebarAndReturn();
    }

    async inputNothing () {
        await this.funcs.clearBoxValue(this.sT.nameBox);
        await this.funcs.clearBoxValue(this.sT.addressBox);
        await this.funcs.clearBoxValue(this.sT.addressBoxTwo);
        await this.funcs.clearBoxValue(this.sT.cityBox);
        await this.funcs.clearBoxValue(this.sT.stateBox);
        await this.funcs.clearBoxValue(this.sT.zipBox);
    }

    async baseAccountInfo () {
        await this.funcs.clearBoxValue(this.sT.nameBox);
        await this.funcs.giveBoxValue(this.sT.nameBox, this.wH.accountName);
        await this.funcs.clearBoxValue(this.sT.addressBox);
        await this.funcs.clearBoxValue(this.sT.addressBoxTwo);
        await this.funcs.clearBoxValue(this.sT.cityBox);
        await this.funcs.clearBoxValue(this.sT.stateBox);
        await this.funcs.clearBoxValue(this.sT.zipBox);
        await this.sT.updateButton.click();
    }

    async inputNumbers () {
        await this.funcs.giveBoxValue(this.sT.nameBox, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.funcs.giveBoxValue(this.sT.addressBox, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.funcs.giveBoxValue(this.sT.addressBoxTwo, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.funcs.giveBoxValue(this.sT.cityBox, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.funcs.giveBoxValue(this.sT.stateBox, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.funcs.giveBoxValue(this.sT.zipBox, await this.funcs.getRandomValue(this.wH.numberStringList, 10));
        await this.sT.updateButton.click();
    }

    async inputSymbols () {
        await this.funcs.giveBoxValue(this.sT.nameBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.addressBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.addressBoxTwo, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.cityBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.stateBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.zipBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.sT.updateButton.click();
    }
}
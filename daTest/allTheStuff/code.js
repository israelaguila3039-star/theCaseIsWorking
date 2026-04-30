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

    async noCheckboxesSelected () {
        for (let i = 0; i < this.sT.checkboxList.length; i++) {
            await this.funcs.deselectCheckbox(this.sT.checkboxList[i], this.sT.checkboxOn[i])
        }
    }

    async selectOneBoxAtATime (i) {
        await this.sT.checkboxList[i].click()
        try {
            await updateButtonSelector.waitForClickable({ timeout: 5000 });
            await updateButtonSelector.click();
        }  catch (err) {};
    } 

    async allCheckboxesSelected () {
        for (let i = (this.sT.checkboxList.length)-1; i >= 0; i--) {
            await this.funcs.selectBox(this.sT.checkboxList[i], this.sT.checkboxOn[i])
        }
    }

    async emptyWarning () {
        await this.funcs.clearBoxValue(this.sT.warningBox);
        try {
            await updateButtonSelector.waitForClickable({ timeout: 5000 });
            await updateButtonSelector.click();
        }  catch (err) {};
    }

    async emptyDanger () {
        await this.funcs.clearBoxValue(this.sT.dangerBox);
        try {
            await updateButtonSelector.waitForClickable({ timeout: 5000 });
            await updateButtonSelector.click();
        }  catch (err) {};
    }

    async baseWarningDanger () {
        if (!await this.sT.warningBoxBase.isExisting()) {
            await this.funcs.giveBoxValue(this.sT.warningBox, this.wH.warningBase);
        }
        if (!await this.sT.dangerBoxBase.isExisting()) {
            await this.funcs.giveBoxValue(this.sT.dangerBox, this.wH.dangerBase);
        }
        try {
            await updateButtonSelector.waitForClickable({ timeout: 5000 });
            await updateButtonSelector.click();
        }  catch (err) {};
    }

    async lettersWarningDanger () {
        await this.emptyWarning();
        await this.emptyDanger();
        await this.funcs.giveBoxValue(this.sT.warningBox, await this.funcs.getRandomValue(this.wH.letterStringList, 10));
        await this.funcs.giveBoxValue(this.sT.dangerBox, await this.funcs.getRandomValue(this.wH.letterStringList, 10));
    }

    async symbolsWarningDanger () {
        await this.emptyWarning();
        await this.emptyDanger();
        await this.funcs.giveBoxValue(this.sT.warningBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
        await this.funcs.giveBoxValue(this.sT.dangerBox, await this.funcs.getRandomValue(this.wH.symbolStringList, 10));
    }

    async createLettersNCT () {
        await this.funcs.clearBoxValue(this.sT.newCTBox);
        await this.funcs.giveBoxValue(this.sT.newCTBox, this.wH.lettersNCTName);
        await this.sT.addNCT.waitForClickable({ timeout: 5000 });
        await this.sT.addNCT.click();
    }

    async deleteLettersNCT () {
        await this.sT.deleteLettersNCT.waitForExist({ timeout: 5000 });
        await this.sT.deleteLettersNCT.moveTo();
        await this.sT.deleteLettersNCT.click();
    }

    async createNumbersNCT () {
        await this.funcs.clearBoxValue(this.sT.newCTBox);
        await this.funcs.giveBoxValue(this.sT.newCTBox, this.wH.numbersNCTName);
        await this.sT.addNCT.waitForClickable({ timeout: 5000 });
        await this.sT.addNCT.click();
    }

    async deleteNumbersNCT () {
        await this.sT.deleteNumbersNCT.waitForExist({ timeout: 5000 });
        await this.sT.deleteNumbersNCT.moveTo();
        await this.sT.deleteNumbersNCT.click();
    }

    async createLettersNET () {
        await this.funcs.clearBoxValue(this.sT.expenseTBox);
        await this.funcs.giveBoxValue(this.sT.expenseTBox, this.wH.lettersNCTName);
        await this.sT.addNET.waitForClickable({ timeout: 5000 });
        await this.sT.addNET.click();
    }

    async deleteLettersNET () {
        await this.sT.deleteLettersNCT.waitForExist({ timeout: 5000 });
        await this.sT.deleteLettersNCT.moveTo();
        await this.sT.deleteLettersNCT.click();
    }

    async createUserP (i) {
        await this.sT.addUserButton.click();
        await this.funcs.giveBoxValue(this.sT.userNameBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userEmailBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userAddressBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userAddress2Box, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userPhoneBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userCityBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userStateBox, this.wH.userNameP);
        await this.funcs.giveBoxValue(this.sT.userZipBox, this.wH.userNameP);
        await this.sT.userPTypeBox.click();
        await this.sT.phoneTypesList[i].click();
        await this.sT.submitUserBtn.click();
    }

    async editUserP (i) {
        if (i = 0) {
            await this.sT.userDots1.waitForClickable({ timeout: 5000 });
            await this.sT.userDots1.click();
            await this.sT.userDotsEdit1.waitForClickable({ timeout: 5000 });
            await this.sT.userDotsEdit1.click();
        }
    }

};
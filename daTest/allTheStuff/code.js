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

    async createLettersNCS (i) {
        await this.funcs.noDimsiss();
        await this.sT.newCSTypesList[i].moveTo();
            
        //BIG issue here, the click below here as in below all these checks has the pop up appear but it disappears immediately, I added (temporarily and previously) a pause before and it worked
        //these waitFor's are meant to check for certain things such as hovering over the button but they have been very inconsistent

        await this.sT.hoverCheckForCreate.waitForDisplayed({ timeout: 5000 });
        await this.sT.hoverCheckForCreate.waitForStable({ timeout: 5000 });
        await this.sT.newCSTypesList[i].waitForStable({ timeout: 5000 });
        await this.sT.hoverCheckForCreate.waitForDisplayed({ reverse: true, timeout: 5000 });
        await this.sT.newCSTypesList[i].click();
        await this.sT.nameNCSBox.waitForExist({ timeout: 5000 });
        await this.funcs.giveBoxValue(this.sT.nameNCSBox, this.wH.lettersNCTName);
        await this.funcs.giveBoxValue(this.sT.descriptionNCSBox, this.wH.descriptionLetters1);
        await this.sT.saveNCSBtn.click();
        await this.sT.hoverLettersNCS.waitForExist({ timeout: 7000 });
    }

    async editLettersNCS (i) {
        await this.funcs.noDimsiss();
        await this.sT.hoverLettersNCS.moveTo();
        await this.sT.editLettersNCSList[i].waitForDisplayed({ timeout: 5000 });
        await this.sT.editLettersNCSList[i].click();
        await this.sT.descriptionNCSBox.waitForExist({ timeout: 5000 });
        await this.funcs.clearBoxValue(this.sT.descriptionNCSBox);
        await this.funcs.giveBoxValue(this.sT.descriptionNCSBox, this.wH.descriptionLetters2);
        await this.sT.saveNCSBtn.click();
    }

    async deleteLettersNCS (i) {
        await this.funcs.noDimsiss();
        await this.sT.hoverLettersNCS.moveTo();
        await this.sT.deleteLettersNCSList[i].waitForDisplayed({ timeout: 5000 });
        await this.sT.deleteLettersNCSList[i].click();
        await this.sT.hoverLettersNCS.waitForExist({ timeout: 5000 });
    }

    async createUserP (i) {
        await this.funcs.refreshPage();
        await this.funcs.noDimsiss();
        await this.sT.addUserButton.click();
        for (let m = 0; m < this.sT.userBoxes.length; m++) {
            await this.funcs.giveBoxValue(this.sT.userBoxes[m], this.wH.userBoxP[m])
        }
        await this.sT.userPTypeBox.click();
        await this.sT.phoneTypesList[i].click();
        await this.sT.submitUserBtn.click();
        await this.funcs.noDimsiss();
        await this.sT.userDoubleClick1.waitForExist({ timeout: 5000 });
    }

    async editUserP (i) {
        await this.funcs.noDimsiss();
        if (i === 0) {
            await this.sT.userDots1.waitForExist({ timeout: 5000 });
            await this.sT.userDots1.moveTo();
            await this.sT.userDots1.waitForDisplayed({ timeout: 5000 });
            await this.sT.userDots1.click();
            await this.sT.userDotsEdit1.waitForExist({ timeout: 5000 });
            await this.sT.userDotsEdit1.click();
        } else if (i === 1) {
            await this.sT.userDoubleClick1.moveTo();
            await this.sT.userEdit1.waitForDisplayed({ timeout: 5000 });
            await this.sT.userEdit1.click();
        }
        for (let e = 0; e < this.sT.userEBoxes.length; e++) {
            await this.funcs.clearBoxValue(this.sT.userEBoxes[e])
            await this.funcs.giveBoxValue(this.sT.userEBoxes[e], this.wH.userBoxPE[e])
        }
        await this.sT.updateButton.waitForClickable({ timeout: 5000 });
        await this.sT.updateButton.moveTo()
        await this.sT.updateButton.click();
        await this.sT.updateButton.waitForClickable({ timeout: 5000, reverse: true})
        await this.sT.usersSettings.waitForClickable({ timeout: 5000 });
        await this.sT.usersSettings.click();
        await this.sT.userDoubleClick2.waitForExist({ timeout: 5000 });
    }

    async deleteUserP (i) {
        await this.funcs.noDimsiss();
        await this.funcs.refreshPage();
        if (i === 0) {
            await this.sT.userDots2.waitForExist({ timeout: 5000 });
            await this.sT.userDots2.moveTo();
            await this.sT.userDots2.waitForDisplayed({ timeout: 5000 });
            await this.sT.userDots2.click();
            await this.sT.userDotsDelete1.waitForExist({ timeout: 5000 });
            await this.sT.userDotsDelete1.click();
        } 
        if (i === 1) {
            await this.sT.userDoubleClick2.moveTo();
            await this.sT.userDelete2.waitForDisplayed({ timeout: 5000 });
            await this.sT.userDelete2.click();
        }
        await this.sT.confirmDelete.waitForClickable({ timeout: 5000 });
        await this.sT.confirmDelete.click();
        await this.sT.userDoubleClick2.waitForExist({ timeout: 10000, reverse:true });
        await this.sT.userDoubleClick1.waitForExist({ timeout: 10000, reverse:true });
    }

};
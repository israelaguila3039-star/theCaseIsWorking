import { expect } from '@wdio/globals'
import daCode from '../pageObjects/code.js'
import stuff from '../pageObjects/selectors.js'

//Just login so that tests may be performed
describe('Test', () => {
    it('should login as user', async () => {
        await new daCode().loginTest();
        await expect(new stuff().loggedIn).toBeExisting();
        await new stuff().accountSettings.click();
    })
})

//Light mode tests
describe('Test', () => {
    it('should switch mode to light', async () => {
        await new daCode().lightModeCheck();
        await expect(new stuff().lightModeOn).toBeDisplayed();
    })
})


//Checkbox tests


//No checboxes selected
describe('Light Test', () => {
    it('should deselect all checkboxes', async () => {
        await new daCode().noCheckboxesSelected();
        for (let i = 0; i < new stuff().checkboxOn.length; i++){
            await expect(new stuff().checkboxOn[i]).not.toBeExisting()
        }
    })
})

//One checkbox selected at a time
describe('Light Test', () => {
    it('should select one checkbox at a time', async () => {
        for (let i = new stuff().checkboxList.length-1; i >= 0; i--){
            await new daCode().selectOneBoxAtATime(i);
            await expect(new stuff().checkboxOn[i]).toBeExisting()
            await new daCode().noCheckboxesSelected();
    }
    })
})

//All checkboxes selected
describe('Light Test', () => {
    it('should have all boxes selected', async () => {
        await new daCode().allCheckboxesSelected();
        for (let i = 0; i < new stuff().checkboxList.length; i++){
            await expect(new stuff().checkboxOn[i]).toBeExisting();
        }
    })
})


//Metrics tests

//Positive
describe('Light Test', () => {
    it('should input correct base values if not already there', async () => {
        await new daCode().baseWarningDanger();
        await expect(new stuff().warningBoxBase).toBeExisting();
        await expect(new stuff().dangerBoxBase).toBeExisting();
    })
})

//Negative empty
describe('Light Test', () => {
    it('should input nothing into warning and danger', async () => {
        await new daCode().emptyWarning();
        await expect(new stuff().boxEmptyCheck).toBeExisting();
        await new daCode().baseWarningDanger();
        await new daCode().emptyDanger();
        await expect(new stuff().boxEmptyCheck).toBeExisting();
    })
})

//Negative letters
describe('Light Test', () => {
    it('should input letters into warning and danger', async () => {
        await new daCode().lettersWarningDanger();
        await expect(new stuff().warningBoxBase).not.toBeExisting();
        await expect(new stuff().dangerBoxBase).not.toBeExisting();
        await new daCode().baseWarningDanger();
    })
})

//Negative symbols
describe('Light Test', () => {
    it('should input symbols into warning and danger', async () => {
        await new daCode().symbolsWarningDanger();
        await expect(new stuff().warningBoxBase).not.toBeExisting();
        await expect(new stuff().dangerBoxBase).not.toBeExisting();
        await new daCode().baseWarningDanger();
    })
})




//Dark mode tests
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})


//Checkbox tests


//No checboxes selected
describe('Dark Test', () => {
    it('should deselect all checkboxes', async () => {
        await new daCode().noCheckboxesSelected();
        for (let i = 0; i < new stuff().checkboxOn.length; i++){
            await expect(new stuff().checkboxOn[i]).not.toBeExisting()
    }
    })
})

//One checkbox selected at a time
describe('Dark Test', () => {
    it('should select one checkbox at a time', async () => {
        for (let i = new stuff().checkboxList.length-1; i >= 0; i--){
            await new daCode().selectOneBoxAtATime(i);
            await expect(new stuff().checkboxOn[i]).toBeExisting();
            await new daCode().noCheckboxesSelected();
    }
    })
})

//All checkboxes selected
describe('Dark Test', () => {
    it('should have all boxes selected', async () => {
        await new daCode().allCheckboxesSelected();
        for (let i = 0; i < new stuff().checkboxList.length; i++){
            await expect(new stuff().checkboxOn[i]).toBeExisting()
        }
    })
})


//Metrics tests

//Positive
describe('Dark Test', () => {
    it('should input correct base values if not already there', async () => {
        await new daCode().baseWarningDanger();
        await expect(new stuff().warningBoxBase).toBeExisting();
        await expect(new stuff().dangerBoxBase).toBeExisting();
    })
})

//Negative empty
describe('Dark Test', () => {
    it('should input nothing into warning and danger', async () => {
        await new daCode().emptyWarning();
        await expect(new stuff().boxEmptyCheck).toBeExisting();
        await new daCode().baseWarningDanger();
        await new daCode().emptyDanger();
        await expect(new stuff().boxEmptyCheck).toBeExisting();
    })
})

//Negative letters
describe('Dark Test', () => {
    it('should input letters into warning and danger', async () => {
        await new daCode().lettersWarningDanger();
        await expect(new stuff().warningBoxBase).not.toBeExisting();
        await expect(new stuff().dangerBoxBase).not.toBeExisting();
        await new daCode().baseWarningDanger();
    })
})

//Negative symbols
describe('Dark Test', () => {
    it('should input symbols into warning and danger', async () => {
        await new daCode().symbolsWarningDanger();
        await expect(new stuff().warningBoxBase).not.toBeExisting();
        await expect(new stuff().dangerBoxBase).not.toBeExisting();
        await new daCode().baseWarningDanger();
    })
})
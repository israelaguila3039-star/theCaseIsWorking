import { expect } from '@wdio/globals'
import daCode from '../allTheStuff/code.js'
import stuff from '../allTheStuff/selectors.js'

//Test to see if login and directing to the account settings page works and also the login that all test must begin with
describe('Test', () => {
    it('should login as user', async () => {
        await new daCode().loginTest();
        await expect(new stuff().loggedIn).toBeExisting();
        await new stuff().caseDataTypes.click();
    })
})

//Light mode tests
describe('Test', () => {
    it('should switch mode to light', async () => {
        await new daCode().lightModeCheck();
        await expect(new stuff().lightModeOn).toBeDisplayed();
    })
})


//New Case Type tests

//Create & delete letters
describe('Light Test', () => {
    it('should input and delete letters', async () => {
        await new daCode().createLettersNCT();
        await expect(new stuff().deleteLettersNCT).toBeExisting();
        await new daCode().deleteLettersNCT();
        await expect(new stuff().deleteLettersNCT).not.toBeExisting();
    })
})

//Create & delete numbers
describe('Light Test', () => {
    it('should input and delete numbers', async () => {
        await new daCode().createNumbersNCT();
        await expect(new stuff().deleteNumbersNCT).toBeExisting();
        await new daCode().deleteNumbersNCT();
        await expect(new stuff().deleteNumbersNCT).not.toBeExisting();
    })
})


//New Expense Type tests

//Create & delete letter
describe('Light Test', () => {
    it('should input and delete letters', async () => {
        await new daCode().createLettersNET();
        await expect(new stuff().deleteLettersNCT).toBeExisting();
        await new daCode().deleteLettersNET();
        await expect(new stuff().deleteLettersNCT).not.toBeExisting();
    })
})



//Dark mode tests
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})


//New Case Type tests

//Create & delete letters
describe('Dark Test', () => {
    it('should input and delete letters', async () => {
        await new daCode().createLettersNCT();
        await expect(new stuff().deleteLettersNCT).toBeExisting();
        await new daCode().deleteLettersNCT();
        await expect(new stuff().deleteLettersNCT).not.toBeExisting();
    })
})

//Create & delete numbers
describe('Dark Test', () => {
    it('should input and delete numbers', async () => {
        await new daCode().createNumbersNCT();
        await expect(new stuff().deleteNumbersNCT).toBeExisting();
        await new daCode().deleteNumbersNCT();
        await expect(new stuff().deleteNumbersNCT).not.toBeExisting();
    })
})


//New Expense Type tests

//Create & delete letter
describe('Dark Test', () => {
    it('should input and delete letters', async () => {
        await new daCode().createLettersNET();
        await expect(new stuff().deleteLettersNCT).toBeExisting();
        await new daCode().deleteLettersNET();
        await expect(new stuff().deleteLettersNCT).not.toBeExisting();
    })
})
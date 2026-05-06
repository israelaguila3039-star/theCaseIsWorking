import { expect } from '@wdio/globals'
import daCode from '../allTheStuff/code.js'
import stuff from '../allTheStuff/selectors.js'
import itFunctions from '../allTheStuff/functions.js'

//Just login so that tests may be performed
describe('Test', () => {
    it('should login as user', async () => {
        await new daCode().loginTest();
        await expect(new stuff().loggedIn).toBeExisting();
    })
})

//Light mode tests
describe('Test', () => {
    it('should switch mode to light', async () => {
        await new daCode().lightModeCheck();
        await expect(new stuff().lightModeOn).toBeDisplayed();
    })
})


//Negative name & address tests


//No input test
describe('Light Test', () => {
    it('should try to enter no input', async () => {
        await new daCode().inputNothing();
        await expect(new stuff().nameRequiredError).toBeDisplayed();
    })
})

//Only numbers
describe('Light Test', () => {
    it('should try to enter only numbers', async () => {
        await new daCode().inputNothing();
        await new daCode().inputNumbers();
        await expect(new stuff().updateButton).not.toBeDisplayed();
    })
})

//Symbols
describe('Light Test', () => {
    it('should try to enter only symbols', async () => {
        await new daCode().inputNothing();
        await new daCode().inputSymbols();
        await expect(new stuff().updateButton).not.toBeDisplayed();
    })
})

//Dark mode tests
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})


//Negative name & address tests


//No input test
describe('Dark Test', () => {
    it('should try to enter no input', async () => {
        await new daCode().inputNothing();
        await expect(new stuff().nameRequiredError).toBeDisplayed();
    })
})

//Only numbers
describe('Dark Test', () => {
    it('should try to enter only numbers', async () => {
        await new daCode().inputNothing();
        await new daCode().inputNumbers();
        await expect(new stuff().updateButton).not.toBeDisplayed();
    })
})

//Symbols
describe('Dark Test', () => {
    it('should try to enter only symbols', async () => {
        await new daCode().inputNothing();
        await new daCode().inputSymbols();
        await expect(new stuff().updateButton).not.toBeDisplayed();
        await new daCode().baseAccountInfo();
    })
})
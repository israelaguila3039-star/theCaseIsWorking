import { expect } from '@wdio/globals'
import daCode from '../allTheStuff/code.js'
import stuff from '../allTheStuff/selectors.js'


//Test to see if login and directing to the account settings page works and also the login that all test must begin with
describe('Test', () => {
    it('should login as user', async () => {
        await new daCode().loginTest();
        await expect(new stuff().loggedIn).toBeExisting();
    })
})

//Tests to check light mode and dark mode
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})

describe('Dark Test', () => {
    it('should direct user to each respective page', async () => {
        await new daCode().sideBarMenuTest();
        await expect(new stuff().loggedIn).toBeExisting();
    })
})

describe('Test', () => {
    it('should switch mode to light', async () => {
        await new daCode().lightModeCheck();
        await expect(new stuff().lightModeOn).toBeDisplayed();
    })
})

//Test to check if the page clicks work from every page and direct user to right pages
describe('Light Test', () => {
    it('should direct user to each respective page', async () => {
        await new daCode().sideBarMenuTest();
        await expect(new stuff().loggedIn).toBeExisting();
    })
})
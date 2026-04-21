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
// describe('Test', () => {
//     it('should switch mode to dark', async () => {
//         await new daCode().darkModeCheck();
//         await expect(new stuff().darkModeOn).toBeDisplayed();
//     })
// })

// describe('Test', () => {
//     it('should switch mode to light', async () => {
//         await new daCode().lightModeCheck();
//         await expect(new stuff().lightModeOn).toBeDisplayed();
//     })
// })
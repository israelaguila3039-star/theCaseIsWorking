import { expect } from '@wdio/globals'
import daCode from '../allTheStuff/code.js'
import stuff from '../allTheStuff/selectors.js'

//Just login so that tests may be performed
describe('Test', () => {
    it('should login as user', async () => {
        await new daCode().loginTest();
        await expect(new stuff().loggedIn).toBeExisting();
        await new stuff().usersSettings.click();
    })
})

//Light mode tests
describe('Test', () => {
    it('should switch mode to light', async () => {
        await new daCode().lightModeCheck();
        await expect(new stuff().lightModeOn).toBeDisplayed();
    })
})


//The CRUD tests a.k.a.  H E double hockey sticks

//Positive CRUD test



//Dark mode tests
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})
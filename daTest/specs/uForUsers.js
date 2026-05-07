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
//Also each describe performs 4 tests technically due to it using different phone settings hence the loops

//Positive CRUD test with three dots
describe('Light Test', () => {
    it('should CRUD test with three dots', async () => {
        for (let q = 0; q < new stuff().phoneTypesList.length; q++){
            await new daCode().createUserP(q);
            await expect(new stuff().userDoubleClick1).toBeExisting();
            await new daCode().editUserP(0);
            await expect(new stuff().userDoubleClick2).toBeExisting();
            await new daCode().deleteUserP(0);
            await expect(new stuff().userDoubleClick2).not.toBeExisting();
        }
    })
})

//Positive CRUD test with hover
describe('Light Test', () => {
    it('should CRUD test with hover', async () => {
        for (let l = 0; l < new stuff().phoneTypesList.length; l++){
            await new daCode().createUserP(l);
            await expect(new stuff().userDoubleClick1).toBeExisting();
            await new daCode().editUserP(1);
            await expect(new stuff().userDoubleClick2).toBeExisting();
            await new daCode().deleteUserP(1);
            await expect(new stuff().userDoubleClick2).not.toBeExisting();
        }
    })
})



//Dark mode tests
describe('Test', () => {
    it('should switch mode to dark', async () => {
        await new daCode().darkModeCheck();
        await expect(new stuff().darkModeOn).toBeDisplayed();
    })
})


//The CRUD tests a.k.a.  H E double hockey sticks

//Positive CRUD test with three dots
describe('Dark Test', () => {
    it('should CRUD test with three dots', async () => {
        for (let p = 0; p < new stuff().phoneTypesList.length; p++){
            await new daCode().createUserP(p);
            await expect(new stuff().userDoubleClick1).toBeExisting();
            await new daCode().editUserP(0);
            await expect(new stuff().userDoubleClick2).toBeExisting();
            await new daCode().deleteUserP(0);
            await expect(new stuff().userDoubleClick2).not.toBeExisting();
        }
    })
})

//Positive CRUD test with hover
describe('Dark Test', () => {
    it('should CRUD test with hover', async () => {
        for (let k = 0; k < new stuff().phoneTypesList.length; k++){
            await new daCode().createUserP(k);
            await expect(new stuff().userDoubleClick1).toBeExisting();
            await new daCode().editUserP(1);
            await expect(new stuff().userDoubleClick2).toBeExisting();
            await new daCode().deleteUserP(1);
            await expect(new stuff().userDoubleClick2).not.toBeExisting();
        }
    })
})
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


//Case Statuses tests - Does not work right now due to issues explained in its code

//Letters CRUD
// describe('Light Test', () => {
//     it('should perform CRUD with letters', async () => {
//         for (let i = 0; i < new stuff().newCSTypesList.length; i++) {
//             await new daCode().createLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).toBeExisting();
//             await new daCode().editLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).toBeExisting();
//             await new daCode().deleteLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).not.toBeExisting();
//         }
//     })
// })

//Numbers CRUD





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


//Case Statuses tests - Does not work right now due to issues explained in its code

//Letters CRUD
// describe('Dark Test', () => {
//     it('should perform CRUD with letters', async () => {
//         for (let i = 0; i < new stuff().newCSTypesList.length; i++) {
//             await new daCode().createLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).toBeExisting();
//             await new daCode().editLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).toBeExisting();
//             await new daCode().deleteLettersNCS(i);
//             await expect(new stuff().hoverLettersNCS).not.toBeExisting();
//         }
//     })
// })
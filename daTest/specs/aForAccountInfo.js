import { expect } from '@wdio/globals'
import daCode from '../allTheStuff/code.js'
import stuff from '../allTheStuff/selectors.js'
import itFunctions from '../allTheStuff/functions.js'

//Just login so that tests may be performed
await new daCode().loginTest();

//Light mode tests
await new itFunctions().lightMode();

//Negative name & address tests


//No input test
describe('Light Test', () => {
    it('should try to enter no input', async () => {
        //code
    })
})

//Only numbers
describe('Light Test', () => {
    it('should try to enter only numbers', async () => {
        //code
    })
})

//Symbols
describe('Light Test', () => {
    it('should try to enter only symbols', async () => {
        //code
    })
})

//Overly long input
describe('Light Test', () => {
    it('should try to enter an overlong input', async () => {
        //code
    })
})

//Dark mode tests
await new itFunctions().darkMode();

//Negative name & address tests


//No input test
describe('Dark Test', () => {
    it('should try to enter no input', async () => {
        //code
    })
})

//Only numbers
describe('Dark Test', () => {
    it('should try to enter only numbers', async () => {
        //code
    })
})

//Symbols
describe('Dark Test', () => {
    it('should try to enter only symbols', async () => {
        //code
    })
})

//Overly long input
describe('Dark Test', () => {
    it('should try to enter an overlong input', async () => {
        //code
    })
})
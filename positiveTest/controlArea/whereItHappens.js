import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import thePlaceILogIn from '../stuff/loggingIn.js'


//This function can control what is inputted for the password, username, and the selector to determine if the test has passed.
//This is due to neeeding to run multiple tests where the username and what determines if they pass is different.
//Added a means to change the string it is looking for
async function theTestIng(username, password, passSelector, passText) {    
    
    describe('My Login application', () => {
        it('should login with valid credentials', async () => {
            await thePlaceILogIn.open()

            await thePlaceILogIn.login(username, password)            
            await expect($(passSelector)).toBeExisting();
            await expect($(passSelector)).toHaveText(
                expect.stringContaining(passText));
            
        })
    })

}


//Positive Tests:

theTestIng("standard_user", "secret_sauce", '[class="app_logo"]','Swag Labs');
theTestIng("locked_out_user", "secret_sauce", '[class="error-message-container error"]','Epic sadface: Sorry, this user has been locked out.');
theTestIng("problem_user", "secret_sauce", '[class="app_logo"]', 'Swag Labs');
theTestIng("performance_glitch_user", "secret_sauce", '[class="app_logo"]', 'Swag Labs');
theTestIng("error_user", "secret_sauce", '[class="app_logo"]','Swag Labs');
theTestIng("visual_user", "secret_sauce", '[class="app_logo"]','Swag Labs');

//Negative tests

import { $ } from '@wdio/globals'
import uRL from './theEndpointAtTheTop.js';

//Selectors for the logging in tests
class thePlaceILogIn extends uRL {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new thePlaceILogIn();

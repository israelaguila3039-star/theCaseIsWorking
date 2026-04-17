import { browser } from '@wdio/globals'


//This is just the endpoint we're using
export default class itFunctions {
    passYouShall (path = '') {
        return browser.url(`https://app.thecasework.com/${path}`);
    }

    async loggingIn (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

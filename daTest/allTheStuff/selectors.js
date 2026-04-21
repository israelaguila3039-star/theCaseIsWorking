import { $ } from '@wdio/globals'

export default class stuff {
    get inputUsername () {
        return $('#field-r4__control');
    }

    get inputPassword () {
        return $('#field-r5__control');
    }

    get btnSubmit () {
        return $("//button[text()='Login']");
    }

    get modeButton () {
        return $('button[data-testid="theme-toggle"]');
    }

    get darkModeOn () {
        return $('[data-theme="dark"]');
    }

    get lightModeOn () {
        return $('[data-theme="light"]');
    }

    get loggedIn () {
        return $("//span[text()='Account Settings']");
    }
}

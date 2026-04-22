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
        return $('button[data-testid="menu-theme-button"]');
    }

    get darkModeOn () {
        return $('//div[text()="Switch to Light Mode"]');
    }

    get lightModeOn () {
        return $('//div[text()="Switch to Dark Mode"]');
    }

    get loggedIn () {
        return $("//span[text()='Account Settings']");
    }

    get titlesList () {
        return [$('//label/span[text()="Account Info"]'), $('//label/span[text()="Account Settings"]'), 
            $('//label/span[text()="Case Data Types"]'), $('//label/span[text()="Users"]')]
    }

    get sidebarList () {
        return [$('button[data-testid=account-settings-account-info-tab]'), $('button[data-testid=account-settings-settings-tab]'),
             $('button[data-testid=account-settings-case-data-tab]'), $('button[data-testid=account-settings-users-tab]')]
    }
}

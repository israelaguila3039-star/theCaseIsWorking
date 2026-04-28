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
            $('//label/span[text()="Case Data Types"]'), $('//label/span[text()="Users"]')];
    }

    get sidebarList () {
        return [$('button[data-testid=account-settings-account-info-tab]'), $('button[data-testid=account-settings-settings-tab]'),
             $('button[data-testid=account-settings-case-data-tab]'), $('button[data-testid=account-settings-users-tab]')];
    }

    get accountInfo () {
        return $('button[data-testid=account-settings-account-info-tab]');
    }

    get accountSettings () {
        return $('button[data-testid=account-settings-settings-tab]');
    }

    get caseDataTypes () {
        return $('button[data-testid=account-settings-case-data-tab]');
    }

    get usersSettings () {
        return $('button[data-testid=account-settings-users-tab]');
    }

    get updateButton () {
        return $('//button[text()="Update"]');
    }

    get nameBox () {
        return $('input[data-testid="account-info-account-name-input"]');
    }

    get addressBox () {
        return $('input[data-testid="account-info-address1-input"]');
    }

    get addressBoxTwo () {
        return $('input[data-testid="account-info-address2-input"]');
    }

    get cityBox () {
        return $('input[data-testid="account-info-city-input"]');
    }

    get stateBox () {
        return $('input[data-testid="account-info-state-input"]');
    }

    get zipBox () {
        return $('input[data-testid="account-info-zip-input"]');
    }

    get nameRequiredError () {
        return $('//div[text()="Account Name is required."]');
    }

    get checkboxList () {
        return [$('//span[text()="Group Custom Statuses by corresponding System Status"]'), $('//span[text()="Notify Admins when a case is created."]'), 
            $('//span[text()="Notify Admins when a case status changes."]'), $('//span[text()="Notify Admins when a case is deleted."]'), 
            $('//span[text()="Notify Admins when a case engagement is modified."]'), $('//span[text()="Cannot complete a "]'), 
            $('//span[text()="Notify admins when a milestone is updated."]'), $('//span[text()="Require tasks to be attached to milestones"]'), 
            $('//span[text()="Notify Case Leads when a task is created without a milestone attached."]'), $('//span[text()="Must create/edit "]'), 
            $('//span[text()="Merge in "]')
        ];
    }

    get checkboxOn () {
        return [$('//span[text()="Group Custom Statuses by corresponding System Status"][ancestor::span//div/*[name()="svg"]]'), $('//span[text()="Notify Admins when a case is created."][ancestor::span//div/*[name()="svg"]]'), 
            $('//span[text()="Notify Admins when a case status changes."][ancestor::span//div/*[name()="svg"]]'), $('//span[text()="Notify Admins when a case is deleted."][ancestor::span//div/*[name()="svg"]]'), 
            $('//span[text()="Notify Admins when a case engagement is modified."][ancestor::span//div/*[name()="svg"]]'), $('//span[text()="Cannot complete a "][ancestor::span//div/*[name()="svg"]]'),
            $('//span[text()="Notify admins when a milestone is updated."][ancestor::span//div/*[name()="svg"]]'), $('//span[text()="Require tasks to be attached to milestones"][ancestor::span//div/*[name()="svg"]]'), 
            $('//span[text()="Notify Case Leads when a task is created without a milestone attached."][ancestor::span//div/*[name()="svg"]]'), $('//span[text()="Must create/edit "][ancestor::span//div/*[name()="svg"]]'), 
            $('//span[text()="Merge in "][ancestor::span//div/*[name()="svg"]]')
        ];
    }

    get warningBox () {
        return $('input[data-testid="account-settings-metric-display-input-warning-settings.billingTimePercentDisplay"]');
    }

    get dangerBox () {
        return $('input[data-testid="account-settings-metric-display-input-danger-settings.billingTimePercentDisplay"]');
    }

    get boxEmptyCheck () {
        return $('input[value=""]');
    }
    
    get warningBoxBase () {
        return $('input[value="2"]');
    }

    get dangerBoxBase () {
        return $('input[value="99"]');
    }

};

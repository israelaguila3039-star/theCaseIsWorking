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

    get newCTBox () {
        return $('input[data-testid="case-type-panel-type-input"]');
    }

    get deleteLettersNCT () {
        return $('button[data-testid="case-data-type-lettersTesting"]');
    }

    get addNCT () {
        return $('button[data-testid="case-type-panel-add-button"]');
    }

    get deleteNumbersNCT () {
        return $('button[data-testid="case-data-type-0892476153"]');
    }

    get expenseTBox () {
        return $('input[data-testid="expense-type-panel-input"]');
    }

    get addNET () {
        return $('button[data-testid="expense-type-panel-add-button"]');
    }

    get addUserButton () {
        return $('button[data-testid="users-add-user-button"]');
    }

    get userNameBox () {
        return $('input[data-testid="user-dialog-name"]');
    }

    get userEmailBox () {
        return $('input[data-testid="user-dialog-username"]');
    }

    get userAddressBox () {
        return $('input[data-testid="user-dialog-address1"]');
    }

    get userAddress2Box () {
        return $('input[data-testid="user-dialog-address2"]');
    }

    get userPhoneBox () {
        return $('input[data-testid="user-dialog-phone"]');
    }

    get userCityBox () {
        return $('input[data-testid="user-dialog-city"]');
    }

    get userStateBox () {
        return $('input[data-testid="user-dialog-state"]');
    }

    get userZipBox () {
        return $('input[data-testid="user-dialog-zip"]');
    }

    get userPTypeBox () {
        return $('select[data-testid="user-dialog-phone-type"]');
    }

    get phoneTypesList () {
        return [$x('//option[text()="Select phone type"]'), $('//option[text()="Office"]'),
            $('//option[text()="Cell"]'), $('//option[text()="Other"]')];
    }

    get submitUserBtn () {
        return $('button[data-testid="user-dialog-submit"]');
    }

    get userDots1 () {
        return $('//button[@aria-label="More items"][ancestor::div[@class="fui-DataGridRow fui-TableRow ___rq4ttb0 f19n0e5 f1ewtqcl f1dxfoyt f2krc9w f1jazu75 fw60kww f1xeqee6 f1wfn5kd f1g4hkjv f15ngxrw f1t94bn6 feu1g3u f1uorfem f4xjyn1 ff1wgvm fiob0tu f1j6scgf f1x4h75k f1facbz3 f22iagw f122n59 fg1dust fv1gydk"]//*/span[text()="TemplateName"]]');
    }

    get userDoubleClick1 () {
        return $x('//span[text()="TemplateName"]');
    }

    get userDelete1 () {
        return $('//button[@aria-label="Delete"][ancestor::div[@class="fui-DataGridRow fui-TableRow ___rq4ttb0 f19n0e5 f1ewtqcl f1dxfoyt f2krc9w f1jazu75 fw60kww f1xeqee6 f1wfn5kd f1g4hkjv f15ngxrw f1t94bn6 feu1g3u f1uorfem f4xjyn1 ff1wgvm fiob0tu f1j6scgf f1x4h75k f1facbz3 f22iagw f122n59 fg1dust fv1gydk"]//*/span[text()="TemplateName"]]');
    }
    
    get userEdit1 () {
        return $('//button[@aria-label="Edit"][ancestor::div[@class="fui-DataGridRow fui-TableRow ___rq4ttb0 f19n0e5 f1ewtqcl f1dxfoyt f2krc9w f1jazu75 fw60kww f1xeqee6 f1wfn5kd f1g4hkjv f15ngxrw f1t94bn6 feu1g3u f1uorfem f4xjyn1 ff1wgvm fiob0tu f1j6scgf f1x4h75k f1facbz3 f22iagw f122n59 fg1dust fv1gydk"]//*/span[text()="TemplateName"]]');
    }

    get userDotsDelete1 () {
        return $('div[data-testid="custom-data-table-context-menu-item-Delete"]');
    }

    get userDotsEdit1 () {
        return $('div[data-testid="custom-data-table-context-menu-item-Edit"]');
    }

};

import { $ } from '@wdio/globals'
import passYouShall from './functions.js'

class stuff extends passYouShall {
    get inputUsername () {
        return $('#field-r4__control');
    }

    get inputPassword () {
        return $('#field-r5__control');
    }

    get btnSubmit () {
        return $("//button[text()='Login']");
    }

}

export default new stuff();

import 'dotenv/config.js';

const usernameH = process.env.TEST_USERNAME ?? 'USERNAME_NOT_FOUND';
const passwordH = process.env.TEST_PASSWORD ?? 'PASSWORD_NOT_FOUND';

// export { username, password };


export default class whut {

    get accountName () {
        return "MTECH_QA"
    }

    get username () {
        return usernameH
    }

    get password () {
        return passwordH
    }

    get numberStringList () {
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    }

    get symbolStringList () {
        return ["#", "$", "%", "&", "?", "@", "!", "{", ")", ">"];
    }

    get letterStringList () {
        return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    }

    get warningBase () {
        return "2"
    }

    get dangerBase () {
        return "99"
    }

    get lettersNCTName () {
        return "lettersTestingP"
    }

    get numbersNCTName () {
        return "3892476150"
    }

    get userNameP () {
        return "TemplateName"
    }

    get userNamePE () {
        return "NameTemplate"
    }

    get userEmailP () {
        return "templateName@example.com"
    }

    get userEmailPE () {
        return "nameTemplate@example.com"
    }

    get userAddressP() {
        return "123 N Main St"
    }

    get userAddressPE () {
        return "123 S Main St"
    }

    get userAddress2P () {
        return "456 W Pine Ave"
    }

    get userAddress2PE () {
        return "456 E Pine Ave"
    }

    get userPhoneP () {
        return "+1 (555) 123-4567"
    }

    get userPhonePE () {
        return "+1 (555) 098-7654"
    }

    get userCityP () {
        return "Springfield"
    }

    get userCityPE () {
        return "Franklin"
    }

    get userStateP () {
        return "IL"
    }

    get userStatePE () {
        return "AL"
    }

    get userZipP () {
        return "62704"
    }

    get userZipPE () {
        return "36444"
    }

    get userHoursPE () {
        return "6"
    }

    get userBoxP () {
        return [this.userNameP, this.userEmailP, this.userAddressP, this.userAddress2P, this.userPhoneP, this.userCityP, this.userStateP, this.userZipP];
    }

    get userBoxPE () {
        return [this.userNamePE, this.userAddressPE, this.userAddress2PE, this.userPhonePE, this.userCityPE, this.userStatePE, this.userZipPE, this.userHoursPE]
    }

    get descriptionLetters1 () {
        return "This is a template and I do not know how you are reading this"
    }

    get descriptionLetters2 () {
        return "Hello, this is another template to see if the editing works well enough. Do not know how I will confirm this but I will see"
    }

    get descriptionNumbers1 () {
        return "97235857386259335"
    }

    get descriptionNumbers2 () {
        return "79286359803652936859180396532956235609235"
    }

}
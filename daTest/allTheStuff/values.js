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
        return ["#", "$", "%", "&", "?", "@", "!", "{", ")", ">"]
    }

}
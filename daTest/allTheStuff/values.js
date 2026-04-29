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
        return "lettersTesting"
    }

    get numbersNCTName () {
        return "0892476153"
    }

}
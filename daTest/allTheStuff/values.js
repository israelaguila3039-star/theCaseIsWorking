import 'dotenv/config.js';

const username = process.env.TEST_USERNAME ?? 'USERNAME_NOT_FOUND';
const password = process.env.TEST_PASSWORD ?? 'PASSWORD_NOT_FOUND';

export { username, password };

export default { username, password };
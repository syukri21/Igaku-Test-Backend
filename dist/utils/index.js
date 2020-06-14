"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPassword = exports.comparePasswords = void 0;
const bcrypt = require("bcrypt");
exports.comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compareSync(currentPassword, userPassword);
};
exports.createPassword = async (password) => {
    const hash = await bcrypt.hashSync(password, 10);
    console.log('hash', hash);
    return hash;
};
//# sourceMappingURL=index.js.map
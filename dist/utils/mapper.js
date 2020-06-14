"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLoginDto = exports.toUserDto = void 0;
exports.toUserDto = (data) => {
    const { id, firstName, lastName, email } = data;
    let userDto = {
        id,
        firstName,
        lastName,
        email,
    };
    return userDto;
};
exports.toLoginDto = (data) => {
    const { email, password } = data;
    const login = {
        email,
        password,
    };
    return login;
};
//# sourceMappingURL=mapper.js.map
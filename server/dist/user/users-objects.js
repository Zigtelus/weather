"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUser = exports.UpdateUser = void 0;
const uuid_1 = require("uuid");
class UpdateUser {
    constructor({ age, password, name, email, role, coords }) {
        this.lastVisit = Date();
        this.getPassword = (text) => {
            return text;
        };
        this.age = age;
        this.password = this.getPassword(password);
        this.name = name;
        this.email = this.getEmail(email);
        this.role = this.getRole(role);
        this.coords = Object.assign({}, coords);
    }
    ;
    getEmail(email) {
        const indexPlace = email.indexOf(' ');
        if (indexPlace >= 0)
            return '';
        const indexDoge = email.indexOf('@');
        if (indexDoge <= 0)
            return '';
        const fromDoge = email.slice(indexDoge + 1, email.length);
        const indexDote = fromDoge.indexOf('.');
        if (indexDote <= 0 || indexDote == fromDoge.length - 1)
            return '';
        const fromDoteSecond = fromDoge.slice(indexDote + 1, fromDoge.length);
        const indexDoteSecond = fromDoteSecond.indexOf('.');
        if (indexDoteSecond >= 0)
            return '';
        return email;
    }
    ;
    getRole(role) {
        if (role === "admin" || role === "user")
            return role;
    }
    ;
}
exports.UpdateUser = UpdateUser;
;
class NewUser extends UpdateUser {
    constructor({ age, password, name, email, role, coords }) {
        super({ age, password, name, email, role, coords });
        this.userId = (0, uuid_1.v4)();
        this.dateRegistration = Date();
        this.lastVisit = "0";
    }
    ;
}
exports.NewUser = NewUser;
;
//# sourceMappingURL=users-objects.js.map
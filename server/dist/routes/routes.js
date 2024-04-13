"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
class Routes {
    constructor() {
        this.main = 'main/api';
        this.users = this.main + '/users';
        this.article = this.main + '/article';
        this.comments = this.main + '/comments';
    }
}
exports.routes = new Routes();
//# sourceMappingURL=routes.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const user_service_1 = require("./user.service");
const routes_1 = require("../routes/routes");
let UserController = class UserController {
    constructor(firstService) {
        this.firstService = firstService;
    }
    ;
    async getUsers() {
        console.log('1111');
        return this.firstService.getUsers();
    }
    async createUser(createUserDto, res) {
        const qq = await this.firstService.createUser(createUserDto, res);
        console.log(qq);
        return qq;
    }
    async getUser(body) {
        console.log('1111');
        if ((await this.firstService.getUserById(body.email)).password === body.password) {
            return this.firstService.getUserById(body.email);
        }
    }
    async updateUser(updateUserDto, userId) {
        console.log('1111');
        return this.firstService.updateUser(userId, updateUserDto);
    }
    async removeUser(userId) {
        console.log('1111');
        return this.firstService.removeUser(userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateReportDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/getuser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateReportDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeUser", null);
UserController = __decorate([
    (0, common_1.Controller)(`${routes_1.routes.users}`),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
;
//# sourceMappingURL=user.controller.js.map
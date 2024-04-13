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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const users_objects_1 = require("./users-objects");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUserById(email) {
        return this.usersRepository.findOne({ email });
    }
    async getUsers() {
        return this.usersRepository.find({});
    }
    async createUser(createUserDto, res) {
        const y = { "payload": "dwdfwef" };
        const qqq = await bcrypt.hash(createUserDto.password, 10);
        console.log('1111');
        const newUser = new users_objects_1.NewUser(createUserDto);
        const { email } = newUser;
        if (!!email === true) {
            const findUser = await this.getUserById(email);
            if (findUser === null) {
                return this.usersRepository.create(newUser);
            }
            else {
                return 'данный email уже используется';
            }
        }
        ;
        return false;
    }
    async updateUser(userId, userUpdates) {
        const updateUser = new users_objects_1.UpdateUser(userUpdates);
        if (!!updateUser.email === true)
            return this.usersRepository.findOneAndUpdate({ userId }, updateUser);
        return false;
    }
    async removeUser(userId) {
        return this.usersRepository.remove({ userId });
    }
    async removeUserID(id) {
        return this.usersRepository.removeId({ id });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
;
//# sourceMappingURL=user.service.js.map
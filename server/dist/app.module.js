"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const article_module_1 = require("./article/article.module");
const comments_article_module_1 = require("./comments-article/comments-article.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            article_module_1.ArticleModule,
            comments_article_module_1.CommentsModule,
            config_1.ConfigModule.forRoot({
                envFilePath: [
                    '.passwords.env',
                    '.env'
                ],
                isGlobal: true
            }),
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@weathercluster.ovjghpi.mongodb.net/`)
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
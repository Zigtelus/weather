"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comments_article_controller_1 = require("./comments-article.controller");
const comments_article_repository_1 = require("./comments-article.repository");
const comments_article_service_1 = require("./comments-article.service");
const comments_article_schema_1 = require("./schema/comments-article.schema");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            comments_article_service_1.CommentsArticleService,
            comments_article_repository_1.CommentsArticleRepository
        ],
        controllers: [comments_article_controller_1.CommentsArticleController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: comments_article_schema_1.CommentsArticle.name, schema: comments_article_schema_1.CommentsArticleSchema }])
        ]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments-article.module.js.map
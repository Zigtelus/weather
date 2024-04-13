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
exports.CreateArticleSchema = exports.CreateArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const date_last_edit_article_dto_1 = require("../dtos/date-last-edit-article.dto");
let CreateArticle = class CreateArticle {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "articleId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "auter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "auterId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "article", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "cover", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CreateArticle.prototype, "datePublication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", date_last_edit_article_dto_1.DateLastEditArticleDto)
], CreateArticle.prototype, "dateLastEdit", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", void 0)
], CreateArticle.prototype, "statistics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", void 0)
], CreateArticle.prototype, "comments", void 0);
CreateArticle = __decorate([
    (0, mongoose_1.Schema)()
], CreateArticle);
exports.CreateArticle = CreateArticle;
exports.CreateArticleSchema = mongoose_1.SchemaFactory.createForClass(CreateArticle);
//# sourceMappingURL=create-article.schema.js.map
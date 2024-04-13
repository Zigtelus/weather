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
exports.ArticleSchema = exports.Article = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const statistics_article_dto_1 = require("../dtos/statistics-article.dto");
const date_last_edit_article_dto_1 = require("../dtos/date-last-edit-article.dto");
const statistics_article_schema_1 = require("./statistics-article.schema");
let Article = class Article {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "articleId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "auter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "auterId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "article", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "cover", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "datePublication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", date_last_edit_article_dto_1.DateLastEditArticleDto)
], Article.prototype, "dateLastEdit", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: statistics_article_schema_1.StatisticsArticleSchema }),
    __metadata("design:type", statistics_article_dto_1.StatisticsArticleDto)
], Article.prototype, "statistics", void 0);
Article = __decorate([
    (0, mongoose_1.Schema)()
], Article);
exports.Article = Article;
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=article.schema.js.map
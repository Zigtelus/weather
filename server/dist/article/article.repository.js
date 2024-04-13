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
exports.ArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const path_1 = require("path");
const article_objects_1 = require("./article-objects");
const update_article_dto_1 = require("./dtos/update-article.dto");
const article_schema_1 = require("./schemas/article.schema");
const fs = require("fs");
let ArticleRepository = class ArticleRepository {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async find(statisticsArticleFilterQuery) {
        return this.articleModel.find({ statisticsArticleFilterQuery });
    }
    async findArticle(articleId) {
        return this.articleModel.findOne({ articleId });
    }
    async create(article) {
        const newArticle = await new this.articleModel(article).save();
        return await this.findArticle(newArticle.articleId);
    }
    async update(articleId, articleDto) {
        const updateArticleq = new article_objects_1.UpdateArticle(articleDto);
        const updateArticle = (await this.articleModel.findOneAndUpdate(articleId, Object.assign({}, updateArticleq), { new: true }));
        const qqq = new update_article_dto_1.UpdateArticleDto(Object.assign({}, updateArticle));
        return qqq;
    }
    async updateStatistics(statisticsArticleDto, articleId) {
        const findArticle = await this.articleModel.findOne({ articleId });
        const newStatistics = new article_objects_1.UpdateStatisticsArticle().addStatistics(findArticle.statistics, Object.assign({}, statisticsArticleDto));
        const newArticle = (await this.articleModel.findOneAndUpdate({ articleId: articleId }, { statistics: Object.assign({}, newStatistics) }, { new: true }));
        return newArticle.statistics;
    }
    async removeArticle(articleId, userId) {
        const findArticle = await this.articleModel.findOne({ articleId });
        if (findArticle.auterId !== userId)
            return 'this user is not the author of the article';
        const pathToImage = (0, path_1.join)(__dirname, '../../uploads/' + findArticle.cover);
        fs.unlinkSync(pathToImage);
        return this.articleModel.findOneAndRemove({ articleId });
    }
};
ArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticleRepository);
exports.ArticleRepository = ArticleRepository;
;
//# sourceMappingURL=article.repository.js.map
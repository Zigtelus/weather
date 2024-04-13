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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const routes_1 = require("../routes/routes");
const article_service_1 = require("./article.service");
const article_dto_1 = require("./dtos/article.dto");
const create_article_dto_1 = require("./dtos/create-article.dto");
const statistics_article_dto_1 = require("./dtos/statistics-article.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs = require("fs");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getArticles() {
        const q = this.articleService.getArticles();
        (await q).map(item => {
        });
        return this.articleService.getArticles();
    }
    async getArticle(articleId) {
        return this.articleService.findArticle(articleId);
    }
    async createArticle(createArticleDto) {
        const tt = await this.articleService.createArticle(createArticleDto);
        console.log('########');
        return tt;
    }
    async uploadFile(file, body) {
        const { title, article, auter, auterId, description } = body;
        console.log('uploadFile:', title, article, auter, auterId, description);
        const newArticle = { title, article, auter, auterId, description, cover: file.filename };
        const createArticle = await this.articleService.createArticle(newArticle);
        return createArticle;
    }
    seeUploadedFile(image, res) {
        image = 'e922b734d106fd0f21c250ef5c3c8a6d';
        return res.sendFile(image, { root: 'uploads' });
    }
    async updateArticle(articleDto, articleId) {
        return this.articleService.updateArticle(articleDto, articleId);
    }
    async updateStatisticsArticle(statisticsArticleDto, articleId) {
        return this.articleService.updateStatisticsArticle(statisticsArticleDto, articleId);
    }
    async updateCommentsArticle(statisticsArticleDto, articleId) {
        return this.articleService.updateStatisticsArticle(statisticsArticleDto, articleId);
    }
    async removeArticle(articleId, userId) {
        return this.articleService.removeArticle(articleId, userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    (0, common_1.Get)(':articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('upload'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "seeUploadedFile", null);
__decorate([
    (0, common_1.Patch)(':articleId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Patch)(':articleId/statisctics'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statistics_article_dto_1.StatisticsArticleDto, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateStatisticsArticle", null);
__decorate([
    (0, common_1.Patch)(':articleId/comments'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statistics_article_dto_1.StatisticsArticleDto, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateCommentsArticle", null);
__decorate([
    (0, common_1.Delete)(':articleId/:userId'),
    __param(0, (0, common_1.Param)('articleId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "removeArticle", null);
ArticleController = __decorate([
    (0, common_1.Controller)(`${routes_1.routes.article}`),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map
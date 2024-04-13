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
exports.CommentsArticleController = void 0;
const common_1 = require("@nestjs/common");
const routes_1 = require("../routes/routes");
const comments_article_service_1 = require("./comments-article.service");
const comments_create_article_dto_1 = require("./dto/comments-create-article.dto");
const comments_update_article_dto_1 = require("./dto/comments-update-article.dto");
let CommentsArticleController = class CommentsArticleController {
    constructor(commentsArticleService) {
        this.commentsArticleService = commentsArticleService;
    }
    async addComments(articleId) {
        return this.commentsArticleService.addComments(articleId);
    }
    async addComment(createCommentArticle, articleId) {
        const newComment = this.commentsArticleService.addComment(createCommentArticle, articleId);
        return newComment;
    }
    async getComments() {
        const comments = await this.commentsArticleService.getComments();
        comments.forEach(item => {
        });
        return this.commentsArticleService.getComments();
    }
    async getComment(articleId) {
        return this.commentsArticleService.getComment(articleId);
    }
    async changeComment(articleId, commentArticleDto) {
        return this.commentsArticleService.changeComment(articleId, commentArticleDto);
    }
    async removeComments(articleId) {
        return this.commentsArticleService.removeComments(articleId);
    }
    async removeComment(articleId, commentId, userId) {
        return this.commentsArticleService.removeComment(articleId, commentId, userId);
    }
};
__decorate([
    (0, common_1.Post)('comments/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "addComments", null);
__decorate([
    (0, common_1.Post)('comment/:articleId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_create_article_dto_1.TypeCreateCommentArticleDto, String]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "addComment", null);
__decorate([
    (0, common_1.Get)('comments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "getComments", null);
__decorate([
    (0, common_1.Get)('comments/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "getComment", null);
__decorate([
    (0, common_1.Patch)('comment/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comments_update_article_dto_1.TypeUpdateCommentArticleDto]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "changeComment", null);
__decorate([
    (0, common_1.Delete)('comments/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "removeComments", null);
__decorate([
    (0, common_1.Post)('comment/:articleId/:commentId'),
    __param(0, (0, common_1.Param)('articleId')),
    __param(1, (0, common_1.Param)('commentId')),
    __param(2, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CommentsArticleController.prototype, "removeComment", null);
CommentsArticleController = __decorate([
    (0, common_1.Controller)(`${routes_1.routes.comments}`),
    __metadata("design:paramtypes", [comments_article_service_1.CommentsArticleService])
], CommentsArticleController);
exports.CommentsArticleController = CommentsArticleController;
//# sourceMappingURL=comments-article.controller.js.map
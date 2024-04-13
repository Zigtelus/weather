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
exports.CommentsArticleService = void 0;
const common_1 = require("@nestjs/common");
const comments_article_repository_1 = require("./comments-article.repository");
let CommentsArticleService = class CommentsArticleService {
    constructor(commentsArticleRepository) {
        this.commentsArticleRepository = commentsArticleRepository;
    }
    async addComments(articleId) {
        return this.commentsArticleRepository.addComments(articleId);
    }
    async addComment(createCommentArticleDto, articleId) {
        return this.commentsArticleRepository.addComment(createCommentArticleDto, articleId);
    }
    async getComments() {
        return this.commentsArticleRepository.getComments();
    }
    async getComment(articleId) {
        return this.commentsArticleRepository.getComment(articleId);
    }
    async changeComment(articleId, commentArticleDto) {
        return this.commentsArticleRepository.changeComment(articleId, commentArticleDto);
    }
    async removeComments(articleId) {
        return this.commentsArticleRepository.removeComments(articleId);
    }
    async removeComment(articleId, commentId, userId) {
        const removeComment = this.commentsArticleRepository.removeComment(articleId, commentId, userId);
        return removeComment;
    }
};
CommentsArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_article_repository_1.CommentsArticleRepository])
], CommentsArticleService);
exports.CommentsArticleService = CommentsArticleService;
//# sourceMappingURL=comments-article.service.js.map
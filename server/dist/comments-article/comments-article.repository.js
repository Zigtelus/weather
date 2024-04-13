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
exports.CommentsArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comments_article_dto_1 = require("./dto/comments-article.dto");
const comments_create_article_dto_1 = require("./dto/comments-create-article.dto");
const comments_article_schema_1 = require("./schema/comments-article.schema");
let CommentsArticleRepository = class CommentsArticleRepository {
    constructor(commentsArticlModel) {
        this.commentsArticlModel = commentsArticlModel;
    }
    async addComments(articleId) {
        try {
            const createComments = new comments_article_dto_1.CreateCommentsArticleDto(articleId);
            const findComments = await this.commentsArticlModel.findOne({ articleId });
            if (findComments !== null)
                return `object with articleId "${articleId}" already exists`;
            return await new this.commentsArticlModel(createComments).save();
        }
        catch (error) {
            return 'error message: ' + error.message;
        }
    }
    async addComment(createCommentArticleDto, articleId) {
        try {
            let findArticle = await this.commentsArticlModel.findOne({ articleId });
            if (findArticle === null) {
                const createComments = await new comments_article_dto_1.CreateCommentsArticleDto(articleId);
                await new this.commentsArticlModel(createComments).save();
            }
            findArticle = await this.commentsArticlModel.findOne({ articleId });
            const newComment = new comments_create_article_dto_1.CreateCommentArticleDto(createCommentArticleDto);
            findArticle.comments.push(newComment);
            const updateComents = await this.commentsArticlModel.findOneAndUpdate({ articleId }, { comments: [...findArticle.comments] });
            return newComment;
        }
        catch (error) {
            return 'error message: ' + error.message;
        }
    }
    async getComments() {
        const getComments = await this.commentsArticlModel.find({});
        return getComments;
    }
    async getComment(articleId) {
        const getComments = await this.commentsArticlModel.findOne({ articleId });
        return getComments;
    }
    async changeComment(articleId, commentArticleDto) {
        let updateComments;
        try {
            const findComments = (await this.commentsArticlModel.findOne({ articleId }));
            const findComment = findComments.comments.map(item => {
                if (item.commentId === commentArticleDto.commentId)
                    return commentArticleDto;
                return item;
            });
            updateComments = await this.commentsArticlModel.findOneAndUpdate({ articleId }, { comments: findComment });
        }
        catch (error) {
            return 'error message: ' + error.message;
        }
        return updateComments;
    }
    async removeComments(articleId) {
        try {
            const findComments = await this.commentsArticlModel.findOne({ articleId });
            if (findComments == null)
                return 'this object was not found';
            await this.commentsArticlModel.findOneAndRemove({ articleId });
        }
        catch (error) {
            return 'error message: ' + error.message;
        }
        return 'all the comments has been removed';
    }
    async removeComment(articleId, commentId, userId) {
        try {
            const findArticle = await this.commentsArticlModel.findOne({ articleId });
            const findComment = findArticle.comments.find(item => item.commentId === commentId);
            if (findComment.auterId !== userId)
                return 'You are not the commenter';
            const removeComment = findArticle.comments.filter(item => item.commentId !== commentId);
            const remakeArticle = await this.commentsArticlModel.findOneAndUpdate({ articleId }, { comments: [...removeComment] });
        }
        catch (error) {
            return 'error message: ' + error.message;
        }
        return { articleId: articleId };
    }
};
CommentsArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_article_schema_1.CommentsArticle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentsArticleRepository);
exports.CommentsArticleRepository = CommentsArticleRepository;
;
//# sourceMappingURL=comments-article.repository.js.map
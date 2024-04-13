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
exports.CommentArticleSchema = exports.CommentArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const date_last_edit_comment_dto_1 = require("../dto/date-last-edit-comment.dto");
let CommentArticle = class CommentArticle {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "commentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "auterId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "family", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], CommentArticle.prototype, "likes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], CommentArticle.prototype, "dislikes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommentArticle.prototype, "dateCreation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", date_last_edit_comment_dto_1.DateLastEditCommentDto)
], CommentArticle.prototype, "dateLastEdit", void 0);
CommentArticle = __decorate([
    (0, mongoose_1.Schema)()
], CommentArticle);
exports.CommentArticle = CommentArticle;
exports.CommentArticleSchema = mongoose_1.SchemaFactory.createForClass(CommentArticle);
//# sourceMappingURL=comment-article.schema.js.map
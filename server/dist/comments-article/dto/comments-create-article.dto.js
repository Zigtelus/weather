"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentArticleDto = exports.TypeCreateCommentArticleDto = void 0;
const uuid_1 = require("uuid");
class TypeCreateCommentArticleDto {
}
exports.TypeCreateCommentArticleDto = TypeCreateCommentArticleDto;
class CreateCommentArticleDto extends TypeCreateCommentArticleDto {
    constructor({ auterId, name, family, text }) {
        super();
        this.commentId = (0, uuid_1.v4)();
        this.likes = [];
        this.dislikes = [];
        this.dateCreation = Date();
        this.dateLastEdit = {
            state: false,
            date: Date(),
        };
        this.auterId = auterId,
            this.name = name,
            this.family = family,
            this.text = text;
    }
}
exports.CreateCommentArticleDto = CreateCommentArticleDto;
//# sourceMappingURL=comments-create-article.dto.js.map
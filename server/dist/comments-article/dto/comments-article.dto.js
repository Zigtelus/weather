"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsArticleDto = exports.TypeCommentsArticleDto = void 0;
const uuid_1 = require("uuid");
class TypeCommentsArticleDto {
}
exports.TypeCommentsArticleDto = TypeCommentsArticleDto;
class CreateCommentsArticleDto extends TypeCommentsArticleDto {
    constructor(articleId) {
        super();
        this.articleId = articleId;
        this.comments = [];
        this.commentsId = (0, uuid_1.v4)();
    }
}
exports.CreateCommentsArticleDto = CreateCommentsArticleDto;
//# sourceMappingURL=comments-article.dto.js.map
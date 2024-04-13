"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleDto = void 0;
class TypeCreateArticleDto {
}
;
class CreateArticleDto extends TypeCreateArticleDto {
    constructor({ title, auter, auterId, article, description, cover }) {
        super();
        this.title = title;
        this.auter = auter;
        this.auterId = auterId;
        this.article = article;
        this.description = description;
        this.cover = cover;
    }
}
exports.CreateArticleDto = CreateArticleDto;
//# sourceMappingURL=create-article.dto.js.map
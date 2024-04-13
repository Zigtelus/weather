"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticleDto = void 0;
class TypeUpdateArticleDto {
}
class UpdateArticleDto extends TypeUpdateArticleDto {
    constructor({ title, auter, article, description, cover }) {
        super();
        this.title = title;
        this.auter = auter;
        this.article = article;
        this.description = description;
        this.cover = cover;
    }
}
exports.UpdateArticleDto = UpdateArticleDto;
//# sourceMappingURL=update-article.dto.js.map
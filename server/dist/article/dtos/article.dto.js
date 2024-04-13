"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleDto = void 0;
class TypeArticleDto {
}
class ArticleDto extends TypeArticleDto {
    constructor({ title, auter, auterId, article, description, cover, dateLastEdit, statistics }) {
        super();
        this.title = title;
        this.auter = auter;
        this.auterId = auterId;
        this.article = article;
        this.description = description;
        this.cover = cover;
        this.dateLastEdit = dateLastEdit;
        this.statistics = statistics;
    }
}
exports.ArticleDto = ArticleDto;
//# sourceMappingURL=article.dto.js.map
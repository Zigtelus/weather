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
exports.ArticleService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const article_repository_1 = require("./article.repository");
const create_article_dto_1 = require("./dtos/create-article.dto");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async getArticles() {
        return this.articleRepository.find({});
    }
    async findArticle(articleId) {
        return this.articleRepository.findArticle(articleId);
    }
    async createArticle(createArticleDto) {
        const newArticle = new create_article_dto_1.CreateArticleDto(createArticleDto);
        const createdArticle = await this.articleRepository.create(Object.assign(Object.assign({}, newArticle), { statistics: {
                likes: [],
                dislikes: [],
                views: []
            }, articleId: (0, uuid_1.v4)(), datePublication: Date(), dateLastEdit: {
                state: false,
                date: Date(),
            } }));
        return createdArticle;
    }
    async updateArticle(articleDto, articleId) {
        return this.articleRepository.update(articleId, articleDto);
    }
    async updateStatisticsArticle(statisticsArticleDto, articleId) {
        return this.articleRepository.updateStatistics(statisticsArticleDto, articleId);
    }
    async removeArticle(articleId, userId) {
        return this.articleRepository.removeArticle(articleId, userId);
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery } from 'mongoose';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './dtos/article.dto';
import { CreateArticleDto } from './dtos/create-article.dto';
import { StatisticsArticleDto } from './dtos/statistics-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import { Article } from './schemas/article.schema';
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: ArticleRepository);
    getArticles(): Promise<Article[]>;
    findArticle(articleId: string): Promise<Article>;
    createArticle(createArticleDto: CreateArticleDto): Promise<Article | boolean>;
    updateArticle(articleDto: ArticleDto, articleId: FilterQuery<string>): Promise<UpdateArticleDto>;
    updateStatisticsArticle(statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string>): Promise<StatisticsArticleDto>;
    removeArticle(articleId: string, userId: string): Promise<(Article & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | "this user is not the author of the article">;
}

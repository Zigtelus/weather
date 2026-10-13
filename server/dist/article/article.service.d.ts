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
    removeArticle(articleId: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/article.schema").ArticleDocument, {}, {}> & Article & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | "this user is not the author of the article">;
}

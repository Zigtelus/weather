import { Response } from 'express';
import { FilterQuery } from 'mongoose';
import { ArticleService } from './article.service';
import { ArticleDto } from './dtos/article.dto';
import { CreateArticleDto } from './dtos/create-article.dto';
import { StatisticsArticleDto } from './dtos/statistics-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import { Article } from './schemas/article.schema';
import { StatisticsArticle } from './schemas/statistics-article.schema';
export declare class ArticleController {
    private readonly articleService;
    aa: Express.Multer.File;
    constructor(articleService: ArticleService);
    getArticles(): Promise<Article[]>;
    getArticle(articleId: string): Promise<Article>;
    createArticle(createArticleDto: CreateArticleDto): Promise<Article | boolean>;
    uploadFile(file: Express.Multer.File, body: any): Promise<boolean | Article>;
    seeUploadedFile(image: any, res: Response): void;
    updateArticle(articleDto: ArticleDto, articleId: FilterQuery<string>): Promise<UpdateArticleDto | string>;
    updateStatisticsArticle(statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string>): Promise<StatisticsArticleDto | string>;
    updateCommentsArticle(statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string>): Promise<StatisticsArticle>;
    removeArticle(articleId: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/article.schema").ArticleDocument, {}, {}> & Article & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | "this user is not the author of the article">;
}

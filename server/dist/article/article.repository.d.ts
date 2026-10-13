import { FilterQuery, Model } from "mongoose";
import { ArticleDto } from "./dtos/article.dto";
import { StatisticsArticleDto } from "./dtos/statistics-article.dto";
import { UpdateArticleDto } from "./dtos/update-article.dto";
import { Article, ArticleDocument } from "./schemas/article.schema";
export declare class ArticleRepository {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    find(statisticsArticleFilterQuery: FilterQuery<Article>): Promise<Article[]>;
    findArticle(articleId: string): Promise<Article>;
    create(article: Article): Promise<Article | boolean>;
    update(articleId: FilterQuery<string>, articleDto: ArticleDto): Promise<UpdateArticleDto>;
    updateStatistics(statisticsArticleDto: StatisticsArticleDto, articleId: FilterQuery<string>): Promise<StatisticsArticleDto>;
    removeArticle(articleId: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, ArticleDocument, {}, {}> & Article & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | "this user is not the author of the article">;
}

import { Document } from 'mongoose';
import { StatisticsArticleDto } from '../dtos/statistics-article.dto';
import { DateLastEditArticleDto } from '../dtos/date-last-edit-article.dto';
export type ArticleDocument = Article & Document;
export declare class Article {
    readonly articleId: string;
    readonly auter: string;
    readonly auterId: string;
    readonly title: string;
    readonly article: string;
    readonly description: string;
    readonly cover: string;
    readonly datePublication: string;
    readonly dateLastEdit: DateLastEditArticleDto;
    readonly statistics: StatisticsArticleDto | null;
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, Document<unknown, any, Article, any, {}> & Article & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, Document<unknown, {}, import("mongoose").FlatRecord<Article>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Article> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

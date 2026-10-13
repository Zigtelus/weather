import { Document } from 'mongoose';
import { DateLastEditArticleDto } from '../dtos/date-last-edit-article.dto';
export type CreateArticleDocument = CreateArticle & Document;
export declare class CreateArticle {
    readonly articleId: string;
    readonly auter: string;
    readonly auterId: string;
    readonly title: string;
    readonly article: string;
    readonly description: string;
    readonly cover: string;
    readonly datePublication: string;
    readonly dateLastEdit: DateLastEditArticleDto;
    readonly statistics: null;
    readonly comments: null;
}
export declare const CreateArticleSchema: import("mongoose").Schema<CreateArticle, import("mongoose").Model<CreateArticle, any, any, any, Document<unknown, any, CreateArticle, any, {}> & CreateArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CreateArticle, Document<unknown, {}, import("mongoose").FlatRecord<CreateArticle>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CreateArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

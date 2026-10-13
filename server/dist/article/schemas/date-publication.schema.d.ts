import { Document } from 'mongoose';
export type StatisticsArticleDocument = StatisticsArticle & Document;
export declare class StatisticsArticle {
    place: number;
    data: string;
}
export declare const StatisticsArticleSchema: import("mongoose").Schema<StatisticsArticle, import("mongoose").Model<StatisticsArticle, any, any, any, Document<unknown, any, StatisticsArticle, any, {}> & StatisticsArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StatisticsArticle, Document<unknown, {}, import("mongoose").FlatRecord<StatisticsArticle>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<StatisticsArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

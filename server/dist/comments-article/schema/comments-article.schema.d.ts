import { Document } from 'mongoose';
import { CommentArticle } from './comment-article.schema';
export type CommentsArticleDocument = CommentsArticle & Document;
export declare class CommentsArticle {
    articleId: string;
    commentsId: string;
    comments: CommentArticle[];
}
export declare const CommentsArticleSchema: import("mongoose").Schema<CommentsArticle, import("mongoose").Model<CommentsArticle, any, any, any, Document<unknown, any, CommentsArticle, any, {}> & CommentsArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CommentsArticle, Document<unknown, {}, import("mongoose").FlatRecord<CommentsArticle>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CommentsArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

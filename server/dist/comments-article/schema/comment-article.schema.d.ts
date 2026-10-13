import { Document } from 'mongoose';
import { DateLastEditCommentDto } from '../dto/date-last-edit-comment.dto';
export type CommentArticleDocument = CommentArticle & Document;
export declare class CommentArticle {
    readonly commentId: string;
    readonly auterId: string;
    readonly name: string;
    readonly family: string;
    readonly text: string;
    readonly likes: string[];
    readonly dislikes: string[];
    readonly dateCreation: string;
    readonly dateLastEdit: DateLastEditCommentDto;
}
export declare const CommentArticleSchema: import("mongoose").Schema<CommentArticle, import("mongoose").Model<CommentArticle, any, any, any, Document<unknown, any, CommentArticle, any, {}> & CommentArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CommentArticle, Document<unknown, {}, import("mongoose").FlatRecord<CommentArticle>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CommentArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

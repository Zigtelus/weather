import { DateLastEditCommentDto } from './date-last-edit-comment.dto';
export declare class TypeUpdateCommentArticleDto {
    readonly commentId: string;
    readonly auterId: string;
    readonly name: string;
    readonly family: string;
    readonly text: string;
    readonly likes: string[];
    readonly dislikes: string[];
    readonly dateLastEdit: DateLastEditCommentDto;
}

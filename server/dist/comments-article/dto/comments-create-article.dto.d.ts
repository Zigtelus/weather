export declare class TypeCreateCommentArticleDto {
    auterId: string;
    text: string;
    name: string;
    family: string;
}
export declare class CreateCommentArticleDto extends TypeCreateCommentArticleDto {
    commentId: string;
    likes: any[];
    dislikes: any[];
    dateCreation: string;
    dateLastEdit: {
        state: boolean;
        date: string;
    };
    constructor({ auterId, name, family, text }: TypeCreateCommentArticleDto);
}

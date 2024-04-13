import { TypeCommentArticleDto } from "./comment-article.dto";
export declare class TypeCommentsArticleDto {
    articleId: string;
    commentsId: string;
    comments: TypeCommentArticleDto[];
}
export declare class CreateCommentsArticleDto extends TypeCommentsArticleDto {
    commentsId: string;
    constructor(articleId: any);
}
